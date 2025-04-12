import { createContext } from "react";
import assets from '../assets/assets.js'
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
      img: [assets.weaving1, assets.weaving2],
      content: (
        <p>
          Handloom weaving is not just a craft; it's a legacy passed down through generations, embodying the rich cultural tapestry of India. This intricate art form dates back over 5,000 years, with roots in the Indus Valley Civilization, where evidence of woven textiles has been discovered. Each region in India boasts its unique weaving techniques, patterns, and motifs, reflecting the diverse cultural heritage of the country.
  
          The process of handloom weaving involves interlacing warp and weft threads on a loom, meticulously operated by skilled artisans. Unlike mechanized weaving, handloom allows for greater flexibility and creativity, enabling weavers to produce intricate designs and patterns. The choice of materials, such as cotton, silk, or wool, further adds to the diversity of handloom products.
  
          Beyond aesthetics, handloom weaving plays a significant role in India's socio-economic fabric. It provides employment to millions, especially in rural areas, and empowers women by offering them a means of livelihood. Moreover, handloom products are eco-friendly, as they require minimal energy consumption and promote sustainable practices.
  
          The resurgence of interest in sustainable and ethically produced goods has brought handloom weaving back into the spotlight. Designers and consumers alike are recognizing the value of handcrafted textiles, leading to increased demand and appreciation for this age-old craft. By supporting handloom products, we not only preserve a vital part of our heritage but also contribute to the well-being of artisan communities across the country.
        </p>
      ),
    },
    {
      id: 2,
      mentor: "Raghunath Prasad",
      profilePic: "https://randomuser.me/api/portraits/men/60.jpg",
      skill: "Terracotta Pottery",
      lessonTitle: "Crafting with Clay: Terracotta Pottery",
      img: [assets.pottery1, assets.pottery2],
      content: (
        <p>
          Terracotta pottery is an age-old art form that connects us to the earth, embodying the essence of human creativity and cultural expression. Derived from the Latin term meaning "baked earth," terracotta involves shaping natural clay into desired forms and firing them at high temperatures to achieve durability and strength.
  
          The history of terracotta in India dates back to the Indus Valley Civilization, where artisans crafted intricate figurines, utensils, and decorative items. Over the centuries, terracotta evolved, reflecting regional styles and serving various purposes, from religious rituals to everyday utility. States like West Bengal, Gujarat, and Tamil Nadu have rich traditions of terracotta artistry, each with distinct techniques and motifs.
  
          The process begins with sourcing and preparing the clay, which is then molded by hand or using a potter's wheel. After drying, the items are fired in kilns, transforming the soft clay into sturdy, reddish-brown pottery. Artisans often embellish their creations with carvings, paintings, or glazes, adding aesthetic appeal and cultural significance.
  
          Terracotta pottery is not only functional but also eco-friendly, as it utilizes natural materials and traditional firing methods. In recent times, there's been a renewed interest in terracotta products for home décor, gardening, and culinary uses, owing to their rustic charm and sustainability. By embracing terracotta, we honor a timeless craft that continues to enrich our lives and preserve our connection to the earth.
        </p>
      ),
    },
    {
      id: 3,
      mentor: "Meenakshi Bai",
      profilePic: "https://randomuser.me/api/portraits/women/58.jpg",
      skill: "Madhubani Painting",
      lessonTitle: "Stories in Color: Madhubani Painting",
      img: [assets.painting1, assets.painting2],
      content: (
        <p>
          Madhubani painting, also known as Mithila art, is a vibrant and intricate form of folk painting that originated in the Mithila region of Bihar, India. Traditionally practiced by women, this art form was used to adorn the walls and floors of homes during festivals, religious events, and special occasions, serving as a medium to express devotion, culture, and social values.
  
          The paintings are characterized by their eye-catching geometric patterns, bold lines, and vivid colors derived from natural sources like turmeric, indigo, and sandalwood. Common themes include Hindu deities, nature, mythology, and scenes from daily life, all depicted with symbolic motifs and a deep sense of storytelling.
  
          Madhubani art is executed using fingers, twigs, brushes, or nib-pens, often without any preliminary sketches. The meticulous detailing and symmetrical designs reflect the artists' patience and precision. Over time, this art form has transitioned from walls to paper and canvas, gaining national and international recognition.
  
          Today, Madhubani painting not only preserves the rich cultural heritage of the region but also empowers local artisans, especially women, by providing them with a source of income and a platform to showcase their talent. The art form continues to evolve, blending traditional themes with contemporary subjects, ensuring its relevance and appeal to newer generations.
        </p>
      ),
    },
    {
      id: 6,
      mentor: "Fakir Chand",
      profilePic: "https://randomuser.me/api/portraits/men/52.jpg",
      skill: "Warli Art",
      lessonTitle: "Sacred Symbols: Warli Art",
      img: [assets.WarliArt1, assets.WarliArt2],
      content: (
        <p>
          Warli art is a sacred expression of tribal life and beliefs, originating from the Warli tribe in Maharashtra, India. This ancient art form dates back to 2500 BCE and is traditionally practiced by tribal women to decorate the walls of their homes during festivals and special occasions.
  
          The paintings are characterized by their simplistic yet profound use of geometric shapes—circles, triangles, and squares—to depict scenes of daily life, nature, and rituals. Common motifs include human figures engaged in activities like farming, dancing, and hunting, as well as animals, trees, and celestial bodies. The use of a monochromatic palette, typically white pigment on a red ochre or mud base, adds to the art's rustic charm.
  
          Warli art is more than just decoration; it serves as a visual narrative of the tribe's social customs, religious practices, and harmonious relationship with nature. The art form has gained international acclaim for its unique aesthetic and cultural significance.
  
          In recent years, Warli art has transcended its traditional boundaries, finding expression on canvas, textiles, and various modern mediums. This evolution has not only preserved the art form but also provided economic opportunities for the Warli community, ensuring the continuation of their rich artistic legacy.
        </p>
      ),
    },
    
    
 
   
    {
      id: 8,
      mentor: "Hariram Suthar",
      profilePic: "https://randomuser.me/api/portraits/men/45.jpg",
      skill: "Wood Carving",
      lessonTitle: "Carving Heritage: Woodwork",
      img: [assets.WoodCarving1, assets.WoodCarving2, assets.WoodCarving3],
      content: (
        <p>
          Wood carving is one of the most ancient and esteemed forms of craftsmanship, representing the artistic spirit of generations. In India, wood carving has flourished in states like Rajasthan, Gujarat, and Kerala, where it’s not just a craft but an identity. From intricately carved temple doors and mythological idols to ornate furniture and household décor, each carved object carries the imprint of tradition and devotion.
    
          Hariram Suthar, a seasoned artisan, brings decades of experience to the lesson. He demonstrates how carving is a meditation of patience, vision, and skill. The process starts with selecting the right wood—typically teak, rosewood, or sandalwood—based on grain, strength, and intended design. Using traditional hand tools such as chisels, gouges, and mallets, artisans carve motifs of animals, gods, floral vines, and more, bringing life into motionless timber.
    
          Wood carving is not just about technicality but about spiritual and cultural storytelling. Many carved items hold ritualistic significance and are used in religious ceremonies. This lesson invites learners to explore both the practical and symbolic sides of the art—from sketching patterns to the final polish that brings out the grain and glory of the wood. It's a journey of honoring forests, history, and the silent poetry of carved lines.
        </p>
      ),
    },
    {
      id: 11,
      mentor: "Madhav Reddy",
      profilePic: "https://randomuser.me/api/portraits/men/30.jpg",
      skill: "Silver Jewelry Making",
      lessonTitle: "Crafting Silver Jewelry: Traditional Techniques",
      img: [assets.silver1, assets.silver2],
      content: (
        <p>
          Silver jewelry making in India is a tradition wrapped in elegance, emotion, and heritage. It's more than ornamentation—it reflects regional styles, social values, and generational skills passed down through artisan families. Madhav Reddy, an expert silversmith, introduces learners to this dazzling world where molten metal becomes wearable art.
    
          The lesson begins by understanding the types of silver—sterling, fine, and oxidized—and how purity is measured. Then comes the craft: melting the silver, pouring it into molds, and carefully shaping it into bangles, earrings, anklets, and pendants. Techniques such as filigree (fine twisted wires), repousse (hammered relief work), and granulation (tiny bead-like decoration) are explained step-by-step.
    
          Beyond technique, this lesson highlights the cultural connection of silver jewelry in Indian rituals. From baby anklets to bridal sets, silver is integral to ceremonies and beliefs, believed to bring protection and prosperity. Madhav also shares modern design ideas rooted in tradition, allowing learners to bridge ancient methods with contemporary aesthetics. Whether you’re a beginner or passionate about traditional fashion, this course offers you a meaningful dive into the world of handcrafted elegance.
        </p>
      ),
    },
    {
      id: 15,
      mentor: "Shanta Rani",
      profilePic: "https://randomuser.me/api/portraits/women/51.jpg",
      skill: "Channapatna Toy Making",
      lessonTitle: "The Art of Channapatna Toy Making",
      img: [assets.ToyMaking1, assets.ToyMaking2],
      content: (
        <p>
          Channapatna Toy Making, also known as “Gombegala Ooru” (toy-town), is a 200-year-old craft from Karnataka, renowned for its vibrant wooden toys and dolls. Declared a Geographical Indication (GI) product, these toys are crafted from soft ivory wood and coated with natural dyes—making them not just artistic but safe and eco-friendly. Shanta Rani, one of the few women carrying forward this legacy, offers a rare window into the world of handcrafted playthings that merge tradition with joy.
    
          The process begins with seasoning the wood to prevent cracks, followed by turning it on a lathe. Tools like chisels and files are used to shape animals, dolls, vehicles, and spinning tops. What sets Channapatna apart is its lacquering method—applying colored lacquer sticks against the heated surface to create a glossy, smooth finish. Bright yellows, reds, greens, and blues reflect the vibrancy of Indian childhood.
    
          But these toys aren’t just child’s play. They symbolize craftsmanship, sustainability, and artistic purity. In an era of plastic mass production, Channapatna toys remind us of the warmth of handmade goods. The lesson also encourages innovation—mixing modern themes while retaining the core techniques. It’s perfect for those who want to explore ethical craftsmanship and revive a heritage that brings color to both homes and hearts.
        </p>
      ),
    },
    
    {
      id: 16,
      mentor: "Mohan Lal",
      profilePic: "https://randomuser.me/api/portraits/men/50.jpg",
      skill: "Stone Carving",
      lessonTitle: "Mastering Stone Carving Techniques",
      img: [assets.stone1, assets.stone2],
      content: (
        <p>
          Stone carving is an ancient craft that demands skill, patience, and an intimate understanding of the material. From ancient temples to modern sculptures, stone has been used to tell stories, honor deities, and create lasting monuments. Mohan Lal, an experienced stone carver, shares the intricate art of transforming a raw block of stone into a finely detailed sculpture.
    
          The journey begins with selecting the right type of stone—whether marble, sandstone, or soapstone—each offering unique textures and challenges. The process involves sketching the design, chiseling the shape, and refining the details. Various tools such as hammers, chisels, rasps, and polishers are used to achieve different effects, from coarse outlines to smooth, polished surfaces. The lesson also delves into techniques like relief carving, in which figures emerge from the stone's surface.
    
          Stone carving isn’t just about cutting; it’s about patience and respect for the material. Each strike of the hammer is deliberate, and every detail is carefully sculpted to bring the vision to life. This lesson invites you to discover the timeless art of stone carving, where each piece is a permanent tribute to craftsmanship, culture, and heritage.
        </p>
      ),
    },
    {
      id: 19,
      mentor: "Anita Devi",
      profilePic: "https://randomuser.me/api/portraits/women/45.jpg",
      skill: "Ancient Culinary Herbal Knowledge",
      lessonTitle: "Healing Through Herbs: Ancient Culinary Wisdom",
      img: [assets.mandala3, assets.mandala1, assets.mandala2],
      content: (
        <p>
          In this lesson, Anita Devi takes you through the rich history of herbal knowledge passed down through generations. The art of using herbs for culinary and medicinal purposes dates back thousands of years, forming the backbone of traditional healing systems in many cultures. These herbs are not just ingredients—they’re natural remedies for ailments, tools for enhancing flavors, and sources of wellness.
    
          The lesson explores a variety of ancient herbs used in Indian cuisine, such as turmeric, ginger, holy basil, and fenugreek, highlighting their health benefits and how they have been incorporated into daily meals for their healing properties. Through careful preparation and cooking techniques, these herbs are combined to create powerful, nourishing dishes that promote digestion, boost immunity, and balance the body’s energies.
    
          Learning these ancient techniques is not only about nourishing the body but also about reconnecting with nature and its remedies. This lesson offers practical advice for incorporating these herbs into modern cooking, offering an opportunity to embrace holistic health practices that blend food and medicine.
        </p>
      ),
    },
    {
      id: 20,
      mentor: "Bhagwati Soren",
      profilePic: "https://randomuser.me/api/portraits/women/67.jpg",
      skill: "Folk & Tribal Painting",
      lessonTitle: "Colors of Culture: Folk & Tribal Painting",
      img: [assets.tribal1, assets.tribal2, assets.tribal3],
      content: (
        <p>
          Folk and tribal paintings are an essential aspect of India's rich cultural heritage, where art reflects the deep-rooted traditions, beliefs, and lifestyle of different communities. Bhagwati Soren, a master in this ancient craft, shares the secrets behind the vibrant, symbolic, and meaningful world of tribal and folk art.
    
          From the Madhubani paintings of Bihar to the Warli and Gond art of Maharashtra and Madhya Pradesh, each style tells a unique story using colors, patterns, and figures that represent nature, gods, and human experiences. This lesson explores the techniques and materials used in creating these masterpieces, often done on surfaces like walls, cloth, and handmade paper. The focus is not only on the process but also on the significance of the motifs—like animals, trees, and geometric patterns—that are integral to these paintings.
    
          Folk and tribal painting is a gateway to understanding the world through the eyes of indigenous communities. Each brushstroke is not just a mark on paper, but a reflection of the artist’s relationship with their land, culture, and spirituality. This lesson offers you a chance to connect with these profound traditions and learn the art of storytelling through color and design.
        </p>
      ),
    },
    {
      id: 21,
      mentor: "Kailash Nath",
      profilePic: "https://randomuser.me/api/portraits/men/75.jpg",
      skill: "Indigenous Performing Arts",
      lessonTitle: "Echoes of the Land: Indigenous Performing Arts",
      img: [assets.performing2, assets.performing3, assets.performing4, assets.performing5],
      content: (
        <p>
          Indigenous performing arts embody the soul of a culture, intertwining music, dance, and storytelling in a way that connects individuals to their history, heritage, and environment. Kailash Nath, a renowned expert in indigenous performance traditions, takes you on a journey through the vibrant world of traditional dances, music, and theatrical expressions that have been passed down through generations.
    
          The lesson covers a wide array of indigenous performing art forms, such as the classical dances of the North East, the folk performances of Rajasthan, and the powerful rituals of tribal communities across India. Each performance style is deeply rooted in spiritual beliefs, societal roles, and the collective memory of the community. The movements, rhythms, and songs speak of the land, the people, and their connection to nature.
    
          Understanding indigenous performing arts is not only about learning the steps or notes; it’s about understanding the cultural narratives they carry. The lesson emphasizes the significance of these art forms in modern times, where they act as both a preservation of heritage and a celebration of identity. This lesson invites learners to engage in the rhythms of their ancestors and appreciate the timeless echoes of indigenous expression.
        </p>
      ),
    },
    
    {
      id: 22,
      mentor: "Lata Kumari",
      profilePic: "https://randomuser.me/api/portraits/women/56.jpg",
      skill: "Traditional Music",
      lessonTitle: "Melodies of the Past: Traditional Music",
      img: [assets.music1, assets.music2, assets.music3, assets.music4, assets.music5],
      content: (
        <p>
          Traditional music is not just a collection of sounds; it’s a vessel that carries centuries of culture, emotion, and history. Lata Kumari, a gifted musician and expert in classical music traditions, takes you through the rich world of traditional instruments and melodies that have been passed down through generations.
    
          From the soulful strains of the sitar to the rhythmic beats of the tabla, this lesson delves into the diversity of traditional music across different regions of India. You will explore the history, structure, and significance of instruments like the flute, harmonium, mridangam, and the sitar, each with its unique sound and cultural context. The lesson also introduces the concept of ragas and talas, the building blocks of Indian classical music, and their emotional and spiritual resonance.
    
          Traditional music not only connects us to our roots but also serves as an expression of joy, sorrow, devotion, and reflection. Whether it’s the devotional chants of bhajans, the classical ragas of Hindustani or Carnatic music, or the folk tunes of rural communities, every piece tells a story of cultural legacy and personal expression.
    
          This lesson will inspire you to appreciate the depth and complexity of traditional music, and perhaps even start learning an instrument yourself to keep these timeless melodies alive.
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
