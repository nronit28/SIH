import React from 'react';
import { Info, Compass, ShieldAlert, Users, Volume2, Award, ArrowRight, Heart } from 'lucide-react';
import { LotusEmblem, DiamondDivider, MountainSilhouettes } from '../components/common/HeritageIcons';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-16 animate-in fade-in duration-200">
      
      {/* 1. COMPACT PAGE HEADER */}
      <section className="pt-4 sm:pt-6 max-w-[1200px] mx-auto px-4 sm:px-6 text-center space-y-3">
        <LotusEmblem className="w-10 h-10 text-gold-dark mx-auto" />
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-dark">
          About Sanskriti
        </h1>
        <DiamondDivider text="Discover · Experience · Protect · Learn" />
        <p className="font-serif italic text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          “Sanskriti helps travellers and local residents discover the heritage, stories, traditions and cultural experiences that surround them — not just monuments on a map.”
        </p>
      </section>

      {/* 2. THE PHILOSOPHY */}
      <section className="max-w-[900px] mx-auto px-4 sm:px-6 space-y-6">
        <div className="p-6 sm:p-8 rounded-3xl bg-card border border-gold/60 shadow-heritage space-y-4">
          <h2 className="font-serif font-bold text-2xl text-text-dark">
            Turning Tourists into Custodians & Heritage into a Livelihood
          </h2>
          <p className="text-xs sm:text-sm text-text-dark font-sans leading-relaxed">
            Most travel applications treat heritage destinations as passive photo backdrops or static GPS pins. They provide little visibility into the living human ecosystem that keeps traditions alive — the master handloom weavers, the oral folk balladeers, the licensed local guides, and the conservation challenges facing ancient rock monuments.
          </p>
          <p className="text-xs sm:text-sm text-text-dark font-sans leading-relaxed">
            <strong>Sanskriti</strong> bridges this divide. By coupling immersive storytelling with direct visitor-powered preservation tools (Heritage Watch), zero-network offline packs, and verified artisan profiles, Sanskriti ensures that the benefits of cultural tourism flow directly back to heritage sites and local communities.
          </p>
          <div className="p-3.5 rounded-xl bg-gold/15 border border-gold/40 text-xs text-text-dark font-medium">
            📍 <strong>Initial Prototype Focus:</strong> Chhatrapati Sambhajinagar, Maharashtra, India — home to the UNESCO World Heritage rock-cut wonders of Ellora and Ajanta, the Mughal elegance of Bibi Ka Maqbara, the medieval military genius of Daulatabad Fort, and 400-year-old weaving guilds.
          </div>
        </div>
      </section>

      {/* 3. PHASED ROADMAP (Requirement #34) */}
      <section className="max-w-[1000px] mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-olive block">
            Future Vision
          </span>
          <h2 className="font-serif text-3xl font-bold text-text-dark">
            Phased Roadmap
          </h2>
          <p className="text-xs text-text-secondary">
            Structured for expansion across cultural districts and regional heritage corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          
          {/* Phase 1: Prototype */}
          <div className="p-6 rounded-3xl bg-card border-2 border-olive shadow-sm space-y-3 relative">
            <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-olive text-white">
              Phase 1 · Current Prototype
            </span>
            <h3 className="font-serif font-bold text-xl text-text-dark">Proof of Concept</h3>
            <ul className="space-y-2 text-xs text-text-secondary font-sans">
              <li className="flex items-start gap-2">
                <span className="text-olive font-bold">✓</span>
                <span>Heritage Watch 60-second issue reporting & transparent dashboard</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-olive font-bold">✓</span>
                <span>Ellora & Ajanta offline heritage packs for zero-network ravines</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-olive font-bold">✓</span>
                <span>Multilingual audio voice narration in English, Hindi & Marathi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-olive font-bold">✓</span>
                <span>Interactive story quests & school visit curriculum kits</span>
              </li>
            </ul>
          </div>

          {/* Phase 2: Pilot */}
          <div className="p-6 rounded-3xl bg-card border border-gold/60 shadow-sm space-y-3">
            <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-gold/25 text-text-dark border border-gold/50">
              Phase 2 · Pilot
            </span>
            <h3 className="font-serif font-bold text-xl text-text-dark">Field Partnerships</h3>
            <ul className="space-y-2 text-xs text-text-secondary font-sans">
              <li className="flex items-start gap-2">
                <span className="text-gold-dark font-bold">○</span>
                <span>Onboard 50+ certified ASI & regional tour guides</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-dark font-bold">○</span>
                <span>Direct artisan workshop visits with Himroo & Paithani weavers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-dark font-bold">○</span>
                <span>Connect report webhook pipeline with local heritage custodians</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-dark font-bold">○</span>
                <span>Launch community verified event calendar submissions</span>
              </li>
            </ul>
          </div>

          {/* Phase 3: Scale */}
          <div className="p-6 rounded-3xl bg-card border border-gold/40 shadow-sm space-y-3 opacity-90">
            <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-white text-text-muted border border-gold/30">
              Phase 3 · Scale
            </span>
            <h3 className="font-serif font-bold text-xl text-text-dark">National Expansion</h3>
            <ul className="space-y-2 text-xs text-text-secondary font-sans">
              <li className="flex items-start gap-2">
                <span className="text-text-muted">○</span>
                <span>Expand to Hampi, Khajuraho, Varanasi, and Konark districts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-muted">○</span>
                <span>Personalised AI heritage storytelling based on interest archetypes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-muted">○</span>
                <span>Official integration with Incredible India & State Tourism boards</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-muted">○</span>
                <span>Smart crowd density balancing for fragile UNESCO sites</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 4. ETHICAL ARCHITECTURE & CREDITS */}
      <section className="max-w-[900px] mx-auto px-4 sm:px-6">
        <div className="p-5 rounded-2xl bg-white/70 border border-gold/40 text-xs text-text-secondary space-y-2">
          <strong className="text-text-dark text-sm block font-serif">Transparency & Verification Standards:</strong>
          <p>
            Sanskriti strictly adheres to ethical heritage documentation. Fictional sample metrics and profiles are transparently marked as <em>Demo Profiles</em> or <em>Prototype Metrics</em>. All historical narratives rely upon established epigraphical and archaeological records from the Archaeological Survey of India (ASI) and academic Deccan research.
          </p>
        </div>
      </section>

    </div>
  );
};
