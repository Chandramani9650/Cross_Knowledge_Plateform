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


  const traditionalSkillLessons = [
    {
      id: 1,
      mentor: "Savitri Devi",
      profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
      skill: "Handloom Weaving",
      lessonTitle: "The Art of Handloom Weaving",
      content: (
        <p>
          Handloom weaving is not just a craft; it's a legacy passed down through generations. In this lesson, Savitri Devi shares her 40 years of experience in Banarasi sari weaving, unveiling the intricate techniques and cultural significance behind each weave. She delves into the traditional methods, the importance of natural dyes, and the stories woven into every fabric. This session offers a deep understanding of the patience, precision, and passion required to master handloom weaving.
        </p>
      ),
    },
    {
      id: 2,
      mentor: "Raghunath Prasad",
      profilePic: "https://randomuser.me/api/portraits/men/60.jpg",
      skill: "Terracotta Pottery",
      lessonTitle: "Crafting with Clay: Terracotta Pottery",
      content: (
        <p>
          Terracotta pottery is an age-old art form that connects us to the earth. Raghunath Prasad, a traditional potter from Khurja, guides you through the process of creating intricate clay works using eco-friendly methods. Learn about the significance of soil selection, wheel techniques, and the firing process that brings each piece to life. This lesson emphasizes the harmony between nature and craftsmanship inherent in terracotta pottery.
        </p>
      ),
    },
    {
      id: 3,
      mentor: "Meenakshi Bai",
      profilePic: "https://randomuser.me/api/portraits/women/58.jpg",
      skill: "Madhubani Painting",
      lessonTitle: "Stories in Color: Madhubani Painting",
      content: (
        <p>
          Madhubani painting is a vibrant expression of folklore and tradition. Meenakshi Bai, a dedicated folk artist, introduces you to the world of natural colors and symbolic motifs. Discover the techniques of creating intricate designs that narrate tales of deities, nature, and daily life. This lesson offers insights into preserving a dying art form and the cultural narratives it carries.
        </p>
      ),
    },
    {
      id: 4,
      mentor: "Balbir Singh",
      profilePic: "https://randomuser.me/api/portraits/men/66.jpg",
      skill: "Brass Engraving",
      lessonTitle: "Metal Magic: Brass Engraving",
      content: (
        <p>
          Brass engraving is a meticulous art that transforms metal into masterpieces. Balbir Singh, an expert from Moradabad, shares traditional techniques of metal moulding and ornament making. Learn about the tools, patterns, and cultural significance of brass artifacts. This lesson delves into the patience and precision required to excel in brass engraving.
        </p>
      ),
    },
    {
      id: 5,
      mentor: "Jamuna Tayi",
      profilePic: "https://randomuser.me/api/portraits/women/70.jpg",
      skill: "Lambadi Embroidery",
      lessonTitle: "Threads of Tradition: Lambadi Embroidery",
      content: (
        <p>
          Lambadi embroidery is a vibrant tapestry of tribal storytelling. Jamuna Tayi, a veteran in hand embroidery, introduces you to the intricate stitching techniques rooted in cultural narratives. Explore the use of colors, patterns, and symbols that make Lambadi embroidery unique. This lesson emphasizes the importance of preserving tribal art forms and the stories they tell.
        </p>
      ),
    },
    {
      id: 6,
      mentor: "Fakir Chand",
      profilePic: "https://randomuser.me/api/portraits/men/52.jpg",
      skill: "Warli Art",
      lessonTitle: "Sacred Symbols: Warli Art",
      content: (
        <p>
          Warli art is a sacred expression of tribal life and beliefs. Fakir Chand, a tribal elder from Maharashtra, guides you through the symbolism and geometry behind each stroke. Learn about the rituals, stories, and community aspects embedded in Warli murals. This lesson offers a spiritual journey into the world of tribal art.
        </p>
      ),
    },
    {
      id: 7,
      mentor: "Sundari Amma",
      profilePic: "https://randomuser.me/api/portraits/women/50.jpg",
      skill: "Basket Weaving",
      lessonTitle: "Weaving Nature: Basketry",
      content: (
        <p>
          Basket weaving is an eco-friendly craft that intertwines nature and tradition. Sundari Amma, an expert from Kerala, teaches you the art of bamboo basket weaving inspired by temple rituals. Discover the techniques of palm leaf art and the cultural significance of each design. This lesson emphasizes sustainability and the beauty of natural materials.
        </p>
      ),
    },
    {
      id: 8,
      mentor: "Hariram Suthar",
      profilePic: "https://randomuser.me/api/portraits/men/45.jpg",
      skill: "Wood Carving",
      lessonTitle: "Carving Heritage: Woodwork",
      content: (
        <p>
          Wood carving is a testament to intricate craftsmanship and cultural motifs. Hariram Suthar, a maestro from Rajasthan, shares techniques of traditional joinery and relief sculpture. Learn about the tools, patterns, and religious symbols carved into doors and temple art. This lesson offers a deep dive into the world of wooden artistry.
        </p>
      ),
    },
    {
      id: 9,
      mentor: "Basanti Kumari",
      profilePic: "https://randomuser.me/api/portraits/women/48.jpg",
      skill: "Kalamkari Art",
  
    },

    {
      id: 10,
      mentor: "Kailash Yadav",
      profilePic: "https://randomuser.me/api/portraits/men/39.jpg",
      skill: "Saree Draping",
      lessonTitle: "The Grace of Saree Draping",
      content: (
        <p>
          Saree draping is an ancient art that brings elegance and tradition together. Kailash Yadav, an expert from Varanasi, takes you through the various regional draping styles. Learn about the cultural importance of the saree and how to style it for different occasions. This lesson offers insights into how draping techniques have evolved while maintaining their cultural significance.
        </p>
      ),
    },
    {
      id: 11,
      mentor: "Madhav Reddy",
      profilePic: "https://randomuser.me/api/portraits/men/30.jpg",
      skill: "Silver Jewelry Making",
      lessonTitle: "Crafting Silver Jewelry: Traditional Techniques",
      content: (
        <p>
          Silver jewelry making has been a family tradition for generations. Madhav Reddy, a silver artisan from Hyderabad, teaches you the techniques of melting, molding, and finishing silver jewelry. Discover the cultural significance behind each design, from rings to earrings, and learn the delicate processes that make silver jewelry both beautiful and meaningful.
        </p>
      ),
    },
    {
      id: 12,
      mentor: "Kamini Kumari",
      profilePic: "https://randomuser.me/api/portraits/women/40.jpg",
      skill: "Pattachitra Painting",
      lessonTitle: "The Legacy of Pattachitra Painting",
      content: (
        <p>
          Pattachitra painting is one of the oldest forms of traditional Indian art, originating from Odisha. Kamini Kumari, a Pattachitra artist, shares the secrets behind the intricate designs that narrate mythological tales. Learn about the preparation of canvas, natural colors, and the history that makes this art form a cultural treasure. This lesson helps preserve an age-old tradition that combines spirituality with visual storytelling.
        </p>
      ),
    },
    {
      id: 13,
      mentor: "Rani Bai",
      profilePic: "https://randomuser.me/api/portraits/women/42.jpg",
      skill: "Batik Printing",
      lessonTitle: "Batik Printing: The Art of Wax Resist",
      content: (
        <p>
          Batik printing is a centuries-old technique that involves using wax to resist dye on fabric. Rani Bai, a Batik artist from Jaipur, reveals the delicate process of creating beautiful patterns and designs. In this lesson, you will learn about the history, tools, and techniques of Batik printing. Understand how traditional Batik art is used in fashion, home décor, and cultural storytelling.
        </p>
      ),
    },
    {
      id: 14,
      mentor: "Gopal Das",
      profilePic: "https://randomuser.me/api/portraits/men/43.jpg",
      skill: "Kumhar Craft (Pottery)",
      lessonTitle: "The Heart of Clay: Kumhar Craft",
      content: (
        <p>
          Kumhar craft, or pottery, is an ancient skill rooted in tradition and nature. Gopal Das, a master potter from Rajasthan, introduces you to the process of shaping clay into beautiful pottery. From making basic vessels to intricate designs, this lesson covers techniques passed down through generations. Learn the significance of the craft in village life and how it brings people closer to their cultural roots.
        </p>
      ),
    },
    {
      id: 15,
      mentor: "Shanta Rani",
      profilePic: "https://randomuser.me/api/portraits/women/51.jpg",
      skill: "Channapatna Toy Making",
      lessonTitle: "The Art of Channapatna Toy Making",
      content: (
        <p>
          Channapatna toy making is a colorful craft that has been practiced for centuries in Karnataka. Shanta Rani, a skilled artisan, teaches you the techniques of creating vibrant wooden toys using traditional methods. Learn about the history of this craft, the unique skills required, and the sustainable practices involved in creating these eco-friendly toys. This lesson highlights the cultural significance of preserving such playful traditions.
        </p>
      ),
    },
    {
      id: 16,
      mentor: "Mohan Lal",
      profilePic: "https://randomuser.me/api/portraits/men/50.jpg",
      skill: "Stone Carving",
      lessonTitle: "Mastering Stone Carving Techniques",
      content: (
        <p>
          Stone carving is an ancient skill that requires precision and patience. Mohan Lal, a seasoned stone carver from Jaipur, takes you through the art of carving intricate designs in marble and sandstone. Learn about the tools, techniques, and cultural importance of stone sculptures, from historical monuments to modern art. This lesson showcases the timeless beauty of stone craftsmanship.
        </p>
      ),
    },
    {
      id: 17,
      mentor: "Lakshmi Bai",
      profilePic: "https://randomuser.me/api/portraits/women/49.jpg",
      skill: "Tanjore Painting",
      lessonTitle: "The Divine Art of Tanjore Painting",
      content: (
        <p>
          Tanjore painting is a traditional South Indian art form known for its rich colors and surface embellishments. Lakshmi Bai, a master artist from Tamil Nadu, introduces you to the techniques of creating Tanjore paintings, including the use of gold foil and intricate brushwork. This lesson delves into the spiritual themes, history, and symbolism behind Tanjore art, offering a glimpse into this revered tradition.
        </p>
      ),
    },
    {
      id: 18,
      mentor: "Ramesh Chandra",
      profilePic: "https://randomuser.me/api/portraits/men/57.jpg",
      skill: "Bamboo Craft",
      lessonTitle: "Sculpting with Bamboo: Bamboo Craft",
      content: (
        <p>
          Bamboo craft is an eco-friendly and versatile form of art that utilizes the strength of bamboo. Ramesh Chandra, a bamboo artisan from the Northeast, demonstrates how to create functional and decorative pieces using bamboo. Learn how to make baskets, furniture, and even intricate sculptures while embracing sustainability. This lesson emphasizes the importance of bamboo in Indian craftsmanship and its role in rural livelihoods.
        </p>
      ),
    },
    {
      id: 19,
      mentor: "Durga Devi",
      profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
      skill: "Tie-Dye (Bandhani)",
      lessonTitle: "The Art of Bandhani: Tie-Dye Tradition",
      content: (
        <p>
          Bandhani, or tie-dye, is a traditional textile technique that involves tying and dyeing fabric to create intricate patterns. Durga Devi, a Bandhani artist from Gujarat, takes you through the steps of this ancient craft. Learn about the different knots, colors, and designs used to create beautiful textiles for clothing and accessories. This lesson explores how Bandhani is deeply embedded in cultural ceremonies and festivals.
        </p>
      ),
    }
  ]
   
  

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
    categories,
    traditionalSkillLessons
   
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider ,AppContext};
