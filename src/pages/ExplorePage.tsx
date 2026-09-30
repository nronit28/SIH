import React, { useState, useMemo } from 'react';
import { 
  Search, 
  MapPin, 
  SlidersHorizontal, 
  Navigation, 
  Compass, 
  Check, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck,
  Locate
} from 'lucide-react';
import { Destination, HeritageCategory } from '../types';
import { PLACES_DATA } from '../data/places';
import { TRAILS_DATA } from '../data/trails';
import { useSanskriti } from '../context/SanskritiContext';
import { InteractiveMap } from '../components/explore/InteractiveMap';
import { DestinationCard } from '../components/common/DestinationCard';
import { DiamondDivider } from '../components/common/HeritageIcons';

export const ExplorePage: React.FC = () => {
  const { setSelectedDestination, accessibleRoutesOnly } = useSanskriti();

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [distanceCategory, setDistanceCategory] = useState<string>('all');
  const [startPoint, setStartPoint] = useState<'city-centre' | 'user-location'>('city-centre');
  const [userCoords, setUserCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [locationStatus, setLocationStatus] = useState<string>('');

  const filterChips: { id: string; label: string }[] = [
    { id: 'All', label: 'All Destinations' },
    { id: 'UNESCO', label: 'UNESCO Sites' },
    { id: 'Forts', label: 'Forts & Defense' },
    { id: 'Architecture', label: 'Architecture' },
    { id: 'Sacred Places', label: 'Sacred Places' },
    { id: 'Museums', label: 'Museums & Palaces' },
    { id: 'Gardens', label: 'Gardens & Lakes' },
    { id: 'Hidden Gems', label: 'Hidden Gems' },
    { id: 'Accessible', label: 'Accessible Routes' },
  ];

  // Geolocation handling
  const handleUseMyLocation = () => {
    if (navigator.geolocation) {
      setLocationStatus('Detecting GPS location...');
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
          setStartPoint('user-location');
          setLocationStatus('Using current GPS coordinates');
        },
        () => {
          setLocationStatus('Location permission denied; using City Centre default');
          setStartPoint('city-centre');
        }
      );
    } else {
      setLocationStatus('Geolocation unsupported; using City Centre default');
    }
  };

  // Filtered places
  const filteredPlaces = useMemo(() => {
    return PLACES_DATA.filter(place => {
      // 1. Text Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesText = 
          place.name.toLowerCase().includes(q) ||
          place.marathiName.includes(q) ||
          place.shortDescription.toLowerCase().includes(q) ||
          place.category.toLowerCase().includes(q);
        if (!matchesText) return false;
      }

      // 2. Category Filter
      if (activeCategory === 'UNESCO' && !place.unescoStatus) return false;
      if (activeCategory === 'Accessible' && place.accessibility.wheelchair === 'Limited') return false;
      if (activeCategory !== 'All' && activeCategory !== 'UNESCO' && activeCategory !== 'Accessible' && place.category !== activeCategory) {
        return false;
      }

      // 3. Accessible routes toggle
      if (accessibleRoutesOnly && place.accessibility.wheelchair === 'Limited') {
        return false;
      }

      // 4. Distance Category
      if (distanceCategory === 'under-5' && place.distanceKm >= 5) return false;
      if (distanceCategory === '5-15' && (place.distanceKm < 5 || place.distanceKm > 15)) return false;
      if (distanceCategory === '15-30' && (place.distanceKm < 15 || place.distanceKm > 30)) return false;
      if (distanceCategory === 'day-trips' && place.distanceKm <= 30) return false;

      return true;
    });
  }, [searchQuery, activeCategory, distanceCategory, accessibleRoutesOnly]);

  // Distance Groups
  const under5Km = PLACES_DATA.filter(p => p.distanceKm < 5);
  const fiveTo15Km = PLACES_DATA.filter(p => p.distanceKm >= 5 && p.distanceKm <= 15);
  const fifteenTo30Km = PLACES_DATA.filter(p => p.distanceKm > 15 && p.distanceKm <= 30);
  const dayTrips = PLACES_DATA.filter(p => p.distanceKm > 30);

  return (
    <div className="space-y-10 pb-16 animate-in fade-in duration-200">
      
      {/* 1. COMPACT PAGE HEADER & SEARCH BAR */}
      <section className="pt-4 sm:pt-6 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto space-y-1.5 mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-olive block">
            Monument & Culture Atlas
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-dark">
            Explore Chhatrapati Sambhajinagar
          </h1>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
            Find monuments, sacred places, museums, gardens, food, crafts and cultural experiences around the city.
          </p>
        </div>

        {/* Search Bar Input */}
        <div className="relative max-w-2xl mx-auto">
          <div className="relative flex items-center bg-card border border-gold rounded-full shadow-heritage p-1.5 focus-within:ring-2 focus-within:ring-olive transition-all">
            <Search className="w-5 h-5 text-olive ml-3.5 flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search places, monuments, stories or experiences (e.g. Ellora, Fort, Caves...)"
              className="w-full bg-transparent px-3 py-2 text-sm text-text-dark placeholder-text-muted focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-xs text-text-muted hover:text-text-dark px-3 py-1"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Chips Bar */}
        <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none max-w-full">
          {filterChips.map(chip => (
            <button
              key={chip.id}
              type="button"
              onClick={() => setActiveCategory(chip.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${
                activeCategory === chip.id
                  ? 'bg-olive text-white border-olive shadow-sm'
                  : 'bg-card text-text-dark border-gold/50 hover:bg-white hover:border-gold'
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </section>

      {/* 2. REAL INTERACTIVE MAP SECTION */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <InteractiveMap filteredPlaces={filteredPlaces} />
      </section>

      {/* 3. NEAR YOU / EXPLORE BY DISTANCE (Requirement #10) */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-6">
        
        <div className="p-5 sm:p-6 rounded-2xl bg-card border border-gold/50 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-olive font-semibold text-xs mb-1">
              <MapPin className="w-4 h-4" />
              <span>Location Radius Discovery</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-text-dark">
              Near You / Explore by Distance
            </h3>
            <p className="text-xs text-text-secondary mt-0.5">
              Choose your starting origin point or allow browser GPS to calculate travel distances.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <select
              value={startPoint}
              onChange={(e) => setStartPoint(e.target.value as any)}
              className="px-3 py-2 rounded-xl bg-white border border-gold/60 text-xs font-medium text-text-dark focus:ring-2 focus:ring-olive"
            >
              <option value="city-centre">Chhatrapati Sambhajinagar City Centre</option>
              <option value="user-location">Use My Location (GPS)</option>
            </select>

            <button
              type="button"
              onClick={handleUseMyLocation}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-olive text-white text-xs font-medium hover:bg-olive-hover transition-colors shadow-sm"
            >
              <Locate className="w-3.5 h-3.5" />
              <span>Use My Location</span>
            </button>
          </div>
        </div>

        {locationStatus && (
          <p className="text-xs text-text-muted italic px-2">
            📍 {locationStatus}
          </p>
        )}

        {/* Distance Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-gold/30">
          {[
            { id: 'all', label: `All (${PLACES_DATA.length})` },
            { id: 'under-5', label: `Under 5 km (${under5Km.length})` },
            { id: '5-15', label: `5 – 15 km (${fiveTo15Km.length})` },
            { id: '15-30', label: `15 – 30 km (${fifteenTo30Km.length})` },
            { id: 'day-trips', label: `Day Trips (${dayTrips.length})` },
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setDistanceCategory(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                distanceCategory === tab.id
                  ? 'bg-olive text-white border-olive shadow-sm'
                  : 'bg-card text-text-secondary border-gold/40 hover:bg-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Destinations Result Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.length === 0 ? (
            <div className="col-span-full text-center py-12 bg-card rounded-2xl border border-gold/40 text-text-muted">
              <Compass className="w-10 h-10 mx-auto text-gold mb-2" />
              <p className="font-serif text-lg text-text-secondary">No destinations match the selected filters</p>
              <p className="text-xs mt-1">Try resetting the search bar or choosing "All Destinations".</p>
            </div>
          ) : (
            filteredPlaces.map(place => (
              <DestinationCard key={place.id} destination={place} />
            ))
          )}
        </div>

      </section>

      {/* 4. SUGGESTED TRAILS ON EXPLORE PAGE */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-4 pt-6">
        <div className="border-b border-gold/40 pb-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-olive block">
            Coordinated Circuits
          </span>
          <h2 className="font-serif text-2xl font-bold text-text-dark">
            Suggested Heritage Trails Around the City
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TRAILS_DATA.map(trail => (
            <div
              key={trail.id}
              className="p-4 rounded-2xl bg-card border border-gold/40 shadow-sm flex flex-col justify-between space-y-3"
            >
              <div>
                <span className="text-[10px] uppercase font-semibold text-olive tracking-wider block">
                  {trail.stopsCount} stops · {trail.duration}
                </span>
                <h4 className="font-serif font-bold text-lg text-text-dark mt-0.5">{trail.title}</h4>
                <p className="text-xs text-text-secondary line-clamp-2 mt-1">{trail.description}</p>
              </div>

              <div className="pt-2 border-t border-gold/20 flex items-center justify-between text-xs">
                <span className="text-text-muted">{trail.distance}</span>
                <button
                  type="button"
                  onClick={() => {
                    const firstPlace = PLACES_DATA.find(p => p.id === trail.stopIds[0]);
                    if (firstPlace) setSelectedDestination(firstPlace);
                  }}
                  className="text-olive font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Start Trail</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
