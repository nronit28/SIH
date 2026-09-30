import React from 'react';
import { MapPin, Clock, Award, Plus, Check, Compass, ArrowRight } from 'lucide-react';
import { Destination } from '../../types';
import { useSanskriti } from '../../context/SanskritiContext';
import { ImageWithFallback, LotusCornerFlourish } from './HeritageIcons';

export const DestinationCard: React.FC<{
  destination: Destination;
  showFlourish?: boolean;
}> = ({ destination, showFlourish = false }) => {
  const { setSelectedDestination, addToItinerary, removeFromItinerary, isInItinerary } = useSanskriti();
  const inItinerary = isInItinerary(destination.id);

  const handleItineraryToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inItinerary) removeFromItinerary(destination.id);
    else addToItinerary(destination.id);
  };

  return (
    <div 
      onClick={() => setSelectedDestination(destination)}
      className="group relative rounded-2xl bg-card border border-gold/50 shadow-heritage hover:shadow-heritage-hover hover:border-gold transition-all duration-300 overflow-hidden flex flex-col cursor-pointer hover:-translate-y-1"
    >
      {/* Top Image Thumbnail Container */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
        <ImageWithFallback
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase px-2.5 py-0.5 rounded-full bg-card/90 text-text-dark border border-gold/60 shadow-sm backdrop-blur-sm">
            {destination.category}
          </span>

          <button
            type="button"
            onClick={handleItineraryToggle}
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-all shadow-md backdrop-blur-sm ${
              inItinerary
                ? 'bg-olive text-white ring-2 ring-white/50'
                : 'bg-card/90 text-text-dark hover:bg-olive hover:text-white border border-gold/60'
            }`}
            title={inItinerary ? "Remove from My Day" : "Add to My Day"}
            aria-label={inItinerary ? `Remove ${destination.name} from My Day` : `Add ${destination.name} to My Day`}
          >
            {inItinerary ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Bottom Image Overlay Details */}
        <div className="absolute bottom-2.5 left-3 right-3 text-white">
          {destination.unescoStatus && (
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-gold-light uppercase tracking-wider mb-0.5">
              <Award className="w-3 h-3 text-gold-light" />
              <span>UNESCO Site</span>
            </span>
          )}
          <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight drop-shadow-sm">
            {destination.name}
          </h3>
          <div className="font-serif italic text-gold-light/90 text-xs">
            {destination.marathiName}
          </div>
        </div>
      </div>

      {/* Card Content Surface */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 relative">
        {showFlourish && (
          <div className="absolute bottom-1 right-1 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
            <LotusCornerFlourish className="w-16 h-16 text-gold" />
          </div>
        )}

        <div>
          <div className="flex items-center gap-2 text-xs text-olive font-medium mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-terracotta" />
            <span>{destination.distanceKm} km from centre</span>
            <span className="text-text-muted">·</span>
            <span>{destination.travelTime}</span>
          </div>

          <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
            {destination.shortDescription}
          </p>
        </div>

        <div className="pt-3 border-t border-gold/25 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 text-text-muted text-[11px]">
            <Clock className="w-3.5 h-3.5" />
            <span>{destination.visitDuration}</span>
          </div>

          <button
            type="button"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-olive text-white text-xs font-semibold group-hover:bg-olive-hover transition-colors shadow-sm"
          >
            <span>Explore</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
