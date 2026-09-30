import React, { useState } from 'react';
import { 
  Users, 
  Palette, 
  Sparkles, 
  MapPin, 
  Clock, 
  Star, 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2,
  ExternalLink 
} from 'lucide-react';
import { useSanskriti } from '../context/SanskritiContext';
import { LOCAL_GUIDES_DATA, ARTISANS_DATA, CULTURAL_EXPERIENCES_DATA } from '../data/livingHeritage';
import { GuideProfile, ArtisanProfile, CulturalExperience } from '../types';
import { GuideInquiryModal } from '../components/modals/GuideInquiryModal';
import { ArtisanModal } from '../components/modals/ArtisanModal';
import { ImageWithFallback, DiamondDivider } from '../components/common/HeritageIcons';

export const LivingHeritagePage: React.FC = () => {
  const { setSelectedGuide, setSelectedArtisan } = useSanskriti();
  const [activeTab, setActiveTab] = useState<'guides' | 'artisans' | 'experiences'>('guides');

  return (
    <div className="space-y-10 pb-16 animate-in fade-in duration-200">
      
      {/* 1. COMPACT PAGE HEADER */}
      <section className="pt-4 sm:pt-6 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gold/40 pb-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-olive block mb-1">
              Community & Traditions
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-dark">
              Living Heritage
            </h1>
            <p className="font-serif italic text-text-secondary text-base sm:text-lg mt-0.5">
              “Heritage is not only monuments. It is also the people who keep traditions alive.”
            </p>
          </div>

          {/* Sub-Tabs: Guides, Artisans, Experiences */}
          <div className="flex rounded-full bg-card border border-gold/60 p-1">
            <button
              type="button"
              onClick={() => setActiveTab('guides')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'guides'
                  ? 'bg-olive text-white shadow-sm'
                  : 'text-text-dark hover:text-olive'
              }`}
            >
              Local Guides ({LOCAL_GUIDES_DATA.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('artisans')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'artisans'
                  ? 'bg-olive text-white shadow-sm'
                  : 'text-text-dark hover:text-olive'
              }`}
            >
              Artisans & Crafts ({ARTISANS_DATA.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('experiences')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'experiences'
                  ? 'bg-olive text-white shadow-sm'
                  : 'text-text-dark hover:text-olive'
              }`}
            >
              Experiences ({CULTURAL_EXPERIENCES_DATA.length})
            </button>
          </div>
        </div>

        {/* Prototype Transparency Notice */}
        <div className="mt-3 bg-white/60 p-2.5 rounded-xl border border-gold/30 text-xs text-text-secondary flex items-center justify-between">
          <span>🛡️ <strong>Direct Community Livelihoods:</strong> 100% of visitor inquiry connections are made directly with artisans and certified guides without platform commissions.</span>
          <span className="text-[10px] text-text-muted hidden md:inline">Demo Profiles</span>
        </div>
      </section>

      {/* 2. TAB 1: VERIFIED LOCAL GUIDES */}
      {activeTab === 'guides' && (
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LOCAL_GUIDES_DATA.map(guide => (
              <div
                key={guide.id}
                className="p-5 sm:p-6 rounded-3xl bg-card border border-gold/50 shadow-heritage flex flex-col justify-between space-y-4 hover:border-gold transition-all"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={guide.photo}
                        alt={guide.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gold/60 flex-shrink-0 shadow-sm"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif font-bold text-xl text-text-dark">{guide.name}</h3>
                          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-olive/15 text-olive border border-olive/30">
                            Verified Guide
                          </span>
                        </div>
                        <span className="font-serif italic text-text-secondary text-xs">{guide.marathiName}</span>
                        <div className="flex items-center gap-1.5 text-xs text-olive font-semibold mt-0.5">
                          <Star className="w-3.5 h-3.5 fill-olive text-olive" />
                          <span>{guide.rating}</span>
                          <span className="text-text-muted">({guide.reviewCount} reviews)</span>
                        </div>
                      </div>
                    </div>

                    <span className="text-[10px] text-text-muted bg-white/70 px-2 py-0.5 rounded border border-gold/30">
                      Demo Profile
                    </span>
                  </div>

                  {/* Languages & Expertise */}
                  <div className="mt-3.5 space-y-2">
                    <div className="flex flex-wrap gap-1.5">
                      {guide.languages.map((lang, i) => (
                        <span key={i} className="text-[11px] px-2.5 py-0.5 rounded-full bg-white text-text-dark border border-gold/30">
                          {lang}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-text-secondary leading-relaxed font-sans line-clamp-3">
                      {guide.story}
                    </p>

                    <div className="pt-2 text-xs text-text-dark">
                      <strong className="text-olive">Areas Covered:</strong> {guide.areasCovered.join(' · ')}
                    </div>
                  </div>
                </div>

                {/* Footer Toolbar */}
                <div className="pt-3 border-t border-gold/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-text-muted block">Indicative Rate:</span>
                    <strong className="text-xs text-text-dark">{guide.indicativeRate}</strong>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedGuide(guide)}
                    className="px-4 py-2 rounded-full bg-olive text-white text-xs font-semibold hover:bg-olive-hover transition-colors shadow-sm"
                  >
                    Request a Walk
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. TAB 2: MEET LOCAL ARTISANS */}
      {activeTab === 'artisans' && (
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            {ARTISANS_DATA.map(artisan => (
              <div
                key={artisan.id}
                className="p-6 sm:p-8 rounded-3xl bg-card border border-gold/50 shadow-heritage grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              >
                <div className="lg:col-span-4 space-y-3 text-center sm:text-left">
                  <img
                    src={artisan.photo}
                    alt={artisan.name}
                    className="w-full h-48 sm:h-56 rounded-2xl object-cover border-2 border-gold/40 shadow-sm"
                  />
                  <div>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-olive/15 text-olive">
                      {artisan.craftType}
                    </span>
                    <h3 className="font-serif font-bold text-2xl text-text-dark mt-1">{artisan.name}</h3>
                    <p className="text-xs text-text-secondary flex items-center justify-center sm:justify-start gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-terracotta" />
                      <span>{artisan.location}</span>
                    </p>
                  </div>
                </div>

                {/* Story Pillars preview */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="p-4 rounded-xl bg-white/70 border border-gold/30 text-xs text-text-dark space-y-1">
                    <strong className="font-serif text-sm block text-olive">The Person & Heritage:</strong>
                    <p className="text-text-secondary leading-relaxed font-sans">{artisan.thePerson}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/70 border border-gold/30 text-xs text-text-dark space-y-1">
                    <strong className="font-serif text-sm block text-gold-dark">The Craft Mastery:</strong>
                    <p className="text-text-secondary leading-relaxed font-sans">{artisan.theCraft}</p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <span className="text-xs text-text-muted">
                      Workshop: {artisan.workshopAvailability}
                    </span>

                    <button
                      type="button"
                      onClick={() => setSelectedArtisan(artisan)}
                      className="px-5 py-2 rounded-full bg-olive text-white text-xs font-semibold hover:bg-olive-hover transition-colors shadow-sm"
                    >
                      Read Full Story & Visit Workshop
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. TAB 3: CULTURAL EXPERIENCES */}
      {activeTab === 'experiences' && (
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CULTURAL_EXPERIENCES_DATA.map(exp => (
              <div
                key={exp.id}
                className="rounded-3xl bg-card border border-gold/50 shadow-heritage overflow-hidden flex flex-col justify-between group"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <ImageWithFallback
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-semibold uppercase px-2.5 py-0.5 rounded-full bg-card/90 text-text-dark border border-gold/50 backdrop-blur-sm">
                      {exp.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h4 className="font-serif font-bold text-xl text-text-dark group-hover:text-olive transition-colors">
                      {exp.title}
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed font-sans mt-1">
                      {exp.culturalContext}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-gold/20 text-xs text-text-dark">
                      <div><strong>Duration:</strong> {exp.duration}</div>
                      <div><strong>Location:</strong> {exp.location}</div>
                      <div><strong>Language:</strong> {exp.language}</div>
                      <div><strong>Approx Cost:</strong> {exp.approxCost}</div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gold/25 flex items-center justify-between">
                    <span className="text-[11px] text-text-muted">{exp.accessibilityInfo}</span>
                    <button
                      type="button"
                      onClick={() => alert(`Enquiry initiated for: ${exp.title}. Coordination details will appear via email.`)}
                      className="px-4 py-1.5 rounded-full bg-olive text-white text-xs font-semibold hover:bg-olive-hover"
                    >
                      Learn More & Join
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Guide Inquiry & Artisan Modals */}
      <GuideInquiryModal />
      <ArtisanModal />

    </div>
  );
};
