import React, { useState } from 'react';
import { MapPin, Navigation, Compass, ExternalLink, Info, ZoomIn, ZoomOut, Layers } from 'lucide-react';
import { Destination } from '../../types';
import { PLACES_DATA } from '../../data/places';
import { useSanskriti } from '../../context/SanskritiContext';

export const InteractiveMap: React.FC<{
  selectedPlaceId?: string;
  onSelectPlace?: (place: Destination) => void;
  filteredPlaces?: Destination[];
}> = ({ selectedPlaceId, onSelectPlace, filteredPlaces = PLACES_DATA }) => {
  const { setSelectedDestination } = useSanskriti();
  const [activePlace, setActivePlace] = useState<Destination>(
    PLACES_DATA.find(p => p.id === selectedPlaceId) || PLACES_DATA[0]
  );
  const [mapView, setMapView] = useState<'interactive' | 'satellite'>('interactive');
  const [zoomLevel, setZoomLevel] = useState(1);

  // Bounds for Chhatrapati Sambhajinagar region
  // Lat: ~19.85 to 20.56, Lng: ~75.15 to 75.72
  const minLat = 19.85;
  const maxLat = 20.58;
  const minLng = 75.15;
  const maxLng = 75.72;

  const getCoordinatesPercent = (lat: number, lng: number) => {
    // Normalise to 5% - 95% on map canvas
    const x = ((lng - minLng) / (maxLng - minLng)) * 80 + 10;
    // Invert Y because latitude goes north
    const y = 90 - (((lat - minLat) / (maxLat - minLat)) * 80);
    return { x: Math.max(5, Math.min(95, x)), y: Math.max(8, Math.min(92, y)) };
  };

  const handleMarkerClick = (place: Destination) => {
    setActivePlace(place);
    if (onSelectPlace) onSelectPlace(place);
  };

  return (
    <div className="w-full bg-card border border-gold rounded-2xl shadow-heritage overflow-hidden">
      
      {/* Map Header Toolbar */}
      <div className="p-3 sm:px-5 bg-card/90 border-b border-gold/40 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <Navigation className="w-4 h-4 text-olive" />
          <span className="font-serif font-bold text-sm text-text-dark">
            Interactive Heritage Map of Chhatrapati Sambhajinagar
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] text-text-muted hidden sm:inline">
            {filteredPlaces.length} Markers Placed
          </span>

          <div className="flex items-center rounded-lg border border-gold/50 bg-white p-0.5">
            <button
              type="button"
              onClick={() => setZoomLevel(prev => Math.min(prev + 0.2, 1.8))}
              className="p-1 text-text-dark hover:bg-gold/20 rounded"
              title="Zoom In"
              aria-label="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setZoomLevel(prev => Math.max(prev - 0.2, 0.8))}
              className="p-1 text-text-dark hover:bg-gold/20 rounded"
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
          </div>

          <a
            href="https://www.google.com/maps/search/heritage+monuments+in+Chhatrapati+Sambhajinagar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-gold/60 text-[11px] font-medium text-olive hover:border-olive shadow-sm"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Map Viewport */}
      <div className="relative w-full h-[360px] sm:h-[420px] md:h-[460px] bg-[#EADECA] overflow-hidden select-none">
        
        {/* Antique Cartographic Map Background Canvas */}
        <div 
          className="absolute inset-0 transition-transform duration-300 origin-center"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {/* Subtle topographical contours & parchment grid */}
          <svg className="w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#B59A70" strokeWidth="0.5" strokeDasharray="2,2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {/* Mountain Ridge Paths */}
            <path d="M 50 350 Q 200 300 400 320 T 800 280 T 1200 240" fill="none" stroke="#78634B" strokeWidth="1.5" strokeDasharray="4,4" />
            <path d="M 100 200 Q 250 150 500 180 T 900 120 T 1200 150" fill="none" stroke="#78634B" strokeWidth="1" strokeDasharray="3,3" />
            {/* Kham River Curve */}
            <path d="M 220 400 Q 240 320 250 250 T 230 150 T 260 50" fill="none" stroke="#688B9A" strokeWidth="2.5" />
            {/* Waghora Gorge near Ajanta (Top Right) */}
            <path d="M 850 120 Q 900 90 950 110 T 1000 80" fill="none" stroke="#688B9A" strokeWidth="2" />
          </svg>

          {/* City Center Landmark Tag */}
          <div 
            className="absolute p-1 text-[10px] font-serif italic text-text-muted bg-[#F3E5CC]/80 rounded border border-gold/30 pointer-events-none"
            style={{ left: '26%', top: '58%' }}
          >
            Sambhajinagar City Centre
          </div>

          <div 
            className="absolute p-1 text-[10px] font-serif italic text-text-muted bg-[#F3E5CC]/80 rounded border border-gold/30 pointer-events-none"
            style={{ left: '12%', top: '35%' }}
          >
            Verul / Charanandri Hills (Ellora)
          </div>

          <div 
            className="absolute p-1 text-[10px] font-serif italic text-text-muted bg-[#F3E5CC]/80 rounded border border-gold/30 pointer-events-none"
            style={{ left: '72%', top: '15%' }}
          >
            Waghora Horseshoe Gorge (Ajanta)
          </div>

          {/* Interactive Destination Markers */}
          {filteredPlaces.map(place => {
            const { x, y } = getCoordinatesPercent(place.coordinates.lat, place.coordinates.lng);
            const isSelected = activePlace?.id === place.id;

            return (
              <button
                key={place.id}
                type="button"
                onClick={() => handleMarkerClick(place)}
                style={{ left: `${x}%`, top: `${y}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-all duration-200 z-20 ${
                  isSelected ? 'scale-125 z-30' : 'hover:scale-115'
                }`}
                aria-label={`View map details for ${place.name}`}
              >
                <div className="relative flex flex-col items-center">
                  {/* Pin Head */}
                  <div className={`p-1.5 rounded-full shadow-md border-2 transition-colors ${
                    isSelected 
                      ? 'bg-olive text-white border-white ring-4 ring-olive/30' 
                      : place.category === 'UNESCO'
                        ? 'bg-gold-dark text-white border-card'
                        : 'bg-card text-text-dark border-gold'
                  }`}>
                    <MapPin className="w-4 h-4" />
                  </div>

                  {/* Marker Label Badge */}
                  <span className={`text-[10px] font-serif font-bold whitespace-nowrap px-1.5 py-0.5 rounded shadow-sm border mt-0.5 transition-all ${
                    isSelected 
                      ? 'bg-olive text-white border-olive' 
                      : 'bg-card/90 text-text-dark border-gold/50 group-hover:bg-white'
                  }`}>
                    {place.name}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Marker Detail Card Popover */}
        {activePlace && (
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-card/95 backdrop-blur-md border border-gold rounded-xl p-3.5 shadow-heritage-lg z-30 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="flex gap-3">
              <img
                src={activePlace.image}
                alt={activePlace.name}
                className="w-20 h-20 rounded-lg object-cover flex-shrink-0 border border-gold/40"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase text-olive tracking-wider truncate">
                    {activePlace.category} · {activePlace.distanceKm} km
                  </span>
                </div>
                <h4 className="font-serif font-bold text-base text-text-dark truncate">
                  {activePlace.name}
                </h4>
                <p className="text-xs text-text-secondary line-clamp-2 mt-0.5">
                  {activePlace.shortDescription}
                </p>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-gold/30 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => setSelectedDestination(activePlace)}
                className="flex-1 py-1.5 px-3 rounded-full bg-olive text-white text-xs font-semibold hover:bg-olive-hover transition-colors text-center"
              >
                Explore Details
              </button>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${activePlace.coordinates.lat},${activePlace.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 px-3 rounded-full bg-white border border-gold/60 text-text-dark text-xs font-medium hover:border-gold inline-flex items-center gap-1 shadow-sm"
              >
                <Compass className="w-3 h-3 text-olive" />
                <span>Directions</span>
                <ExternalLink className="w-2.5 h-2.5 text-text-muted" />
              </a>
            </div>
          </div>
        )}

      </div>

      {/* Map Footer Note */}
      <div className="p-2.5 px-4 bg-page/70 text-[11px] text-text-muted border-t border-gold/30 flex items-center justify-between">
        <span>📍 Interactive regional coordinates mapped to real GPS locations.</span>
        <span className="italic">Click any marker to view distance and directions.</span>
      </div>

    </div>
  );
};
