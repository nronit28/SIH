import { GuideProfile, ArtisanProfile, CulturalExperience } from '../types';

export const LOCAL_GUIDES_DATA: GuideProfile[] = [
  {
    id: 'guide-ramesh-kulkarni',
    name: 'Ramesh Kulkarni',
    marathiName: 'रमेश कुलकर्णी',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    rating: 4.95,
    reviewCount: 148,
    languages: ['Marathi', 'English', 'Hindi'],
    expertise: ['Ellora & Kailasa Monolith', 'Iconography & Epigraphy', 'Vakataka & Rashtrakuta Dynasties'],
    areasCovered: ['Ellora Caves', 'Grishneshwar', 'Khuldabad'],
    tourDuration: '3 – 5 hours',
    indicativeRate: '₹1,500 – ₹2,200 per group walk',
    availability: 'Available Daily (Except Tuesdays)',
    story: 'With over 22 years of licensed heritage guiding at Ellora Caves, Ramesh brings stone inscriptions and mythological panels to life. He holds a Master’s degree in Ancient Indian History and Culture from Dr. BAM University and has guided art historians, visiting dignitaries, and enthusiastic travellers from over 40 countries.',
    placesCovered: ['Ellora Caves (Cave 1 to Cave 34)', 'Grishneshwar Jyotirlinga', 'Ahilyabai Holkar Temple Architecture'],
    isVerified: true,
    isDemo: true
  },
  {
    id: 'guide-farooq-ahmed',
    name: 'Farooq Ahmed',
    marathiName: 'फारुख अहमद',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    rating: 4.88,
    reviewCount: 96,
    languages: ['Hindi', 'Urdu', 'English', 'Marathi'],
    expertise: ['Daulatabad Military Engineering', 'Mughal Architecture', 'Subterranean Maze Navigation'],
    areasCovered: ['Daulatabad Fort', 'Bibi Ka Maqbara', 'Panchakki'],
    tourDuration: '2.5 – 4 hours',
    indicativeRate: '₹1,200 – ₹1,800 per group',
    availability: 'Available All Days',
    story: 'Farooq grew up at the foot of Daulatabad Fort and knows every hidden stone, secret passage, and smoke chimney of the legendary Andhari labyrinth. Carrying a traditional brass lantern, his storytelling transports walkers back to the 14th century when the citadel was the coveted prize of Hindustan.',
    placesCovered: ['Daulatabad Fort Citadel & Andhari Maze', 'Bibi Ka Maqbara Charbagh', 'Old City Historical Gates'],
    isVerified: true,
    isDemo: true
  },
  {
    id: 'guide-ananya-joshi',
    name: 'Ananya Joshi',
    marathiName: 'अनन्या जोशी',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    rating: 4.97,
    reviewCount: 112,
    languages: ['Marathi', 'English', 'French', 'Hindi'],
    expertise: ['Ajanta Buddhist Murals', 'Jataka Tales in Art', 'Mineral Pigment Conservation'],
    areasCovered: ['Ajanta Caves', 'Aurangabad Caves'],
    tourDuration: '4 – 6 hours',
    indicativeRate: '₹2,000 – ₹2,800 per full-day tour',
    availability: 'Wednesday to Sunday',
    story: 'An art historian and heritage educator specializing in classical Buddhist art, Ananya is passionate about deciphering the spiritual symbolism, costume details, and floral motifs of the Ajanta and Aurangabad cave murals for discerning travellers.',
    placesCovered: ['Ajanta Caves 1, 2, 9, 10, 19, 26', 'Aurangabad Caves Western & Eastern Clusters'],
    isVerified: true,
    isDemo: true
  },
  {
    id: 'guide-salim-khan',
    name: 'Salim Khan',
    marathiName: 'सलीम खान',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    rating: 4.82,
    reviewCount: 74,
    languages: ['Urdu', 'Hindi', 'Marathi', 'English'],
    expertise: ['Medieval Hydraulic Engineering', 'Old City Food Heritage', '52 Gates of Sambhajinagar'],
    areasCovered: ['Panchakki', 'Gulmandi Old Bazaars', 'Himayat Bagh'],
    tourDuration: '2 – 3 hours',
    indicativeRate: '₹1,000 – ₹1,500 per walk',
    availability: 'Available Daily',
    story: 'Salim is an authority on the ancient water networks engineered by Malik Ambar and Turktaz Khan. His popular evening heritage walks take visitors through historic water siphons, old copper bazaars, and traditional Naan Qalia tandoor kitchens.',
    placesCovered: ['Panchakki & Baba Shah Musafir Dargah', 'Nahr-e-Ambari Channels', 'Historic City Gates & Bazaars'],
    isVerified: true,
    isDemo: true
  }
];

