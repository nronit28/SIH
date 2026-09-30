import React from 'react';
import { X, Trash2, Calendar, MapPin, Clock, ArrowUp, ArrowDown, Share2, Printer, ExternalLink } from 'lucide-react';
import { useSanskriti } from '../../context/SanskritiContext';
import { PLACES_DATA } from '../../data/places';
import { DiamondDivider } from '../common/HeritageIcons';

export const ItineraryDrawer: React.FC = () => {
  const { 
    isItineraryOpen, 
    setIsItineraryOpen, 
    itinerary, 
    removeFromItinerary, 
    clearItinerary,
    setSelectedDestination 
  } = useSanskriti();

  if (!isItineraryOpen) return null;

  const placesInItinerary = itinerary.map(item => {
    const place = PLACES_DATA.find(p => p.id === item.destinationId);
    return { item, place };
  }).filter(entry => entry.place !== undefined);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Sanskriti Day — Chhatrapati Sambhajinagar',
        text: `Here is my cultural heritage itinerary in Chhatrapati Sambhajinagar with ${itinerary.length} places!`,
        url: window.location.href
      }).catch(() => {});
    } else {
      alert('Itinerary link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-end">
      <div 
        className="w-full max-w-md bg-card border-l border-gold shadow-2xl flex flex-col h-full animate-in slide-in-from-right duration-250"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 border-b border-gold/40 flex items-center justify-between bg-page/70">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-olive" />
            <div>
              <h3 className="font-serif font-bold text-xl text-text-dark leading-none">
                My Sanskriti Day
              </h3>
              <span className="text-[11px] text-text-secondary mt-0.5 block">
                Local Custom Itinerary · No login required
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsItineraryOpen(false)}
            className="p-1.5 rounded-lg text-text-dark hover:bg-gold/20"
            aria-label="Close itinerary"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          <div className="bg-white/60 p-3 rounded-xl border border-gold/40 text-xs text-text-secondary">
            💡 <strong>Smart Tip:</strong> Places are saved directly in your browser. You can rearrange your morning and afternoon stops, or open map directions for each stop.
          </div>

          {placesInItinerary.length === 0 ? (
            <div className="text-center py-12 text-text-muted space-y-3">
              <Calendar className="w-12 h-12 mx-auto text-gold/60 stroke-1" />
              <p className="font-serif text-lg text-text-secondary">Your day is open</p>
              <p className="text-xs max-w-xs mx-auto">
                Explore destinations, trails or specialities and click <strong>“Add to My Day”</strong> to plan your schedule.
              </p>
            </div>
          ) : (
            <div className="space-y-3 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-gold/40">
              {placesInItinerary.map(({ item, place }, idx) => (
                <div 
                  key={item.id}
                  className="relative pl-8 group"
                >
                  {/* Timeline bullet */}
                  <div className="absolute left-1.5 top-3 w-4 h-4 rounded-full bg-olive border-2 border-card flex items-center justify-center text-[9px] text-white font-bold">
                    {idx + 1}
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/80 border border-gold/40 hover:border-gold transition-all shadow-sm">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5 text-olive font-medium text-xs mb-1">
                          <Clock className="w-3 h-3" />
                          <span>{item.customTime || `Stop #${idx + 1}`}</span>
                          <span className="text-text-muted">·</span>
                          <span className="text-text-secondary">{place!.travelTime}</span>
                        </div>
                        <h4 
                          onClick={() => {
                            setSelectedDestination(place!);
                            setIsItineraryOpen(false);
                          }}
                          className="font-serif font-bold text-text-dark text-base hover:text-olive cursor-pointer"
                        >
                          {place!.name}
                        </h4>
                        <p className="text-xs text-text-secondary line-clamp-1 mt-0.5">
                          {place!.shortDescription}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromItinerary(place!.id)}
                        className="text-text-muted hover:text-terracotta p-1 rounded transition-colors"
                        title="Remove from itinerary"
                        aria-label={`Remove ${place!.name} from itinerary`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-gold/20 flex items-center justify-between text-[11px]">
                      <span className="text-text-muted">Est: {place!.visitDuration}</span>
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${place!.coordinates.lat},${place!.coordinates.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-olive hover:underline inline-flex items-center gap-1"
                      >
                        Directions <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer controls */}
        {placesInItinerary.length > 0 && (
          <div className="p-4 border-t border-gold/40 bg-page/70 space-y-2.5">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="flex-1 py-2 rounded-xl bg-card border border-gold/60 text-text-dark text-xs font-medium hover:bg-white flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Printer className="w-3.5 h-3.5 text-text-secondary" />
                <span>Print Schedule</span>
              </button>
              <button
                type="button"
                onClick={handleShare}
                className="flex-1 py-2 rounded-xl bg-card border border-gold/60 text-text-dark text-xs font-medium hover:bg-white flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Share2 className="w-3.5 h-3.5 text-text-secondary" />
                <span>Share Day</span>
              </button>
            </div>

            <button
              type="button"
              onClick={clearItinerary}
              className="w-full py-1.5 text-center text-xs text-text-muted hover:text-terracotta"
            >
              Clear Itinerary
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
