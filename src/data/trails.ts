import { HeritageTrail } from '../types';

export const TRAILS_DATA: HeritageTrail[] = [
  {
    id: 'one-day-heritage-trail',
    title: 'One Day Heritage Trail',
    marathiTitle: 'एकदिवसीय वारसा सफर',
    description: 'The definitive royal and architectural loop within the immediate city limits. Experience Mughal mausoleums, 17th-century hydraulic engineering, Buddhist rock art, and Rajput palaces.',
    stopsCount: 4,
    stopIds: ['bibi-ka-maqbara', 'panchakki', 'aurangabad-caves', 'soneri-mahal'],
    duration: '6 – 7 hours',
    distance: 'Approx. 18 km total loop',
    recommendedStartTime: '9:00 AM at Panchakki',
    highlights: [
      'Morning calm at Panchakki and feeding the sacred carp',
      'Climbing to the Aurangabad Caves for breathtaking panoramic valley views',
      'Exploring royal Bundela frescoes and artifacts at Soneri Mahal',
      'Golden hour sunset and reflection photography at Bibi Ka Maqbara'
    ],
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ancient-wonders-trail',
    title: 'Ancient Wonders Trail',
    marathiTitle: 'अभिजात आश्चर्य सफर — किल्ले व लेणी',
    description: 'An unforgettable expedition to two millennia of Deccan engineering. Scale the impregnable summit of Daulatabad Fort, explore the monolithic wonder of Kailasa at Ellora, and seek blessings at the sacred red-stone Grishneshwar Jyotirlinga.',
    stopsCount: 3,
    stopIds: ['daulatabad-fort', 'ellora-caves', 'grishneshwar-temple'],
    duration: '8 – 9 hours',
    distance: 'Approx. 36 km one way via NH 753F',
    recommendedStartTime: '7:30 AM to beat midday heat at Daulatabad',
    highlights: [
      'Conquering the dark Andhari maze and summit canon of Daulatabad Fort',
      'Standing in awe before the world’s largest monolithic temple, Kailasa (Cave 16)',
      'Evening peace and sacred aarti at the Ahilyabai Holkar Grishneshwar temple',
      'Tasting traditional Dhaba cuisine and fresh sugarcane juice along the highway'
    ],
    image: 'https://images.unsplash.com/photo-1600100397608-f010f4439c28?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'gardens-slow-travel',
    title: 'Gardens & Slow Travel Trail',
    marathiTitle: 'उद्यान व निवांत सफर',
    description: 'A serene and unhurried itinerary designed for nature lovers, seniors, and peaceful walks. Stroll under 300-year-old fruit groves, observe migratory wetland birds, and relax beside musical fountains.',
    stopsCount: 3,
    stopIds: ['himayat-bagh', 'salim-ali-lake', 'siddharth-garden'],
    duration: '4 – 5 hours',
    distance: 'Approx. 9 km within city perimeter',
    recommendedStartTime: '7:00 AM for early morning birdwatching',
    highlights: [
      'Crisp morning walks through the 400-acre historic Mughal orchard at Himayat Bagh',
      'Spotting painted storks and egrets from the Salim Ali Lake promenade',
      'Sampling local tea and snacks near Delhi Gate',
      'Evening relaxation in the landscaped flower gardens of Siddharth Park'
    ],
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80'
  }
];
