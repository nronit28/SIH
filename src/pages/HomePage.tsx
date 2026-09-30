import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  BookOpen, 
  Compass, 
  ShieldAlert, 
  Users, 
  Volume2, 
  Download, 
  Calendar, 
  ArrowRight, 
  Award,
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { useSanskriti } from '../context/SanskritiContext';
import { PLACES_DATA } from '../data/places';
import { STORIES_DATA } from '../data/stories';
import { TRAILS_DATA } from '../data/trails';
import { LOCAL_CULTURE_ITEMS, REGIONAL_CUISINE_ITEMS } from '../data/localCulture';
import { DestinationCard } from '../components/common/DestinationCard';
import { 
  LotusEmblem, 
  ChhatriIcon, 
  DiamondDivider, 
  BotanicalBranch, 
  LotusCornerFlourish,
  ImageWithFallback 
} from '../components/common/HeritageIcons';

export const HomePage: React.FC = () => {
  const { 
    setCurrentPage, 
    setSelectedDestination, 
    setSelectedStory, 
    setIsItineraryOpen,
    openHeritageWatchWithPlace 
  } = useSanskriti();

  const featuredPlaces = PLACES_DATA.slice(0, 6);
  const featuredStories = STORIES_DATA.slice(0, 4);

  return (
    <div className="space-y-12 md:space-y-16 pb-12 animate-in fade-in duration-300">
      
      {/* 1. COMPACT HERO SECTION (Matches Reference Image) */}
      <section className="relative pt-3 sm:pt-6">
        
        {/* Top Header Flourish: Lotus + "Namaste" + "Welcome to Sanskriti" */}
        <div className="text-center relative max-w-xl mx-auto px-4 mb-4 sm:mb-6">
          
          {/* Botanical leaf corner flourish */}
          <div className="absolute -top-3 left-2 sm:left-4 pointer-events-none opacity-60">
            <BotanicalBranch className="w-16 h-16 text-gold" />
          </div>

          <div className="flex flex-col items-center justify-center">
            {/* Lotus Emblem */}
            <LotusEmblem className="w-10 h-10 text-gold-dark mb-1 hover:scale-110 transition-transform" />
            
            {/* Graceful Handwritten "Namaste" (Script Font) */}
            <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-text-dark leading-tight tracking-normal">
              Namaste
            </h1>

            {/* Diamond Divider: —◇— Welcome to Sanskriti —◇— */}
            <DiamondDivider text="Welcome to Sanskriti" className="mt-1 mb-2" />

            {/* Subtitle */}
            <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-semibold text-text-dark mt-1">
              Discover the living heritage of Chhatrapati Sambhajinagar
            </h2>

            <p className="text-xs sm:text-sm text-text-secondary max-w-lg mx-auto mt-2 leading-relaxed font-sans">
              Walk through centuries of stories, rock-cut wonders, living traditions, fragrant flavours and festivals that continue to shape the cultural soul of the Deccan.
            </p>
          </div>
        </div>

        {/* Hero Banner Composition Card (Directly based on Reference Image) */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-gold/60 shadow-heritage-lg h-[280px] sm:h-[360px] md:h-[420px] group">
            
            {/* Authentic Sunset Photograph of Bibi Ka Maqbara */}
            <ImageWithFallback
              src="/assets/reference_design.png"
              alt="Bibi Ka Maqbara at Sunset, Chhatrapati Sambhajinagar"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              fallbackText="Bibi Ka Maqbara at Sunset"
            />
            
            {/* Gradient Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

            {/* Top Left: Cursive Script "Chhatrapati Sambhajinagar" */}
            <div className="absolute top-5 left-5 sm:top-7 sm:left-7 text-white pointer-events-none">
              <span className="font-brush text-3xl sm:text-4xl md:text-5xl text-gold-light drop-shadow-md block">
                Chhatrapati
              </span>
              <span className="font-brush text-2xl sm:text-3xl md:text-4xl text-white/95 drop-shadow-md block -mt-1 sm:-mt-2">
                Sambhajinagar
              </span>
            </div>

            {/* Bottom Botanical Branch Line Art (from reference image) */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 pointer-events-none opacity-80">
              <BotanicalBranch className="w-16 h-16 sm:w-24 sm:h-24 text-gold-light" />
            </div>

            {/* Bottom Right CTA Buttons Overlay */}
            <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7 flex flex-wrap items-center gap-2.5 z-10">
              <button
                type="button"
                onClick={() => setCurrentPage('explore')}
                className="px-5 py-2.5 rounded-full bg-olive text-white font-medium text-xs sm:text-sm hover:bg-olive-hover transition-all shadow-md flex items-center gap-1.5"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Heritage</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentPage('speciality')}
                className="px-5 py-2.5 rounded-full bg-card/95 text-text-dark border border-gold font-medium text-xs sm:text-sm hover:bg-white transition-all shadow-md backdrop-blur-sm flex items-center gap-1.5"
              >
                <Sparkles className="w-4 h-4 text-saffron" />
                <span>Discover Today's Speciality</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2 CARDS MATCHING REFERENCE IMAGE: "What's Special?" & "Mythological Fact" */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
          
          {/* Card 1: What's Special? */}
          <div className="heritage-card rounded-2xl p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between">
            {/* Top heading with Chhatri icon */}
            <div className="flex items-center gap-2.5 mb-2">
              <ChhatriIcon className="w-6 h-6 text-text-dark flex-shrink-0" />
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark">
                What’s Special?
              </h3>
            </div>

            <DiamondDivider className="my-2 opacity-50 justify-start" />

            <div className="flex flex-col sm:flex-row gap-4 items-center mt-2">
              <img
                src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80"
                alt="Bibi Ka Maqbara reflection"
                className="w-full sm:w-40 h-28 rounded-xl object-cover border border-gold/40 flex-shrink-0 shadow-sm"
              />
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
                Chhatrapati Sambhajinagar is a city rich in history, architecture and culture. It is home to iconic monuments like Bibi Ka Maqbara, Daulatabad Fort and the UNESCO World Heritage Sites — Ajanta and Ellora Caves. The city beautifully blends its royal past with a vibrant present.
              </p>
            </div>

            {/* Botanical Lotus Line Art in corner (from reference image) */}
            <div className="absolute -bottom-2 -right-2 pointer-events-none opacity-30">
              <LotusCornerFlourish className="w-24 h-24 text-gold" />
            </div>
          </div>

          {/* Card 2: Mythological Fact */}
          <div className="heritage-card rounded-2xl p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between">
            {/* Top heading with Book icon */}
            <div className="flex items-center gap-2.5 mb-2">
              <BookOpen className="w-6 h-6 text-text-dark flex-shrink-0" />
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark">
                Mythological Fact
              </h3>
            </div>

            <DiamondDivider className="my-2 opacity-50 justify-start" />

            <div className="flex flex-col sm:flex-row gap-4 items-center mt-2">
              <img
                src="https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?auto=format&fit=crop&w=600&q=80"
                alt="Ancient Rock-cut Cave Buddha"
                className="w-full sm:w-40 h-28 rounded-xl object-cover border border-gold/40 flex-shrink-0 shadow-sm"
              />
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
                It is believed that the Ajanta and Ellora Caves were built with the blessings of Lord Buddha and other deities. According to legends, these caves were created by divine beings and inspired by the spiritual energy of the land, making this region a sacred place for centuries.
              </p>
            </div>

            {/* Botanical Lotus Line Art in corner (from reference image) */}
            <div className="absolute -bottom-2 -right-2 pointer-events-none opacity-30">
              <LotusCornerFlourish className="w-24 h-24 text-gold" />
            </div>
          </div>
        </div>

      </section>

      {/* 2. SANSKRITI FOUR PILLARS: DISCOVER · EXPERIENCE · PROTECT · LEARN */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          
          <div 
            onClick={() => setCurrentPage('explore')}
            className="p-4 rounded-2xl bg-card border border-gold/50 shadow-sm hover:shadow-md hover:border-gold cursor-pointer transition-all flex flex-col items-center text-center group"
          >
            <div className="w-10 h-10 rounded-full bg-olive/15 text-olive flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-text-dark">1. Discover</h4>
            <p className="text-[11px] text-text-secondary mt-1">
              Monuments, rock-cut caves, interactive maps & curated trails.
            </p>
          </div>

          <div 
            onClick={() => setCurrentPage('living-heritage')}
            className="p-4 rounded-2xl bg-card border border-gold/50 shadow-sm hover:shadow-md hover:border-gold cursor-pointer transition-all flex flex-col items-center text-center group"
          >
            <div className="w-10 h-10 rounded-full bg-gold/20 text-gold-dark flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-text-dark">2. Experience</h4>
            <p className="text-[11px] text-text-secondary mt-1">
              Meet verified local guides, Himroo weavers & folk performers.
            </p>
          </div>

          <div 
            onClick={() => setCurrentPage('heritage-watch')}
            className="p-4 rounded-2xl bg-card border border-gold/50 shadow-sm hover:shadow-md hover:border-gold cursor-pointer transition-all flex flex-col items-center text-center group"
          >
            <div className="w-10 h-10 rounded-full bg-terracotta/15 text-terracotta flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-text-dark">3. Protect</h4>
            <p className="text-[11px] text-text-secondary mt-1">
              Report visible damage, litter or vandalism in under 60 seconds.
            </p>
          </div>

          <div 
            onClick={() => setCurrentPage('school-mode')}
            className="p-4 rounded-2xl bg-card border border-gold/50 shadow-sm hover:shadow-md hover:border-gold cursor-pointer transition-all flex flex-col items-center text-center group"
          >
            <div className="w-10 h-10 rounded-full bg-olive/15 text-olive flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Volume2 className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-lg text-text-dark">4. Learn</h4>
            <p className="text-[11px] text-text-secondary mt-1">
              Multilingual audio stories, school quests & accessibility options.
            </p>
          </div>

        </div>
      </section>

      {/* 3. FEATURED HERITAGE DESTINATIONS */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-gold/40 pb-3">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-olive block mb-1">
              Living Monuments & Sacred Sanctuaries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark">
              Explore Chhatrapati Sambhajinagar
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setCurrentPage('explore')}
            className="text-xs font-semibold text-olive hover:underline flex items-center gap-1 group self-start sm:self-auto"
          >
            <span>View All 12 Destinations</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPlaces.map(place => (
            <DestinationCard key={place.id} destination={place} showFlourish={true} />
          ))}
        </div>
      </section>

      {/* 4. SPECIALITY OF THE DAY SPOTLIGHT */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-card border border-gold p-6 sm:p-8 shadow-heritage relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron/15 text-saffron-dark text-xs font-bold uppercase tracking-wider border border-saffron/30">
              <Sparkles className="w-3.5 h-3.5 text-saffron" />
              <span>Speciality of the Day</span>
            </span>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark">
              Karnapura Mela & Sacred Heritage
            </h3>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans">
              Experience the 400-year-old rural fair of Karnapura Devi. From live Gondhal folk performances to traditional brass cookware artisans and hot sweet jalebi stalls, discover why this gathering unites the city every autumn.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setCurrentPage('speciality')}
                className="px-5 py-2.5 rounded-full bg-olive text-white text-xs font-semibold hover:bg-olive-hover transition-colors shadow-sm flex items-center gap-1.5"
              >
                <span>Read Full Speciality</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => setIsItineraryOpen(true)}
                className="px-5 py-2.5 rounded-full bg-white text-text-dark border border-gold/60 text-xs font-semibold hover:border-gold shadow-sm"
              >
                Add to My Day
              </button>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 pointer-events-none opacity-25 hidden sm:block">
            <LotusCornerFlourish className="w-48 h-48 text-gold" />
          </div>
        </div>
      </section>

      {/* 5. STORIES, LEGENDS & LIVING HERITAGE */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-gold/40 pb-3">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-olive block mb-1">
              Illustrated Heritage Journal
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark">
              Stories, Legends & Living Heritage
            </h2>
            <p className="text-xs text-text-secondary mt-1">
              Distinguishing verifiable historical records from beloved oral folk traditions.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setCurrentPage('stories')}
            className="text-xs font-semibold text-olive hover:underline flex items-center gap-1 group self-start sm:self-auto"
          >
            <span>Read All Stories</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredStories.map(story => (
            <div
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className="rounded-2xl bg-card border border-gold/50 shadow-heritage hover:shadow-heritage-hover hover:border-gold cursor-pointer transition-all overflow-hidden flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <ImageWithFallback
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full backdrop-blur-md shadow-sm border ${
                    story.type === 'Historical Record'
                      ? 'bg-olive text-white border-olive'
                      : 'bg-card text-terracotta border-gold'
                  }`}>
                    {story.type}
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <span className="text-[10px] text-text-muted uppercase tracking-wider block">
                    {story.category} · {story.readingTime}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-text-dark leading-snug group-hover:text-olive transition-colors mt-1">
                    {story.title}
                  </h3>
                  <p className="text-xs text-text-secondary line-clamp-2 mt-1 font-sans">
                    {story.subtitle}
                  </p>
                </div>

                <div className="pt-2 border-t border-gold/25 flex items-center justify-between text-xs text-olive font-semibold">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. HERITAGE TRAILS (Requirement #15) */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-6">
        <div className="border-b border-gold/40 pb-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-olive block mb-1">
            Curated Routes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark">
            Heritage Trails
          </h2>
          <p className="text-xs text-text-secondary mt-1">
            Carefully sequenced itineraries connecting monuments, gardens, and cultural experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRAILS_DATA.map(trail => (
            <div
              key={trail.id}
              className="rounded-2xl bg-card border border-gold/50 shadow-heritage overflow-hidden flex flex-col justify-between group"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <ImageWithFallback
                  src={trail.image}
                  alt={trail.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-3 right-3 text-white">
                  <span className="text-[10px] font-semibold bg-olive/85 px-2 py-0.5 rounded text-white inline-block mb-1">
                    {trail.stopsCount} Stops · {trail.duration}
                  </span>
                  <h3 className="font-serif font-bold text-xl drop-shadow-sm">{trail.title}</h3>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs text-text-secondary leading-relaxed font-sans">
                  {trail.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-gold/25 text-xs text-text-dark">
                  <div className="font-semibold text-text-muted text-[11px] uppercase tracking-wider">
                    Key Highlights:
                  </div>
                  {trail.highlights.slice(0, 2).map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-text-secondary">
                      <span className="text-olive font-bold">→</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-gold/25 flex items-center justify-between">
                  <span className="text-[11px] text-text-muted">Start: {trail.recommendedStartTime}</span>
                  <button
                    type="button"
                    onClick={() => setCurrentPage('explore')}
                    className="px-3.5 py-1.5 rounded-full bg-olive text-white text-xs font-semibold hover:bg-olive-hover transition-colors"
                  >
                    View on Map
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. MORE THAN DISCOVERY (Requirement #28) */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#EFE3CA] border border-gold shadow-heritage space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-olive block">
              Sanskriti 2.0 Ecosystem
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark">
              More Than Discovery
            </h2>
            <p className="font-serif italic text-text-secondary text-base">
              “Visit it. Learn it. Look after it.”
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Card 1: Heritage Watch */}
            <div className="p-5 rounded-2xl bg-card border border-gold/50 flex flex-col justify-between space-y-3">
              <div>
                <ShieldAlert className="w-7 h-7 text-terracotta mb-2" />
                <h4 className="font-serif font-bold text-xl text-text-dark">Heritage Watch</h4>
                <p className="text-xs text-text-secondary mt-1">
                  “Help protect the places you visit.” Report structural damage, litter, or vandalism.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCurrentPage('heritage-watch')}
                className="w-full py-2 rounded-xl bg-terracotta text-white text-xs font-semibold hover:bg-terracotta-dark transition-colors shadow-sm"
              >
                Report an Issue
              </button>
            </div>

            {/* Card 2: Living Heritage */}
            <div className="p-5 rounded-2xl bg-card border border-gold/50 flex flex-col justify-between space-y-3">
              <div>
                <Users className="w-7 h-7 text-olive mb-2" />
                <h4 className="font-serif font-bold text-xl text-text-dark">Living Heritage</h4>
                <p className="text-xs text-text-secondary mt-1">
                  “Meet the people who keep traditions alive.” Verified guides, Himroo weavers & performers.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCurrentPage('living-heritage')}
                className="w-full py-2 rounded-xl bg-olive text-white text-xs font-semibold hover:bg-olive-hover transition-colors shadow-sm"
              >
                Meet Local Creators
              </button>
            </div>

            {/* Card 3: Sanskriti Audio */}
            <div className="p-5 rounded-2xl bg-card border border-gold/50 flex flex-col justify-between space-y-3">
              <div>
                <Volume2 className="w-7 h-7 text-gold-dark mb-2" />
                <h4 className="font-serif font-bold text-xl text-text-dark">Sanskriti Audio</h4>
                <p className="text-xs text-text-secondary mt-1">
                  “Listen to history in your language.” Narrated in English, Marathi, and Hindi.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCurrentPage('stories')}
                className="w-full py-2 rounded-xl bg-card border border-gold/60 text-text-dark text-xs font-semibold hover:bg-white transition-colors"
              >
                Listen Now
              </button>
            </div>

            {/* Card 4: Offline Explorer */}
            <div className="p-5 rounded-2xl bg-card border border-gold/50 flex flex-col justify-between space-y-3">
              <div>
                <Download className="w-7 h-7 text-olive mb-2" />
                <h4 className="font-serif font-bold text-xl text-text-dark">Offline Explorer</h4>
                <p className="text-xs text-text-secondary mt-1">
                  “Download heritage before your journey.” Full packs for deep canyon no-network zones.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCurrentPage('offline-packs')}
                className="w-full py-2 rounded-xl bg-card border border-gold/60 text-text-dark text-xs font-semibold hover:bg-white transition-colors"
              >
                Explore Offline Packs
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 8. EXPERIENCE LOCAL CULTURE & CUISINE */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Culture */}
        <div className="space-y-4">
          <div className="border-b border-gold/40 pb-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-olive block">
              Living Traditions
            </span>
            <h2 className="font-serif text-3xl font-bold text-text-dark">
              Experience Local Culture
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LOCAL_CULTURE_ITEMS.map(item => (
              <div 
                key={item.id}
                className="rounded-2xl bg-card border border-gold/40 p-4 space-y-2 hover:border-gold shadow-sm transition-all"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-32 rounded-xl object-cover border border-gold/30 mb-2"
                />
                <span className="text-[10px] uppercase font-semibold text-olive tracking-wider block">
                  {item.locationNote}
                </span>
                <h4 className="font-serif font-bold text-lg text-text-dark leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-text-secondary line-clamp-3 font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cuisine */}
        <div className="space-y-4">
          <div className="border-b border-gold/40 pb-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-olive block">
              Culinary Heritage
            </span>
            <h2 className="font-serif text-3xl font-bold text-text-dark">
              Taste the Region
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REGIONAL_CUISINE_ITEMS.map(item => (
              <div 
                key={item.id}
                className="rounded-2xl bg-card border border-gold/40 p-4 space-y-2 hover:border-gold shadow-sm transition-all"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-32 rounded-xl object-cover border border-gold/30 mb-2"
                />
                <span className="text-[10px] uppercase font-semibold text-terracotta tracking-wider block">
                  {item.locationNote}
                </span>
                <h4 className="font-serif font-bold text-lg text-text-dark leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-text-secondary line-clamp-3 font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 9. SOCIAL IMPACT & PROTOTYPE METRICS (Requirement #29 & #30) */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-card border border-gold p-6 sm:p-8 shadow-heritage space-y-8">
          
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-olive block">
              Community Impact Model
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-dark">
              When Heritage Benefits Everyone
            </h2>
            <p className="text-xs text-text-secondary leading-relaxed font-sans">
              Sanskriti is designed to solve real challenges: site neglect, artisan invisibility, and digital exclusion.
            </p>
          </div>

          {/* Three Simple Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-4 rounded-xl bg-white/70 border border-gold/30 space-y-2">
              <div className="w-9 h-9 rounded-full bg-olive/15 text-olive flex items-center justify-center font-bold">
                🛡️
              </div>
              <h4 className="font-serif font-bold text-lg text-text-dark">Better Protected Sites</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Visitors provide early warning of litter, structural cracks, and vandalism directly to custodian channels in under 60 seconds.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/70 border border-gold/30 space-y-2">
              <div className="w-9 h-9 rounded-full bg-gold/20 text-gold-dark flex items-center justify-center font-bold">
                🤝
              </div>
              <h4 className="font-serif font-bold text-lg text-text-dark">Stronger Local Livelihoods</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Licensed guides, 4th-generation Himroo weavers, and folk artists receive direct visitor visibility without corporate agency middlemen.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/70 border border-gold/30 space-y-2">
              <div className="w-9 h-9 rounded-full bg-terracotta/15 text-terracotta flex items-center justify-center font-bold">
                🌐
              </div>
              <h4 className="font-serif font-bold text-lg text-text-dark">Inclusive Heritage</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Regional Indian languages (Marathi, Hindi), audio voice narration, high-contrast typography, and offline packs ensure no visitor is excluded.
              </p>
            </div>
          </div>

          {/* Prototype Impact Dashboard (Requirement #30) */}
          <div className="pt-6 border-t border-gold/30">
            <div className="flex items-center justify-between mb-4">
              <span className="font-serif font-bold text-lg text-text-dark">
                Prototype Demonstration Metrics
              </span>
              <span className="text-[10px] uppercase font-semibold text-text-muted bg-white px-2 py-0.5 rounded border border-gold/40">
                Demo Metrics
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
              <div className="p-3 rounded-xl bg-white/80 border border-gold/30">
                <span className="font-serif text-2xl font-bold text-olive block">12</span>
                <span className="text-[10px] text-text-secondary">Issues Reported</span>
              </div>
              <div className="p-3 rounded-xl bg-white/80 border border-gold/30">
                <span className="font-serif text-2xl font-bold text-olive block">7</span>
                <span className="text-[10px] text-text-secondary">Under Review</span>
              </div>
              <div className="p-3 rounded-xl bg-white/80 border border-gold/30">
                <span className="font-serif text-2xl font-bold text-olive block">4</span>
                <span className="text-[10px] text-text-secondary">Issues Resolved</span>
              </div>
              <div className="p-3 rounded-xl bg-white/80 border border-gold/30">
                <span className="font-serif text-2xl font-bold text-text-dark block">4</span>
                <span className="text-[10px] text-text-secondary">Verified Guides</span>
              </div>
              <div className="p-3 rounded-xl bg-white/80 border border-gold/30">
                <span className="font-serif text-2xl font-bold text-text-dark block">3</span>
                <span className="text-[10px] text-text-secondary">Artisan Guilds</span>
              </div>
              <div className="p-3 rounded-xl bg-white/80 border border-gold/30">
                <span className="font-serif text-2xl font-bold text-text-dark block">3</span>
                <span className="text-[10px] text-text-secondary">Languages Active</span>
              </div>
              <div className="p-3 rounded-xl bg-white/80 border border-gold/30">
                <span className="font-serif text-2xl font-bold text-text-dark block">2</span>
                <span className="text-[10px] text-text-secondary">Offline Packs</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 10. PLAN YOUR DAY CTA SECTION */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-8 rounded-3xl bg-olive text-white shadow-heritage flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 max-w-xl z-10 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-gold-light font-semibold block">
              Curate Your Journey
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold">
              Ready to explore Chhatrapati Sambhajinagar?
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
              Create a personalized daily itinerary saved locally on your device without registering or creating an account.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 z-10">
            <button
              type="button"
              onClick={() => setIsItineraryOpen(true)}
              className="px-6 py-3 rounded-full bg-white text-olive font-semibold text-xs sm:text-sm hover:bg-card transition-colors shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Open My Sanskriti Day</span>
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage('explore')}
              className="px-6 py-3 rounded-full bg-olive-hover text-white border border-white/30 font-semibold text-xs sm:text-sm hover:bg-olive transition-colors"
            >
              <span>Explore Places</span>
            </button>
          </div>

          <div className="absolute -bottom-8 -right-8 opacity-10 pointer-events-none">
            <LotusEmblem className="w-64 h-64 text-white" />
          </div>
        </div>
      </section>

    </div>
  );
};
