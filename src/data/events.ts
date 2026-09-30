import { SpecialityEvent } from '../types';

export const EVENTS_DATA: SpecialityEvent[] = [
  {
    id: 'karnapura-mela',
    title: 'Karnapura Mela & Navratri Jatra',
    marathiTitle: 'कर्णपुरा यात्रा व नवरात्र महोत्सव',
    category: 'Fair',
    dateLabel: 'Annual Navratri Season (Autumn)',
    month: 10,
    day: 15,
    isToday: true,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    history: 'The historic Karnapura Mela dates back over 400 years to the Yadava and Maratha periods. Centred around the venerable Karnapura Devi temple in the heart of the city, this annual congregation is one of Marathwada’s largest and oldest traditional public fairs, drawing rural farmers, craftspersons, folk performers, and urban families for over nine days.',
    meaning: 'The fair celebrates divine feminine energy (Shakti), agricultural bounty after the monsoon harvest, and the reunion of regional communities across caste and communal lines.',
    traditions: [
      'Ghatasthapana ritual with nine varieties of holy grain sprouting before the goddess.',
      'Nightly Gondhal and Jagran devotional folk singing sessions by traditional hereditary artists.',
      'Offering of purple silk Khan-Choli and fresh marigold garlands to the goddess.',
      'Traditional village cattle and brassware trading fairs extending through surrounding open grounds.'
    ],
    keyActivities: [
      'Devi Darshan in the historic stone sanctum adorned with floral arches',
      'Giant wooden and iron Ferris wheels, carousels, and puppet theatre booths',
      'Traditional brass, copper, and cast-iron kitchenware market stalls',
      'Sweet confectioners hand-pulling hot Jalebis, Malpua, and Kadakna'
    ],
    location: 'Karnapura Devi Temple Grounds, near Station Road, Chhatrapati Sambhajinagar',
    timings: '6:00 AM – 11:30 PM throughout the festival days',
    whatVisitorsExpect: 'A sensory explosion of vibrant rural colors, sound of dhol-tasha drums, sizzling aroma of traditional street foods, cheerful bargaining at artisanal kitchenware stalls, and a genuinely warm community spirit.',
    traditionalFood: ['Hot fresh Jalebi & Fafda', 'Kadakna (crisp Navratri sweet disks)', 'Bhagar & Peanut Amti (fasting meal)', 'Puran Poli with aromatic Ghee'],
    craftConnections: ['Traditional brass cookware artisans', 'Hand-stitched Godhadis (patchwork quilts)', 'Local terracotta clay pottery', 'Marigold garland weavers'],
    visitorAdvice: [
      'Best visited in the early evening (5:00 PM – 8:00 PM) before peak night crowds assemble.',
      'Wear comfortable walking shoes as the fairgrounds span several acres of pedestrian-only lanes.',
      'Carry cash as smaller rural craft stalls do not always support digital QR codes.',
      'Public parking is designated at the outer railway ground with shuttle rickshaws.'
    ],
    coordinates: {
      lat: 19.8732,
      lng: 75.3125
    },
    status: 'Approved',
    organiser: 'Karnapura Devasthan Trust & Municipal Cultural Council'
  },
  {
    id: 'ajanta-ellora-festival',
    title: 'Ajanta-Ellora International Cultural Festival',
    marathiTitle: 'अजिंठा-वेरूळ आंतरराष्ट्रीय सांस्कृतिक महोत्सव',
    category: 'Performance',
    dateLabel: 'Winter Cultural Celebration',
    month: 1,
    day: 18,
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    history: 'Organized annually by Maharashtra Tourism (MTDC), this prestigious national festival brings India’s finest classical dancers, sitarists, vocalists, and folk ensembles together against the illuminated stone backdrop of Soneri Mahal.',
    meaning: 'Honours the extraordinary sculptural and artistic legacy of the rock-cut cave temples through living performing arts.',
    traditions: [
      'Inaugural Shehnai recital at dusk followed by Kathak, Odissi, and Bharatnatyam classical dances.',
      'Live artisan craft fair showcasing Paithani, Himroo, and Bidri handicrafts alongside performance grounds.',
      'Symposia on Deccan history and archaeological preservation.'
    ],
    keyActivities: [
      'World-class classical Indian dance performances under illuminated Mughal-Rajput arches',
      'Deccan Food Festival serving traditional culinary dishes from across Maharashtra',
      'Evening classical music concerts under the open star-lit sky'
    ],
    location: 'Soneri Mahal Amphitheatre, Dr. BAM University Grounds, Chhatrapati Sambhajinagar',
    timings: '5:30 PM – 10:30 PM (Annual Winter Edition)',
    whatVisitorsExpect: 'Electrifying classical music, majestic lighting on heritage architecture, cultural connoisseurs from across India, and fine artisan exhibitions.',
    traditionalFood: ['Pithla Bhakri with Thecha', 'Shrikhand Puri', 'Hot Masala Milk with saffron and almonds'],
    craftConnections: ['Master Paithani weavers', 'Himroo artisans', 'Sawantwadi lacquer craft'],
    visitorAdvice: [
      'Carry light winter shawls or jackets as Deccan evenings become pleasantly brisk.',
      'Seating is on a first-come, first-served basis; arrive 45 minutes prior to curtain rise.'
    ],
    coordinates: {
      lat: 19.9056,
      lng: 75.3092
    },
    status: 'Approved',
    organiser: 'Maharashtra Tourism Development Corporation (MTDC)'
  },
  {
    id: 'paithan-eknath-shashti',
    title: 'Paithan Saint Eknath Maharaj Shashti Fair',
    marathiTitle: 'पैठणची संत एकनाथ महाराज षष्ठी यात्रा',
    category: 'Religious',
    dateLabel: 'Chaitra Shashti (Spring)',
    month: 3,
    day: 24,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    history: 'Honours the great 16th-century Varkari saint-philosopher Sant Eknath Maharaj on the banks of the sacred Godavari River in Paithan. Pilgrims (Varkaris) march hundreds of miles carrying saffron flags and singing abhangas.',
    meaning: 'Celebrates equality, universal compassion, and devotional selflessness championed by Sant Eknath across the Deccan.',
    traditions: [
      'Palkhi procession of holy padukas to the Godavari River for ritual bath (Snan).',
      'Mass chanting of the "Eknathi Bhagavata" and melodious Kirtans throughout the night.',
      'Community feast (Annachhatra) where thousands of pilgrims eat together regardless of caste.'
    ],
    keyActivities: [
      'Godavari River ghat aarti at sunset with floating leaf lamps (deep daan)',
      'Traditional Bhajan competitions and folk dholki performances',
      'Paithan silk weavers bazaar offering handloom sarees directly from artisan looms'
    ],
    location: 'Sant Eknath Samadhi Mandir & Godavari Ghats, Paithan (50 km from Sambhajinagar)',
    timings: 'Continuous 24-hour festival atmosphere for three days',
    whatVisitorsExpect: 'Deeply moving spiritual energy, sounds of cymbals (Taal) and mridangam drums, devotion, and hospitality from local villagers.',
    traditionalFood: ['Boondi Ladoo Prasad', 'Jowar Bhakri with Shenga Chutney', 'Buttermilk flavoured with cumin'],
    craftConnections: ['Paithani handloom sarees', 'Clay murtis of Vithoba and Rakhumai', 'Brass cymbals (Taal)'],
    visitorAdvice: [
      'Participate in the Godavari evening aarti at sunset for an unforgettable cultural sight.',
      'Dress modestly in Indian traditional clothing when entering temple premises.'
    ],
    coordinates: {
      lat: 19.4795,
      lng: 75.3854
    },
    status: 'Approved',
    organiser: 'Sant Eknath Maharaj Samadhi Sansthan'
  },
  {
    id: 'naan-qalia-heritage-walk',
    title: 'Old City Naan Qalia & Culinary Heritage Evening',
    marathiTitle: 'जुने शहर नान-कालिया व खाद्यसंस्कृती सफर',
    category: 'Food Tradition',
    dateLabel: 'Every Weekend (Curated Cultural Experience)',
    month: 9,
    day: 29,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80',
    history: 'Dating back to 1327 CE during Muhammad bin Tughlaq’s military migration and perfected in the royal kitchens of the Mughals and Nizams, Naan Qalia is Sambhajinagar’s signature heritage dish: large fermented tandoori breads baked in sunken earthen ovens, paired with a slow-simmered aromatic stew cooked in giant copper cauldrons with 30 spices.',
    meaning: 'Reflects the rich confluence of Central Asian baking traditions with regional Deccan spices and slow-cooking techniques.',
    traditions: [
      'Baking Naan in subterranean charcoal tandoors using specialized cloth cushions.',
      'Simmering the Qalia stew in heavy deg (tinned copper cauldrons) over wood embers for over 8 hours.',
      'Tasting traditional Paan (betel leaf) prepared with rose preserve (Gulkand) at historic century-old shops.'
    ],
    keyActivities: [
      'Guided culinary heritage walk through Gulmandi and Shahgunj old market lanes',
      'Interactive demonstration of tandoor dough throwing and slapping technique',
      'Tasting authentic Naan Qalia alongside royal Deccan desserts like Dudhi Halwa'
    ],
    location: 'Bhadkal Gate & Shahgunj Heritage Quarters, Chhatrapati Sambhajinagar',
    timings: '6:30 PM – 9:30 PM (Evenings)',
    whatVisitorsExpect: 'A fragrant food expedition through narrow heritage alleys, sizzling cauldrons, warm camaraderie, and unforgettable local flavours.',
    traditionalFood: ['Authentic Naan Qalia', 'Dudhi Ka Halwa', 'Khuba Roti', 'Shahi Meetha Paan'],
    craftConnections: ['Traditional copper utensil makers of Shahgunj', 'Clay tandoor potters'],
    visitorAdvice: [
      'Come with a hearty appetite; the portions are generous.',
      'Wear comfortable walking footwear for narrow market alleys.'
    ],
    coordinates: {
      lat: 19.8885,
      lng: 75.3214
    },
    status: 'Approved',
    organiser: 'Marathwada Culinary Heritage Guild'
  }
];