export const ARTISANS_DATA: ArtisanProfile[] = [
  {
    id: 'artisan-qureshi-himroo',
    name: 'Master Weaver Abdul Ghaffar Qureshi',
    workshopName: 'Qureshi Heritage Himroo Loom Workshop',
    craftType: 'Traditional Himroo Handloom Weaving',
    photo: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    location: 'Zafar Gate, Old Quarters, Chhatrapati Sambhajinagar',
    thePerson: 'The Qureshi family has preserved the delicate art of manual Himroo weaving across four generations. 68-year-old Master Abdul Ghaffar learned the craft at age twelve from his grandfather, who once wove custom ceremonial brocades for Deccan royal courts.',
    theCraft: 'Himroo is an extra-weft figured brocade woven on traditional pit-looms. Blending pure silk with fine cotton yarns, the artisan carefully raises warp threads using thousands of cotton string harnesses (naqsha) to interweave intricate Persian rosettes, paisley motifs, and blooming jasmine vines.',
    theHeritage: 'Born during the 14th-century capital relocation under Muhammad bin Tughlaq, Himroo was specifically created to offer royal courts a cool, breathable Deccan alternative to heavy silk brocades. Today it holds a prestigious Geographical Indication (GI) status.',
    howToExperience: 'Visitors can sit beside Master Abdul at his traditional pit-loom, watch the rhythmic shuttle dance, and try their own hand at weaving a row of silk warp. Handcrafted shawls, stoles, and cushion covers are available directly from the loom without middlemen markups.',
    workshopAvailability: 'Monday to Saturday, 10:00 AM – 6:00 PM (Prior appointment recommended)',
    isDemo: true
  },
  {
    id: 'artisan-paithani-kale',
    name: 'Suresh & Vidya Kale',
    workshopName: 'Shri Eknath Master Paithani Handlooms',
    craftType: 'Pure Silk & Real Zari Paithani Weaving',
    photo: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80',
    location: 'Khadkeshwar / Paithan Heritage Lane, Sambhajinagar',
    thePerson: 'Husband-and-wife master weavers Suresh and Vidya Kale have dedicated over 30 years to the ancient tapestry weaving technique of Paithani. Their heirloom sarees have been presented at national craft summits and preserved in cultural textile archives.',
    theCraft: 'Unlike modern industrial sarees where mechanical jacquards repeat patterns, an authentic Paithani border and pallu are woven entirely by hand using miniature wooden needles (tillis). Gold and silver zari threads are interlocked with silk yarns like a painted tapestry, taking 4 to 9 months per saree.',
    theHeritage: 'Dating back over two millennia to the Satavahana era, the Paithani represents the pinnacle of Maharashtrian textile pride. Motifs like the Bangadi-Mor (peacock encircled in a bangle) and Asavali vine symbolize marital bliss and sacred Deccan prosperity.',
    howToExperience: 'Watch raw silk yarn being dyed with natural extracts, observe the complex tapestry interlocking on wooden frame looms, and learn to distinguish authentic handloom Paithani from power-loom imitations.',
    workshopAvailability: 'Daily 9:30 AM – 7:00 PM',
    isDemo: true
  },
  {
    id: 'artisan-bidri-shaikh',
    name: 'Imtiaz Shaikh',
    workshopName: 'Deccan Bidriware Inlay Studio',
    craftType: 'Zinc-Copper Alloy with Silver Wire Inlay',
    photo: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80',
    location: 'Shahgunj Metal Artisans Quarter, Chhatrapati Sambhajinagar',
    thePerson: 'Imtiaz is a fifth-generation Bidri artisan whose grandfather relocated from Bidar to serve the royal courts of the Deccan. He specializes in chiselling fine silver and brass wire into cast zinc-copper vessels.',
    theCraft: 'Vessels are cast from an alloy of zinc and copper, then meticulously engraved with chisels. Pure silver wire or sheet is hammered into the engraved grooves. Finally, the metal is rubbed with a special historic mud from old fort ramparts containing potassium nitrate, which oxidizes the base metal into velvet black while leaving the silver glistening.',
    theHeritage: 'An ancient craft patronized by Bahmani and Nizam sultans, Bidriware combines Persian calligraphy and geometric symmetry with Deccan floral motifs.',
    howToExperience: 'Observe the dramatic blackening oxidation process with historic fort mud and try chiselling a silver inlay leaf onto a miniature souvenir medallion.',
    workshopAvailability: 'Monday to Saturday, 11:00 AM – 5:30 PM',
    isDemo: true
  }
];

