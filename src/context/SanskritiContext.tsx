import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Destination, 
  Story, 
  GuideProfile, 
  ArtisanProfile, 
  HeritageReport, 
  ItineraryItem,
  SpecialityEvent
} from '../types';
import { PLACES_DATA } from '../data/places';
import { STORIES_DATA } from '../data/stories';
import { EVENTS_DATA } from '../data/events';
import { INITIAL_HERITAGE_REPORTS } from '../data/heritageWatch';
import { OFFLINE_PACKS_DATA } from '../data/offlinePacks';

export type PageId = 
  | 'home' 
  | 'explore' 
  | 'stories' 
  | 'speciality' 
  | 'living-heritage' 
  | 'heritage-watch' 
  | 'offline-packs' 
  | 'school-mode' 
  | 'about';

export type TextSize = 'sm' | 'md' | 'lg' | 'xl';
export type AppLanguage = 'en' | 'hi' | 'mr';

interface SanskritiContextType {
  // Navigation & Page State
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  selectedDestination: Destination | null;
  setSelectedDestination: (dest: Destination | null) => void;
  selectedStory: Story | null;
  setSelectedStory: (story: Story | null) => void;
  selectedGuide: GuideProfile | null;
  setSelectedGuide: (guide: GuideProfile | null) => void;
  selectedArtisan: ArtisanProfile | null;
  setSelectedArtisan: (artisan: ArtisanProfile | null) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isItineraryOpen: boolean;
  setIsItineraryOpen: (open: boolean) => void;
  isA11yOpen: boolean;
  setIsA11yOpen: (open: boolean) => void;
  openHeritageWatchWithPlace: (placeId: string) => void;

  // Itinerary (Plan My Day)
  itinerary: ItineraryItem[];
  addToItinerary: (destinationId: string) => void;
  removeFromItinerary: (destinationId: string) => void;
  clearItinerary: () => void;
  isInItinerary: (destinationId: string) => boolean;

  // Heritage Watch
  reports: HeritageReport[];
  submitReport: (newReport: Omit<HeritageReport, 'id' | 'timestamp' | 'status'>) => string;
  getReportById: (reportId: string) => HeritageReport | undefined;

  // Community Events
  allEvents: SpecialityEvent[];
  submitCommunityEvent: (event: Omit<SpecialityEvent, 'id' | 'status'>) => void;

  // Offline Packs
  downloadedPacks: string[];
  downloadPack: (packId: string) => void;
  removePack: (packId: string) => void;
  isPackDownloaded: (packId: string) => boolean;
  isOnline: boolean;
  simulateOffline: boolean;
  setSimulateOffline: (sim: boolean) => void;

  // Kids & School Mode
  unlockedBadges: string[];
  completedQuests: string[];
  answerQuest: (questId: string, optionIndex: number, correctIndex: number, badgeName: string) => boolean;

  // Accessibility
  textSize: TextSize;
  setTextSize: (size: TextSize) => void;
  highContrast: boolean;
  setHighContrast: (hc: boolean) => void;
  reduceMotion: boolean;
  setReduceMotion: (rm: boolean) => void;
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
  accessibleRoutesOnly: boolean;
  setAccessibleRoutesOnly: (aro: boolean) => void;

  // Audio Mode & Speech
  audioMode: boolean;
  setAudioMode: (am: boolean) => void;
  audioState: {
    isPlaying: boolean;
    isPaused: boolean;
    title: string;
    text: string;
    rate: number;
    lang: AppLanguage;
  };
  playSpeech: (text: string, title: string, lang?: AppLanguage) => void;
  pauseSpeech: () => void;
  resumeSpeech: () => void;
  stopSpeech: () => void;
  setPlaybackRate: (rate: number) => void;
}

const SanskritiContext = createContext<SanskritiContextType | undefined>(undefined);

