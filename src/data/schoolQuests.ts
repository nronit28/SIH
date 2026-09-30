import { SchoolQuest } from '../types';

export const SCHOOL_QUESTS_DATA: SchoolQuest[] = [
  {
    id: 'quest-kailasa',
    destinationId: 'ellora-caves',
    destinationName: 'Ellora Caves',
    title: 'The Kailasa Monolith Mystery',
    question: 'The immense Kailasa Temple (Cave 16) at Ellora was carved in which extraordinary direction?',
    options: [
      'Bottom to Top (from ground foundations upward)',
      'Top to Bottom (summit to the floor of the cliff)',
      'Inside to Outside (hollowing caves and pushing out)',
      'Assembled piece-by-piece from stone blocks'
    ],
    correctIndex: 1,
    explanation: 'Correct! Master sculptors started at the highest summit of the basalt cliff and carved downwards. This ingenious method prevented falling rock rubble from damaging the delicate pillars and sculptures below!',
    badgeName: 'Ellora Explorer',
    badgeIcon: 'Compass'
  },
  {
    id: 'quest-daulatabad',
    destinationId: 'daulatabad-fort',
    destinationName: 'Daulatabad Fort (Devagiri)',
    title: 'The Unconquerable Maze Trap',
    question: 'What ingenious psychological defense inside Daulatabad’s "Andhari" maze confused invading armies in the dark?',
    options: [
      'Mirrors reflecting blinding sunlight into their eyes',
      'Sudden blind turns, false drop-offs, and suffocation smoke traps',
      'Flooding the tunnel with boiling oil',
      'Wild leopards kept inside iron cages'
    ],
    correctIndex: 1,
    explanation: 'Spot on! The Andhari was pitch-black with abrupt right angles. Defenders rolled burning charcoal from overhead vents, filling the passageway with thick smoke while intruders stumbled over false steps!',
    badgeName: 'Fort Detective',
    badgeIcon: 'Shield'
  },
  {
    id: 'quest-bibi',
    destinationId: 'bibi-ka-maqbara',
    destinationName: 'Bibi Ka Maqbara',
    title: 'The Deccan Taj Mystery',
    question: 'Bibi Ka Maqbara was built by Prince Azam Shah as an enduring monument of love for whom?',
    options: [
      'His royal Persian wife',
      'His mother, Dilras Banu Begum (Rabia-ud-Daurani)',
      'His grandmother, Mumtaz Mahal',
      'His daughter, Princess Zeb-un-Nissa'
    ],
    correctIndex: 1,
    explanation: 'Excellent! While the Taj Mahal in Agra was built by a husband for his wife, Bibi Ka Maqbara was built out of deep filial love by a grieving son for his mother!',
    badgeName: 'Story Seeker',
    badgeIcon: 'Heart'
  },
  {
    id: 'quest-panchakki',
    destinationId: 'panchakki',
    destinationName: 'Panchakki (Water Mill)',
    title: 'The Ancient Green Power Engine',
    question: 'Where did the underground clay pipeline of Panchakki bring fresh mountain water from without any modern fuel or electricity?',
    options: [
      'The Godavari River, 50 km away',
      'Rainwater caught on the city roof tiles',
      'Mountain springs in the Harsul hills over 8 km away',
      'A deep underground borewell powered by bullocks'
    ],
    correctIndex: 2,
    explanation: 'Brilliant! Earthen clay siphon pipes carried mountain spring water 8 kilometres from the Harsul hills using pure gravity to spin the heavy stone mill and grind flour for travelers!',
    badgeName: 'Heritage Protector',
    badgeIcon: 'Droplets'
  },
  {
    id: 'quest-ajanta',
    destinationId: 'ajanta-caves',
    destinationName: 'Ajanta Caves',
    title: 'The Jungle Rediscovery',
    question: 'What famous figure painted on the wall of Ajanta Cave 1 holds a blue lotus with an expression of serene compassion?',
    options: [
      'King Harishena of the Vakataka dynasty',
      'Bodhisattva Padmapani (Bearer of the Lotus)',
      'Greek ambassador Megasthenes',
      'Emperor Ashoka the Great'
    ],
    correctIndex: 1,
    explanation: 'You got it! Bodhisattva Padmapani, holding the tender blue lotus in Cave 1, is recognized globally as one of the ultimate masterworks of ancient Indian classical art!',
    badgeName: 'Culture Champion',
    badgeIcon: 'Award'
  }
];