export const GENERAL_CULTURAL_HIGHLIGHTS: Record<number, { title: string; marathiTitle: string; subtitle: string; description: string; image: string }> = {
  1: {
    title: 'Winter Heritage & Rock Art Exploration',
    marathiTitle: 'हिवाळी वारसा आणि कातळशिल्प सफर',
    subtitle: 'Crisp Deccan mornings and optimal photography light across Ellora and Ajanta.',
    description: 'January brings crisp mornings and gentle afternoon sunshine to the Deccan plateau, making it the ideal season to walk along the 2-kilometre cliff escarpment of Ellora.',
    image: 'https://images.unsplash.com/photo-1600100397608-f010f4439c28?auto=format&fit=crop&w=1200&q=80'
  },
  9: {
    title: 'Karnapura Navratri Heritage & Devotion',
    marathiTitle: 'कर्णपुरा नवरात्र वारसा व भक्ती परंपरा',
    subtitle: 'Autumn celebrations and community fairs honoring divine Shakti.',
    description: 'During early autumn, the temple grounds of Karnapura Devi awaken with four-century-old fair traditions, folk music, brassware stalls, and devotional celebrations.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80'
  },
  10: {
    title: 'Autumn Festivities & The Splendour of Devi Karnapura',
    marathiTitle: 'शरद ऋतू आणि कर्णपुरा देवीचा उत्सव',
    subtitle: 'Navratri fair festivities, traditional jalebi stalls, and folk arts.',
    description: 'October is filled with the lively beats of dhol-tasha, rural craft markets, and twilight temple visits across the heritage city.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80'
  },
  12: {
    title: 'Mughal Gardens & Sunset at Bibi Ka Maqbara',
    marathiTitle: 'मुघल उद्याने व बिबी का मकबरा सूर्यास्त',
    subtitle: 'Golden hour reflections and the cool breezes of Himayat Bagh.',
    description: 'December sunsets cast long amber shadows on the white dome of Bibi Ka Maqbara while the 400-acre fruit orchards of Himayat Bagh offer peaceful morning birdwatching.',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80'
  }
};
