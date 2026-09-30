export interface CulturalCard {
  id: string;
  title: string;
  marathiTitle: string;
  subtitle: string;
  description: string;
  image: string;
  category: 'Craft' | 'Bazaar' | 'Tradition' | 'Cuisine';
  locationNote: string;
}

export const LOCAL_CULTURE_ITEMS: CulturalCard[] = [
  {
    id: 'culture-himroo',
    title: 'Himroo Weaving Heritage',
    marathiTitle: 'हिमरू विणकाम परंपरा',
    subtitle: 'The 14th-century royal textile combining silk and cotton on traditional pit-looms.',
    description: 'Invented during the Tughlaq era as a breathable royal alternative to heavy silk brocades, Himroo features Persian-inspired floral motifs, paisleys, and Ajanta geometric designs woven on century-old handlooms in the historic city quarters.',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
    category: 'Craft',
    locationNote: 'Zafar Gate & Old City Handloom Guilds'
  },
  {
    id: 'culture-paithani',
    title: 'Paithani Saree Legacy',
    marathiTitle: 'पैठणी पैठणची शान',
    subtitle: 'Two millennia of real gold zari and peacock tapestry weaving.',
    description: 'Known as the Queen of Silks across India, an authentic Paithani saree is hand-woven using fine mulberry silk and gold zari threads. Motifs like the Bangadi-Mor and Asavali vine symbolize Maharashtrian auspiciousness and royal heritage.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    category: 'Craft',
    locationNote: 'Paithan & Sambhajinagar Weavers Showrooms'
  },
  {
    id: 'culture-gulmandi-bazaar',
    title: 'Gulmandi & Shahgunj Historic Bazaars',
    marathiTitle: 'गुलमंडी आणि शाहगंजचे ऐतिहासिक बाजार',
    subtitle: 'Centuries-old market lanes resonant with spices, textiles, and copperware.',
    description: 'The pulsing commercial heart of the old city since the Mughal era. From aromatic Marathwada spice merchants and traditional brass utensil smiths to vibrant textile stalls, Gulmandi offers a lively immersion into daily local life.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    category: 'Bazaar',
    locationNote: 'Gulmandi Chowk & Shahgunj'
  },
  {
    id: 'culture-bidri-metal',
    title: 'Bidriware Silver Inlay Craft',
    marathiTitle: 'बिदरी कातीव व चांदीचे नक्षीकाम',
    subtitle: 'Pure silver wire hammered into dark oxidized zinc-copper vessels.',
    description: 'Master craftsmen chisel intricate floral arabesques into cast alloy before utilizing historic fort soil to oxidize the base metal into a velvet charcoal black, creating a dazzling contrast with glistening silver wires.',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
    category: 'Craft',
    locationNote: 'Shahgunj Metal Artisans Quarter'
  }
];

export const REGIONAL_CUISINE_ITEMS: CulturalCard[] = [
  {
    id: 'cuisine-naan-qalia',
    title: 'Authentic Naan Qalia',
    marathiTitle: 'अस्सल नान-कालिया',
    subtitle: 'The historic royal delicacy cooked with over 30 fragrant spices in giant copper cauldrons.',
    description: 'Invented in 1327 CE to sustain Muhammad bin Tughlaq’s imperial court and troops, Naan Qalia consists of soft, blistered fermented naan baked in clay tandoors, paired with an intensely aromatic slow-simmered gravy.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    category: 'Cuisine',
    locationNote: 'Bhadkal Gate & City Market Dhabas'
  },
  {
    id: 'cuisine-maharashtrian-thali',
    title: 'Marathwada Rural Thali',
    marathiTitle: 'मराठवाडी अस्सल गावरान थाळी',
    subtitle: 'Rustic Jowar Bhakri, fiery Mirchi Thecha, and slow-cooked Pithla.',
    description: 'A comforting, earthy celebration of local Deccan farming traditions: steaming hot sorghum bread (Jowar Bhakri) patted by hand, served with crushed green chilli thecha, groundnut chutney, seasoned chickpea curry (Pithla), and fresh white butter.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    category: 'Cuisine',
    locationNote: 'Local Heritage Bhojanalayas & Highway Dhabas'
  },
  {
    id: 'cuisine-puran-poli',
    title: 'Traditional Puran Poli & Festive Sweets',
    marathiTitle: 'गुळवणी पुरणपोळी व पारंपरिक मिष्टान्न',
    subtitle: 'Delicate hand-stretched flatbreads stuffed with spiced chana dal and golden jaggery.',
    description: 'The golden crown of Maharashtrian celebrations, flavoured with freshly crushed cardamom and nutmeg, roasted over iron griddles and generously drizzled with pure warm cow ghee (Tup) or creamy coconut milk.',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    category: 'Cuisine',
    locationNote: 'Sweetmakers across Kranti Chowk and Gulmandi'
  },
  {
    id: 'cuisine-dudhi-halwa',
    title: 'Royal Dudhi Halwa & Shahi Paan',
    marathiTitle: 'शाही दुधी हलवा आणि खास पान',
    subtitle: 'Grated bottle gourd slow-reduced in mawa, saffron, and silver vark.',
    description: 'A legendary Deccan dessert served at royal banquets, cooked down with sweetened khoya, roasted pistachios, and saffron. Typically concluded with a celebratory rose-perfumed Maghai or Meetha Paan.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    category: 'Cuisine',
    locationNote: 'City Center Confectioneries'
  }
];
