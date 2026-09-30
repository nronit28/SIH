import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  Compass, 
  Shield, 
  Heart, 
  Droplets, 
  Check, 
  HelpCircle, 
  Sparkles, 
  BookOpen, 
  Eye, 
  PenTool, 
  CheckCircle2 
} from 'lucide-react';
import { useSanskriti } from '../context/SanskritiContext';
import { SCHOOL_QUESTS_DATA, SCHOOL_FIELD_TRIP_PLANS } from '../data/schoolQuests';
import { SchoolQuest } from '../types';
import { DiamondDivider } from '../components/common/HeritageIcons';

export const SchoolModePage: React.FC = () => {
  const { unlockedBadges, completedQuests, answerQuest } = useSanskriti();
  const [activeSubTab, setActiveSubTab] = useState<'quests' | 'field-trip'>('quests');
  
  // Selected Quest
  const [selectedQuestId, setSelectedQuestId] = useState<string>(SCHOOL_QUESTS_DATA[0].id);
  const [userSelectedOption, setUserSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);

  // Field trip selection
  const [selectedMonumentId, setSelectedMonumentId] = useState<string>('ellora-caves');
  const [fieldTripStep, setFieldTripStep] = useState<'before' | 'during' | 'after'>('before');

  const activeQuest = SCHOOL_QUESTS_DATA.find(q => q.id === selectedQuestId) || SCHOOL_QUESTS_DATA[0];
  const activeFieldTrip = SCHOOL_FIELD_TRIP_PLANS[selectedMonumentId];

  const handleOptionClick = (idx: number) => {
    setUserSelectedOption(idx);
    const correct = answerQuest(activeQuest.id, idx, activeQuest.correctIndex, activeQuest.badgeName);
    if (correct) {
      setFeedback({ isCorrect: true, text: activeQuest.explanation });
    } else {
      setFeedback({ isCorrect: false, text: 'Not quite! Re-read the hint or inspect the monument stories.' });
    }
  };

  const handleSelectNewQuest = (q: SchoolQuest) => {
    setSelectedQuestId(q.id);
    setUserSelectedOption(null);
    setFeedback(null);
  };

  return (
    <div className="space-y-10 pb-16 animate-in fade-in duration-200">
      
      {/* 1. COMPACT PAGE HEADER */}
      <section className="pt-4 sm:pt-6 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gold/40 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-olive/15 text-olive text-xs font-bold uppercase tracking-wider border border-olive/30 mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Young Historians & Classrooms</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-dark">
              Kids & School Mode
            </h1>
            <p className="font-serif italic text-text-secondary text-base sm:text-lg mt-0.5">
              “Explore history like an adventure.”
            </p>
          </div>

          <div className="flex rounded-full bg-card border border-gold/60 p-1">
            <button
              type="button"
              onClick={() => setActiveSubTab('quests')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeSubTab === 'quests'
                  ? 'bg-olive text-white shadow-sm'
                  : 'text-text-dark hover:text-olive'
              }`}
            >
              Story Quests & Badges
            </button>
            <button
              type="button"
              onClick={() => setActiveSubTab('field-trip')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeSubTab === 'field-trip'
                  ? 'bg-olive text-white shadow-sm'
                  : 'text-text-dark hover:text-olive'
              }`}
            >
              School Field Trip Guide
            </button>
          </div>
        </div>

        {/* Unlocked Badges Bar */}
        <div className="mt-4 p-4 rounded-2xl bg-card border border-gold/50 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider block">
              Your Unlocked Heritage Badges ({unlockedBadges.length} of 5)
            </span>
            <div className="flex flex-wrap items-center gap-2 mt-1.5">
              {['Ellora Explorer', 'Fort Detective', 'Story Seeker', 'Heritage Protector', 'Culture Champion'].map(badge => {
                const isUnlocked = unlockedBadges.includes(badge);
                return (
                  <span
                    key={badge}
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${
                      isUnlocked
                        ? 'bg-olive text-white border-olive shadow-sm'
                        : 'bg-white/60 text-text-muted border-gold/30 opacity-60'
                    }`}
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>{badge}</span>
                  </span>
                );
              })}
            </div>
          </div>
          <span className="text-xs text-text-secondary italic">
            Saved automatically without sign-up
          </span>
        </div>
      </section>

      {/* 2. SUBTAB 1: INTERACTIVE STORY QUESTS */}
      {activeSubTab === 'quests' && (
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left: Quest Selector List */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-serif font-bold text-lg text-text-dark">Select a Heritage Quest</h3>
            <div className="space-y-2">
              {SCHOOL_QUESTS_DATA.map(q => {
                const isCurrent = q.id === activeQuest.id;
                const isDone = completedQuests.includes(q.id);
                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => handleSelectNewQuest(q)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                      isCurrent
                        ? 'bg-olive text-white border-olive shadow-sm'
                        : 'bg-card border-gold/50 text-text-dark hover:bg-white'
                    }`}
                  >
                    <div>
                      <span className={`text-[10px] font-semibold uppercase tracking-wider block ${isCurrent ? 'text-gold-light' : 'text-text-muted'}`}>
                        {q.destinationName}
                      </span>
                      <h4 className="font-serif font-bold text-base leading-tight mt-0.5">{q.title}</h4>
                    </div>

                    {isDone && (
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ml-2 ${isCurrent ? 'text-white' : 'text-olive'}`} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Active Quest Interactive Card */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-card border border-gold shadow-heritage space-y-6">
              
              <div className="border-b border-gold/30 pb-3 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-olive uppercase tracking-wider block">
                    {activeQuest.destinationName} Adventure
                  </span>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-text-dark mt-0.5">
                    {activeQuest.title}
                  </h3>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-text-muted uppercase tracking-wider block">Reward:</span>
                  <span className="text-xs font-bold text-olive flex items-center gap-1">
                    <Award className="w-4 h-4 text-gold-dark" />
                    <span>{activeQuest.badgeName}</span>
                  </span>
                </div>
              </div>

              {/* Question */}
              <div className="p-4 rounded-2xl bg-white/70 border border-gold/40">
                <span className="text-xs font-bold uppercase text-text-muted block mb-1">
                  Investigation Question:
                </span>
                <p className="font-serif text-lg sm:text-xl font-bold text-text-dark leading-snug">
                  “{activeQuest.question}”
                </p>
              </div>

              {/* Multiple Choice Options */}
              <div className="space-y-2.5">
                {activeQuest.options.map((opt, idx) => {
                  const isSelected = userSelectedOption === idx;
                  const isCorrect = idx === activeQuest.correctIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleOptionClick(idx)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                        userSelectedOption !== null && isCorrect
                          ? 'bg-olive text-white border-olive font-bold'
                          : isSelected && !isCorrect
                            ? 'bg-red-100 text-red-900 border-red-300'
                            : 'bg-white/80 border-gold/40 text-text-dark hover:border-gold hover:bg-white'
                      }`}
                    >
                      <span>{opt}</span>
                      {userSelectedOption !== null && isCorrect && <Check className="w-4 h-4 text-white" />}
                    </button>
                  );
                })}
              </div>

              {/* Feedback Explanation */}
              {feedback && (
                <div className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed space-y-1 animate-in fade-in ${
                  feedback.isCorrect 
                    ? 'bg-olive/15 text-text-dark border-olive/40' 
                    : 'bg-amber-100/70 text-text-dark border-amber-300'
                }`}>
                  <strong className="font-serif text-base block font-bold">
                    {feedback.isCorrect ? '🌟 Correct!' : '🤔 Not quite!'}
                  </strong>
                  <p>{feedback.text}</p>
                </div>
              )}

            </div>
          </div>

        </section>
      )}

      {/* 3. SUBTAB 2: SCHOOL FIELD TRIP GUIDE (Requirement #24) */}
      {activeSubTab === 'field-trip' && (
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-6">
          
          {/* Monument Selector for Educators */}
          <div className="p-4 sm:p-5 rounded-2xl bg-card border border-gold/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase text-olive tracking-wider block">
                Educator Curriculum Kit
              </span>
              <h3 className="font-serif font-bold text-2xl text-text-dark">
                School Visit Companion
              </h3>
            </div>

            <div className="flex items-center gap-2">
              {['ellora-caves', 'daulatabad-fort'].map(mId => (
                <button
                  key={mId}
                  type="button"
                  onClick={() => setSelectedMonumentId(mId)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
                    selectedMonumentId === mId
                      ? 'bg-olive text-white border-olive'
                      : 'bg-white text-text-dark border-gold/50 hover:bg-gold/10'
                  }`}
                >
                  {mId === 'ellora-caves' ? 'Ellora Caves' : 'Daulatabad Fort'}
                </button>
              ))}
            </div>
          </div>

          {/* 3 Stages Tabs (Before / During / After) */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'before', label: '1. Before the Visit', sub: '2-min story & vocab' },
              { id: 'during', label: '2. During the Visit', sub: '3 on-site challenges' },
              { id: 'after', label: '3. After the Visit', sub: 'Classroom reflection' },
            ].map(step => (
              <button
                key={step.id}
                type="button"
                onClick={() => setFieldTripStep(step.id as any)}
                className={`p-3.5 rounded-2xl text-center border transition-all ${
                  fieldTripStep === step.id
                    ? 'bg-olive text-white border-olive shadow-sm'
                    : 'bg-card border-gold/40 text-text-dark hover:bg-white'
                }`}
              >
                <div className="font-serif font-bold text-sm sm:text-base">{step.label}</div>
                <div className={`text-[10px] mt-0.5 ${fieldTripStep === step.id ? 'text-white/80' : 'text-text-muted'}`}>
                  {step.sub}
                </div>
              </button>
            ))}
          </div>

          {/* Step 1: Before */}
          {fieldTripStep === 'before' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-card border border-gold/50 shadow-sm space-y-5 animate-in fade-in">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-olive">Preparation Phase</span>
                <h4 className="font-serif font-bold text-2xl text-text-dark">
                  2-Minute Story & Key Vocabulary
                </h4>
              </div>

              <div className="p-4 rounded-xl bg-white/70 border border-gold/30 text-xs sm:text-sm text-text-dark leading-relaxed font-sans">
                <strong className="font-serif text-base block text-olive mb-1">Introductory Story:</strong>
                {activeFieldTrip.beforeVisit.storySnippet}
              </div>

              <div className="space-y-2">
                <strong className="text-xs uppercase font-bold text-text-secondary tracking-wider block">
                  Key Words to Learn Before Visiting:
                </strong>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeFieldTrip.beforeVisit.keyVocabulary.map((v, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/70 border border-gold/30 text-xs">
                      <span className="font-serif font-bold text-base text-olive block">{v.word}</span>
                      <span className="text-text-secondary mt-1 block">{v.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: During */}
          {fieldTripStep === 'during' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-card border border-gold/50 shadow-sm space-y-5 animate-in fade-in">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-olive">Observation Phase</span>
                <h4 className="font-serif font-bold text-2xl text-text-dark">
                  3 On-Site Observation Challenges
                </h4>
              </div>

              <div className="space-y-3">
                {activeFieldTrip.duringVisit.challenges.map((c, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/70 border border-gold/30 flex items-start gap-3 text-xs sm:text-sm">
                    <span className="w-6 h-6 rounded-full bg-olive text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-text-dark font-medium leading-relaxed">{c}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-gold/15 border border-gold/40 text-xs text-text-dark space-y-1">
                <strong className="font-serif text-sm block">✏️ Sketching & Journal Prompt:</strong>
                <p>{activeFieldTrip.duringVisit.sketchingPrompt}</p>
              </div>
            </div>
          )}

          {/* Step 3: After */}
          {fieldTripStep === 'after' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-card border border-gold/50 shadow-sm space-y-5 animate-in fade-in">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-olive">Reflection Phase</span>
                <h4 className="font-serif font-bold text-2xl text-text-dark">
                  Discussion Questions & Classroom Project
                </h4>
              </div>

              <div className="space-y-2.5">
                <strong className="text-xs uppercase font-bold text-text-secondary tracking-wider block">
                  Reflection Questions:
                </strong>
                {activeFieldTrip.afterVisit.reflectionPrompts.map((p, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white/70 border border-gold/30 text-xs sm:text-sm text-text-dark">
                    <strong>Q{i + 1}:</strong> {p}
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white/70 border border-gold/40 text-xs text-text-dark space-y-1">
                <strong className="font-serif text-base block text-olive">Hands-On Classroom Activity:</strong>
                <p>{activeFieldTrip.afterVisit.classroomActivity}</p>
              </div>
            </div>
          )}

        </section>
      )}

    </div>
  );
};
