import { createContext } from "react";
const mentors = [
    {
      id: 1,
      name: "Savitri Devi",
      email: "savitri.handloom@artic.in",
      role: "mentor",
      bio: "Master of handloom weaving from Varanasi with over 40 years of experience. She teaches the art of Banarasi sari weaving, a heritage passed from her mother.",
      skills: ["Handloom Weaving", "Natural Dyeing", "Banarasi Techniques"],
      profilePic: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 2,
      name: "Raghunath Prasad",
      email: "raghunath.pottery@artic.in",
      role: "mentor",
      bio: "Traditional potter from Khurja known for his intricate clay work and eco-friendly pottery methods, keeping alive the soil-based art of his ancestors.",
      skills: ["Terracotta Craft", "Wheel Pottery", "Clay Sculpting"],
      profilePic: "https://randomuser.me/api/portraits/men/60.jpg"
    },
    {
      id: 3,
      name: "Meenakshi Bai",
      email: "meenakshi.folkart@artic.in",
      role: "mentor",
      bio: "Folk artist preserving the dying art of Madhubani painting. She has trained hundreds of learners in her village in Bihar.",
      skills: ["Madhubani Painting", "Natural Colors", "Folk Art Teaching"],
      profilePic: "https://randomuser.me/api/portraits/women/58.jpg"
    },
    {
      id: 4,
      name: "Balbir Singh",
      email: "balbir.metalcraft@artic.in",
      role: "mentor",
      bio: "Expert in traditional brass metalwork from Moradabad, preserving techniques that date back centuries in Indian culture.",
      skills: ["Brass Engraving", "Metal Moulding", "Traditional Ornament Making"],
      profilePic: "https://randomuser.me/api/portraits/men/66.jpg"
    },
    {
      id: 5,
      name: "Jamuna Tayi",
      email: "jamuna.handembroidery@artic.in",
      role: "mentor",
      bio: "Veteran in hand embroidery, especially the Lambadi and Kutch styles, known for intricate stitching rooted in tribal storytelling.",
      skills: ["Lambadi Embroidery", "Thread Art", "Cultural Stitching"],
      profilePic: "https://randomuser.me/api/portraits/women/70.jpg"
    },
    {
      id: 6,
      name: "Fakir Chand",
      email: "fakir.warli@artic.in",
      role: "mentor",
      bio: "A tribal elder from Maharashtra practicing Warli art, teaching the sacred geometry and symbolism behind every stroke.",
      skills: ["Warli Art", "Tribal Symbolism", "Wall Murals"],
      profilePic: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    {
      id: 7,
      name: "Sundari Amma",
      email: "sundari.basketry@artic.in",
      role: "mentor",
      bio: "Expert in traditional bamboo basket weaving from Kerala, she creates eco-friendly designs inspired by temple rituals.",
      skills: ["Basket Weaving", "Palm Leaf Art", "Eco Crafts"],
      profilePic: "https://randomuser.me/api/portraits/women/50.jpg"
    },
    {
      id: 8,
      name: "Hariram Suthar",
      email: "hariram.wood@artic.in",
      role: "mentor",
      bio: "Wood carving maestro from Rajasthan known for doors and temple art with intricate floral patterns and religious motifs.",
      skills: ["Wood Carving", "Traditional Joinery", "Relief Sculpture"],
      profilePic: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      id: 9,
      name: "Basanti Kumari",
      email: "basanti.kalamkari@artic.in",
      role: "mentor",
      bio: "Kalamkari painter who uses natural dyes and hand-drawn techniques to depict mythological stories in Andhra Pradesh.",
      skills: ["Kalamkari Art", "Natural Dyeing", "Storytelling Through Art"],
      profilePic: "https://randomuser.me/api/portraits/women/48.jpg"
    },
    {
      id: 10,
      name: "Gopal Mishra",
      email: "gopal.stonecutter@artic.in",
      role: "mentor",
      bio: "Stone sculptor from Odisha specializing in temple carving and Jagannath figurines passed down through generations.",
      skills: ["Stone Carving", "Temple Architecture", "Sculpting"],
      profilePic: "https://randomuser.me/api/portraits/men/40.jpg"
    },
    {
      id: 11,
      name: "Leela Devi",
      email: "leela.tribaltextiles@artic.in",
      role: "mentor",
      bio: "Expert in tribal textiles and Bagh printing from Madhya Pradesh, using age-old block techniques with natural elements.",
      skills: ["Bagh Print", "Tribal Textile Design", "Block Carving"],
      profilePic: "https://randomuser.me/api/portraits/women/42.jpg"
    },
    {
      id: 12,
      name: "Thangjam Singh",
      email: "thangjam.martial@artic.in",
      role: "mentor",
      bio: "Practitioner of Thang-Ta, the ancient martial art of Manipur, blending dance, weapons, and meditation.",
      skills: ["Thang-Ta", "Sword Art", "Traditional Movement"],
      profilePic: "https://randomuser.me/api/portraits/men/38.jpg"
    },
    {
      id: 13,
      name: "Kamla Bhai",
      email: "kamla.beading@artic.in",
      role: "mentor",
      bio: "Beadwork artisan from Gujarat known for detailed tribal jewelry and festive traditional designs passed down from her grandmother.",
      skills: ["Beading", "Tribal Jewelry", "Embroidery Accents"],
      profilePic: "https://randomuser.me/api/portraits/women/36.jpg"
    },
    {
      id: 14,
      name: "Rajveer Dholak",
      email: "rajveer.percussion@artic.in",
      role: "mentor",
      bio: "Dholak maker from Uttar Pradesh who still follows the traditional method of wood curing and leather fitting.",
      skills: ["Dholak Making", "Instrument Crafting", "Sound Tuning"],
      profilePic: "https://randomuser.me/api/portraits/men/36.jpg"
    },
    {
      id: 15,
      name: "Pushpa Nair",
      email: "pushpa.incense@artic.in",
      role: "mentor",
      bio: "Incense stick craftswoman who prepares masala agarbatti using sacred herbs and oils from Tamil Nadu forests.",
      skills: ["Agarbatti Making", "Herbal Mixing", "Fragrance Crafting"],
      profilePic: "https://randomuser.me/api/portraits/women/38.jpg"
    }
  ];
// 🌿 8 Powerful Traditional Skill Categories

import imageAssets from '../assets/assets';

export const categories = [
  {
    title: "Weaving",
    icon: "🧵",
    description: "Explore the rich handloom and weaving traditions.",
    images: [imageAssets.weaving1, imageAssets.weaving2],
  },
  {
    title: "Pottery",
    icon: "🏺",
    description: "Discover India’s traditional clay craftsmanship.",
    images: [imageAssets.pottery1, imageAssets.pottery2],
  },
  {
    title: "Music",
    icon: "🎶",
    description: "Experience the sound of India’s folk heritage.",
    images: [imageAssets.music3, imageAssets.music4],
  },
  {
    title: "Painting",
    icon: "🎨",
    description: "Dive into vibrant tribal & folk painting styles.",
    images: [imageAssets.painting1, imageAssets.painting2, imageAssets.tribal3]},
  {
    title: "Sacred Arts",
    icon: "🕉️",
    description: "Spiritual and ritual crafts of the country.",
    images: [imageAssets.sacred1, imageAssets.sacred4],
  },
  {
    title: "Performing Arts",
    icon: "💃",
    description: "The expressive language of cultural stories.",
    images: [imageAssets.dancing],
  },
 
 
  {
    title: "Culinary Heritage",
    icon: "🥣",
    description: "Ancient culinary traditions and herbal knowledge.",
    images: [imageAssets.mandala2, imageAssets.mandala3],
  }
];


 const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const value = {
    mentors,
    categories
   
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider ,AppContext};
