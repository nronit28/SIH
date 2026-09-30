import { HeritageReport, ProblemType } from '../types';

export const INITIAL_HERITAGE_REPORTS: HeritageReport[] = [
  {
    id: 'SKT-HW-1042',
    destinationId: 'ellora-caves',
    destinationName: 'Ellora Caves',
    problemType: 'Crack / Structural Damage',
    description: 'Minor displacement noticed on the stone paved pathway leading between Cave 11 and Cave 12. Loose stone may cause tripping for elderly visitors.',
    timestamp: '2026-09-27 10:45 AM',
    status: 'Action in Progress',
    suggestedCustodian: 'Archaeological Survey of India (ASI) — Aurangabad Circle, Conservation Division',
    locationCoords: { lat: 20.0268, lng: 75.1793 },
    photoUrl: 'https://images.unsplash.com/photo-1600100397608-f010f4439c28?auto=format&fit=crop&w=600&q=80',
    isDemo: true
  },
  {
    id: 'SKT-HW-1038',
    destinationId: 'bibi-ka-maqbara',
    destinationName: 'Bibi Ka Maqbara',
    problemType: 'Litter',
    description: 'Dry leaves and plastic water bottles accumulated in the eastern lateral garden reflection channel after weekend visitors.',
    timestamp: '2026-09-25 04:15 PM',
    status: 'Fixed',
    suggestedCustodian: 'ASI Horticulture & Maintenance Wing',
    locationCoords: { lat: 19.9015, lng: 75.3203 },
    photoUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80',
    isDemo: true
  },
  {
    id: 'SKT-HW-1035',
    destinationId: 'daulatabad-fort',
    destinationName: 'Daulatabad Fort (Devagiri)',
    problemType: 'Damaged Signage',
    description: 'The multilingual informational plaque in front of the Chand Minar base has weathered lettering and needs repainting or replacement.',
    timestamp: '2026-09-22 11:30 AM',
    status: 'Seen',
    suggestedCustodian: 'ASI Interpretation & Signage Cell',
    locationCoords: { lat: 19.9429, lng: 75.2131 },
    photoUrl: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=600&q=80',
    isDemo: true
  },
  {
    id: 'SKT-HW-1029',
    destinationId: 'panchakki',
    destinationName: 'Panchakki (Water Mill)',
    problemType: 'Water Damage',
    description: 'Algae build-up and leaf debris near the overflow drain causing minor backflow in the northern side channel.',
    timestamp: '2026-09-18 09:20 AM',
    status: 'Fixed',
    suggestedCustodian: 'Maharashtra State Waqf Board & Municipal Heritage Cell',
    locationCoords: { lat: 19.8943, lng: 75.3168 },
    photoUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80',
    isDemo: true
  },
  {
    id: 'SKT-HW-1018',
    destinationId: 'aurangabad-caves',
    destinationName: 'Aurangabad Caves',
    problemType: 'Accessibility Problem',
    description: 'The wooden handrail along the flight of steps between Cave 6 and Cave 7 feels loose and shakes when held.',
    timestamp: '2026-09-14 03:00 PM',
    status: 'Action in Progress',
    suggestedCustodian: 'ASI Conservation Wing & State PWD',
    locationCoords: { lat: 19.9228, lng: 75.3182 },
    photoUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80',
    isDemo: true
  }
];

export const PROBLEM_TYPES_CONFIG: { type: ProblemType; label: string; icon: string; description: string }[] = [
  {
    type: 'Crack / Structural Damage',
    label: 'Structural Damage',
    icon: 'Hammer',
    description: 'Cracks in stone, displaced masonry, crumbling plaster, or foundation issues.'
  },
  {
    type: 'Graffiti',
    label: 'Graffiti / Vandalism',
    icon: 'PenTool',
    description: 'Scratched names, ink, spray paint, or carving on ancient heritage surfaces.'
  },
  {
    type: 'Litter',
    label: 'Litter & Waste',
    icon: 'Trash2',
    description: 'Plastic bottles, food wrappers, or untended garbage bins in monument areas.'
  },
  {
    type: 'Blocked Path',
    label: 'Blocked Walkway',
    icon: 'Footprints',
    description: 'Overgrown thorny shrubs, fallen stones, or construction debris blocking visitors.'
  },
  {
    type: 'Unsafe Area',
    label: 'Safety Hazard',
    icon: 'AlertTriangle',
    description: 'Missing safety railings along steep cliffs, exposed electrical wires, or slippery surfaces.'
  },
  {
    type: 'Water Damage',
    label: 'Water Leak / Drainage',
    icon: 'Droplets',
    description: 'Water seepage inside ancient cave walls, stagnant pools, or choked heritage drains.'
  },
  {
    type: 'Damaged Signage',
    label: 'Damaged Signboard',
    icon: 'FileText',
    description: 'Broken, faded, or unreadable informational boards or missing direction markers.'
  },
  {
    type: 'Accessibility Problem',
    label: 'Accessibility Issue',
    icon: 'Accessibility',
    description: 'Broken wheelchair ramp, blocked step-free path, or non-functional tactile assistance.'
  },
  {
    type: 'Other',
    label: 'Other Concern',
    icon: 'HelpCircle',
    description: 'Any other visible threat or maintenance concern not listed above.'
  }
];

export const CUSTODIAN_ROUTING_MAP: Record<string, string> = {
  'ellora-caves': 'Archaeological Survey of India (ASI) — Aurangabad Circle (Central Authority)',
  'ajanta-caves': 'Archaeological Survey of India (ASI) — Ajanta Sub-Circle',
  'bibi-ka-maqbara': 'Archaeological Survey of India (ASI) — Conservation Wing',
  'daulatabad-fort': 'Archaeological Survey of India (ASI) — Fortifications Cell',
  'panchakki': 'Maharashtra State Waqf Board & CSMC Heritage Conservation Committee',
  'aurangabad-caves': 'Archaeological Survey of India (ASI) — Aurangabad Circle',
  'soneri-mahal': 'Directorate of Archaeology & Museums, Government of Maharashtra',
  'himayat-bagh': 'Department of Horticulture & Chhatrapati Sambhajinagar Municipal Corporation',
  'salim-ali-lake': 'Chhatrapati Sambhajinagar Municipal Corporation (CSMC) — Environment Cell',
  'siddharth-garden': 'Municipal Gardens & Zoo Authority, CSMC',
  'grishneshwar-temple': 'Shri Grishneshwar Devasthan Trust & State Religious Endowments',
  'bhadra-maruti': 'Bhadra Maruti Sansthan, Khuldabad'
};
