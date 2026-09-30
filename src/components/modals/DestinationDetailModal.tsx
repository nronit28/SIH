import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Clock, 
  Calendar, 
  Compass, 
  Volume2, 
  VolumeX, 
  ExternalLink, 
  ShieldAlert, 
  Check, 
  Plus, 
  Info, 
  Award, 
  Footprints, 
  Droplets, 
  Camera, 
  AlertCircle, 
  Users, 
  Download, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { useSanskriti } from '../../context/SanskritiContext';
import { PLACES_DATA } from '../../data/places';
import { LOCAL_GUIDES_DATA } from '../../data/livingHeritage';
import { ImageWithFallback, DiamondDivider, LotusEmblem } from '../common/HeritageIcons';

export const DestinationDetailModal: React.FC = () => {
  const {
    selectedDestination,
    setSelectedDestination,
    addToItinerary,
    removeFromItinerary,
    isInItinerary,
    openHeritageWatchWithPlace,
    playSpeech,
    stopSpeech,
    audioState,
    language,
    setCurrentPage,
    setSelectedGuide
  } = useSanskriti();

  const [activeTab, setActiveTab] = useState<'overview' | 'explore' | 'accessibility' | 'guides'>('overview');
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);

  if (!selectedDestination) return null;

  const dest = selectedDestination;
  const inItinerary = isInItinerary(dest.id);

  // Audio text by language
  const audioText = dest.audioStory[language] || dest.audioStory.en;

  // Nearby guides for this place
  const nearbyGuides = LOCAL_GUIDES_DATA.filter(g => 
    g.placesCovered.some(p => p.toLowerCase().includes(dest.name.toLowerCase().split(' ')[0])) ||
    g.areasCovered.some(a => a.toLowerCase().includes(dest.name.toLowerCase().split(' ')[0]))
  );

  // Related destinations for "Continue Exploring"
  const relatedPlaces = PLACES_DATA.filter(p => p.id !== dest.id && dest.nearbyAttractions.some(attr => attr.toLowerCase().includes(p.name.toLowerCase().split(' ')[0]))).slice(0, 3);

  const handleAudioToggle = () => {
    if (audioState.isPlaying && audioState.title === dest.name) {
      stopSpeech();
    } else {
      playSpeech(audioText, dest.name, language);
    }
  };

  const handlePlanMyDay = () => {
    if (inItinerary) removeFromItinerary(dest.id);
    else addToItinerary(dest.id);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      <div 
        className="w-full max-w-4xl bg-page border border-gold rounded-2xl shadow-2xl overflow-hidden my-4 max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dest-title"
      >
        {/* Sticky Modal Header Bar */}
        <div className="p-4 sm:px-6 bg-card border-b border-gold/40 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-semibold uppercase px-2.5 py-0.5 rounded-full bg-olive/15 text-olive border border-olive/30">
              {dest.category}
            </span>
            {dest.unescoStatus && (
              <span className="text-[11px] font-semibold uppercase px-2.5 py-0.5 rounded-full bg-gold/25 text-text-dark border border-gold/50 flex items-center gap-1">
                <Award className="w-3 h-3 text-gold-dark" />
                <span>UNESCO World Heritage</span>
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => {
              stopSpeech();
              setSelectedDestination(null);
            }}
            className="p-1.5 rounded-lg text-text-dark hover:bg-gold/20"
            aria-label="Close destination details"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Hero Banner with Title & Quick Info */}
          <div className="relative rounded-2xl overflow-hidden border border-gold/50 shadow-heritage">
            <div className="h-64 sm:h-80 md:h-96 w-full relative">
              <ImageWithFallback
                src={selectedGalleryImg || dest.image}
                alt={dest.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 text-white">
                <div className="font-brush text-gold-light text-xl sm:text-2xl mb-1">
                  Chhatrapati Sambhajinagar · {dest.distanceKm} km from centre
                </div>
                <h1 id="dest-title" className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                  {dest.name}
                </h1>
                <div className="font-serif italic text-gold-light/90 text-sm sm:text-base mt-0.5">
                  {dest.marathiName} · {dest.hindiName}
                </div>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {dest.gallery && dest.gallery.length > 1 && (
              <div className="bg-card/95 p-3 flex gap-2 overflow-x-auto border-t border-gold/30">
                {dest.gallery.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedGalleryImg(img)}
                    className={`w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                      (selectedGalleryImg || dest.image) === img ? 'border-olive scale-105' : 'border-gold/40 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-card border border-gold/40 shadow-sm">
            
            {/* Left Actions: Audio & Plan Day */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Listen to Story Button */}
              <button
                type="button"
                onClick={handleAudioToggle}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  audioState.isPlaying && audioState.title === dest.name
                    ? 'bg-terracotta text-white shadow-md animate-pulse'
                    : 'bg-olive text-white hover:bg-olive-hover shadow-sm'
                }`}
              >
                {audioState.isPlaying && audioState.title === dest.name ? (
                  <>
                    <VolumeX className="w-4 h-4" />
                    <span>Pause Story</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4" />
                    <span>🔊 Listen to Story ({language.toUpperCase()})</span>
                  </>
                )}
              </button>

              {/* Add to My Day */}
              <button
                type="button"
                onClick={handlePlanMyDay}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                  inItinerary
                    ? 'bg-olive/15 text-olive border-olive'
                    : 'bg-card text-text-dark border-gold/60 hover:bg-white'
                }`}
              >
                {inItinerary ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-olive" />
                    <span>In My Day Schedule</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add to My Day</span>
                  </>
                )}
              </button>
            </div>

            {/* Right Actions: Directions, Official Info, Report Issue */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Google Maps Directions */}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${dest.coordinates.lat},${dest.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white text-text-dark border border-gold/60 text-xs font-medium hover:border-gold shadow-sm"
              >
                <Compass className="w-3.5 h-3.5 text-olive" />
                <span>Directions</span>
                <ExternalLink className="w-3 h-3 text-text-muted" />
              </a>

              {/* Official Tourism Link */}
              {dest.officialUrl && (
                <a
                  href={dest.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white text-text-dark border border-gold/60 text-xs font-medium hover:border-gold shadow-sm"
                >
                  <Info className="w-3.5 h-3.5 text-olive" />
                  <span>Official Tourism Info</span>
                  <ExternalLink className="w-3 h-3 text-text-muted" />
                </a>
              )}

              {/* Report Issue Button (Heritage Watch) */}
              <button
                type="button"
                onClick={() => {
                  setSelectedDestination(null);
                  openHeritageWatchWithPlace(dest.id);
                }}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-terracotta/10 text-terracotta border border-terracotta/30 text-xs font-semibold hover:bg-terracotta hover:text-white transition-colors"
                title="Report damage, litter or maintenance issues"
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Report an Issue</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-card border border-gold/30">
              <span className="text-[11px] text-text-muted uppercase tracking-wider block">Visit Duration</span>
              <span className="font-serif font-bold text-base text-text-dark">{dest.visitDuration}</span>
            </div>
            <div className="p-3 rounded-xl bg-card border border-gold/30">
              <span className="text-[11px] text-text-muted uppercase tracking-wider block">Best Time</span>
              <span className="font-serif font-bold text-sm text-text-dark">{dest.recommendedTime}</span>
            </div>
            <div className="p-3 rounded-xl bg-card border border-gold/30">
              <span className="text-[11px] text-text-muted uppercase tracking-wider block">Timings</span>
              <span className="font-serif font-bold text-xs text-text-dark">{dest.timings}</span>
            </div>
            <div className="p-3 rounded-xl bg-card border border-gold/30">
              <span className="text-[11px] text-text-muted uppercase tracking-wider block">Wheelchair Access</span>
              <span className="font-serif font-bold text-sm text-olive">{dest.accessibility.wheelchair} Access</span>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-gold/40 flex gap-2">
            {[
              { id: 'overview', label: 'Overview & History' },
              { id: 'explore', label: 'How to Explore' },
              { id: 'accessibility', label: 'Accessibility & Tips' },
              { id: 'guides', label: `Local Guides (${nearbyGuides.length})` },
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-2.5 px-4 font-serif text-base border-b-2 transition-all ${
                  activeTab === tab.id
                    ? 'border-olive text-olive font-bold'
                    : 'border-transparent text-text-secondary hover:text-text-dark'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Overview & History */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="p-5 rounded-2xl bg-card border border-gold/40 space-y-3">
                <h3 className="font-serif font-bold text-2xl text-text-dark">Historical Significance</h3>
                <p className="text-sm text-text-dark leading-relaxed font-sans">{dest.fullDescription}</p>
                <div className="pt-2 text-sm text-text-secondary leading-relaxed border-t border-gold/25">
                  <strong className="text-text-dark">Heritage Context:</strong> {dest.historicalBackground}
                </div>
              </div>

              {/* Architectural Significance */}
              <div className="p-5 rounded-2xl bg-card border border-gold/40 space-y-2.5">
                <h3 className="font-serif font-bold text-xl text-text-dark">Architectural Mastery</h3>
                <p className="text-sm text-text-dark leading-relaxed font-sans">{dest.architecturalSignificance}</p>
                {dest.howToExplore.kailasaHighlight && (
                  <div className="mt-3 p-3.5 rounded-xl bg-gold/15 border border-gold/40 text-xs text-text-dark">
                    <strong className="font-serif text-sm block mb-1">🌟 Monolithic Kailasa Highlight:</strong>
                    {dest.howToExplore.kailasaHighlight}
                  </div>
                )}
              </div>

              {/* Cultural Facts */}
              <div className="p-5 rounded-2xl bg-card border border-gold/40">
                <h3 className="font-serif font-bold text-xl text-text-dark mb-3">Interesting Cultural Facts</h3>
                <ul className="space-y-2">
                  {dest.culturalFacts.map((fact, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-text-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive flex-shrink-0 mt-1.5" />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab 2: How to Explore */}
          {activeTab === 'explore' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Sequence */}
              <div className="p-5 rounded-2xl bg-card border border-gold/40 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-xl text-text-dark">Suggested Sequence for Visitors</h3>
                  <span className="text-xs text-olive font-medium">{dest.howToExplore.suggestedDuration}</span>
                </div>
                <div className="space-y-2.5">
                  {dest.howToExplore.bestSequence.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/70 border border-gold/30">
                      <span className="w-6 h-6 rounded-full bg-olive text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-xs text-text-dark font-medium leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights Not To Miss */}
              <div className="p-5 rounded-2xl bg-card border border-gold/40 space-y-3">
                <h3 className="font-serif font-bold text-xl text-text-dark">Major Highlights Not to Miss</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {dest.howToExplore.mustSeeHighlights.map((hl, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/60 border border-gold/30 flex items-start gap-2 text-xs">
                      <Sparkles className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-text-dark font-medium">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practical Visit Advice Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-card border border-gold/30 space-y-1">
                  <div className="flex items-center gap-1.5 text-olive font-semibold text-xs mb-1">
                    <Footprints className="w-4 h-4" />
                    <span>Walking & Footwear</span>
                  </div>
                  <p className="text-[11px] text-text-secondary leading-normal">{dest.howToExplore.footwearTips}</p>
                </div>

                <div className="p-4 rounded-xl bg-card border border-gold/30 space-y-1">
                  <div className="flex items-center gap-1.5 text-olive font-semibold text-xs mb-1">
                    <Droplets className="w-4 h-4" />
                    <span>Hydration & Climate</span>
                  </div>
                  <p className="text-[11px] text-text-secondary leading-normal">{dest.howToExplore.hydrationNotes}</p>
                </div>

                <div className="p-4 rounded-xl bg-card border border-gold/30 space-y-1">
                  <div className="flex items-center gap-1.5 text-olive font-semibold text-xs mb-1">
                    <Camera className="w-4 h-4" />
                    <span>Photography Notes</span>
                  </div>
                  <p className="text-[11px] text-text-secondary leading-normal">{dest.howToExplore.photographyNotes}</p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Accessibility & Practical Info */}
          {activeTab === 'accessibility' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="p-5 rounded-2xl bg-card border border-gold/40 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-xl text-text-dark">Accessibility Profile</h3>
                  <span className="text-xs text-text-muted italic">{dest.accessibility.demoNote}</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/70 border border-gold/30 text-xs">
                    <span className="text-text-muted block">Wheelchair Access:</span>
                    <strong className="text-olive text-sm font-semibold">{dest.accessibility.wheelchair}</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-white/70 border border-gold/30 text-xs">
                    <span className="text-text-muted block">Ramps & Level Entries:</span>
                    <strong className="text-text-dark text-sm font-semibold">
                      {dest.accessibility.ramps ? 'Available ✓' : 'Limited'}
                    </strong>
                  </div>
                  <div className="p-3 rounded-xl bg-white/70 border border-gold/30 text-xs">
                    <span className="text-text-muted block">Step-Free Routes:</span>
                    <strong className="text-text-dark text-sm font-semibold">
                      {dest.accessibility.stepFree ? 'Full Step-Free ✓' : 'Partial / Stepped'}
                    </strong>
                  </div>
                  <div className="p-3 rounded-xl bg-white/70 border border-gold/30 text-xs">
                    <span className="text-text-muted block">Seating Benches:</span>
                    <strong className="text-text-dark text-sm font-semibold">
                      {dest.accessibility.seatingAvailable ? 'Available ✓' : 'Scarce'}
                    </strong>
                  </div>
                  <div className="p-3 rounded-xl bg-white/70 border border-gold/30 text-xs">
                    <span className="text-text-muted block">Restrooms:</span>
                    <strong className="text-text-dark text-sm font-semibold">
                      {dest.accessibility.restroomsAvailable ? 'On-site Restrooms ✓' : 'Near Gate'}
                    </strong>
                  </div>
                  <div className="p-3 rounded-xl bg-white/70 border border-gold/30 text-xs">
                    <span className="text-text-muted block">Approx. Walking Distance:</span>
                    <strong className="text-text-dark text-sm font-semibold">{dest.accessibility.walkingDistanceMeters} metres</strong>
                  </div>
                </div>

                {dest.accessibility.stairsNote && (
                  <p className="text-xs text-text-secondary bg-white/50 p-3 rounded-xl border border-gold/20">
                    ℹ️ {dest.accessibility.stairsNote}
                  </p>
                )}
              </div>

              {/* Practical Tips */}
              <div className="p-5 rounded-2xl bg-card border border-gold/40">
                <h3 className="font-serif font-bold text-xl text-text-dark mb-3">Practical Visitor Tips</h3>
                <ul className="space-y-2">
                  {dest.practicalTips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-text-dark">
                      <span className="text-olive font-bold">✓</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab 4: Local Guides */}
          {activeTab === 'guides' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="p-4 rounded-xl bg-card border border-gold/40">
                <h3 className="font-serif font-bold text-lg text-text-dark">
                  Verified Local Guides for {dest.name}
                </h3>
                <p className="text-xs text-text-secondary mt-1">
                  Connect with licensed, knowledgeable local heritage storytellers. Enquire directly without commission markups.
                </p>
              </div>

              {nearbyGuides.length === 0 ? (
                <div className="text-center py-8 text-text-muted bg-card rounded-xl border border-gold/30">
                  <Users className="w-8 h-8 mx-auto text-gold mb-2" />
                  <p className="text-sm">Guides are available via our Living Heritage directory.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedDestination(null);
                      setCurrentPage('living-heritage');
                    }}
                    className="mt-2 text-xs font-semibold text-olive underline"
                  >
                    View All Guides
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {nearbyGuides.map(guide => (
                    <div key={guide.id} className="p-4 rounded-xl bg-white border border-gold/40 space-y-3 shadow-sm">
                      <div className="flex items-center gap-3">
                        <img 
                          src={guide.photo} 
                          alt={guide.name} 
                          className="w-14 h-14 rounded-full object-cover border-2 border-gold/50"
                        />
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-serif font-bold text-base text-text-dark">{guide.name}</h4>
                            <span className="text-[10px] bg-olive/15 text-olive px-1.5 py-0.5 rounded font-medium">Verified</span>
                          </div>
                          <div className="text-xs text-text-secondary mt-0.5">
                            ★ {guide.rating} ({guide.reviewCount} reviews)
                          </div>
                          <div className="text-[11px] text-text-muted">
                            {guide.languages.join(', ')}
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-text-secondary line-clamp-2">{guide.story}</p>

                      <div className="pt-2 border-t border-gold/20 flex items-center justify-between">
                        <span className="text-xs font-medium text-text-dark">{guide.indicativeRate}</span>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedGuide(guide);
                          }}
                          className="px-3 py-1.5 rounded-full bg-olive text-white text-xs font-semibold hover:bg-olive-hover"
                        >
                          Request a Walk
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Continue Exploring Related Places (Requirement #30) */}
          <div className="pt-4 border-t border-gold/40">
            <h3 className="font-serif font-bold text-xl text-text-dark mb-3">
              Continue Exploring Nearby
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {relatedPlaces.map(rp => (
                <div
                  key={rp.id}
                  onClick={() => {
                    setSelectedDestination(rp);
                    setSelectedGalleryImg(null);
                  }}
                  className="p-3 rounded-xl bg-card border border-gold/40 hover:border-gold hover:bg-white cursor-pointer transition-all flex items-center gap-3 group"
                >
                  <img 
                    src={rp.image} 
                    alt={rp.name} 
                    className="w-14 h-14 rounded-lg object-cover flex-shrink-0 border border-gold/30"
                  />
                  <div>
                    <h5 className="font-serif font-bold text-sm text-text-dark group-hover:text-olive">
                      {rp.name}
                    </h5>
                    <span className="text-[11px] text-text-secondary">{rp.travelTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-card border-t border-gold/40 flex items-center justify-between">
          <div className="text-xs text-text-muted">
            📍 Coordinates: {dest.coordinates.lat.toFixed(4)}, {dest.coordinates.lng.toFixed(4)}
          </div>
          <button
            type="button"
            onClick={() => {
              stopSpeech();
              setSelectedDestination(null);
            }}
            className="px-5 py-2 rounded-full bg-card border border-gold/60 text-xs font-semibold text-text-dark hover:bg-white"
          >
            Close View
          </button>
        </div>

      </div>
    </div>
  );
};
