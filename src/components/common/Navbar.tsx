import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Compass, 
  BookOpen, 
  Sparkles, 
  Users, 
  ShieldAlert, 
  Info, 
  Search, 
  Calendar, 
  Menu, 
  X, 
  Sliders, 
  Download, 
  GraduationCap, 
  Volume2
} from 'lucide-react';
import { useSanskriti, PageId } from '../../context/SanskritiContext';
import { LotusEmblem, ChhatriIcon, DiamondDivider } from './HeritageIcons';

export const Navbar: React.FC = () => {
  const { 
    currentPage, 
    setCurrentPage, 
    setIsSearchOpen, 
    setIsItineraryOpen, 
    setIsA11yOpen,
    itinerary,
    audioMode,
    audioState,
    stopSpeech
  } = useSanskriti();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'explore', label: 'Explore', icon: Compass },
    { id: 'stories', label: 'Stories', icon: BookOpen },
    { id: 'speciality', label: 'Speciality of Day', icon: Sparkles },
    { id: 'living-heritage', label: 'Living Heritage', icon: Users },
    { id: 'heritage-watch', label: 'Heritage Watch', icon: ShieldAlert },
    { id: 'about', label: 'About', icon: Info },
  ];

  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  };

  return (
    <>
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 border-b border-gold/40 ${
          isScrolled 
            ? 'bg-[#F3E5CC]/95 backdrop-blur-md shadow-heritage py-2' 
            : 'bg-[#F3E5CC] py-3'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-2">
          
          {/* Left: Mobile hamburger or Desktop Logo */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-text-dark hover:bg-gold/20 focus:outline-none focus:ring-2 focus:ring-olive"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Brand Logo & Tagline */}
            <button 
              type="button"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 text-left group"
            >
              <LotusEmblem className="w-7 h-7 text-[#543B25] group-hover:scale-105 transition-transform" />
              <div>
                <span className="font-serif text-2xl md:text-3xl font-bold tracking-wide text-text-dark block leading-none">
                  Sanskriti
                </span>
                <span className="text-[10px] md:text-[11px] font-medium tracking-widest uppercase text-text-secondary block mt-0.5">
                  Sambhajinagar
                </span>
              </div>
            </button>
          </div>

          {/* Center: Desktop Navigation Pills (matching reference image) */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navLinks.map(link => {
              const Icon = link.icon;
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                    isActive
                      ? 'bg-olive text-white border-olive shadow-sm'
                      : 'bg-card text-text-dark border-gold/60 hover:border-gold hover:bg-white/80'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-text-secondary'}`} />
                  <span>{link.label}</span>
                </button>
              );
            })}

            {/* "More" dropdown for Offline Packs and School Mode */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                  currentPage === 'offline-packs' || currentPage === 'school-mode'
                    ? 'bg-olive text-white border-olive'
                    : 'bg-card text-text-dark border-gold/60 hover:bg-white/80'
                }`}
              >
                <span>More</span>
                <span className="text-[10px]">▼</span>
              </button>

              {moreDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-card border border-gold/50 rounded-xl shadow-heritage-lg py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    type="button"
                    onClick={() => handleNavClick('offline-packs')}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-text-dark hover:bg-gold/20 flex items-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5 text-olive" />
                    <span>Offline Packs</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavClick('school-mode')}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-text-dark hover:bg-gold/20 flex items-center gap-2"
                  >
                    <GraduationCap className="w-3.5 h-3.5 text-terracotta" />
                    <span>Kids & School Mode</span>
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Icons: Search, Accessibility, Itinerary */}
          <div className="flex items-center gap-2">
            {/* Search Button */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-full bg-card border border-gold/50 text-text-dark hover:bg-white/80 hover:border-gold transition-colors focus:ring-2 focus:ring-olive"
              title="Search monuments, stories & experiences"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-text-secondary" />
            </button>

            {/* Accessibility Button */}
            <button
              type="button"
              onClick={() => setIsA11yOpen(true)}
              className="p-2 rounded-full bg-card border border-gold/50 text-text-dark hover:bg-white/80 hover:border-gold transition-colors focus:ring-2 focus:ring-olive relative"
              title="Accessibility & Language Options"
              aria-label="Accessibility Options"
            >
              <Sliders className="w-4 h-4 text-text-secondary" />
            </button>

            {/* Plan My Day / Itinerary Button */}
            <button
              type="button"
              onClick={() => setIsItineraryOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-olive text-white text-xs font-medium hover:bg-olive-hover transition-colors shadow-sm relative focus:ring-2 focus:ring-olive/50"
              title="View your Sanskriti Day Itinerary"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">My Day</span>
              {itinerary.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-terracotta text-white text-[10px] font-bold flex items-center justify-center">
                  {itinerary.length}
                </span>
              )}
            </button>

            {/* Top Right Chhatri icon decoration on desktop */}
            <div className="hidden xl:block ml-1 opacity-80" title="Chhatrapati Sambhajinagar Heritage">
              <ChhatriIcon className="w-7 h-7 text-text-dark" />
            </div>
          </div>
        </div>

        {/* Audio Floating Notification Bar when active */}
        {audioState.isPlaying && (
          <div className="bg-olive text-white py-1.5 px-4 text-xs flex items-center justify-between shadow-inner">
            <div className="max-w-[1200px] mx-auto w-full flex items-center justify-between">
              <div className="flex items-center gap-2 truncate">
                <Volume2 className="w-4 h-4 animate-pulse flex-shrink-0" />
                <span className="truncate">Listening to: <strong className="font-semibold">{audioState.title}</strong></span>
              </div>
              <button 
                type="button" 
                onClick={stopSpeech}
                className="text-[11px] underline ml-3 flex-shrink-0 hover:text-gold-light"
              >
                Stop Audio
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="fixed top-0 left-0 bottom-0 w-4/5 max-w-sm bg-page border-r border-gold shadow-heritage-lg p-5 overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gold/40 mb-4">
              <div className="flex items-center gap-2">
                <LotusEmblem className="w-6 h-6 text-text-dark" />
                <span className="font-serif text-2xl font-bold text-text-dark">Sanskriti</span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-lg text-text-dark hover:bg-gold/20"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <DiamondDivider text="Heritage Discovery" className="mb-4" />

            <div className="flex flex-col gap-1.5">
              {navLinks.map(link => {
                const Icon = link.icon;
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-olive text-white shadow-sm'
                        : 'bg-card/70 text-text-dark border border-gold/40 hover:bg-white/80'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-text-secondary'}`} />
                    <span>{link.label}</span>
                  </button>
                );
              })}

              <div className="pt-2 pb-1 border-t border-gold/30 mt-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-text-secondary px-3">
                  Sanskriti 2.0 Features
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleNavClick('offline-packs')}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium ${
                  currentPage === 'offline-packs'
                    ? 'bg-olive text-white'
                    : 'bg-card/70 text-text-dark border border-gold/40'
                }`}
              >
                <Download className="w-4 h-4 text-olive" />
                <span>Offline Heritage Packs</span>
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('school-mode')}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium ${
                  currentPage === 'school-mode'
                    ? 'bg-olive text-white'
                    : 'bg-card/70 text-text-dark border border-gold/40'
                }`}
              >
                <GraduationCap className="w-4 h-4 text-terracotta" />
                <span>Kids & School Quests</span>
              </button>
            </div>

            <div className="mt-8 p-3 rounded-xl bg-card border border-gold/50 text-center">
              <span className="font-serif italic text-text-secondary text-xs block">
                “One city · Many stories · Infinite heritage”
              </span>
              <span className="text-[10px] text-text-muted mt-1 block">
                Chhatrapati Sambhajinagar, Maharashtra
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