export const SanskritiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Page navigation
  const [currentPage, setCurrentPageState] = useState<PageId>('home');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [selectedGuide, setSelectedGuide] = useState<GuideProfile | null>(null);
  const [selectedArtisan, setSelectedArtisan] = useState<ArtisanProfile | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isItineraryOpen, setIsItineraryOpen] = useState(false);
  const [isA11yOpen, setIsA11yOpen] = useState(false);

  const setCurrentPage = (page: PageId) => {
    setCurrentPageState(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openHeritageWatchWithPlace = (placeId: string) => {
    const found = PLACES_DATA.find(p => p.id === placeId);
    if (found) {
      setCurrentPage('heritage-watch');
      // Store in window or pass to state
      sessionStorage.setItem('skt_report_place_id', placeId);
    }
  };

  // Itinerary
  const [itinerary, setItinerary] = useState<ItineraryItem[]>(() => {
    try {
      const saved = localStorage.getItem('sanskriti_itinerary');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return [
      { id: 'itin-1', destinationId: 'ellora-caves', customTime: '09:00 AM', addedAt: new Date().toISOString() },
      { id: 'itin-2', destinationId: 'grishneshwar-temple', customTime: '01:30 PM', addedAt: new Date().toISOString() },
      { id: 'itin-3', destinationId: 'daulatabad-fort', customTime: '03:30 PM', addedAt: new Date().toISOString() }
    ];
  });

  useEffect(() => {
    try {
      localStorage.setItem('sanskriti_itinerary', JSON.stringify(itinerary));
    } catch {
      // ignore
    }
  }, [itinerary]);

  const addToItinerary = (destId: string) => {
    if (itinerary.some(item => item.destinationId === destId)) return;
    const hours = ['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM', '06:30 PM'];
    const timeSuggestion = hours[Math.min(itinerary.length, hours.length - 1)];
    const newItem: ItineraryItem = {
      id: `itin-${Date.now()}`,
      destinationId: destId,
      customTime: timeSuggestion,
      addedAt: new Date().toISOString()
    };
    setItinerary(prev => [...prev, newItem]);
  };

  const removeFromItinerary = (destId: string) => {
    setItinerary(prev => prev.filter(item => item.destinationId !== destId));
  };

  const clearItinerary = () => {
    setItinerary([]);
  };

  const isInItinerary = (destId: string) => {
    return itinerary.some(item => item.destinationId === destId);
  };

  // Heritage Watch Reports
  const [reports, setReports] = useState<HeritageReport[]>(() => {
    try {
      const saved = localStorage.getItem('sanskriti_reports');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return INITIAL_HERITAGE_REPORTS;
  });

  useEffect(() => {
    try {
      localStorage.setItem('sanskriti_reports', JSON.stringify(reports));
    } catch {
      // ignore
    }
  }, [reports]);

  const submitReport = (newReport: Omit<HeritageReport, 'id' | 'timestamp' | 'status'>): string => {
    const reportNum = 1043 + reports.length;
    const reportId = `SKT-HW-${reportNum}`;
    const fullReport: HeritageReport = {
      ...newReport,
      id: reportId,
      timestamp: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
      status: 'Reported',
      isDemo: true
    };
    setReports(prev => [fullReport, ...prev]);
    return reportId;
  };

  const getReportById = (reportId: string) => {
    return reports.find(r => r.id.toLowerCase() === reportId.trim().toLowerCase());
  };

  // Community Events
  const [allEvents, setAllEvents] = useState<SpecialityEvent[]>(() => {
    try {
      const saved = localStorage.getItem('sanskriti_events');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return EVENTS_DATA;
  });

  const submitCommunityEvent = (eventData: Omit<SpecialityEvent, 'id' | 'status'>) => {
    const newEvent: SpecialityEvent = {
      ...eventData,
      id: `comm-event-${Date.now()}`,
      status: 'Pending Review'
    };
    setAllEvents(prev => [newEvent, ...prev]);
    try {
      localStorage.setItem('sanskriti_events', JSON.stringify([newEvent, ...allEvents]));
    } catch {
      // ignore
    }
  };

  // Offline Packs
  const [downloadedPacks, setDownloadedPacks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('sanskriti_offline_packs');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return ['pack-ellora'];
  });

  const downloadPack = (packId: string) => {
    if (!downloadedPacks.includes(packId)) {
      const updated = [...downloadedPacks, packId];
      setDownloadedPacks(updated);
      try {
        localStorage.setItem('sanskriti_offline_packs', JSON.stringify(updated));
      } catch {
        // ignore
      }
    }
  };

  const removePack = (packId: string) => {
    const updated = downloadedPacks.filter(p => p !== packId);
    setDownloadedPacks(updated);
    try {
      localStorage.setItem('sanskriti_offline_packs', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const isPackDownloaded = (packId: string) => downloadedPacks.includes(packId);

  // Online / Offline State
  const [isOnline, setIsOnline] = useState<boolean>(typeof navigator !== 'undefined' ? navigator.onLine : true);
  const [simulateOffline, setSimulateOffline] = useState<boolean>(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Kids Quests & Badges
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('sanskriti_badges');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return ['Ellora Explorer'];
  });

  const [completedQuests, setCompletedQuests] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('sanskriti_quests');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return ['quest-kailasa'];
  });

  const answerQuest = (questId: string, optionIndex: number, correctIndex: number, badgeName: string): boolean => {
    if (optionIndex === correctIndex) {
      if (!completedQuests.includes(questId)) {
        const nextQuests = [...completedQuests, questId];
        setCompletedQuests(nextQuests);
        localStorage.setItem('sanskriti_quests', JSON.stringify(nextQuests));
      }
      if (!unlockedBadges.includes(badgeName)) {
        const nextBadges = [...unlockedBadges, badgeName];
        setUnlockedBadges(nextBadges);
        localStorage.setItem('sanskriti_badges', JSON.stringify(nextBadges));
      }
      return true;
    }
    return false;
  };

  // Accessibility
  const [textSize, setTextSizeState] = useState<TextSize>('md');
  const [highContrast, setHighContrastState] = useState(false);
  const [reduceMotion, setReduceMotionState] = useState(false);
  const [language, setLanguageState] = useState<AppLanguage>('en');
  const [accessibleRoutesOnly, setAccessibleRoutesOnly] = useState(false);
  const [audioMode, setAudioMode] = useState(false);

  // Load A11y settings
  useEffect(() => {
    try {
      const saved = localStorage.getItem('sanskriti_a11y');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.textSize) setTextSizeState(parsed.textSize);
        if (parsed.highContrast !== undefined) setHighContrastState(parsed.highContrast);
        if (parsed.reduceMotion !== undefined) setReduceMotionState(parsed.reduceMotion);
        if (parsed.language) setLanguageState(parsed.language);
        if (parsed.accessibleRoutesOnly !== undefined) setAccessibleRoutesOnly(parsed.accessibleRoutesOnly);
      }
    } catch {
      // fallback
    }
  }, []);

  const saveA11y = (key: string, val: unknown) => {
    try {
      const cur = JSON.parse(localStorage.getItem('sanskriti_a11y') || '{}');
      cur[key] = val;
      localStorage.setItem('sanskriti_a11y', JSON.stringify(cur));
    } catch {
      // ignore
    }
  };

  const setTextSize = (size: TextSize) => {
    setTextSizeState(size);
    saveA11y('textSize', size);
    document.documentElement.classList.remove('text-size-sm', 'text-size-md', 'text-size-lg', 'text-size-xl');
    document.documentElement.classList.add(`text-size-${size}`);
  };

  const setHighContrast = (hc: boolean) => {
    setHighContrastState(hc);
    saveA11y('highContrast', hc);
    if (hc) document.documentElement.classList.add('high-contrast');
    else document.documentElement.classList.remove('high-contrast');
  };

  const setReduceMotion = (rm: boolean) => {
    setReduceMotionState(rm);
    saveA11y('reduceMotion', rm);
    if (rm) document.documentElement.classList.add('reduce-motion');
    else document.documentElement.classList.remove('reduce-motion');
  };

  const setLanguage = (lang: AppLanguage) => {
    setLanguageState(lang);
    saveA11y('language', lang);
  };

  // Audio Speech Synthesizer
  const [audioState, setAudioState] = useState<{
    isPlaying: boolean;
    isPaused: boolean;
    title: string;
    text: string;
    rate: number;
    lang: AppLanguage;
  }>({
    isPlaying: false,
    isPaused: false,
    title: '',
    text: '',
    rate: 1.0,
    lang: 'en'
  });

  const stopSpeech = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setAudioState(prev => ({ ...prev, isPlaying: false, isPaused: false, title: '', text: '' }));
  };

  const playSpeech = (text: string, title: string, lang: AppLanguage = language) => {
    stopSpeech();
    if (typeof window === 'undefined') return;

    setAudioState({
      isPlaying: true,
      isPaused: false,
      title,
      text,
      rate: 1.0,
      lang
    });

    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = audioState.rate;
      
      // select voice matching language if available
      const voices = window.speechSynthesis.getVoices();
      if (lang === 'mr') {
        const mrVoice = voices.find(v => v.lang.includes('mr') || v.lang.includes('hi'));
        if (mrVoice) utterance.voice = mrVoice;
        utterance.lang = 'mr-IN';
      } else if (lang === 'hi') {
        const hiVoice = voices.find(v => v.lang.includes('hi'));
        if (hiVoice) utterance.voice = hiVoice;
        utterance.lang = 'hi-IN';
      } else {
        const enVoice = voices.find(v => v.lang.includes('en-IN') || v.lang.includes('en-GB') || v.lang.includes('en'));
        if (enVoice) utterance.voice = enVoice;
        utterance.lang = 'en-IN';
      }

      utterance.onend = () => {
        setAudioState(prev => ({ ...prev, isPlaying: false, isPaused: false }));
      };
      utterance.onerror = () => {
        setAudioState(prev => ({ ...prev, isPlaying: false, isPaused: false }));
      };

      window.speechSynthesis.speak(utterance);
    }
  };

  const pauseSpeech = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.pause();
    }
    setAudioState(prev => ({ ...prev, isPlaying: false, isPaused: true }));
  };

  const resumeSpeech = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.resume();
    }
    setAudioState(prev => ({ ...prev, isPlaying: true, isPaused: false }));
  };

  const setPlaybackRate = (rate: number) => {
    setAudioState(prev => ({ ...prev, rate }));
    if (audioState.isPlaying && audioState.text) {
      playSpeech(audioState.text, audioState.title, audioState.lang);
    }
  };

  return (
    <SanskritiContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        selectedDestination,
        setSelectedDestination,
        selectedStory,
        setSelectedStory,
        selectedGuide,
        setSelectedGuide,
        selectedArtisan,
        setSelectedArtisan,
        isSearchOpen,
        setIsSearchOpen,
        isItineraryOpen,
        setIsItineraryOpen,
        isA11yOpen,
        setIsA11yOpen,
        openHeritageWatchWithPlace,

        itinerary,
        addToItinerary,
        removeFromItinerary,
        clearItinerary,
        isInItinerary,

        reports,
        submitReport,
        getReportById,

        allEvents,
        submitCommunityEvent,

        downloadedPacks,
        downloadPack,
        removePack,
        isPackDownloaded,
        isOnline: simulateOffline ? false : isOnline,
        simulateOffline,
        setSimulateOffline,

        unlockedBadges,
        completedQuests,
        answerQuest,

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
        setAudioMode,
        audioState,
        playSpeech,
        pauseSpeech,
        resumeSpeech,
        stopSpeech,
        setPlaybackRate
      }}
    >
      {children}
    </SanskritiContext.Provider>
  );
};

export const useSanskriti = () => {
  const context = useContext(SanskritiContext);
  if (!context) throw new Error('useSanskriti must be used within a SanskritiProvider');
  return context;
};
