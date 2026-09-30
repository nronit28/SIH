import React, { useState, useMemo } from 'react';
import { Search, X, MapPin, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import { useSanskriti } from '../../context/SanskritiContext';
import { PLACES_DATA } from '../../data/places';
import { STORIES_DATA } from '../../data/stories';
import { EVENTS_DATA } from '../../data/events';
import { CULTURAL_EXPERIENCES_DATA } from '../../data/livingHeritage';

export const SearchModal: React.FC = () => {
  const { 
    isSearchOpen, 
    setIsSearchOpen, 
    setSelectedDestination, 
    setSelectedStory, 
    setCurrentPage 
  } = useSanskriti();

  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { places: [], stories: [], events: [], experiences: [] };

    const places = PLACES_DATA.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.marathiName.includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.culturalFacts.some(f => f.toLowerCase().includes(q))
    );

    const stories = STORIES_DATA.filter(s =>
      s.title.toLowerCase().includes(q) ||
      s.marathiTitle.includes(q) ||
      s.subtitle.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q) ||
      s.narrative.some(n => n.toLowerCase().includes(q))
    );

    const events = EVENTS_DATA.filter(e =>
      e.title.toLowerCase().includes(q) ||
      e.marathiTitle.includes(q) ||
      e.history.toLowerCase().includes(q) ||
      e.category.toLowerCase().includes(q)
    );

    const experiences = CULTURAL_EXPERIENCES_DATA.filter(exp =>
      exp.title.toLowerCase().includes(q) ||
      exp.culturalContext.toLowerCase().includes(q) ||
      exp.category.toLowerCase().includes(q)
    );

    return { places, stories, events, experiences };
  }, [query]);

  if (!isSearchOpen) return null;

  const totalResults = results.places.length + results.stories.length + results.events.length + results.experiences.length;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="w-full max-w-2xl bg-card border border-gold rounded-2xl shadow-heritage-lg overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-gold/40 flex items-center gap-3 bg-white/60">
          <Search className="w-5 h-5 text-olive flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search places, monuments, stories or experiences (e.g., Ellora, fort, silk...)"
            className="w-full bg-transparent text-text-dark placeholder-text-muted focus:outline-none text-base"
            autoFocus
          />
          {query && (
            <button 
              type="button" 
              onClick={() => setQuery('')}
              className="text-text-muted hover:text-text-dark text-xs px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 rounded-lg text-text-dark hover:bg-gold/20 flex-shrink-0"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-6">
          {!query.trim() ? (
            <div className="text-center py-8 text-text-muted">
              <p className="font-serif text-lg text-text-secondary">Explore Chhatrapati Sambhajinagar</p>
              <p className="text-xs mt-1">Try searching for: <span className="text-olive font-medium cursor-pointer underline" onClick={() => setQuery('Ellora')}>Ellora</span>, <span className="text-olive font-medium cursor-pointer underline" onClick={() => setQuery('Fort')}>Fort</span>, <span className="text-olive font-medium cursor-pointer underline" onClick={() => setQuery('Kailasa')}>Kailasa</span>, <span className="text-olive font-medium cursor-pointer underline" onClick={() => setQuery('Himroo')}>Himroo</span>, <span className="text-olive font-medium cursor-pointer underline" onClick={() => setQuery('Bibi')}>Bibi Ka Maqbara</span></p>
            </div>
          ) : totalResults === 0 ? (
            <div className="text-center py-8 text-text-muted">
              <p className="text-base text-text-secondary">No direct results found for "{query}"</p>
              <p className="text-xs mt-1">Try searching for another keyword or browse the Explore page.</p>
            </div>
          ) : (
            <>
              {/* Places / Monuments */}
              {results.places.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-olive" />
                    <span>Heritage Destinations ({results.places.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {results.places.map(place => (
                      <div
                        key={place.id}
                        onClick={() => {
                          setSelectedDestination(place);
                          setIsSearchOpen(false);
                        }}
                        className="p-3 rounded-xl bg-white/70 border border-gold/30 hover:border-gold hover:bg-white flex items-center justify-between cursor-pointer transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <img 
                            src={place.image} 
                            alt={place.name} 
                            className="w-12 h-12 rounded-lg object-cover flex-shrink-0 border border-gold/30"
                          />
                          <div>
                            <h5 className="font-serif font-bold text-text-dark text-base">{place.name}</h5>
                            <p className="text-xs text-text-secondary line-clamp-1">{place.shortDescription}</p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-olive flex-shrink-0 ml-2" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stories & Legends */}
              {results.stories.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-terracotta" />
                    <span>Heritage Stories & Legends ({results.stories.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {results.stories.map(story => (
                      <div
                        key={story.id}
                        onClick={() => {
                          setSelectedStory(story);
                          setIsSearchOpen(false);
                        }}
                        className="p-3 rounded-xl bg-white/70 border border-gold/30 hover:border-gold hover:bg-white flex items-center justify-between cursor-pointer transition-all"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-gold/20 text-text-dark">
                              {story.type}
                            </span>
                            <span className="text-[10px] text-text-muted">{story.readingTime}</span>
                          </div>
                          <h5 className="font-serif font-bold text-text-dark text-sm mt-1">{story.title}</h5>
                          <p className="text-xs text-text-secondary line-clamp-1">{story.subtitle}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-terracotta flex-shrink-0 ml-2" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Speciality Events */}
              {results.events.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-saffron" />
                    <span>Speciality Events ({results.events.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {results.events.map(ev => (
                      <div
                        key={ev.id}
                        onClick={() => {
                          setCurrentPage('speciality');
                          setIsSearchOpen(false);
                        }}
                        className="p-3 rounded-xl bg-white/70 border border-gold/30 hover:border-gold hover:bg-white flex items-center justify-between cursor-pointer transition-all"
                      >
                        <div>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-olive/10 text-olive">
                            {ev.category}
                          </span>
                          <h5 className="font-serif font-bold text-text-dark text-sm mt-1">{ev.title}</h5>
                          <p className="text-xs text-text-secondary line-clamp-1">{ev.location}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-olive flex-shrink-0 ml-2" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
