export type HeritageCategory = 
  | 'UNESCO' 
  | 'Forts' 
  | 'Architecture' 
  | 'Sacred Places' 
  | 'Museums' 
  | 'Gardens' 
  | 'Hidden Gems'
  | 'Food & Culture';

export interface Destination {
  id: string;
  name: string;
  marathiName: string;
  hindiName: string;
  category: HeritageCategory;
  shortDescription: string;
  fullDescription: string;
  historicalBackground: string;
  architecturalSignificance: string;
  culturalFacts: string[];
  image: string;
  gallery: string[];
  distanceKm: number; // from City Centre
  travelTime: string;
  visitDuration: string;
  recommendedTime: string;
  timings: string;
  entryInfo: string;
  unescoStatus: boolean;
  unescoDetails?: string;
  howToExplore: {
    suggestedDuration: string;
    bestSequence: string[];
    mustSeeHighlights: string[];
    kailasaHighlight?: string;
    walkingExpectation: string;
    footwearTips: string;
    hydrationNotes: string;
    photographyNotes: string;
    nearbyCombo?: string;
  };
  practicalTips: string[];
  nearbyAttractions: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  officialUrl?: string;
  audioStory: {
    en: string;
    hi: string;
    mr: string;
  };
  accessibility: {
    wheelchair: 'Full' | 'Partial' | 'Limited' | 'No';
    ramps: boolean;
    stepFree: boolean;
    stairsNote?: string;
    seatingAvailable: boolean;
    restroomsAvailable: boolean;
    terrain: string;
    walkingDistanceMeters: number;
    demoNote: string;
  };
  offlinePackId?: string;
  schoolQuestId?: string;
}

export interface Story {
  id: string;
  title: string;
  marathiTitle: string;
  subtitle: string;
  category: 'Legends & Myths' | 'History' | 'Architecture' | 'People' | 'Food' | 'Crafts' | 'Local Traditions';
  type: 'Historical Record' | 'Local Legend / Traditional Story';
  readingTime: string;
  image: string;
  historicalContext: string;
  narrative: string[];
  importantFacts: string[];
  relatedDestinationIds: string[];
  suggestedExperiences: string[];
  audioScript: {
    en: string;
    hi: string;
    mr: string;
  };
}

export interface SpecialityEvent {
  id: string;
  title: string;
  marathiTitle: string;
  category: 'Festival' | 'Fair' | 'Religious' | 'Performance' | 'Craft Market' | 'Food Tradition' | 'Historic Anniversary';
  dateLabel: string;
  month: number; // 1-12
  day?: number;
  image: string;
  isToday?: boolean;
  history: string;
  meaning: string;
  traditions: string[];
  keyActivities: string[];
  location: string;
  timings: string;
  whatVisitorsExpect: string;
  traditionalFood: string[];
  craftConnections: string[];
  visitorAdvice: string[];
  coordinates: { lat: number; lng: number };
  status?: 'Pending Review' | 'Approved' | 'Demo Event';
  organiser?: string;
}

export interface HeritageTrail {
  id: string;
  title: string;
  marathiTitle: string;
  description: string;
  stopsCount: number;
  stopIds: string[];
  duration: string;
  distance: string;
  recommendedStartTime: string;
  highlights: string[];
  image: string;
}

export interface GuideProfile {
  id: string;
  name: string;
  marathiName: string;
  photo: string;
  rating: number;
  reviewCount: number;
  languages: string[];
  expertise: string[];
  areasCovered: string[];
  tourDuration: string;
  indicativeRate: string;
  availability: string;
  story: string;
  placesCovered: string[];
  isVerified: boolean;
  isDemo: boolean;
}

export interface ArtisanProfile {
  id: string;
  name: string;
  workshopName: string;
  craftType: string;
  photo: string;
  location: string;
  thePerson: string;
  theCraft: string;
  theHeritage: string;
  howToExperience: string;
  workshopAvailability: string;
  isDemo: boolean;
}

export interface CulturalExperience {
  id: string;
  title: string;
  category: string;
  duration: string;
  location: string;
  culturalContext: string;
  language: string;
  accessibilityInfo: string;
  approxCost: string;
  image: string;
  isDemo: boolean;
}

export type ReportStatus = 'Reported' | 'Seen' | 'Action in Progress' | 'Fixed';

export type ProblemType = 
  | 'Crack / Structural Damage'
  | 'Graffiti'
  | 'Litter'
  | 'Blocked Path'
  | 'Unsafe Area'
  | 'Water Damage'
  | 'Damaged Signage'
  | 'Accessibility Problem'
  | 'Other';

export interface HeritageReport {
  id: string; // e.g. SKT-HW-1042
  destinationId: string;
  destinationName: string;
  problemType: ProblemType;
  description?: string;
  photoUrl?: string;
  timestamp: string;
  status: ReportStatus;
  suggestedCustodian: string;
  locationCoords?: { lat: number; lng: number };
  isDemo?: boolean;
}

export interface OfflinePack {
  id: string;
  title: string;
  destinationId: string;
  sizeMb: number;
  summary: string;
  highlights: string[];
  emergencyContacts: { service: string; number: string }[];
  audioIncluded: boolean;
  lastUpdated: string;
}

export interface SchoolQuest {
  id: string;
  destinationId: string;
  destinationName: string;
  title: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  badgeName: string;
  badgeIcon: string;
}

export interface ItineraryItem {
  id: string;
  destinationId: string;
  customTime?: string;
  notes?: string;
  addedAt: string;
}
