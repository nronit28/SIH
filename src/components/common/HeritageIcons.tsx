import React, { useState } from 'react';

// Delicate Lotus Emblem at top of header
export const LotusEmblem: React.FC<{ className?: string }> = ({ className = "w-8 h-8 text-[#543B25]" }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Center petal */}
    <path d="M32 10 C32 10 38 24 38 38 C38 48 32 52 32 52 C32 52 26 48 26 38 C26 24 32 10 32 10 Z" fill="rgba(181, 154, 112, 0.15)" />
    {/* Inner side petals */}
    <path d="M32 20 C38 24 48 28 48 40 C48 48 38 52 32 52" />
    <path d="M32 20 C26 24 16 28 16 40 C16 48 26 52 32 52" />
    {/* Outer petals */}
    <path d="M32 30 C44 32 56 36 56 46 C56 52 46 54 36 53" />
    <path d="M32 30 C20 32 8 36 8 46 C8 52 18 54 28 53" />
    {/* Base stem flourish */}
    <path d="M22 56 C28 58 36 58 42 56" />
    <circle cx="32" cy="10" r="1.5" fill="currentColor" />
  </svg>
);

// Indian Monument / Arch / Chhatri Silhouette Icon
export const ChhatriIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8 text-[#543B25]" }) => (
  <svg viewBox="0 0 64 64" fill="currentColor" className={className}>
    {/* Central Dome and spire */}
    <path d="M32 6 L32 12 M32 12 C24 14 20 22 20 28 L44 28 C44 22 40 14 32 12 Z" />
    {/* Side miniature chhatris */}
    <path d="M12 18 L12 22 C8 24 6 28 6 32 L18 32 C18 28 16 24 12 22 Z" />
    <path d="M52 18 L52 22 C48 24 46 28 46 32 L58 32 C58 28 56 24 52 22 Z" />
    {/* Main Arch Base and Pillars */}
    <path d="M8 32 L56 32 L56 36 L8 36 Z" />
    <path d="M10 36 L16 36 L16 56 L10 56 Z" />
    <path d="M48 36 L54 36 L54 56 L48 56 Z" />
    <path d="M22 36 L26 36 L26 56 L22 56 Z" />
    <path d="M38 36 L42 36 L42 56 L38 56 Z" />
    {/* Cusped central arch */}
    <path d="M26 44 C26 40 30 38 32 38 C34 38 38 40 38 44 L38 56 L26 56 Z" fill="none" stroke="#F3E5CC" strokeWidth="2" />
    <rect x="6" y="56" width="52" height="4" rx="1" />
  </svg>
);

// Diamond Divider: —◇— Welcome to Sanskriti —◇—
export const DiamondDivider: React.FC<{ text?: string; className?: string }> = ({ text, className = "" }) => (
  <div className={`flex items-center justify-center gap-3 text-gold text-xs ${className}`}>
    <span className="h-px w-10 md:w-16 bg-gradient-to-r from-transparent to-gold"></span>
    <span className="rotate-45 block w-1.5 h-1.5 border border-gold bg-page"></span>
    {text && <span className="font-serif italic tracking-wider text-text-secondary px-1 text-sm md:text-base">{text}</span>}
    <span className="rotate-45 block w-1.5 h-1.5 border border-gold bg-page"></span>
    <span className="h-px w-10 md:w-16 bg-gradient-to-l from-transparent to-gold"></span>
  </div>
);

// Botanical Branch Flourish (for corners)
export const BotanicalBranch: React.FC<{ className?: string }> = ({ className = "w-16 h-16 text-gold" }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 90 Q40 60 85 15" />
    {/* Leaves along branch */}
    <path d="M30 73 C26 65 30 55 42 63 C42 70 36 76 30 73 Z" fill="rgba(181, 154, 112, 0.12)" />
    <path d="M48 57 C55 50 65 52 60 64 C53 66 47 62 48 57 Z" fill="rgba(181, 154, 112, 0.12)" />
    <path d="M62 41 C57 32 62 24 73 31 C72 38 67 43 62 41 Z" fill="rgba(181, 154, 112, 0.12)" />
    <path d="M78 24 C84 16 93 19 90 30 C82 32 77 28 78 24 Z" fill="rgba(181, 154, 112, 0.12)" />
    <path d="M85 15 C88 8 96 10 94 18 C88 20 84 17 85 15 Z" fill="rgba(181, 154, 112, 0.12)" />
  </svg>
);

// Lotus Flourish for Cards (from the reference image card corner)
export const LotusCornerFlourish: React.FC<{ className?: string }> = ({ className = "w-20 h-20 text-gold" }) => (
  <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Lotus flower */}
    <g transform="translate(30, 40)">
      <path d="M30 10 C30 10 38 26 38 42 C38 52 30 58 30 58 C30 58 22 52 22 42 C22 26 30 10 30 10 Z" />
      <path d="M30 22 C39 28 50 36 50 48 C50 56 40 60 30 58" />
      <path d="M30 22 C21 28 10 36 10 48 C10 56 20 60 30 58" />
      <path d="M30 35 C44 40 58 46 58 56 C58 64 48 64 36 60" />
      <path d="M30 35 C16 40 2 46 2 56 C2 64 12 64 24 60" />
      <path d="M18 64 C26 66 34 66 42 64" />
    </g>
    {/* Four pointed star / sparkle */}
    <g transform="translate(85, 20)">
      <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" fill="currentColor" stroke="none" />
    </g>
  </svg>
);

// Mountain Silhouettes in warm sepia mist for the footer
export const MountainSilhouettes: React.FC<{ className?: string }> = ({ className = "w-full h-14" }) => (
  <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="none" className={className}>
    {/* Distant hazy ridge */}
    <path
      d="M0 120 L0 80 Q150 40 320 70 Q480 95 620 50 Q780 15 950 65 Q1080 95 1200 60 L1200 120 Z"
      fill="rgba(181, 154, 112, 0.14)"
    />
    {/* Closer ridge */}
    <path
      d="M0 120 L0 90 Q120 70 260 85 Q400 100 580 75 Q720 55 860 80 Q1020 105 1200 85 L1200 120 Z"
      fill="rgba(84, 59, 37, 0.08)"
    />
  </svg>
);

// Graceful Image Component with reliable fallback so no broken image is EVER displayed
export const ImageWithFallback: React.FC<{
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
  loading?: 'lazy' | 'eager';
}> = ({ src, alt, className = "", fallbackText, loading = 'lazy' }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`bg-[#EEDEC1] flex flex-col items-center justify-center p-4 border border-gold/40 text-center relative overflow-hidden ${className}`}>
        <LotusEmblem className="w-12 h-12 text-gold/60 mb-2" />
        <span className="font-serif italic text-text-secondary text-sm line-clamp-2 px-2">
          {fallbackText || alt || 'Sanskriti Heritage'}
        </span>
        <span className="text-[10px] text-text-muted mt-1 uppercase tracking-wider">Chhatrapati Sambhajinagar</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#EEDEC1] animate-pulse flex items-center justify-center">
          <LotusEmblem className="w-8 h-8 text-gold/40" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};
