import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar as CalendarIcon, 
  MapPin, 
  Clock, 
  Plus, 
  Compass, 
  Send, 
  Utensils, 
  Palette, 
  Info,
  CheckCircle,
  ChevronRight
} from 'lucide-react';
import { useSanskriti } from '../context/SanskritiContext';
import { EVENTS_DATA, GENERAL_CULTURAL_HIGHLIGHTS } from '../data/events';
import { PLACES_DATA } from '../data/places';
import { EventSubmitModal } from '../components/modals/EventSubmitModal';
import { ImageWithFallback, DiamondDivider, LotusCornerFlourish } from '../components/common/HeritageIcons';

export const SpecialityPage: React.FC = () => {
  const { allEvents, addToItinerary, setSelectedDestination, setCurrentPage } = useSanskriti();
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  // Dynamic Date state (default to today)
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(today);

  const selectedMonth = selectedDate.getMonth() + 1;
  const selectedDay = selectedDate.getDate();

  // Match event by month/day or fallback to Karnapura Mela / Seasonal Highlight
  const matchedEvent = allEvents.find(e => e.month === selectedMonth && (e.day === undefined || e.day === selectedDay)) || allEvents[0];
  const seasonalHighlight = GENERAL_CULTURAL_HIGHLIGHTS[selectedMonth] || GENERAL_CULTURAL_HIGHLIGHTS[10];

  const formattedDate = selectedDate.toLocaleDateString('en-IN', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setSelectedDate(new Date(e.target.value));
    }
  };

  return (
    <div className="space-y-10 pb-16 animate-in fade-in duration-200">
      
      {/* 1. COMPACT PAGE HEADER & DATE SELECTOR */}
      <section className="pt-4 sm:pt-6 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gold/40 pb-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-olive block mb-1">
              Living Cultural Calendar
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-dark">
              Speciality of the Day
            </h1>
            <p className="font-serif italic text-text-secondary text-base mt-1">
              What makes today culturally special in Chhatrapati Sambhajinagar.
            </p>
          </div>

          {/* Date Selector & Community Submission CTA */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-2 bg-card border border-gold/60 px-3 py-1.5 rounded-full shadow-sm text-xs font-medium text-text-dark">
              <CalendarIcon className="w-3.5 h-3.5 text-olive" />
              <input
                type="date"
                value={selectedDate.toISOString().split('T')[0]}
                onChange={handleDateChange}
                className="bg-transparent text-text-dark text-xs font-medium focus:outline-none cursor-pointer"
              />
            </div>

            <button
              type="button"
              onClick={() => setIsSubmitModalOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-olive text-white text-xs font-semibold hover:bg-olive-hover transition-colors shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Community Event</span>
            </button>
          </div>
        </div>

        {/* Current Date Badge */}
        <div className="mt-3 flex items-center gap-2 text-xs text-text-secondary font-medium">
          <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
          <span>Showing Cultural Speciality for: <strong>{formattedDate}</strong></span>
        </div>
      </section>

      {/* 2. FEATURED SPECIALITY: KARNAPURA MELA / MATCHED EVENT */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-card border border-gold p-6 sm:p-8 md:p-10 shadow-heritage-lg relative overflow-hidden space-y-6">
          
          {/* Top Meta Tags */}
          <div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-saffron/15 text-saffron-dark border border-saffron/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-saffron" />
                <span>Today’s Speciality</span>
              </span>
              <span className="text-xs font-semibold uppercase px-2.5 py-1 rounded-full bg-olive/15 text-olive">
                {matchedEvent.category}
              </span>
            </div>

            <div className="text-xs text-text-muted flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-olive" />
              <span>{matchedEvent.timings}</span>
            </div>
          </div>

          {/* Title & Marathi Title */}
          <div className="relative z-10 space-y-1">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-dark">
              {matchedEvent.title}
            </h2>
            <div className="font-serif italic text-text-secondary text-lg">
              {matchedEvent.marathiTitle} · {matchedEvent.dateLabel}
            </div>
          </div>

          {/* Hero Image & Quick Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-gold/50 shadow-md h-64 sm:h-80">
              <ImageWithFallback
                src={matchedEvent.image}
                alt={matchedEvent.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="p-4 rounded-xl bg-white/70 border border-gold/40 text-xs text-text-dark space-y-1.5">
                <strong className="font-serif text-base block text-olive">History & Provenance:</strong>
                <p className="leading-relaxed font-sans text-text-secondary">{matchedEvent.history}</p>
              </div>

              <div className="p-4 rounded-xl bg-white/70 border border-gold/40 text-xs text-text-dark space-y-1.5">
                <strong className="font-serif text-base block text-gold-dark">Cultural Meaning:</strong>
                <p className="leading-relaxed font-sans text-text-secondary">{matchedEvent.meaning}</p>
              </div>

              <div className="flex items-center gap-2 text-xs text-olive font-medium">
                <MapPin className="w-4 h-4 text-terracotta flex-shrink-0" />
                <span>{matchedEvent.location}</span>
              </div>
            </div>
          </div>

          <DiamondDivider text="Festival Highlights & Traditions" />

          {/* Traditions & What to Expect */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
            <div className="p-5 rounded-2xl bg-white/80 border border-gold/30 space-y-2">
              <h4 className="font-serif font-bold text-lg text-text-dark flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-olive" />
                <span>Key Rituals & Traditions</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-text-secondary">
                {matchedEvent.traditions.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-olive font-bold">◆</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white/80 border border-gold/30 space-y-2">
              <h4 className="font-serif font-bold text-lg text-text-dark flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-saffron" />
                <span>What Visitors Can Expect</span>
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed font-sans">
                {matchedEvent.whatVisitorsExpect}
              </p>
              <div className="pt-2 text-xs text-text-muted">
                <strong>Organiser:</strong> {matchedEvent.organiser || 'Local Trust'}
              </div>
            </div>
          </div>

          {/* Traditional Food & Crafts Connected */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
            <div className="p-4 rounded-xl bg-gold/15 border border-gold/40 space-y-2">
              <h5 className="font-serif font-bold text-sm text-text-dark flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-terracotta" />
                <span>Traditional Flavours of This Day</span>
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {matchedEvent.traditionalFood.map((food, i) => (
                  <span key={i} className="text-[11px] px-2.5 py-0.5 rounded-full bg-white text-text-dark border border-gold/40">
                    {food}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-olive/10 border border-olive/30 space-y-2">
              <h5 className="font-serif font-bold text-sm text-text-dark flex items-center gap-1.5">
                <Palette className="w-4 h-4 text-olive" />
                <span>Artisan & Craft Connections</span>
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {matchedEvent.craftConnections.map((craft, i) => (
                  <span key={i} className="text-[11px] px-2.5 py-0.5 rounded-full bg-white text-text-dark border border-olive/30">
                    {craft}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Visitor Advice */}
          <div className="p-4 rounded-xl bg-white/80 border border-gold/40 text-xs text-text-secondary relative z-10">
            <strong className="text-text-dark block mb-1">💡 Visitor Advice & Logistics:</strong>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {matchedEvent.visitorAdvice.map((adv, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-olive font-bold">✓</span>
                  <span>{adv}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions: View on Map & Add to My Day */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 relative z-10 border-t border-gold/30">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  addToItinerary('karnapura-mela');
                  alert('Added to your Sanskriti Day schedule!');
                }}
                className="px-5 py-2.5 rounded-full bg-olive text-white text-xs font-semibold hover:bg-olive-hover transition-colors shadow-sm flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add to My Day</span>
              </button>

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${matchedEvent.coordinates.lat},${matchedEvent.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-white text-text-dark border border-gold/60 text-xs font-semibold hover:border-gold shadow-sm flex items-center gap-1.5"
              >
                <Compass className="w-3.5 h-3.5 text-olive" />
                <span>View on Map</span>
              </a>
            </div>

            <span className="text-[11px] text-text-muted italic">
              Authentic cultural dataset of Chhatrapati Sambhajinagar
            </span>
          </div>

          <div className="absolute -bottom-8 -right-8 pointer-events-none opacity-20 hidden md:block">
            <LotusCornerFlourish className="w-56 h-56 text-gold" />
          </div>

        </div>
      </section>

      {/* 3. ADDITIONAL SECTIONS: HAPPENING TODAY, THIS WEEK, COMING SOON */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Happening Today & This Week Grid */}
        <div className="space-y-4">
          <div className="border-b border-gold/40 pb-2 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-olive block">
                Regional Timeline
              </span>
              <h3 className="font-serif text-2xl font-bold text-text-dark">
                This Week & Coming Soon
              </h3>
            </div>
            <span className="text-xs text-text-muted">
              {allEvents.length} events curated
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {allEvents.map(event => (
              <div
                key={event.id}
                className="rounded-2xl bg-card border border-gold/50 p-5 shadow-sm flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-olive/15 text-olive">
                      {event.category}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      event.status === 'Pending Review' 
                        ? 'bg-amber-100 text-amber-800 border border-amber-300' 
                        : 'bg-gold/20 text-text-dark'
                    }`}>
                      {event.status || 'Verified'}
                    </span>
                  </div>

                  <h4 className="font-serif font-bold text-xl text-text-dark leading-tight">
                    {event.title}
                  </h4>
                  <span className="text-xs text-text-muted block mt-0.5">{event.dateLabel}</span>
                  <p className="text-xs text-text-secondary line-clamp-3 mt-2 font-sans">
                    {event.history}
                  </p>
                </div>

                <div className="pt-2 border-t border-gold/25 flex items-center justify-between text-xs">
                  <span className="text-text-muted truncate max-w-[150px]">{event.location}</span>
                  <button
                    type="button"
                    onClick={() => {
                      // Switch matched event view
                      setSelectedDate(new Date(2026, event.month - 1, event.day || 15));
                      window.scrollTo({ top: 120, behavior: 'smooth' });
                    }}
                    className="text-olive font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>View Day</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Community Event Submission Modal */}
      <EventSubmitModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
      />

    </div>
  );
};
