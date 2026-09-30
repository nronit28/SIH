import React, { useState, useMemo } from 'react';
import { BookOpen, Clock, Volume2, Sparkles, ArrowRight, Filter } from 'lucide-react';
import { useSanskriti } from '../context/SanskritiContext';
import { STORIES_DATA } from '../data/stories';
import { ImageWithFallback, DiamondDivider } from '../components/common/HeritageIcons';

export const StoriesPage: React.FC = () => {
  const { setSelectedStory, playSpeech, language } = useSanskriti();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');

  const categories = [
    'All',
    'Legends & Myths',
    'History',
    'Architecture',
    'People',
    'Crafts'
  ];

  const filteredStories = useMemo(() => {
    return STORIES_DATA.filter(story => {
      if (selectedCategory !== 'All' && story.category !== selectedCategory) return false;
      if (selectedType !== 'All' && story.type !== selectedType) return false;
      return true;
    });
  }, [selectedCategory, selectedType]);

  return (
    <div className="space-y-10 pb-16 animate-in fade-in duration-200">
      
      {/* 1. COMPACT PAGE HEADER */}
      <section className="pt-4 sm:pt-6 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto space-y-1.5 mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-olive block">
            Illustrated Heritage Journal
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-dark">
            Stories
          </h1>
          <p className="font-serif italic text-text-secondary text-base sm:text-lg">
            “Stories that shaped the land”
          </p>
          <p className="text-xs text-text-secondary max-w-md mx-auto font-sans leading-relaxed">
            Delve into chronicles of rock-carving feats, medieval sieges, hydraulic wonders, and sacred legends passed down across generations.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 border-b border-gold/30 pb-4">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all border ${
                selectedCategory === cat
                  ? 'bg-olive text-white border-olive shadow-sm'
                  : 'bg-card text-text-dark border-gold/50 hover:bg-white hover:border-gold'
              }`}
            >
              {cat}
            </button>
          ))}

          {/* Type Filter */}
          <div className="flex items-center gap-1.5 ml-0 sm:ml-4 mt-2 sm:mt-0">
            <span className="text-xs text-text-muted font-medium">Type:</span>
            {['All', 'Historical Record', 'Local Legend / Traditional Story'].map(t => (
              <button
                key={t}
                type="button"
                onClick={() => setSelectedType(t)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all border ${
                  selectedType === t
                    ? 'bg-card border-gold text-olive font-bold'
                    : 'bg-transparent border-transparent text-text-secondary hover:text-text-dark'
                }`}
              >
                {t === 'Local Legend / Traditional Story' ? 'Legend' : t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. STORIES JOURNAL GRID */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredStories.map(story => (
            <article
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className="rounded-3xl bg-card border border-gold/60 shadow-heritage hover:shadow-heritage-hover hover:border-gold cursor-pointer transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Story Top Image */}
              <div className="relative h-60 w-full overflow-hidden">
                <ImageWithFallback
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className={`text-[10px] font-semibold uppercase px-2.5 py-0.5 rounded-full backdrop-blur-md border shadow-sm ${
                    story.type === 'Historical Record'
                      ? 'bg-olive/90 text-white border-white/30'
                      : 'bg-card/90 text-terracotta border-gold/60'
                  }`}>
                    {story.type}
                  </span>

                  <span className="text-[11px] font-medium text-white/90 flex items-center gap-1 bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                    <Clock className="w-3 h-3" />
                    <span>{story.readingTime}</span>
                  </span>
                </div>

                {/* Bottom Title on Image */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gold-light block mb-0.5">
                    {story.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold leading-snug drop-shadow-sm group-hover:text-gold-light transition-colors">
                    {story.title}
                  </h3>
                </div>
              </div>

              {/* Story Body Narrative Excerpt */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="font-serif italic text-text-secondary text-sm mb-2">
                    {story.subtitle}
                  </div>
                  <p className="text-xs text-text-dark font-sans leading-relaxed line-clamp-3">
                    {story.narrative[0]}
                  </p>
                </div>

                <div className="pt-3 border-t border-gold/30 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      const text = story.audioScript[language] || story.audioScript.en;
                      playSpeech(text, story.title, language);
                    }}
                    className="flex items-center gap-1.5 text-olive hover:text-olive-hover font-medium"
                    title="Listen to story summary"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Listen ({language.toUpperCase()})</span>
                  </button>

                  <div className="flex items-center gap-1 text-olive font-semibold group-hover:translate-x-1 transition-transform">
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
};
