import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  Camera, 
  MapPin, 
  Upload, 
  Check, 
  Clock, 
  AlertTriangle, 
  Search, 
  Filter, 
  ChevronRight, 
  ExternalLink,
  Info,
  CheckCircle2,
  Hammer,
  Trash2,
  PenTool,
  Droplets,
  FileText,
  Accessibility,
  HelpCircle,
  Footprints
} from 'lucide-react';
import { useSanskriti } from '../context/SanskritiContext';
import { PLACES_DATA } from '../data/places';
import { PROBLEM_TYPES_CONFIG, CUSTODIAN_ROUTING_MAP } from '../data/heritageWatch';
import { HeritageReport, ProblemType, ReportStatus } from '../types';
import { DiamondDivider } from '../components/common/HeritageIcons';

export const HeritageWatchPage: React.FC = () => {
  const { reports, submitReport, getReportById } = useSanskriti();

  // Active sub-tab: 'report' or 'dashboard'
  const [activeTab, setActiveTab] = useState<'report' | 'dashboard'>('report');

  // Reporting Form State
  const [selectedPlaceId, setSelectedPlaceId] = useState<string>(() => {
    return sessionStorage.getItem('skt_report_place_id') || 'ellora-caves';
  });
  const [problemType, setProblemType] = useState<ProblemType>('Crack / Structural Damage');
  const [description, setDescription] = useState('');
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [isDetectingLocation, setIsDetectingLocation] = useState(false);
  const [locationDetectedText, setLocationDetectedText] = useState<string>('');
  const [submittedReportId, setSubmittedReportId] = useState<string | null>(null);

  // Dashboard state
  const [searchReportId, setSearchReportId] = useState('');
  const [dashboardFilter, setDashboardFilter] = useState<string>('All');

  // Check if session passed a place ID
  useEffect(() => {
    const passed = sessionStorage.getItem('skt_report_place_id');
    if (passed) {
      setSelectedPlaceId(passed);
      sessionStorage.removeItem('skt_report_place_id');
    }
  }, []);

  // Handle GPS detection
  const handleDetectGPS = () => {
    setIsDetectingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setIsDetectingLocation(false);
          setLocationDetectedText(`GPS: ${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)} (Nearest: ${PLACES_DATA.find(p => p.id === selectedPlaceId)?.name})`);
        },
        () => {
          setIsDetectingLocation(false);
          setLocationDetectedText('Location permission not granted. Selected manually below.');
        }
      );
    } else {
      setIsDetectingLocation(false);
      setLocationDetectedText('Geolocation not supported by device. Selected manually below.');
    }
  };

  // Handle photo upload
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Submit report
  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    const place = PLACES_DATA.find(p => p.id === selectedPlaceId) || PLACES_DATA[0];
    const custodian = CUSTODIAN_ROUTING_MAP[selectedPlaceId] || 'Archaeological Survey of India (ASI)';

    const id = submitReport({
      destinationId: place.id,
      destinationName: place.name,
      problemType,
      description: description || 'Visual observation reported by visitor at site.',
      photoUrl: photoPreview || place.image,
      suggestedCustodian: custodian,
      locationCoords: place.coordinates
    });

    setSubmittedReportId(id);
    setDescription('');
    setPhotoPreview(null);
  };

  // Filtered reports for dashboard
  const filteredReports = reports.filter(r => {
    if (searchReportId.trim()) {
      if (!r.id.toLowerCase().includes(searchReportId.trim().toLowerCase()) &&
          !r.destinationName.toLowerCase().includes(searchReportId.trim().toLowerCase())) {
        return false;
      }
    }
    if (dashboardFilter === 'Resolved' && r.status !== 'Fixed') return false;
    if (dashboardFilter === 'Structural Damage' && r.problemType !== 'Crack / Structural Damage') return false;
    if (dashboardFilter === 'Litter' && r.problemType !== 'Litter') return false;
    if (dashboardFilter === 'Safety' && r.problemType !== 'Unsafe Area') return false;
    return true;
  });

  // Calculate status counts
  const reportedCount = reports.filter(r => r.status === 'Reported').length;
  const seenCount = reports.filter(r => r.status === 'Seen').length;
  const inProgressCount = reports.filter(r => r.status === 'Action in Progress').length;
  const fixedCount = reports.filter(r => r.status === 'Fixed').length;

  return (
    <div className="space-y-10 pb-16 animate-in fade-in duration-200">
      
      {/* 1. COMPACT PAGE HEADER */}
      <section className="pt-4 sm:pt-6 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gold/40 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terracotta/15 text-terracotta text-xs font-bold uppercase tracking-wider border border-terracotta/30 mb-2">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Visitor Conservation Initiative</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-dark">
              Heritage Watch
            </h1>
            <p className="font-serif italic text-text-secondary text-base sm:text-lg mt-0.5">
              “Help protect the places you visit — report damage or litter in under 60 seconds.”
            </p>
          </div>

          {/* Sub-Tabs: Report vs Dashboard */}
          <div className="flex rounded-full bg-card border border-gold/60 p-1">
            <button
              type="button"
              onClick={() => {
                setActiveTab('report');
                setSubmittedReportId(null);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'report'
                  ? 'bg-terracotta text-white shadow-sm'
                  : 'text-text-dark hover:text-terracotta'
              }`}
            >
              Report an Issue
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-olive text-white shadow-sm'
                  : 'text-text-dark hover:text-olive'
              }`}
            >
              Public Tracking ({reports.length})
            </button>
          </div>
        </div>
      </section>

      {/* 2. SUBMISSION SUCCESS SCREEN */}
      {submittedReportId && (
        <section className="max-w-[700px] mx-auto px-4">
          <div className="p-8 rounded-3xl bg-card border border-gold shadow-heritage-lg text-center space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-olive text-white mx-auto flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>

            <h2 className="font-serif font-bold text-3xl text-text-dark">
              Thank you for helping protect our heritage.
            </h2>

            <p className="text-sm text-text-secondary max-w-md mx-auto">
              Your report has been logged and assigned tracking ID:
            </p>

            <div className="inline-block px-4 py-2 rounded-xl bg-gold/20 border border-gold text-lg font-mono font-bold text-text-dark tracking-wider">
              {submittedReportId}
            </div>

            {/* Prototype Routing Preview (Requirement #4) */}
            <div className="p-4 rounded-xl bg-white/80 border border-gold/40 text-xs text-text-dark text-left space-y-1.5 max-w-md mx-auto">
              <span className="font-bold text-olive uppercase tracking-wider text-[10px] block">
                Prototype Routing Preview
              </span>
              <div><strong>Location:</strong> {PLACES_DATA.find(p => p.id === selectedPlaceId)?.name}</div>
              <div><strong>Issue Category:</strong> {problemType}</div>
              <div><strong>Suggested Custodian:</strong> {CUSTODIAN_ROUTING_MAP[selectedPlaceId]}</div>
            </div>

            <div className="pt-3 flex justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSubmittedReportId(null);
                  setActiveTab('dashboard');
                }}
                className="px-5 py-2.5 rounded-full bg-olive text-white text-xs font-semibold hover:bg-olive-hover transition-colors"
              >
                Track in Public Dashboard
              </button>
              <button
                type="button"
                onClick={() => setSubmittedReportId(null)}
                className="px-5 py-2.5 rounded-full bg-card border border-gold/60 text-text-dark text-xs font-semibold hover:bg-white"
              >
                Submit Another Report
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 3. 5-STEP REPORTING FORM */}
      {activeTab === 'report' && !submittedReportId && (
        <section className="max-w-[800px] mx-auto px-4 sm:px-6">
          <form onSubmit={handleSubmitReport} className="rounded-3xl bg-card border border-gold p-6 sm:p-8 shadow-heritage space-y-6">
            
            <div className="border-b border-gold/30 pb-3">
              <h3 className="font-serif font-bold text-2xl text-text-dark">
                Submit a Heritage Issue Report
              </h3>
              <p className="text-xs text-text-secondary mt-0.5">
                Every visitor is a custodian. Complete this quick report to alert conservation and maintenance teams.
              </p>
            </div>

            {/* Step 1: Add Photo */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-text-secondary tracking-wider block flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-olive text-white flex items-center justify-center text-[10px]">1</span>
                <span>Add Photo (Upload or Camera Capture)</span>
              </label>

              <div className="border-2 border-dashed border-gold/60 rounded-2xl p-4 sm:p-6 text-center hover:border-gold transition-colors bg-white/60">
                {photoPreview ? (
                  <div className="relative inline-block">
                    <img src={photoPreview} alt="Report preview" className="max-h-48 rounded-xl object-contain border border-gold/50 shadow-sm" />
                    <button
                      type="button"
                      onClick={() => setPhotoPreview(null)}
                      className="absolute -top-2 -right-2 p-1 rounded-full bg-terracotta text-white shadow-md text-xs"
                      aria-label="Remove photo"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <label className="cursor-pointer block space-y-2">
                    <Camera className="w-10 h-10 mx-auto text-gold stroke-1" />
                    <span className="text-xs font-semibold text-olive block">
                      Tap to take photo or upload image
                    </span>
                    <span className="text-[11px] text-text-muted block">
                      JPG, PNG · Stored safely in local browser prototype
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      capture="environment"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>

            {/* Step 2: Location */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase text-text-secondary tracking-wider flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-olive text-white flex items-center justify-center text-[10px]">2</span>
                  <span>Detect or Select Heritage Site</span>
                </label>
                <button
                  type="button"
                  onClick={handleDetectGPS}
                  className="text-xs text-olive font-semibold hover:underline flex items-center gap-1"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{isDetectingLocation ? 'Detecting...' : 'Detect My Location'}</span>
                </button>
              </div>

              {locationDetectedText && (
                <p className="text-xs text-olive bg-olive/10 p-2 rounded-lg border border-olive/30">
                  {locationDetectedText}
                </p>
              )}

              <select
                value={selectedPlaceId}
                onChange={(e) => setSelectedPlaceId(e.target.value)}
                className="w-full p-3 rounded-xl border border-gold/50 bg-white text-text-dark text-sm font-serif font-bold focus:ring-2 focus:ring-olive"
              >
                {PLACES_DATA.map(place => (
                  <option key={place.id} value={place.id}>
                    {place.name} ({place.category})
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Problem Type Visual Cards */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-text-secondary tracking-wider block flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-olive text-white flex items-center justify-center text-[10px]">3</span>
                <span>Select Problem Type (Visual Categories)</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {PROBLEM_TYPES_CONFIG.map(cfg => {
                  const isSelected = problemType === cfg.type;
                  return (
                    <button
                      key={cfg.type}
                      type="button"
                      onClick={() => setProblemType(cfg.type)}
                      className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'bg-olive text-white border-olive shadow-sm ring-2 ring-olive/40'
                          : 'bg-white/70 border-gold/40 text-text-dark hover:border-gold'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-white' : 'text-olive'}`}>
                          {cfg.label}
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                      </div>
                      <span className={`text-[11px] leading-tight ${isSelected ? 'text-white/90' : 'text-text-secondary'}`}>
                        {cfg.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Optional Description */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-text-secondary tracking-wider block flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-olive text-white flex items-center justify-center text-[10px]">4</span>
                <span>Optional Description</span>
              </label>
              <textarea
                rows={2}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the problem in a few words (e.g. Broken stone along cave 12 path, missing railing...)"
                className="w-full p-3 rounded-xl border border-gold/50 bg-white text-text-dark text-xs focus:ring-2 focus:ring-olive font-sans"
              />
            </div>

            {/* Step 5: Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-terracotta text-white font-semibold text-sm hover:bg-terracotta-dark transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <ShieldAlert className="w-4 h-4" />
                <span>Submit Heritage Report</span>
              </button>
            </div>

          </form>
        </section>
      )}

      {/* 4. PUBLIC REPORTING DASHBOARD & STATUS TRACKER */}
      {activeTab === 'dashboard' && (
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-6">
          
          {/* Dashboard Summary Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 rounded-2xl bg-card border border-gold/40 text-center">
              <span className="font-serif text-3xl font-bold text-text-dark block">{reports.length}</span>
              <span className="text-xs text-text-secondary">Issues Reported</span>
            </div>
            <div className="p-4 rounded-2xl bg-card border border-gold/40 text-center">
              <span className="font-serif text-3xl font-bold text-olive block">{seenCount + inProgressCount}</span>
              <span className="text-xs text-text-secondary">Reviewed / In Progress</span>
            </div>
            <div className="p-4 rounded-2xl bg-card border border-gold/40 text-center">
              <span className="font-serif text-3xl font-bold text-olive block">{fixedCount}</span>
              <span className="text-xs text-text-secondary">Issues Resolved</span>
            </div>
            <div className="p-4 rounded-2xl bg-card border border-gold/40 text-center">
              <span className="font-serif text-3xl font-bold text-text-dark block">100%</span>
              <span className="text-xs text-text-secondary">Logged Transparency</span>
            </div>
          </div>

          {/* Search by Report ID or Filter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl bg-card border border-gold/50">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-text-muted absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchReportId}
                onChange={(e) => setSearchReportId(e.target.value)}
                placeholder="Search report ID (e.g. SKT-HW-1042)"
                className="w-full pl-9 pr-3 py-1.5 rounded-full bg-white border border-gold/50 text-xs text-text-dark focus:outline-none focus:ring-1 focus:ring-olive"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
              {['All', 'Structural Damage', 'Litter', 'Safety', 'Resolved'].map(filter => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setDashboardFilter(filter)}
                  className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${
                    dashboardFilter === filter
                      ? 'bg-olive text-white border-olive'
                      : 'bg-white text-text-dark border-gold/40 hover:border-gold'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Reports Timeline List */}
          <div className="space-y-4">
            {filteredReports.map(report => (
              <div 
                key={report.id}
                className="p-5 rounded-2xl bg-card border border-gold/50 shadow-sm space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gold/30 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-xs bg-gold/20 px-2.5 py-1 rounded border border-gold/40 text-text-dark">
                      {report.id}
                    </span>
                    <div>
                      <h4 className="font-serif font-bold text-lg text-text-dark leading-none">
                        {report.destinationName}
                      </h4>
                      <span className="text-[11px] text-text-muted mt-0.5 block">
                        Logged on {report.timestamp}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-olive/15 text-olive self-start sm:self-auto">
                    {report.problemType}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  {report.photoUrl && (
                    <img 
                      src={report.photoUrl} 
                      alt="Report evidence" 
                      className="w-full sm:w-32 h-24 rounded-xl object-cover border border-gold/30 flex-shrink-0"
                    />
                  )}
                  <div className="space-y-2 flex-1">
                    <p className="text-xs text-text-secondary leading-relaxed font-sans">
                      {report.description}
                    </p>
                    <div className="text-[11px] text-text-muted">
                      <strong>Suggested Custodian:</strong> {report.suggestedCustodian}
                    </div>
                  </div>
                </div>

                {/* Progress Status Bar (Reported -> Seen -> Action in Progress -> Fixed) */}
                <div className="pt-3 border-t border-gold/25">
                  <span className="text-[10px] uppercase font-bold text-text-secondary tracking-wider block mb-2">
                    Action Status Tracker:
                  </span>
                  <div className="grid grid-cols-4 gap-2 text-center text-[10px] sm:text-xs">
                    
                    {/* 1. Reported */}
                    <div className="p-2 rounded-lg bg-olive text-white font-semibold flex items-center justify-center gap-1">
                      <span>✓ Reported</span>
                    </div>

                    {/* 2. Seen */}
                    <div className={`p-2 rounded-lg font-semibold flex items-center justify-center gap-1 ${
                      report.status === 'Seen' || report.status === 'Action in Progress' || report.status === 'Fixed'
                        ? 'bg-olive text-white'
                        : 'bg-white/60 text-text-muted border border-gold/30'
                    }`}>
                      <span>{report.status !== 'Reported' ? '✓ Seen' : '○ Seen'}</span>
                    </div>

                    {/* 3. Action in Progress */}
                    <div className={`p-2 rounded-lg font-semibold flex items-center justify-center gap-1 ${
                      report.status === 'Action in Progress' || report.status === 'Fixed'
                        ? 'bg-olive text-white'
                        : 'bg-white/60 text-text-muted border border-gold/30'
                    }`}>
                      <span>{report.status === 'Action in Progress' ? '● In Progress' : report.status === 'Fixed' ? '✓ In Progress' : '○ In Progress'}</span>
                    </div>

                    {/* 4. Fixed */}
                    <div className={`p-2 rounded-lg font-semibold flex items-center justify-center gap-1 ${
                      report.status === 'Fixed'
                        ? 'bg-olive text-white'
                        : 'bg-white/60 text-text-muted border border-gold/30'
                    }`}>
                      <span>{report.status === 'Fixed' ? '✓ Fixed' : '○ Fixed'}</span>
                    </div>

                  </div>
                </div>

              </div>
            ))}
          </div>

        </section>
      )}

    </div>
  );
};
