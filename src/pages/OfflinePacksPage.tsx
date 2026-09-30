import React, { useState } from 'react';
import { Download, Check, Trash2, Wifi, WifiOff, FileText, Phone, Volume2, ShieldCheck, MapPin } from 'lucide-react';
import { useSanskriti } from '../context/SanskritiContext';
import { OFFLINE_PACKS_DATA } from '../data/offlinePacks';
import { PLACES_DATA } from '../data/places';
import { STORIES_DATA } from '../data/stories';
import { OfflinePack } from '../types';

export const OfflinePacksPage: React.FC = () => {
  const { 
    downloadedPacks, 
    downloadPack, 
    removePack, 
    isPackDownloaded, 
    isOnline, 
    simulateOffline, 
    setSimulateOffline,
    setSelectedDestination 
  } = useSanskriti();

  const [activeReadingPack, setActiveReadingPack] = useState<OfflinePack | null>(null);

  const handleDownloadToggle = (packId: string) => {
    if (isPackDownloaded(packId)) {
      removePack(packId);
    } else {
      downloadPack(packId);
    }
  };

  return (
    <div className="space-y-10 pb-16 animate-in fade-in duration-200">
      
      {/* 1. COMPACT PAGE HEADER & OFFLINE SIMULATION TOOLBAR */}
      <section className="pt-4 sm:pt-6 max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Offline Warning Banner (Requirement #20) */}
        {!isOnline && (
          <div className="mb-6 p-4 rounded-2xl bg-amber-500/15 border border-amber-500/40 text-text-dark flex items-center justify-between gap-3 animate-in slide-in-from-top-2">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium">
              <WifiOff className="w-5 h-5 text-amber-700 flex-shrink-0" />
              <span>You’re offline — downloaded Sanskriti content is still available.</span>
            </div>
            <button
              type="button"
              onClick={() => setSimulateOffline(false)}
              className="text-xs font-bold text-amber-800 underline hover:text-amber-950 flex-shrink-0"
            >
              Resume Online
            </button>
          </div>
        )}

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gold/40 pb-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-olive block mb-1">
              Zero-Network Resilience
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-dark">
              Offline Heritage Packs
            </h1>
            <p className="font-serif italic text-text-secondary text-base sm:text-lg mt-0.5">
              “Take Sanskriti with you even when the network disappears.”
            </p>
          </div>

          {/* Hackathon Offline Simulation Toggle */}
          <div className="flex items-center gap-2 bg-card p-1.5 rounded-full border border-gold/60 shadow-sm">
            <button
              type="button"
              onClick={() => setSimulateOffline(!simulateOffline)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                simulateOffline
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-white text-text-dark border border-gold/40 hover:bg-gold/10'
              }`}
            >
              {simulateOffline ? <WifiOff className="w-3.5 h-3.5" /> : <Wifi className="w-3.5 h-3.5 text-olive" />}
              <span>{simulateOffline ? 'Offline Mode Active' : 'Simulate Offline Mode'}</span>
            </button>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-text-secondary mt-3 max-w-2xl font-sans leading-relaxed">
          Deep basalt ravines around Ellora and Ajanta have natural blind spots where mobile internet can fail. Sanskriti offline packs download crucial monument histories, high-contrast walking maps, emergency hotlines, and voice transcripts directly into your browser storage.
        </p>
      </section>

      {/* 2. PACKS CARDS LIST */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {OFFLINE_PACKS_DATA.map(pack => {
            const downloaded = isPackDownloaded(pack.id);
            const place = PLACES_DATA.find(p => p.id === pack.destinationId);

            return (
              <div
                key={pack.id}
                className="p-6 sm:p-8 rounded-3xl bg-card border border-gold/60 shadow-heritage flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-olive/15 text-olive">
                      {pack.sizeMb} MB · PWA Cached
                    </span>

                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                      downloaded
                        ? 'bg-olive text-white'
                        : 'bg-white text-text-muted border border-gold/40'
                    }`}>
                      {downloaded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Offline Ready</span>
                        </>
                      ) : (
                        <span>Not Downloaded</span>
                      )}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-2xl text-text-dark">{pack.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed font-sans mt-2">
                    {pack.summary}
                  </p>

                  {/* Highlights included */}
                  <div className="mt-4 pt-3 border-t border-gold/30 space-y-1.5">
                    <span className="text-[11px] font-bold text-olive uppercase tracking-wider block">
                      Included in this pack:
                    </span>
                    {pack.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-text-dark">
                        <span className="text-olive font-bold">✓</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Emergency contacts preview */}
                  <div className="mt-3 p-3 rounded-xl bg-white/70 border border-gold/30 text-xs text-text-dark space-y-1">
                    <span className="font-semibold text-terracotta flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5" />
                      <span>Direct Emergency Helplines:</span>
                    </span>
                    {pack.emergencyContacts.map((c, i) => (
                      <div key={i} className="flex justify-between text-[11px] text-text-secondary">
                        <span>{c.service}</span>
                        <strong className="text-text-dark">{c.number}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-gold/30 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => handleDownloadToggle(pack.id)}
                    className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2 shadow-sm ${
                      downloaded
                        ? 'bg-card border border-gold/60 text-text-dark hover:border-terracotta hover:text-terracotta'
                        : 'bg-olive text-white hover:bg-olive-hover'
                    }`}
                  >
                    {downloaded ? (
                      <>
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remove Download ({pack.sizeMb} MB)</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Offline Pack ({pack.sizeMb} MB)</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveReadingPack(pack)}
                    className="px-4 py-2 rounded-full bg-white text-olive border border-olive text-xs font-semibold hover:bg-olive hover:text-white transition-colors"
                  >
                    Open Offline Companion
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. DEDICATED OFFLINE PACK READER MODAL */}
      {activeReadingPack && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="w-full max-w-3xl bg-page border border-gold rounded-3xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6 animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-gold/40 pb-3">
              <div>
                <span className="text-[10px] uppercase font-bold text-olive bg-olive/15 px-2.5 py-0.5 rounded-full">
                  Offline Reader Mode · Zero Network
                </span>
                <h3 className="font-serif font-bold text-2xl text-text-dark mt-1">
                  {activeReadingPack.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveReadingPack(null)}
                className="p-1.5 rounded-lg text-text-dark hover:bg-gold/20"
              >
                ✕
              </button>
            </div>

            {/* Offline Content Sections */}
            <div className="space-y-4 font-sans text-xs sm:text-sm text-text-dark leading-relaxed">
              <div className="p-4 rounded-xl bg-card border border-gold/40 space-y-2">
                <h4 className="font-serif font-bold text-lg text-text-dark">Monument Field Orientation</h4>
                <p>
                  Always carry drinking water. Electric shuttle carts operate along the main pedestrian road between cave clusters. Certified ASI guides hold government badges at the ticketing entrance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-card border border-gold/40 space-y-2">
                <h4 className="font-serif font-bold text-lg text-text-dark">Audio Transcript (Read Aloud or Self-Guided)</h4>
                <p className="italic text-text-secondary">
                  “Stand before Cave 16. Two hundred thousand tonnes of basalt were hollowed down from the cliff summit. The master sculptors carved the roof first, followed by the pillared halls, the monolithic victory pillars, and finally the life-sized stone elephants.”
                </p>
              </div>

              <div className="p-4 rounded-xl bg-card border border-gold/40 space-y-2">
                <h4 className="font-serif font-bold text-lg text-text-dark">Immediate Emergency Contacts in this Zone</h4>
                <ul className="space-y-1 text-xs">
                  {activeReadingPack.emergencyContacts.map((c, i) => (
                    <li key={i} className="flex justify-between py-1 border-b border-gold/20 last:border-none">
                      <span>{c.service}</span>
                      <strong>{c.number}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveReadingPack(null)}
                className="px-5 py-2 rounded-full bg-olive text-white text-xs font-semibold"
              >
                Close Reader
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
