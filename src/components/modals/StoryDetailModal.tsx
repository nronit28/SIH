import React from 'react';
import { X, Clock, BookOpen, Volume2, VolumeX, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { useSanskriti } from '../../context/SanskritiContext';
import { PLACES_DATA } from '../../data/places';
import { ImageWithFallback, DiamondDivider } from '../common/HeritageIcons';

export const StoryDetailModal: React.FC = () => {
  const { 
    selectedStory, 
    setSelectedStory, 
    setSelectedDestination,
    playSpeech, 
    stopSpeech, 
    audioState, 
    language 
  } = useSanskriti();

  if (!selectedStory) return null;

  const story = selectedStory;
  const audioText = story.audioScript[language] || story.audioScript.en;

  const relatedPlaces = PLACES_DATA.filter(p => story.relatedDestinationIds.includes(p.id));

  const handleAudio = () => {
    if (audioState.isPlaying && audioState.title === story.title) {
      stopSpeech();
    } else {
      playSpeech(audioText, story.title, language);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
      <div 
        className="w-full max-w-3xl bg-page border border-gold rounded-2xl shadow-2xl overflow-hidden my-4 max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="story-title"
      >
        {/* Top Control Bar */}
        <div className="p-4 px-6 bg-card border-b border-gold/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`text-[11px] font-semibold uppercase px-2.5 py-0.5 rounded-full border ${
              story.type === 'Historical Record' 
                ? 'bg-olive/15 text-olive border-olive/30' 
                : 'bg-gold/25 text-terracotta border-gold/50'
            }`}>
              {story.type}
            </span>
            <span className="text-xs text-text-muted flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{story.readingTime}</span>
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              stopSpeech();
              setSelectedStory(null);
            }}
            className="p-1.5 rounded-lg text-text-dark hover:bg-gold/20"
            aria-label="Close story"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Story Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6">
          
          {/* Header */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-text-muted uppercase tracking-widest block">
              {story.category}
            </span>
            <h1 id="story-title" className="font-serif text-3xl sm:text-4xl font-bold text-text-dark leading-tight">
              {story.title}
            </h1>
            <p className="font-serif italic text-text-secondary text-lg">
              {story.subtitle}
            </p>
          </div>

          {/* Audio Button */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-card border border-gold/40">
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-5 h-5 text-olive" />
              <span className="text-xs text-text-dark font-medium">
                Listen to this story narrated in {language === 'mr' ? 'Marathi' : language === 'hi' ? 'Hindi' : 'English'}
              </span>
            </div>
            <button
              type="button"
              onClick={handleAudio}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                audioState.isPlaying && audioState.title === story.title
                  ? 'bg-terracotta text-white animate-pulse'
                  : 'bg-olive text-white hover:bg-olive-hover'
              }`}
            >
              {audioState.isPlaying && audioState.title === story.title ? (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Listen Now</span>
                </>
              )}
            </button>
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden border border-gold/40 shadow-heritage max-h-80">
            <ImageWithFallback
              src={story.image}
              alt={story.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Historical Context Callout */}
          <div className="p-4 rounded-xl bg-card border-l-4 border-olive text-xs text-text-dark space-y-1">
            <strong className="font-serif text-sm block text-olive">Chronicle & Provenance:</strong>
            <p className="leading-relaxed text-text-secondary">{story.historicalContext}</p>
          </div>

          <DiamondDivider text="Narrative" />

          {/* Narrative Paragraphs */}
          <div className="space-y-4 font-serif text-lg text-text-dark leading-relaxed">
            {story.narrative.map((para, i) => (
              <p key={i} className={i === 0 ? "first-letter:text-4xl first-letter:font-bold first-letter:text-olive first-letter:float-left first-letter:mr-2.5 first-letter:leading-none" : ""}>
                {para}
              </p>
            ))}
          </div>

          {/* Important Facts Box */}
          <div className="p-5 rounded-2xl bg-card border border-gold/40 space-y-3">
            <h4 className="font-serif font-bold text-xl text-text-dark flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-dark" />
              <span>Key Heritage Facts</span>
            </h4>
            <ul className="space-y-2 text-xs text-text-dark font-sans">
              {story.importantFacts.map((fact, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-olive font-bold">◆</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Destinations */}
          {relatedPlaces.length > 0 && (
            <div className="pt-4 border-t border-gold/40">
              <h4 className="font-serif font-bold text-lg text-text-dark mb-3">
                Explore Associated Monuments
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedPlaces.map(place => (
                  <div
                    key={place.id}
                    onClick={() => {
                      setSelectedStory(null);
                      setSelectedDestination(place);
                    }}
                    className="p-3 rounded-xl bg-card border border-gold/40 hover:border-gold hover:bg-white flex items-center justify-between cursor-pointer transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <img 
                        src={place.image} 
                        alt={place.name} 
                        className="w-12 h-12 rounded-lg object-cover border border-gold/30"
                      />
                      <div>
                        <h5 className="font-serif font-bold text-sm text-text-dark group-hover:text-olive">
                          {place.name}
                        </h5>
                        <span className="text-xs text-text-secondary">{place.travelTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-olive flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-card border-t border-gold/40 flex justify-end">
          <button
            type="button"
            onClick={() => {
              stopSpeech();
              setSelectedStory(null);
            }}
            className="px-5 py-2 rounded-full bg-olive text-white text-xs font-semibold hover:bg-olive-hover"
          >
            Finished Reading
          </button>
        </div>

      </div>
    </div>
  );
};