export const CULTURAL_EXPERIENCES_DATA: CulturalExperience[] = [
  {
    id: 'exp-himroo-demo',
    title: 'Live Himroo Handloom Weaving Masterclass',
    category: 'Artisans & Crafts',
    duration: '1.5 hours',
    location: 'Zafar Gate Heritage Quarter',
    culturalContext: 'Understand how 14th-century royal brocades are still woven on pit-looms using silk and cotton yarns.',
    language: 'English, Marathi, Hindi',
    accessibilityInfo: 'Ground floor workshop; step-free entrance.',
    approxCost: '₹350 per participant (Includes souvenir woven bookmark)',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
    isDemo: true
  },
  {
    id: 'exp-food-walk',
    title: 'Old City Naan Qalia & Sweet Street Food Trail',
    category: 'Food Tradition',
    duration: '2.5 hours',
    location: 'Bhadkal Gate to Shahgunj Bazaars',
    culturalContext: 'Taste recipes that fed royal armies in 1327 CE and explore spice merchants in century-old market lanes.',
    language: 'English, Hindi, Marathi',
    accessibilityInfo: 'Walking tour across pedestrian market streets; comfortable shoes recommended.',
    approxCost: '₹600 per food enthusiast (Includes 4 authentic food tastings & tea)',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    isDemo: true
  },
  {
    id: 'exp-gondhal-evening',
    title: 'Traditional Gondhal & Folk Storytelling Evening',
    category: 'Performances',
    duration: '2 hours',
    location: 'Soneri Mahal Open-Air Courtyard',
    culturalContext: 'Experience ancient Maharashtrian devotional balladeers (Gondhalis) reciting mythological legends with sambal and tuntune instruments.',
    language: 'Marathi with English commentary',
    accessibilityInfo: 'Paved amphitheatre with wheelchair access and seating benches.',
    approxCost: '₹250 per ticket',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    isDemo: true
  },
  {
    id: 'exp-daulatabad-night',
    title: 'Lantern Heritage Walk at Daulatabad Foothills',
    category: 'Heritage Walks',
    duration: '2 hours',
    location: 'Daulatabad Outer Moat & Ramparts',
    culturalContext: 'A night-time guided walk exploring medieval defense tactics under the moonlight with historic hurricane lamps.',
    language: 'English, Marathi, Hindi',
    accessibilityInfo: 'Flat outer ramparts; moderately uneven stone paths.',
    approxCost: '₹450 per person',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
    isDemo: true
  }
];
