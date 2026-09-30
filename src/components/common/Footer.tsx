import React from 'react';
import { MapPin, Menu as MenuIcon, Heart, Compass, ShieldAlert, BookOpen } from 'lucide-react';
import { useSanskriti, PageId } from '../../context/SanskritiContext';
import { LotusEmblem, MountainSilhouettes, DiamondDivider } from './HeritageIcons';

export const Footer: React.FC = () => {
  const { setCurrentPage } = useSanskriti();

  const handleNav = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#EEDDC0] border-t border-gold/50 relative overflow-hidden mt-16 pt-10 pb-6">
      
      {/* Mountain Silhouettes at top of footer (from reference image) */}
      <div className="w-full opacity-60 mb-6">
        <MountainSilhouettes className="w-full h-12 md:h-16 text-[#543B25]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gold/40">
          
          {/* Col 1: Sanskriti Identity */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <LotusEmblem className="w-6 h-6 text-text-dark" />
              <span className="font-serif text-2xl font-bold text-text-dark tracking-wide">Sanskriti</span>
            </div>
            <p className="font-serif italic text-text-secondary text-base">
              “Discover India through its stories.”
            </p>
            <p className="text-xs text-text-secondary leading-relaxed">
              A digital cultural companion connecting travellers and residents to the living heritage, sacred monuments, oral legends, and traditional livelihoods of the Deccan.
            </p>
            <div className="inline-block px-2.5 py-1 rounded bg-card/80 border border-gold/50 text-[11px] font-medium text-text-dark">
              Prototype: Chhatrapati Sambhajinagar, Maharashtra
            </div>
          </div>

          {/* Col 2: Discovery Links */}
          <div className="space-y-2.5">
            <h4 className="font-serif font-bold text-sm text-text-dark uppercase tracking-wider">
              Heritage Discovery
            </h4>
            <ul className="space-y-1.5 text-xs text-text-secondary">
              <li>
                <button type="button" onClick={() => handleNav('home')} className="hover:text-olive transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('explore')} className="hover:text-olive transition-colors">
                  Explore Monuments & Map
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('stories')} className="hover:text-olive transition-colors">
                  Heritage Stories & Legends
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('speciality')} className="hover:text-olive transition-colors">
                  Speciality of the Day
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Sanskriti 2.0 Community & Protection */}
          <div className="space-y-2.5">
            <h4 className="font-serif font-bold text-sm text-text-dark uppercase tracking-wider">
              Community & Custodianship
            </h4>
            <ul className="space-y-1.5 text-xs text-text-secondary">
              <li>
                <button type="button" onClick={() => handleNav('living-heritage')} className="hover:text-olive transition-colors">
                  Living Heritage (Guides & Artisans)
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('heritage-watch')} className="hover:text-olive transition-colors">
                  Heritage Watch (Report Issues)
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('offline-packs')} className="hover:text-olive transition-colors">
                  Offline Heritage Packs
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('school-mode')} className="hover:text-olive transition-colors">
                  Kids & School Quests
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Prototype Location & Motto (matching reference image) */}
          <div className="space-y-3 bg-card/60 p-4 rounded-xl border border-gold/40">
            <div className="flex items-center gap-1.5 text-text-dark">
              <MapPin className="w-4 h-4 text-terracotta flex-shrink-0" />
              <span className="font-serif font-semibold text-sm">Chhatrapati Sambhajinagar</span>
            </div>
            <p className="text-[11px] text-text-secondary leading-normal">
              Home to UNESCO World Heritage Sites Ellora and Ajanta, Bibi Ka Maqbara, Daulatabad Fort, and 400-year-old weaving guilds.
            </p>
            <div className="pt-2 border-t border-gold/30">
              <div className="font-serif italic text-text-dark text-xs space-y-0.5">
                <div>One city</div>
                <div>Many stories</div>
                <div>Infinite heritage</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Reference Alignment */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-text-secondary gap-3">
          <div className="flex items-center gap-2">
            <span>© 2026 Sanskriti. Built for cultural discovery & heritage preservation.</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <button type="button" onClick={() => handleNav('about')} className="hover:underline">
              About Sanskriti & Roadmap
            </button>
            <span>·</span>
            <button type="button" onClick={() => handleNav('heritage-watch')} className="hover:underline">
              Custodian Routing Preview
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
