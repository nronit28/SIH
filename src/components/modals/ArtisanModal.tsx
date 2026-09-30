import React, { useState } from 'react';
import { X, Check, MapPin, Sparkles, Clock, Calendar, Send } from 'lucide-react';
import { useSanskriti } from '../../context/SanskritiContext';
import { DiamondDivider } from '../common/HeritageIcons';

export const ArtisanModal: React.FC = () => {
  const { selectedArtisan, setSelectedArtisan } = useSanskriti();
  const [inquirySent, setInquirySent] = useState(false);

  if (!selectedArtisan) return null;

  const artisan = selectedArtisan;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
      <div 
        className="w-full max-w-2xl bg-page border border-gold rounded-2xl shadow-2xl overflow-hidden my-4 max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Bar */}
        <div className="p-4 px-6 bg-card border-b border-gold/40 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-semibold uppercase text-olive tracking-wider block">
              Living Heritage · Master Artisan
            </span>
            <h3 className="font-serif font-bold text-xl text-text-dark">{artisan.name}</h3>
          </div>
          <button
            type="button"
            onClick={() => setSelectedArtisan(null)}
            className="p-1.5 rounded-lg text-text-dark hover:bg-gold/20"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          
          <div className="flex flex-col sm:flex-row gap-4 items-center bg-card p-4 rounded-2xl border border-gold/40">
            <img 
              src={artisan.photo} 
              alt={artisan.name} 
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover border-2 border-gold/50 flex-shrink-0"
            />
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-olive/15 text-olive inline-block">
                {artisan.craftType}
              </span>
              <h4 className="font-serif font-bold text-xl text-text-dark">{artisan.workshopName}</h4>
              <p className="text-xs text-text-secondary flex items-center justify-center sm:justify-start gap-1">
                <MapPin className="w-3.5 h-3.5 text-terracotta" />
                <span>{artisan.location}</span>
              </p>
              <div className="text-[11px] text-text-muted pt-1">
                Workshop hours: {artisan.workshopAvailability}
              </div>
            </div>
          </div>

          <DiamondDivider text="Craft Storytelling" />

          {/* Four Pillars */}
          <div className="space-y-4">
            {/* 1. The Person */}
            <div className="p-4 rounded-xl bg-card border-l-4 border-olive space-y-1">
              <h5 className="font-serif font-bold text-base text-text-dark">1. The Person</h5>
              <p className="text-xs text-text-secondary leading-relaxed font-sans">{artisan.thePerson}</p>
            </div>

            {/* 2. The Craft */}
            <div className="p-4 rounded-xl bg-card border-l-4 border-gold space-y-1">
              <h5 className="font-serif font-bold text-base text-text-dark">2. The Craft</h5>
              <p className="text-xs text-text-secondary leading-relaxed font-sans">{artisan.theCraft}</p>
            </div>

            {/* 3. The Heritage */}
            <div className="p-4 rounded-xl bg-card border-l-4 border-terracotta space-y-1">
              <h5 className="font-serif font-bold text-base text-text-dark">3. The Heritage</h5>
              <p className="text-xs text-text-secondary leading-relaxed font-sans">{artisan.theHeritage}</p>
            </div>

            {/* 4. Experience It */}
            <div className="p-4 rounded-xl bg-card border-l-4 border-olive space-y-1">
              <h5 className="font-serif font-bold text-base text-text-dark">4. Experience It</h5>
              <p className="text-xs text-text-secondary leading-relaxed font-sans">{artisan.howToExperience}</p>
            </div>
          </div>

          {/* Book Demonstration Interaction */}
          <div className="p-4 rounded-xl bg-white/70 border border-gold/40 text-center space-y-3">
            {inquirySent ? (
              <div className="p-3 bg-olive/10 rounded-xl text-xs text-olive font-semibold flex items-center justify-center gap-2">
                <Check className="w-4 h-4" />
                <span>Demonstration inquiry registered! The workshop coordinator will contact you.</span>
              </div>
            ) : (
              <>
                <p className="text-xs text-text-secondary">
                  Want to see live handloom weaving or try shaping metal in person?
                </p>
                <button
                  type="button"
                  onClick={() => setInquirySent(true)}
                  className="px-5 py-2 rounded-full bg-olive text-white text-xs font-semibold hover:bg-olive-hover shadow-sm"
                >
                  Book a Live Workshop Demonstration
                </button>
              </>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-card border-t border-gold/40 flex justify-end">
          <button
            type="button"
            onClick={() => setSelectedArtisan(null)}
            className="px-5 py-1.5 rounded-full bg-card border border-gold/60 text-xs text-text-dark hover:bg-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
