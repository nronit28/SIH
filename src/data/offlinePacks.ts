import { OfflinePack } from '../types';

export const OFFLINE_PACKS_DATA: OfflinePack[] = [
  {
    id: 'pack-ellora',
    title: 'Ellora Caves Offline Heritage Pack',
    destinationId: 'ellora-caves',
    sizeMb: 14.8,
    summary: 'Complete offline pocket companion for all 34 caves at Ellora. Includes full architectural map, offline transcripts of the Kailasa Temple, step-by-step cave sequence guide, offline audio scripts in English, Hindi & Marathi, and emergency travel contacts.',
    highlights: [
      'Detailed offline guide to Cave 16 (Kailasa Temple monolithic marvel)',
      'Offline walking route map from Buddhist (Caves 1–12) to Jain cluster (Caves 30–34)',
      'Audio transcripts and offline speech narrative for non-network zones',
      'Visitor survival guide: shade spots, water points, and certified guides contact list',
      'Emergency helpline and nearest medical centres in Verul / Khuldabad'
    ],
    emergencyContacts: [
      { service: 'Ellora ASI Monument Security Post', number: '+91 2437 244561' },
      { service: 'Khuldabad Rural Government Hospital', number: '+91 2437 241225' },
      { service: 'Maharashtra Tourism Tourist Police Helpline', number: '112 / 1363' }
    ],
    audioIncluded: true,
    lastUpdated: 'September 2026'
  },
  {
    id: 'pack-ajanta',
    title: 'Ajanta Caves Offline Heritage Pack',
    destinationId: 'ajanta-caves',
    sizeMb: 18.2,
    summary: 'Comprehensive offline guide for the 30 Buddhist cave sanctuaries along the Waghora horseshoe gorge where mobile network coverage is naturally limited by deep basalt canyons.',
    highlights: [
      'High-resolution offline guides to world-famous murals in Cave 1 (Padmapani) and Cave 2',
      'The 24-foot Reclining Buddha iconographic guide (Cave 26)',
      'Offline trail map from the T-point shuttle terminus to the upper horseshoe viewpoint',
      'Multilingual audio scripts ready for offline device reading',
      'Transport bus schedules and return connectivity to Chhatrapati Sambhajinagar'
    ],
    emergencyContacts: [
      { service: 'Ajanta Caves ASI Information Counter', number: '+91 2438 244227' },
      { service: 'Fardapur Police Station & Tourist Assistance', number: '+91 2438 244233' },
      { service: 'MTDC Ajanta Visitor Centre Helpdesk', number: '+91 2438 244262' }
    ],
    audioIncluded: true,
    lastUpdated: 'September 2026'
  }
];