export interface SchoolFieldTripPlan {
  destinationId: string;
  monumentName: string;
  gradeLevel: string;
  beforeVisit: {
    storySnippet: string;
    keyVocabulary: { word: string; meaning: string }[];
    prepQuestion: string;
  };
  duringVisit: {
    challenges: string[];
    sketchingPrompt: string;
  };
  afterVisit: {
    reflectionPrompts: string[];
    classroomActivity: string;
  };
}

export const SCHOOL_FIELD_TRIP_PLANS: Record<string, SchoolFieldTripPlan> = {
  'ellora-caves': {
    destinationId: 'ellora-caves',
    monumentName: 'Ellora Caves & Kailasa Temple',
    gradeLevel: 'Classes 5 to 10 (History & Arts Curriculum)',
    beforeVisit: {
      storySnippet: 'Over 1,200 years ago, Rashtrakuta stone cutters carved an entire mountain from the peak downwards. They did not glue or mortar a single stone together — they simply chipped away everything that wasn’t the temple!',
      keyVocabulary: [
        { word: 'Monolith', meaning: 'A single, massive block or structure carved from one continuous piece of stone.' },
        { word: 'Basalt', meaning: 'Hard, dark volcanic rock formed from cooling Deccan volcanic lava millions of years ago.' },
        { word: 'Syncretism', meaning: 'The peaceful coexistence and blending of different religious and cultural traditions (Buddhism, Hinduism, Jainism).' }
      ],
      prepQuestion: 'Why do you think the masons chose to carve from the top down instead of starting from the ground?'
    },
    duringVisit: {
      challenges: [
        'Find the two life-sized monolithic elephants carved in the courtyard of Cave 16 and count their tusks.',
        'Locate the high-relief panel where 10-headed Ravana attempts to shake Mount Kailash.',
        'Find Cave 10 (the Carpenter’s Cave) and listen to how sound echoes off the vaulted stone ceiling.'
      ],
      sketchingPrompt: 'Sketch the arched shape of a rock-cut pillar capital or one of the decorative lotus ceiling medallions.'
    },
    afterVisit: {
      reflectionPrompts: [
        'How did workers manage without electricity, bulldozers, or metal cranes in the 8th century?',
        'What does having Buddhist, Hindu, and Jain caves together in one mountain tell us about ancient Indian society?'
      ],
      classroomActivity: 'Use soft clay or soap blocks to practice "subtractive carving" — carving a simple animal or arch from the top downward!'
    }
  },
  'daulatabad-fort': {
    destinationId: 'daulatabad-fort',
    monumentName: 'Daulatabad Fort (Devagiri)',
    gradeLevel: 'Classes 6 to 12 (Medieval History & Defense Architecture)',
    beforeVisit: {
      storySnippet: 'Devagiri was the fortress that Sultan Muhammad bin Tughlaq chose as the capital of all India in 1327. Its defenders designed it so that even if soldiers climbed the first five walls, a pitch-black labyrinth awaited them inside.',
      keyVocabulary: [
        { word: 'Citadel', meaning: 'A fortress, typically on high ground, protecting or dominating a city.' },
        { word: 'Moat', meaning: 'A deep, wide ditch surrounding a castle, fort, or town, typically filled with water.' },
        { word: 'Bastion', meaning: 'A projecting part of a fortification built at an angle to the line of a wall to allow defensive fire.' }
      ],
      prepQuestion: 'What natural features of a conical volcanic hill make it ideal for defending a medieval city?'
    },
    duringVisit: {
      challenges: [
        'Spot the spiked iron studs on the entrance gates and observe at what height an elephant’s forehead would strike them.',
        'Observe how the lower rock cliff of the hill was artificially scraped smooth and vertical.',
        'Walk through the dark Andhari tunnel with your guide and notice the overhead smoke vents.'
      ],
      sketchingPrompt: 'Draw the profile of the 30-metre pink Chand Minar tower with its balconies.'
    },
    afterVisit: {
      reflectionPrompts: [
        'If you were a medieval military engineer, what other defense traps would you design?',
        'Why did Muhammad bin Tughlaq’s shifting of the capital from Delhi to Daulatabad face so many historical challenges?'
      ],
      classroomActivity: 'Create a cardboard model or map of concentric fort ramparts with a moat and hidden drawbridge!'
    }
  }
};
