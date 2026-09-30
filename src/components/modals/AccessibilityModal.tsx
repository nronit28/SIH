import React from 'react';
import { X, Volume2, Eye, Type, Globe, Check, ShieldCheck, Sparkles, Navigation } from 'lucide-react';
import { useSanskriti, TextSize, AppLanguage } from '../../context/SanskritiContext';

export const AccessibilityModal: React.FC = () => {
  const {
    isA11yOpen,
    setIsA11yOpen,
    textSize,
    setTextSize,
    highContrast,
    setHighContrast,
    reduceMotion,
    setReduceMotion,
    language,
    setLanguage,
    accessibleRoutesOnly,
    setAccessibleRoutesOnly,
    audioMode,
    setAudioMode
  } = useSanskriti();

  if (!isA11yOpen) return null;

  const fontSizes: { id: TextSize; label: string; desc: string }[] = [
    { id: 'sm', label: 'A-', desc: 'Compact' },
    { id: 'md', label: 'A', desc: 'Default' },
    { id: 'lg', label: 'A+', desc: 'Large' },
    { id: 'xl', label: 'A++', desc: 'Maximum' },
  ];

  const languages: { id: AppLanguage; label: string; scriptName: string }[] = [
    { id: 'en', label: 'English', scriptName: 'English' },
    { id: 'hi', label: 'हिंदी', scriptName: 'Hindi' },
    { id: 'mr', label: 'मराठी', scriptName: 'Marathi' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="w-full max-w-lg bg-card border border-gold rounded-2xl shadow-heritage-lg p-6 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="a11y-heading"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gold/40">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-olive/10 flex items-center justify-center text-olive">
              <Eye className="w-4 h-4" />
            </div>
            <div>
              <h3 id="a11y-heading" className="font-serif font-bold text-xl text-text-dark leading-tight">
                Accessibility & Language
              </h3>
              <p className="text-[11px] text-text-secondary">
                Customize Sanskriti for your reading and sensory preferences
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsA11yOpen(false)}
            className="p-1.5 rounded-lg text-text-dark hover:bg-gold/20"
            aria-label="Close accessibility options"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Options */}
        <div className="py-4 space-y-5">
          
          {/* 1. Regional Language */}
          <div>
            <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider block mb-2 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-olive" />
              <span>Language / भाषा / भाषा</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {languages.map(l => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => setLanguage(l.id)}
                  className={`py-2 px-3 rounded-xl border text-center transition-all ${
                    language === l.id
                      ? 'bg-olive text-white border-olive shadow-sm font-semibold'
                      : 'bg-white/70 border-gold/40 text-text-dark hover:border-gold'
                  }`}
                >
                  <div className="text-sm">{l.scriptName}</div>
                  <div className="text-[10px] opacity-80">{l.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Text Sizing */}
          <div>
            <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider block mb-2 flex items-center gap-1.5">
              <Type className="w-3.5 h-3.5 text-olive" />
              <span>Text Size</span>
            </label>
            <div className="grid grid-cols-4 gap-2">
              {fontSizes.map(f => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setTextSize(f.id)}
                  className={`py-2 px-2 rounded-xl border text-center transition-all ${
                    textSize === f.id
                      ? 'bg-olive text-white border-olive shadow-sm font-bold'
                      : 'bg-white/70 border-gold/40 text-text-dark hover:border-gold'
                  }`}
                >
                  <div className="text-base leading-none mb-0.5">{f.label}</div>
                  <div className="text-[10px] opacity-80">{f.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Toggles: High Contrast & Audio Mode & Reduce Motion */}
          <div className="space-y-2.5 pt-1 border-t border-gold/30">
            {/* High Contrast */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/70 border border-gold/40">
              <div>
                <span className="font-serif font-bold text-sm text-text-dark block">
                  High Contrast Mode
                </span>
                <span className="text-[11px] text-text-secondary">
                  Sharpens text borders and boosts foreground readability
                </span>
              </div>
              <button
                type="button"
                onClick={() => setHighContrast(!highContrast)}
                className={`w-12 h-6 rounded-full transition-colors relative flex items-center p-0.5 ${
                  highContrast ? 'bg-olive' : 'bg-gold/40'
                }`}
                aria-label="Toggle High Contrast"
              >
                <div className={`w-5 h-5 rounded-full bg-white transition-transform ${highContrast ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
            </div>

            {/* Audio Mode */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/70 border border-gold/40">
              <div>
                <span className="font-serif font-bold text-sm text-text-dark block flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5 text-olive" />
                  <span>Audio Narration Mode</span>
                </span>
                <span className="text-[11px] text-text-secondary">
                  Read aloud destination and story summaries automatically
                </span>
              </div>
              <button
                type="button"
                onClick={() => setAudioMode(!audioMode)}
                className={`w-12 h-6 rounded-full transition-colors relative flex items-center p-0.5 ${
                  audioMode ? 'bg-olive' : 'bg-gold/40'
                }`}
                aria-label="Toggle Audio Narration Mode"
              >
                <div className={`w-5 h-5 rounded-full bg-white transition-transform ${audioMode ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
            </div>

            {/* Accessible Routes Only */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/70 border border-gold/40">
              <div>
                <span className="font-serif font-bold text-sm text-text-dark block flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-olive" />
                  <span>Accessible Routes Filter</span>
                </span>
                <span className="text-[11px] text-text-secondary">
                  Highlight destinations with step-free or assisted ramp access
                </span>
              </div>
              <button
                type="button"
                onClick={() => setAccessibleRoutesOnly(!accessibleRoutesOnly)}
                className={`w-12 h-6 rounded-full transition-colors relative flex items-center p-0.5 ${
                  accessibleRoutesOnly ? 'bg-olive' : 'bg-gold/40'
                }`}
                aria-label="Toggle Accessible Routes Filter"
              >
                <div className={`w-5 h-5 rounded-full bg-white transition-transform ${accessibleRoutesOnly ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
            </div>

            {/* Reduce Motion */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/70 border border-gold/40">
              <div>
                <span className="font-serif font-bold text-sm text-text-dark block">
                  Reduce Motion
                </span>
                <span className="text-[11px] text-text-secondary">
                  Turn off smooth scroll animations and hover transforms
                </span>
              </div>
              <button
                type="button"
                onClick={() => setReduceMotion(!reduceMotion)}
                className={`w-12 h-6 rounded-full transition-colors relative flex items-center p-0.5 ${
                  reduceMotion ? 'bg-olive' : 'bg-gold/40'
                }`}
                aria-label="Toggle Reduce Motion"
              >
                <div className={`w-5 h-5 rounded-full bg-white transition-transform ${reduceMotion ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-gold/40 flex justify-end">
          <button
            type="button"
            onClick={() => setIsA11yOpen(false)}
            className="px-5 py-2 rounded-full bg-olive text-white text-xs font-semibold hover:bg-olive-hover transition-colors shadow-sm"
          >
            Apply & Close
          </button>
        </div>
      </div>
    </div>
  );
};
