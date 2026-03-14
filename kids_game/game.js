/* ===================================================
   ADVENTURE GAME - CHOOSE YOUR OWN STORY!
   For kids ages 8-10
   5 adventures · Trivia mini-games · Achievements
=================================================== */

// ===== TRIVIA QUESTIONS =====
const TRIVIA = [
  // Animals
  { q: "How many legs does a spider have?", a: 1, choices: ["6 legs", "8 legs", "10 legs"], fact: "Spiders have 8 legs! They use all of them to spin amazing webs! 🕷️" },
  { q: "Which animal is the fastest on land?", a: 0, choices: ["Cheetah", "Lion", "Horse"], fact: "The cheetah can run up to 75 mph (120 km/h)! That's faster than a car! 🐆" },
  { q: "How long do sea turtles live?", a: 2, choices: ["10 years", "30 years", "Over 100 years"], fact: "Sea turtles can live over 100 years! Some are older than your great-great-grandparents! 🐢" },
  { q: "Which animal has the biggest brain compared to its body?", a: 1, choices: ["Elephant", "Dolphin", "Whale"], fact: "Dolphins have the biggest brain-to-body ratio! They can recognize themselves in mirrors! 🐬" },
  { q: "How many hearts does an octopus have?", a: 2, choices: ["1 heart", "2 hearts", "3 hearts"], fact: "Octopuses have THREE hearts! Two pump blood to the gills, one to the rest of the body! 🐙" },
  { q: "A group of flamingos is called a...?", a: 0, choices: ["Flamboyance", "Flock", "Party"], fact: "A group of flamingos is called a flamboyance! What an amazing word! 🦩" },
  { q: "Which bird can fly backwards?", a: 2, choices: ["Eagle", "Parrot", "Hummingbird"], fact: "Hummingbirds are the only birds that can fly backwards and even upside down! 🦜" },
  { q: "How many teeth can a shark grow in its lifetime?", a: 2, choices: ["20 teeth", "200 teeth", "Up to 50,000 teeth"], fact: "Sharks can grow up to 50,000 teeth in their lifetime — they keep growing new ones! 🦈" },
  // Space
  { q: "How many planets are in our solar system?", a: 1, choices: ["7 planets", "8 planets", "9 planets"], fact: "There are 8 planets! Pluto is now called a 'dwarf planet.' Sorry Pluto! 🪐" },
  { q: "The Sun is a...?", a: 2, choices: ["Planet", "Moon", "Star"], fact: "The Sun is a star — just like all the stars you see at night, only much closer! ⭐" },
  { q: "Which planet has rings around it?", a: 0, choices: ["Saturn", "Jupiter", "Mars"], fact: "Saturn has the most beautiful rings, made of billions of chunks of ice and rock! 🪐" },
  { q: "How long does it take light from the Sun to reach Earth?", a: 1, choices: ["1 second", "About 8 minutes", "1 hour"], fact: "Sunlight takes about 8 minutes to travel 93 million miles to reach Earth! 🌞" },
  { q: "What is the largest planet in our solar system?", a: 0, choices: ["Jupiter", "Saturn", "Neptune"], fact: "Jupiter is SO big that 1,300 Earths could fit inside it! It also has a giant storm called the Great Red Spot! 🌪️" },
  { q: "How many moons does Earth have?", a: 1, choices: ["0 moons", "1 moon", "3 moons"], fact: "Earth has exactly 1 moon! But Mars has 2, and Jupiter has over 90 moons! 🌙" },
  // Ocean
  { q: "How much of Earth's surface is covered by ocean?", a: 2, choices: ["30%", "50%", "Over 70%"], fact: "Over 70% of Earth is ocean! That's why Earth is called the Blue Planet! 🌊" },
  { q: "What is the deepest part of the ocean called?", a: 0, choices: ["Mariana Trench", "Atlantic Valley", "Pacific Pit"], fact: "The Mariana Trench is 36,000 feet deep — Mount Everest could fit inside it! 🌊" },
  { q: "Which is the largest ocean?", a: 1, choices: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean"], fact: "The Pacific Ocean is so large that all the world's continents could fit inside it! 🌏" },
  { q: "How do clownfish protect themselves?", a: 2, choices: ["They're very fast", "They have sharp teeth", "They hide in sea anemones"], fact: "Clownfish live in sea anemones that would sting other fish — but not clownfish! 🐠" },
  // Science
  { q: "What is the hardest natural substance on Earth?", a: 0, choices: ["Diamond", "Gold", "Steel"], fact: "Diamonds are the hardest natural material! They're made of compressed carbon deep underground! 💎" },
  { q: "How many colors are in a rainbow?", a: 1, choices: ["5 colors", "7 colors", "10 colors"], fact: "Rainbows have 7 colors: Red, Orange, Yellow, Green, Blue, Indigo, and Violet! 🌈" },
  { q: "What do plants need to make their food?", a: 2, choices: ["Only water", "Water and dirt", "Sunlight, water, and air"], fact: "Plants use sunlight, water, and carbon dioxide to make their own food — called photosynthesis! 🌱" },
  { q: "What is the smallest planet in our solar system?", a: 0, choices: ["Mercury", "Mars", "Venus"], fact: "Mercury is the smallest planet and closest to the Sun, but Venus is actually hotter! 🪨" },
  { q: "Lightning is hotter than...?", a: 2, choices: ["A campfire", "The Sun's surface", "5 times hotter than the Sun's surface"], fact: "Lightning is about 5 times hotter than the surface of the Sun — reaching 53,000°F! ⚡" },
  { q: "What is water made of?", a: 1, choices: ["Carbon and oxygen", "Hydrogen and oxygen", "Hydrogen and nitrogen"], fact: "Water is H₂O — 2 hydrogen atoms and 1 oxygen atom! All water on Earth is millions of years old! 💧" },
  // Fun facts
  { q: "Honey never expires — archaeologists found 3,000-year-old honey that was still...?", a: 0, choices: ["Edible!", "Rock solid", "Turned to sugar"], fact: "Honey found in Egyptian tombs was still perfectly good after 3,000 years! 🍯" },
  { q: "How many bones are in the human body?", a: 2, choices: ["108 bones", "150 bones", "206 bones"], fact: "Adults have 206 bones! Babies are born with about 270 bones that fuse together as they grow! 🦴" },
  { q: "What can a snail do that seems impossible?", a: 1, choices: ["Jump very high", "Sleep for 3 years", "Run as fast as a dog"], fact: "Snails can sleep for up to 3 years during a drought! Talk about a long nap! 🐌" },
  { q: "A day on Venus is longer than...?", a: 2, choices: ["A day on Earth", "A month on Earth", "A year on Venus!"], fact: "A day on Venus (one rotation) is longer than a year on Venus (one orbit)! Venus spins SUPER slowly! 🪐" },
  { q: "Trees can communicate with each other through...?", a: 1, choices: ["Sound waves", "Underground fungi networks", "Colored leaves"], fact: "Trees talk through underground fungi networks — called the 'wood wide web'! They share food and warnings! 🌳" },
  { q: "How fast does a sneeze travel?", a: 2, choices: ["5 mph", "50 mph", "Up to 100 mph"], fact: "A sneeze can travel up to 100 mph — faster than highway traffic! That's why we cover our mouth! 🤧" }
];

// ===== STORY DATA =====
const STORIES = {
  space: {
    id: 'space',
    title: '🚀 Space Explorer',
    theme: 'space',
    badge: 'badge-space',
    desc: 'Blast off and discover alien worlds!',
    nodes: {
      start: {
        emoji: '🚀',
        title: 'Mission: Launch!',
        text: "You're astronaut Alex, flying solo through outer space! ✨ Looking out your window you spot TWO amazing things: a glowing blue planet 🌍 and a strange blinking light 🔦 floating in the dark. Your mission: EXPLORE! What do you do?",
        choices: [
          { text: '🌍 Fly to the glowing blue planet', next: 'planet' },
          { text: '🔦 Check out that blinking light', next: 'light' }
        ]
      },
      planet: {
        emoji: '🌍',
        title: 'The Blue Planet',
        text: "WOW! The planet is covered in giant glowing crystals! 💎 Each one shines a different color! Your radar picks up two signals: a friendly chirping sound near the crystals 🔮, and a soft humming from a dark cave 🕳️.",
        choices: [
          { text: '🔮 Follow the chirping sound', next: 'crystal' },
          { text: '🕳️ Explore the mysterious cave', next: 'cave' }
        ]
      },
      light: {
        emoji: '👾',
        title: 'A Tiny Spaceship!',
        text: "The blinking light is a TINY alien spaceship! 🛸 A small green alien named Zorp presses their face against the window and waves! \"Help! I'm totally lost in space!\" How do you help Zorp?",
        choices: [
          { text: '🗺️ Share your star map with Zorp', next: 'map_share' },
          { text: '🚀 Invite Zorp onto your ship', next: 'invite' }
        ]
      },
      crystal: {
        emoji: '✨',
        title: 'The Lumin Family',
        text: "Behind the crystals lives a family of creatures made of pure light — the Lumins! 🌟 They give you a special crystal that makes your rocket go SUPER fast! The Lumin queen bows and says: \"You are a friend of our world forever.\"",
        choices: [
          { text: '🌍 Race home to show everyone!', next: 'ending_hero' },
          { text: '🔭 Explore more of the galaxy first', next: 'explore_more' }
        ]
      },
      cave: {
        emoji: '🗺️',
        title: 'Galaxy Map!',
        text: "Inside the cave, glowing on the wall, is a map of the ENTIRE galaxy! 🌌 Every star, every planet, every moon — mapped out in glowing paint! No human has ever had anything like this. You photograph every detail!",
        choices: [
          { text: '🌍 Fly home to share it!', next: 'ending_explorer' },
          { text: '🪐 Visit the nearest new planet first', next: 'new_planet' }
        ]
      },
      map_share: {
        emoji: '🌈',
        title: 'Space Party!',
        text: "Zorp uses your map to zoom home to the Rainbow Nebula! 🎉 Zorp's whole family is SO happy they throw the BIGGEST space party ever — just for you! You dance with 50 different aliens and eat space cake that changes flavors every bite!",
        choices: [
          { text: '🏠 Head home after the party', next: 'ending_party' },
          { text: '🌈 Ask to see the Rainbow Nebula up close', next: 'nebula' }
        ]
      },
      invite: {
        emoji: '🍬',
        title: 'Candy Planet?!',
        text: "Zorp jumps on your ship and immediately starts pointing at the navigation screen excitedly. You follow Zorp's directions and discover... a PLANET MADE ENTIRELY OF SPACE CANDY! 🍭🍬 The whole planet smells like birthday cake! Zorp does a happy dance!",
        choices: [
          { text: '🎁 Bring candy home for everyone!', next: 'ending_candy' },
          { text: '📋 Map it for future explorers', next: 'candy_map' }
        ]
      },
      explore_more: {
        emoji: '🌸',
        title: 'Three New Planets!',
        text: "You zoom through the galaxy discovering THREE brand-new planets! On the last one, you find flowers that PLAY MUSIC 🎵 when the wind blows — each flower plays a different note! You collect seeds to bring back to Earth.",
        choices: [
          { text: '🌍 Head home with the seeds!', next: 'ending_explorer' }
        ]
      },
      new_planet: {
        emoji: '🪐',
        title: 'Planet Bounce!',
        text: "You land and take one step outside — BOING! 🦘 You fly 20 feet into the air! The whole planet is bouncy like a giant trampoline! You do 30 backflips in a row without even trying. You name it Planet Bounce!",
        choices: [
          { text: '📸 Take photos and head home!', next: 'ending_explorer' }
        ]
      },
      nebula: {
        emoji: '📸',
        title: 'The Rainbow Nebula',
        text: "The Rainbow Nebula is the most beautiful thing you've EVER seen! 🌈 Colors swirling bigger than 1,000 suns! You take hundreds of photos. When you get home, they instantly become the most famous space pictures ever taken!",
        choices: [
          { text: '🌍 Fly home with your photos!', next: 'ending_explorer' }
        ]
      },
      candy_map: {
        emoji: '🚀',
        title: 'Candy Planet Director',
        text: "Your detailed map of the candy planet helps plan the first-ever Candy Planet Mission! They make you Director of the Candy Planet Space Program at age 10 — the youngest director EVER in history!",
        choices: [
          { text: '🎉 Accept the job!', next: 'ending_explorer' }
        ]
      },
      ending_hero: { emoji: '🥇', title: 'Galaxy Hero!', text: "You zoom home at SUPER CRYSTAL SPEED! 💫 NASA gives you a gold medal. You're the first human to meet the Lumins and you carry messages of friendship from another world. Scientists celebrate for a month! Your name goes in history books FOREVER. True legend! 🌟", isEnding: true, endingType: 'great', fireworks: '🎉🌟✨🚀⭐' },
      ending_explorer: { emoji: '🗺️', title: 'Greatest Explorer Ever!', text: "You return with discoveries that change everything! 🌍 The music flowers grow all over Earth, filling every city with beautiful sounds. Your galaxy map guides space missions for the next 500 years. Scientists everywhere want to be just like you! LEGENDARY! 🌟", isEnding: true, endingType: 'great', fireworks: '🌟🎵🌍🔭✨' },
      ending_party: { emoji: '🌈', title: 'Famous Space Friend!', text: "You party with 50 aliens until your fuel gets low, then zoom home! 🚀 The Rainbow Nebula becomes the most famous thing in the night sky. Zorp sends you alien postcards every year! 💌 You're the most famous space friend in two galaxies!", isEnding: true, endingType: 'good', fireworks: '🌈🎉💌🛸⭐' },
      ending_candy: { emoji: '🍬', title: 'Space Candy Hero!', text: "You bring home space candy for everyone! 🎉 It tastes like ALL your favorites at once — pizza, ice cream, AND birthday cake together! Scientists study it and discover: space candy is actually healthy! You're everyone's absolute favorite person forever! 🏆", isEnding: true, endingType: 'good', fireworks: '🍬🍭🎉🏆🌟' }
    }
  },

  dragon: {
    id: 'dragon',
    title: '🐉 Dragon Quest',
    theme: 'dragon',
    badge: 'badge-dragon',
    desc: 'Help Ember the dragon and save the kingdom!',
    nodes: {
      start: {
        emoji: '🐉',
        title: 'Ember Needs Help!',
        text: "You're a young knight in a cozy kingdom! 🏰 Suddenly a dragon named Ember lands in your village with a very worried face. \"My fire went out!\" Ember says sadly. \"And winter is coming! I need to find magic fire or my family will freeze!\" How do you help?",
        choices: [
          { text: '🔥 Search for magic fire yourself', next: 'search' },
          { text: '🧙 Ask the wise village elder first', next: 'elder' }
        ]
      },
      search: {
        emoji: '⛰️',
        title: 'Two Paths!',
        text: "Magic fire is found in only two places! You check your adventure map and find: Sunstone Mountain ⛰️ where glowing rocks burn forever, OR the Sparkling Forest 🌲 where the magical Fire Fairy lives. Both paths look awesome!",
        choices: [
          { text: '⛰️ Climb Sunstone Mountain', next: 'mountain' },
          { text: '🌲 Enter the Sparkling Forest', next: 'forest' }
        ]
      },
      elder: {
        emoji: '🦅',
        title: 'The Fire Phoenix!',
        text: "The wise elder smiles. \"The Fire Phoenix 🦅 knows where ALL fires live! Go to Phoenix Meadow!\" She draws you a map. On the way there, you pass a bakery with the most incredible smell coming out of it. 🥐 Your stomach growls loud enough for Ember to hear!",
        choices: [
          { text: '🏃 Follow the map quickly!', next: 'phoenix' },
          { text: '🥐 Quick stop at the bakery first', next: 'bakery' }
        ]
      },
      mountain: {
        emoji: '☀️',
        title: 'Sunstones!',
        text: "At the top of the mountain, sunstones glow like little captured suns! ☀️ You find one hot enough to relight Ember's flame! But you spot something: a baby mountain goat 🐐 stuck on a ledge, crying for its mom. What do you do first?",
        choices: [
          { text: '🐐 Help the goat AND relight Ember', next: 'goat_rescue' },
          { text: '🔥 Relight Ember and hurry home', next: 'ending_helper' }
        ]
      },
      forest: {
        emoji: '🍄',
        title: 'The Sparkling Forest',
        text: "The forest is MAGICAL! 🌟 Mushrooms glow every color of the rainbow! Flowers float in mid-air! Deep inside, you find the Fire Fairy dancing on a glowing lily pad. She keeps spare flames in tiny glass jars. She waves at you with both hands!",
        choices: [
          { text: '🧚 Ask the Fire Fairy for help', next: 'fairy' },
          { text: '🔍 Look for fire berries on your own', next: 'forest_fire' }
        ]
      },
      phoenix: {
        emoji: '🪶',
        title: 'The Golden Phoenix!',
        text: "The Fire Phoenix is the most beautiful bird you've ever seen — golden wings, rainbow tail, glowing like a sunrise! 🦅✨ It gives you a golden feather that burns warm forever without ever hurting anyone. You run all the way back to Ember!",
        choices: [
          { text: '🐉 Give Ember the feather right away!', next: 'ending_phoenix' },
          { text: '🕯️ Test it on a candle first to be safe', next: 'feather_test' }
        ]
      },
      bakery: {
        emoji: '🥐',
        title: 'Dragon Bread!',
        text: "The baker shows you Dragon Bread — it smells like fire and cinnamon! 🔥 \"One bite warms you from the inside for a whole day!\" You take a tiny bite and feel warm as summer. Could this relight Ember's fire?",
        choices: [
          { text: '🐉 Bring the bread to Ember!', next: 'ending_bread' },
          { text: '🤝 Get enough to share with the whole kingdom', next: 'ending_baker' }
        ]
      },
      goat_rescue: {
        emoji: '🎵',
        title: 'Double Hero!',
        text: "You help the baby goat back to its mother! 🐐❤️ The grateful goat family gives you a magic flute 🎵 that can call any animal in the kingdom to help you. THEN you relight Ember with the sunstone. Best day of your life!",
        choices: [
          { text: '🎉 Head home with Ember!', next: 'ending_hero' }
        ]
      },
      fairy: {
        emoji: '✨',
        title: 'Fairy Fire Gift!',
        text: "The Fire Fairy LOVES helping! She gives you a jar of bright orange flame that never goes out. Ember lights right up and does three happy spins in the air! The fairy also sprinkles you with magic dust that lets you jump super high! ✨🧚",
        choices: [
          { text: '🐉 Celebrate with Ember!', next: 'ending_hero' }
        ]
      },
      forest_fire: {
        emoji: '🫐',
        title: 'Fire Berries!',
        text: "You search carefully and discover glowing fire berries! 🫐🔥 They look like little warm fireballs that don't hurt your hands. You collect them in your helmet and bring them to Ember. They work PERFECTLY — Ember roars with happy orange fire!",
        choices: [
          { text: '🏰 Head back to the village!', next: 'ending_helper' }
        ]
      },
      feather_test: {
        emoji: '🕯️',
        title: 'Wise and Careful!',
        text: "Smart thinking! You test the feather on a small candle first. ✅ It works beautifully and safely! You bring it to Ember who holds it gently. Ember glows brighter than EVER — the whole kingdom can see the happy glow from miles away!",
        choices: [
          { text: '🎉 Celebrate!', next: 'ending_phoenix' }
        ]
      },
      ending_hero: { emoji: '⚔️', title: 'Royal Dragon Knight!', text: "Ember's fire roars back! 🔥🐉 You have a magic flute, a fairy blessing, AND a dragon best friend! The King makes you a Royal Dragon Knight ⚔️. Your name goes in the kingdom's history book in golden ink. You and Ember are friends FOREVER! 💛", isEnding: true, endingType: 'great', fireworks: '🐉⚔️👑🔥🌟' },
      ending_helper: { emoji: '🐉', title: "Dragon's Best Friend!", text: "Ember's fire roars back to life! 🔥 That whole winter, Ember keeps your village warm while snow falls outside. Everyone calls you \"The Dragon's Friend\" — the best nickname EVER! Warm hugs and hot cocoa for everyone every single night! ☕❤️", isEnding: true, endingType: 'good', fireworks: '🐉🔥☕❤️🏰' },
      ending_phoenix: { emoji: '🌟', title: 'Super Dragon!', text: "Ember holds the golden feather and transforms — SUPER DRAGON! ✨🐉 Ember can now warm the WHOLE kingdom with a single happy breath! Everyone has the most amazing winter ever: outdoor parties, sledding, hot cocoa, and a dragon light show every night! You're a LEGEND! 🏆", isEnding: true, endingType: 'great', fireworks: '🌟🐉☕🎉🏆' },
      ending_bread: { emoji: '🥐', title: 'Tasty Victory!', text: "Ember eats dragon bread and WHOOOOSH — fire returns! 🔥 Ember says it's the BEST food ever eaten by a dragon! The baker becomes famous and opens Dragon Bread shops in every town. You get free bread forever! Who knew bread could save a kingdom? 🥐🎉", isEnding: true, endingType: 'good', fireworks: '🥐🔥🎉😋🌟' },
      ending_baker: { emoji: '🌟', title: 'The Warmth Team!', text: "With armfuls of Dragon Bread, EVERY cold creature in the kingdom gets warm! 🔥 You, the baker, and Ember start \"The Warmth Team\" and travel the whole kingdom helping anyone who's cold. You're three best friends and total HEROES! 💛", isEnding: true, endingType: 'great', fireworks: '🌟🤝🔥🥐🐉' }
    }
  },

  ocean: {
    id: 'ocean',
    title: '🌊 Ocean Depths',
    theme: 'ocean',
    badge: 'badge-ocean',
    desc: 'Dive deep and discover ocean wonders!',
    nodes: {
      start: {
        emoji: '🟡',
        title: 'Dive In!',
        text: "You're in a bright yellow submarine 🟡 diving to the deepest part of the ocean! Colorful fish zoom past your window! 🐟 Your radar beeps twice: a HUGE glowing shape ahead 🌟 and an old sunken ship 🚢 to your left. What do you explore first?",
        choices: [
          { text: '🌟 Investigate the glowing shape', next: 'glow' },
          { text: '🚢 Explore the old sunken ship', next: 'ship' }
        ]
      },
      glow: {
        emoji: '🪼',
        title: 'Jellyfish Rainbow!',
        text: "THOUSANDS of tiny jellyfish are making a rainbow underwater! 🌈 It's the most beautiful thing you've ever seen! Their queen, Jelly, swims up to your window. \"Please help! A big anchor got tangled in our home! Can you move it?\" 🪼",
        choices: [
          { text: '🦾 Use the robot arm to move the anchor', next: 'anchor' },
          { text: '📻 Radio for a bigger submarine first', next: 'help_call' }
        ]
      },
      ship: {
        emoji: '🗺️',
        title: '300-Year-Old Ship!',
        text: "The ship sank 300 years ago! 🚢 Inside you find old treasure maps and a bottle with a message: \"The Rainbow Reef — the most colorful place on Earth — is hidden under the rock shaped like a turtle 🐢.\" WHOA!",
        choices: [
          { text: '🐢 Search for the Rainbow Reef!', next: 'reef_search' },
          { text: '📚 Bring the treasure maps to the surface', next: 'maps_surface' }
        ]
      },
      anchor: {
        emoji: '🦾',
        title: 'Anchor Away!',
        text: "You use your robot arm to VERY GENTLY move the anchor. POP! 🎉 The jellyfish are FREE! They're so happy they glow every color at once and dance around your sub. Then they guide you through a secret magical underwater tunnel full of sparkling light! ✨",
        choices: [
          { text: '✨ Follow the magical tunnel!', next: 'ending_hero' }
        ]
      },
      help_call: {
        emoji: '🐙',
        title: 'Otto the Octopus!',
        text: "While waiting for backup, you meet Otto — the funniest octopus in the whole ocean! 🐙 Otto can change 8 different colors at once and does a comedy show for you! Then Otto asks: \"Can you help find my missing hat? It's a tiny red beret!\" 🎩",
        choices: [
          { text: '🎩 Help Otto find his hat first!', next: 'hat' },
          { text: '⚓ Wait and help the jellyfish', next: 'anchor' }
        ]
      },
      reef_search: {
        emoji: '🌈',
        title: 'Rainbow Reef!',
        text: "You find the turtle rock 🐢 and underneath — THE RAINBOW REEF! 🌈 The most colorful place on the entire planet! Fish that look like living fireworks! Coral shaped like castles! Flowers that SING! You can't believe your eyes!",
        choices: [
          { text: '📸 Take photos to show the whole world', next: 'ending_reef' },
          { text: '🗺️ Make a detailed map to protect it', next: 'ending_mapper' }
        ]
      },
      maps_surface: {
        emoji: '📚',
        title: 'History Discovery!',
        text: "Scientists go WILD! 🎉 The treasure maps reveal TWO more sunken ships packed with 300-year-old toys and books! One book has a recipe for the greatest feast ever made — and it works on land! Museums everywhere want to meet you!",
        choices: [
          { text: '🏛️ Take everything to the museum!', next: 'ending_historian' }
        ]
      },
      hat: {
        emoji: '🎩',
        title: "Otto's Beret!",
        text: "You spot it! Otto's tiny red beret is stuck in a coral! 🎩❤️ You free it carefully with the robot arm. Otto is SO happy that all 8 arms hug your submarine at once! As thanks, Otto gives you a magic pearl that lets you breathe underwater WITHOUT a submarine! 🔮",
        choices: [
          { text: '🌊 Swim free in the deep ocean!', next: 'ending_hero' }
        ]
      },
      ending_hero: { emoji: '🐟', title: 'Greatest Ocean Explorer!', text: "With your magic pearl, you swim FREE in the deep ocean like a fish! 🌊✨ The jellyfish perform a light show just for you! You discover 12 new species and ALL of them are named after you! Every ocean scientist in the world wants to learn from you! 🌟", isEnding: true, endingType: 'great', fireworks: '🌊🐟✨🪼🌟' },
      ending_reef: { emoji: '📸', title: 'World-Famous Photos!', text: "Your Rainbow Reef photos appear on every magazine, TV show, and classroom wall in the WORLD! 📸🌈 People protect the reef forever. Scientists name a golden dancing fish after you — the \"Explorer Fish\" 🐟✨. It shimmers like a rainbow when it swims! Incredible!", isEnding: true, endingType: 'great', fireworks: '📸🌈🐟🌊🌟' },
      ending_mapper: { emoji: '🎖️', title: 'Reef Protector!', text: "Your detailed map protects Rainbow Reef for 1,000 years! 🗺️ You win the Ocean Discovery Award 🎖️ and get to name every creature at the reef! You pick the best names ever (like \"Sparkle Wobblefish\" and \"Captain Puffgill\")! 🐠🎉", isEnding: true, endingType: 'good', fireworks: '🎖️🗺️🐠🌊⭐' },
      ending_historian: { emoji: '📚', title: 'History Maker!', text: "Your discovery makes HISTORY! 🏛️ The 300-year-old books teach us things we never knew! The ancient recipe turns out to be the greatest meal ever cooked — and you make it for your whole school! Everyone agrees: BEST MEAL EVER! 🍽️🎉", isEnding: true, endingType: 'good', fireworks: '📚🏛️🍽️🎉🌊' }
    }
  },

  pirate: {
    id: 'pirate',
    title: '🏴‍☠️ Pirate Adventure',
    theme: 'pirate',
    badge: 'badge-pirate',
    desc: 'Sail the seas and find legendary treasure!',
    nodes: {
      start: {
        emoji: '⚓',
        title: 'Captain of the Sunrise!',
        text: "You're Captain Sam — the youngest ship captain ever! ⚓ Your ship, the Sunrise, sails the sparkling blue sea. Your first mate, Polly the parrot 🦜, squawks: \"Captain! The mermaid map shows TWO treasures nearby — Dolphin Cove 🐬 or Storm Island ⛈️!\" Which way?",
        choices: [
          { text: '🐬 Sail to Dolphin Cove', next: 'dolphin_cove' },
          { text: '⛈️ Head to Storm Island', next: 'storm_island' }
        ]
      },
      dolphin_cove: {
        emoji: '🐬',
        title: 'Dolphin Cove!',
        text: "Dolphins leap around your ship and one of them — Marina — can talk! 🐬 \"A sea witch stole our singing stones! Without them we can't sing!\" She shows you two paths: the Coral Cave 🐚 where the witch lives, or the Magic Tide Pool 🌊 where the stones might have washed up.",
        choices: [
          { text: '🐚 Go to the Coral Cave', next: 'coral_cave' },
          { text: '🌊 Check the Magic Tide Pool', next: 'tide_pool' }
        ]
      },
      storm_island: {
        emoji: '⛈️',
        title: 'Storm Island!',
        text: "Storm Island is wild and exciting! ⛈️ Lightning flashes but never touches you — it's MAGICAL lightning that only makes things sparkle! You find a beach with two trails: one leading to a rumbling volcano 🌋 and one to a mysterious lighthouse 🏮 that flashes rainbow colors!",
        choices: [
          { text: '🌋 Explore the rumbling volcano', next: 'volcano' },
          { text: '🏮 Visit the rainbow lighthouse', next: 'lighthouse' }
        ]
      },
      coral_cave: {
        emoji: '🧙',
        title: 'The Sea Witch!',
        text: "The sea witch turns out to be NOT scary at all — she's just lonely! 🧙 She took the singing stones to have music in her dark cave. \"If you bring me a friend, I'll return the stones!\" You ask Polly the parrot to visit her sometimes. Polly agrees!",
        choices: [
          { text: '🎵 Get the stones back for the dolphins!', next: 'ending_dolphin_hero' }
        ]
      },
      tide_pool: {
        emoji: '🐚',
        title: 'Magic Tide Pool',
        text: "The magic tide pool glows with moonlight! 🌙 At the bottom, you see the singing stones AND something else: a treasure chest! You use Polly's sharp eyes to guide your hand through the magic water. You grab the stones!",
        choices: [
          { text: '🎁 Take the stones AND the treasure chest!', next: 'ending_pirate_rich' },
          { text: '🎵 Just take the stones for the dolphins', next: 'ending_dolphin_hero' }
        ]
      },
      volcano: {
        emoji: '🌋',
        title: 'Fire Ruby!',
        text: "At the volcano, a friendly fire sprite named Blaze pops out! 🔥 \"I guard the Fire Ruby — the most valuable gem in the world!\" Blaze shows you it glows warm enough to navigate at night. \"Take it — you deserve an adventure worthy of it!\" Blaze drops it in your hand!",
        choices: [
          { text: '💎 Accept the Fire Ruby!', next: 'ending_legendary' }
        ]
      },
      lighthouse: {
        emoji: '🏮',
        title: 'The Rainbow Keeper',
        text: "Inside the lighthouse lives Old Finn, a retired pirate! 🏮 \"I've been waiting for the right captain to inherit my greatest treasure!\" He opens a chest full of... MAPS! But not just maps — maps to every magical place in the world! He hands them to you!",
        choices: [
          { text: '🗺️ Accept the magical maps!', next: 'ending_map_master' },
          { text: '🤝 Ask Finn to sail with you instead', next: 'ending_legendary' }
        ]
      },
      ending_dolphin_hero: { emoji: '🐬', title: 'Friend of the Ocean!', text: "The dolphins get their singing stones back and fill the whole ocean with the most beautiful music you've ever heard! 🎵🌊 Marina gives you a golden dolphin charm that always leads you to treasure. Dolphins will help you whenever you call! 🐬💛 You're a legend of the sea!", isEnding: true, endingType: 'great', fireworks: '🐬🎵🌊💛⭐' },
      ending_pirate_rich: { emoji: '💰', title: 'Treasure Captain!', text: "The chest is filled with golden coins, rainbow pearls, and a map to TEN more treasure islands! 💰🗺️ The dolphins are so happy they escort your ship everywhere! You become the most famous treasure-finding captain in history! Songs are written about your adventures! 🎶🏴‍☠️", isEnding: true, endingType: 'good', fireworks: '💰🏴‍☠️🗺️🐬🌊' },
      ending_legendary: { emoji: '🌟', title: 'Legendary Captain!', text: "With the Fire Ruby lighting your way at night, you discover THREE legendary places no pirate has ever found! 💎🗺️ Your crew calls you Captain Legend! You fill your ship with the most amazing treasures of the age, and every port you visit throws a party! 🎉⚓ LEGENDARY!", isEnding: true, endingType: 'great', fireworks: '🌟⚓🗺️💎🎉' },
      ending_map_master: { emoji: '🗺️', title: 'Master of Maps!', text: "With Finn's magical maps, you visit 47 incredible places: floating islands, underwater castles, and a jungle where the trees walk around! 🌴 You write the world's greatest adventure book and every kid in the world reads it! Your adventures never end! 📚🏴‍☠️", isEnding: true, endingType: 'great', fireworks: '🗺️🌟📚⚓🏴‍☠️' }
    }
  },

  superhero: {
    id: 'superhero',
    title: '🦸 Superhero Training',
    theme: 'superhero',
    badge: 'badge-superhero',
    desc: 'Discover your superpower and save the day!',
    nodes: {
      start: {
        emoji: '⚡',
        title: 'A Strange Morning!',
        text: "You wake up feeling DIFFERENT! ⚡ You reach for your breakfast and — WHOOSH — you float it right to your hand without touching it! You have a SUPERPOWER! But what kind? You notice two things: your hands are glowing yellow 💛 and your feet feel extra springy 🦵. What do you test first?",
        choices: [
          { text: '💛 Test your glowing hands', next: 'glow_power' },
          { text: '🦵 Test your springy super legs', next: 'spring_power' }
        ]
      },
      glow_power: {
        emoji: '💛',
        title: 'Sun Power!',
        text: "Your hands can shoot warm golden light that fixes ANYTHING broken! 💛✨ You touch a cracked window — it seals up! You touch a wilting plant — it blooms! Walking to school, you see two emergencies: a cat stuck in a tree 🐱 and a baby bird that fell from its nest 🐦.",
        choices: [
          { text: '🐱 Help the cat in the tree', next: 'cat_rescue' },
          { text: '🐦 Help the fallen baby bird first', next: 'bird_rescue' }
        ]
      },
      spring_power: {
        emoji: '🦘',
        title: 'Super Jump!',
        text: "You can jump TEN STORIES HIGH and land like a feather! 🦘 You leap over your whole school in one bound! A friendly scientist, Dr. Spark, sees you and runs over. \"I can help you train your power! But first — the city needs help! A kite is stuck on the TV tower 📺, and a parade float broke down! 🎪\"",
        choices: [
          { text: '📺 Retrieve the stuck kite', next: 'kite_rescue' },
          { text: '🎪 Fix the parade float', next: 'parade_help' }
        ]
      },
      cat_rescue: {
        emoji: '🐱',
        title: 'Kitty Saved!',
        text: "You gently float the cat down with a warm golden beam! 🐱💛 The cat gives you a grateful headbutt! Suddenly you hear: \"HELP! Our school's science fair robot went haywire and is mixing up everyone's projects!\" Oh no! 🤖",
        choices: [
          { text: '🤖 Rush to fix the haywire robot!', next: 'robot_fix' }
        ]
      },
      bird_rescue: {
        emoji: '🐦',
        title: 'Baby Bird Home!',
        text: "You heal the baby bird AND gently lift it back into its nest with your golden beam! 🐦💛 The bird family sings the happiest song you've ever heard! A news reporter films the whole thing and you go viral instantly! But then — a bigger crisis! 🤖",
        choices: [
          { text: '🤖 Help with the haywire robot!', next: 'robot_fix' }
        ]
      },
      kite_rescue: {
        emoji: '📺',
        title: 'Kite Rescue!',
        text: "You leap to the top of the TV tower in one jump and carefully free the kite! 📺🦘 It belongs to a little kid who's been crying for an hour! The kid hugs you SO tight. A photo goes everywhere! Dr. Spark appears: \"Ready for official superhero training?\" 🎓",
        choices: [
          { text: '✅ Yes! Start training NOW!', next: 'training' }
        ]
      },
      parade_help: {
        emoji: '🎪',
        title: 'Parade Saved!',
        text: "You jump under the broken float and push it all the way down the parade route! 🎪🦘 The crowd goes WILD! Confetti everywhere! The mayor sees you and says: \"Our city needs a superhero! Will you be ours?\" 🏙️",
        choices: [
          { text: '🦸 Accept the role!', next: 'training' }
        ]
      },
      robot_fix: {
        emoji: '🤖',
        title: 'Robot Chaos!',
        text: "The robot is mixing everything up — but you notice it's not bad, just confused! 🤖 You shine your golden healing light on its circuits. BZZT! ✅ The robot calms down and starts HELPING everyone set up their projects! Everyone cheers! The principal says you're a hero! 🏫",
        choices: [
          { text: '🌟 Accept the \"School Hero\" award!', next: 'ending_school_hero' },
          { text: '🦸 Ask to join official superhero training', next: 'training' }
        ]
      },
      training: {
        emoji: '🎓',
        title: 'Superhero Academy!',
        text: "Dr. Spark's Superhero Academy is AMAZING! 🎓 You train with kids from all over — each one has a different power! One girl can speak to animals, one boy can move really fast, one kid can make plants grow instantly! Together you form... THE HERO SQUAD! 🦸🦸🦸",
        choices: [
          { text: '🌊 Take on your first big mission together!', next: 'ending_squad_hero' }
        ]
      },
      ending_school_hero: { emoji: '🏫', title: 'School Hero!', text: "The whole school makes you a banner: \"OUR HERO! 🌟\" You heal every broken thing in the school — desks, the gym floor, even the ancient photocopier that always jammed! Teachers cry happy tears! You decide to use your power to fix things everywhere you go! 💛✨", isEnding: true, endingType: 'good', fireworks: '🌟🏫💛✨🦸' },
      ending_squad_hero: { emoji: '🦸', title: 'Hero Squad Saves the Day!', text: "Your first mission: a giant storm is heading for the city! 🌪️ You combine all your powers — golden light, super jump, animal friends, speed, and instant plants! Together you redirect the storm and turn it into a gentle rainbow shower! 🌈 The whole city cheers! THE HERO SQUAD IS UNSTOPPABLE! 🎉", isEnding: true, endingType: 'great', fireworks: '🦸🌈🌪️🎉🌟' },
      ending_city_hero: { emoji: '🏙️', title: 'City Champion!', text: "The mayor gives you the KEY TO THE CITY! 🗝️ There's a huge parade just for you! Kids everywhere want to be just like you. You start a superhero school for anyone who discovers they have powers — because EVERYONE has something special inside! 💛🌟", isEnding: true, endingType: 'great', fireworks: '🏙️🗝️🦸💛🌟' }
    }
  }
};

// ===== ACHIEVEMENTS =====
const ACHIEVEMENT_IDS = [];
Object.values(STORIES).forEach(story => {
  Object.entries(story.nodes).forEach(([id, node]) => {
    if (node.isEnding) ACHIEVEMENT_IDS.push(`${story.id}:${id}`);
  });
});

function getAchievements() {
  try {
    return JSON.parse(localStorage.getItem('kidgame_achievements') || '[]');
  } catch { return []; }
}

function saveAchievement(storyId, nodeId) {
  const key = `${storyId}:${nodeId}`;
  const achievements = getAchievements();
  if (!achievements.includes(key)) {
    achievements.push(key);
    localStorage.setItem('kidgame_achievements', JSON.stringify(achievements));
  }
}

// ===== GAME STATE =====
const state = {
  currentScreen: 'start',
  currentStory: null,
  currentNode: null,
  stepCount: 0,
  triviaStepInterval: 3,
  triviaScore: 0,
  pendingNext: null,
  usedTrivia: []
};

// ===== DOM REFERENCES =====
const screens = {
  start: document.getElementById('start-screen'),
  select: document.getElementById('select-screen'),
  game: document.getElementById('game-screen'),
  trivia: document.getElementById('trivia-screen'),
  triviaMode: document.getElementById('trivia-mode-screen'),
  mathMode: document.getElementById('math-mode-screen'),
  ending: document.getElementById('ending-screen'),
  achievements: document.getElementById('achievements-screen')
};

// ===== SCREEN NAVIGATION =====
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
  state.currentScreen = name;
  window.scrollTo(0, 0);
}

// ===== START GAME =====
function startGame() { showScreen('select'); }

// ===== SHOW ACHIEVEMENTS =====
function showAchievements() {
  renderAchievements();
  showScreen('achievements');
}

function renderAchievements() {
  const earned = getAchievements();
  const total = ACHIEVEMENT_IDS.length;
  const screen = screens.achievements;
  let html = `
    <div class="ach-header">
      <button class="back-btn" onclick="showScreen('start')">← Back</button>
      <h2 class="ach-title">🏆 Your Trophies</h2>
    </div>
    <p class="ach-subtitle">${earned.length} / ${total} endings found!</p>
    <div class="ach-progress-bar"><div class="ach-progress-fill" style="width:${Math.round(earned.length/total*100)}%"></div></div>
  `;
  Object.values(STORIES).forEach(story => {
    html += `<div class="ach-story-section"><h3 class="ach-story-title">${story.title}</h3><div class="ach-grid">`;
    Object.entries(story.nodes).forEach(([id, node]) => {
      if (!node.isEnding) return;
      const key = `${story.id}:${id}`;
      const found = earned.includes(key);
      html += `<div class="ach-item ${found ? 'found' : 'locked'}">
        <span class="ach-emoji">${found ? node.emoji : '🔒'}</span>
        <span class="ach-name">${found ? node.title : '???'}</span>
        ${found ? `<span class="ach-type-badge ${node.endingType === 'great' ? 'badge-great' : 'badge-good'}">${node.endingType === 'great' ? '⭐ Amazing' : '🎉 Great'}</span>` : ''}
      </div>`;
    });
    html += `</div></div>`;
  });
  screen.innerHTML = html;
}

// ===== PICK STORY =====
function pickStory(storyId) {
  state.currentStory = STORIES[storyId];
  state.currentNode = 'start';
  state.stepCount = 0;
  state.triviaScore = 0;
  showScreen('game');
  renderGameScreen();
}

// ===== RENDER GAME SCREEN =====
function renderGameScreen() {
  const story = state.currentStory;
  const node = story.nodes[state.currentNode];
  const gameScreen = screens.game;
  gameScreen.className = `screen active theme-${story.theme}`;
  gameScreen.innerHTML = `
    <div class="story-header">
      <button class="back-btn" onclick="goToSelect()">← Back</button>
      <span class="story-name-badge ${story.badge}">${story.title}</span>
      <span class="trivia-score-badge">⭐ ${state.triviaScore}</span>
    </div>
    <div class="progress-dots" id="progress-dots">${generateDots()}</div>
    <div class="scene-card" id="scene-card">
      <span class="scene-emoji">${node.emoji}</span>
      <h2 class="scene-title">${node.title}</h2>
      <p class="scene-text">${node.text}</p>
    </div>
    <div class="choices-container" id="choices-container">
      ${renderChoices(node)}
    </div>
  `;
  requestAnimationFrame(() => requestAnimationFrame(() => {
    const card = document.getElementById('scene-card');
    const choices = document.getElementById('choices-container');
    if (card) card.classList.add('visible');
    if (choices) choices.classList.add('visible');
  }));
}

function generateDots() {
  let html = '';
  for (let i = 0; i < 8; i++) {
    html += `<div class="dot ${i < state.stepCount ? 'filled' : ''}"></div>`;
  }
  return html;
}

function renderChoices(node) {
  if (!node.choices || node.choices.length === 0) return '';
  return node.choices.map(c =>
    `<button class="choice-btn" onclick="makeChoice('${c.next}')">${c.text}</button>`
  ).join('');
}

// ===== MAKE A CHOICE =====
function makeChoice(nextNodeId) {
  state.stepCount++;
  state.pendingNext = nextNodeId;

  // Show trivia every 3rd step
  if (state.stepCount % state.triviaStepInterval === 0) {
    showTrivia();
  } else {
    navigateToNode(nextNodeId);
  }
}

function navigateToNode(nodeId) {
  state.currentNode = nodeId;
  const node = state.currentStory.nodes[nodeId];
  if (node.isEnding) {
    saveAchievement(state.currentStory.id, nodeId);
    showEnding(node);
  } else {
    const card = document.getElementById('scene-card');
    const choices = document.getElementById('choices-container');
    if (card) card.classList.remove('visible');
    if (choices) choices.classList.remove('visible');
    setTimeout(() => renderGameScreen(), 300);
  }
}

// ===== TRIVIA =====
function getRandomTrivia() {
  const available = TRIVIA.filter((_, i) => !state.usedTrivia.includes(i));
  if (available.length === 0) {
    state.usedTrivia = [];
    return { item: TRIVIA[0], index: 0 };
  }
  const idx = Math.floor(Math.random() * available.length);
  const originalIndex = TRIVIA.indexOf(available[idx]);
  return { item: available[idx], index: originalIndex };
}

function showTrivia() {
  const { item, index } = getRandomTrivia();
  state.usedTrivia.push(index);
  const screen = screens.trivia;
  screen.innerHTML = `
    <div class="trivia-header">
      <span class="trivia-badge">🧠 Fun Fact Challenge!</span>
      <span class="trivia-score">⭐ ${state.triviaScore} stars</span>
    </div>
    <div class="trivia-card" id="trivia-card">
      <p class="trivia-question">${item.q}</p>
      <div class="trivia-choices" id="trivia-choices">
        ${item.choices.map((c, i) =>
          `<button class="trivia-btn" onclick="answerTrivia(${i}, ${item.a}, this)">${c}</button>`
        ).join('')}
      </div>
    </div>
    <p class="trivia-hint">Answer the question to continue your adventure!</p>
  `;
  showScreen('trivia');
  requestAnimationFrame(() => requestAnimationFrame(() => {
    const card = document.getElementById('trivia-card');
    if (card) card.classList.add('visible');
  }));
}

function answerTrivia(chosen, correct, btn) {
  const btns = document.querySelectorAll('.trivia-btn');
  btns.forEach(b => b.disabled = true);

  const isCorrect = chosen === correct;
  if (isCorrect) {
    btn.classList.add('trivia-correct');
    state.triviaScore++;
  } else {
    btn.classList.add('trivia-wrong');
    btns[correct].classList.add('trivia-correct');
  }

  const item = TRIVIA[state.usedTrivia[state.usedTrivia.length - 1]];
  const factDiv = document.createElement('div');
  factDiv.className = `trivia-fact ${isCorrect ? 'fact-correct' : 'fact-wrong'}`;
  factDiv.innerHTML = `
    <p>${isCorrect ? '🎉 Correct!' : '🤔 Not quite!'}</p>
    <p class="fact-text">${item.fact}</p>
    <button class="btn-primary" onclick="continueAfterTrivia()" style="margin-top:16px">Continue Adventure! →</button>
  `;
  document.getElementById('trivia-card').appendChild(factDiv);
}

function continueAfterTrivia() {
  showScreen('game');
  navigateToNode(state.pendingNext);
}

// ===== SHOW ENDING =====
function showEnding(node) {
  const endingScreen = screens.ending;
  const isGreat = node.endingType === 'great';
  endingScreen.className = `screen active ${isGreat ? 'ending-bg-great' : 'ending-bg-good'}`;
  endingScreen.innerHTML = `
    <div class="ending-fireworks">${node.fireworks}</div>
    <span class="ending-badge ${isGreat ? 'badge-great' : 'badge-good'}">
      ${isGreat ? '⭐ Amazing Ending!' : '🎉 Great Ending!'}
    </span>
    <span class="ending-emoji">${node.emoji}</span>
    <h2 class="ending-title">${node.title}</h2>
    <p class="ending-text">${node.text}</p>
    <div class="trivia-final-score">
      <span>⭐ You earned ${state.triviaScore} trivia stars!</span>
    </div>
    <div class="ending-buttons">
      <button class="btn-primary" onclick="replayStory()">🔄 Play Again!</button>
      <button class="btn-secondary" onclick="pickDifferentStory()">🌟 Try Another Adventure</button>
      <button class="btn-secondary" onclick="showAchievements()">🏆 View Trophies</button>
      <button class="btn-secondary" onclick="showScreen('start')">🏠 Home</button>
    </div>
  `;
  showScreen('ending');
}

// ===== NAVIGATION HELPERS =====
function goToSelect() { showScreen('select'); }
function replayStory() { pickStory(state.currentStory.id); }
function pickDifferentStory() { showScreen('select'); }

// ===== STARS BACKGROUND =====
function createStars() {
  const container = document.querySelector('.stars');
  if (!container) return;
  for (let i = 0; i < 80; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2.5 + 0.5;
    star.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;width:${size}px;height:${size}px;--dur:${Math.random()*3+2}s;--max-opacity:${Math.random()*0.5+0.2};animation-delay:${Math.random()*4}s;`;
    container.appendChild(star);
  }
}

// ===================================================
// ===== STANDALONE TRIVIA MODE =====
// ===================================================

const TRIVIA_CATEGORIES = {
  all:     { label: '🌟 All Categories', emoji: '🌟', filter: () => true },
  animals: { label: '🐾 Animals',        emoji: '🐾', filter: (q) => q.cat === 'animals' },
  space:   { label: '🚀 Space',          emoji: '🚀', filter: (q) => q.cat === 'space' },
  science: { label: '🔬 Science',        emoji: '🔬', filter: (q) => q.cat === 'science' },
  ocean:   { label: '🌊 Ocean',          emoji: '🌊', filter: (q) => q.cat === 'ocean' },
  fun:     { label: '😄 Fun Facts',      emoji: '😄', filter: (q) => q.cat === 'fun' }
};

// Tag existing trivia with categories
const TRIVIA_TAGGED = TRIVIA.map((q, i) => {
  if (i <= 7)  return { ...q, cat: 'animals' };
  if (i <= 13) return { ...q, cat: 'space' };
  if (i <= 17) return { ...q, cat: 'ocean' };
  if (i <= 23) return { ...q, cat: 'science' };
  return { ...q, cat: 'fun' };
});

// Extra trivia for more questions
const EXTRA_TRIVIA = [
  { q: "What sound does a giraffe make?", a: 2, choices: ["Roar", "Moo", "They're mostly silent!"], fact: "Giraffes are mostly silent but can make soft humming noises! They're the strong silent type! 🦒", cat: 'animals' },
  { q: "Which is the largest animal ever to live on Earth?", a: 0, choices: ["Blue Whale", "T-Rex", "Elephant"], fact: "The blue whale is the largest animal EVER — up to 100 feet long and 200 tons! Bigger than any dinosaur! 🐋", cat: 'animals' },
  { q: "Butterflies taste food with their...?", a: 1, choices: ["Mouth", "Feet", "Wings"], fact: "Butterflies have taste sensors on their feet so they can taste food just by standing on it! 🦋", cat: 'animals' },
  { q: "A group of crows is called a...?", a: 2, choices: ["Pack", "Herd", "Murder"], fact: "A group of crows is called a murder! Don't worry, crows are actually very smart and friendly birds! 🐦‍⬛", cat: 'animals' },
  { q: "Which planet is called the Red Planet?", a: 1, choices: ["Venus", "Mars", "Jupiter"], fact: "Mars looks red because its soil is rich in iron oxide — rust! It's basically a rusty planet! 🔴", cat: 'space' },
  { q: "What is a shooting star actually made of?", a: 2, choices: ["A falling star", "Space dust", "A small rock burning up"], fact: "Shooting stars are tiny rocks (meteors) that burn up as they enter Earth's atmosphere! 🌠", cat: 'space' },
  { q: "How many stars are in the Milky Way galaxy?", a: 1, choices: ["1 million", "About 300 billion", "A few thousand"], fact: "The Milky Way has about 300 BILLION stars! And there are billions of other galaxies too! 🌌", cat: 'space' },
  { q: "Which ocean is the smallest?", a: 0, choices: ["Arctic Ocean", "Indian Ocean", "Atlantic Ocean"], fact: "The Arctic Ocean is the smallest — but it's still about 5 million square miles of icy water! 🧊", cat: 'ocean' },
  { q: "How do starfish eat?", a: 2, choices: ["They swallow prey whole", "They have tiny teeth", "They push their stomach outside their body!"], fact: "Starfish push their stomach OUTSIDE their body to digest food around them! How wild is that?! ⭐", cat: 'ocean' },
  { q: "What makes the ocean salty?", a: 1, choices: ["Sea creatures", "Minerals from rivers and rocks", "Underwater volcanoes"], fact: "Rivers carry minerals from rocks to the ocean over millions of years — that's where the salt comes from! 🏔️", cat: 'ocean' },
  { q: "How fast does sound travel through water?", a: 2, choices: ["Same as air", "Twice as fast", "About 5 times faster than in air!"], fact: "Sound travels 5 times faster in water than air! Whales can communicate across entire oceans! 🐋", cat: 'science' },
  { q: "What is the center of an atom called?", a: 0, choices: ["The nucleus", "The core", "The center ball"], fact: "The nucleus is at the center of every atom! It contains protons and neutrons. Atoms are TINY — 10 million fit in 1mm! ⚛️", cat: 'science' },
  { q: "Which human organ is about the size of a fist?", a: 1, choices: ["Liver", "Heart", "Stomach"], fact: "Your heart is about the size of your fist and beats about 100,000 times every single day! ❤️", cat: 'science' },
  { q: "Elephants are the only animals that can't...?", a: 2, choices: ["Swim", "Run", "Jump!"], fact: "Elephants are the only animals that physically cannot jump — their weight would hurt their joints! 🐘", cat: 'fun' },
  { q: "How many times can a hummingbird flap its wings per second?", a: 1, choices: ["5 times", "Up to 80 times", "200 times"], fact: "Hummingbirds flap their wings up to 80 times per second — that's why they hum! 🦜", cat: 'fun' },
  { q: "The Eiffel Tower grows in summer by how much?", a: 2, choices: ["1 millimeter", "1 centimeter", "About 6 inches (15cm)!"], fact: "Heat makes metal expand — the Eiffel Tower grows up to 6 inches taller on hot summer days! 🗼", cat: 'fun' }
];

const ALL_TRIVIA = [...TRIVIA_TAGGED, ...EXTRA_TRIVIA];

const tmState = {
  category: 'all',
  questions: [],
  current: 0,
  correct: 0,
  wrong: 0,
  total: 10
};

function startTriviaMode() {
  const screen = screens.triviaMode;
  screen.innerHTML = `
    <div class="mode-header">
      <button class="back-btn" onclick="showScreen('start')">← Back</button>
      <span class="mode-title-badge">🧠 Trivia Challenge</span>
    </div>
    <p class="select-subtitle" style="margin-bottom:20px">Pick a category to begin!</p>
    <div class="category-grid">
      <button class="category-btn cat-all" onclick="launchTrivia('all')"><span class="cat-emoji">🌟</span>All Topics</button>
      <button class="category-btn cat-animals" onclick="launchTrivia('animals')"><span class="cat-emoji">🐾</span>Animals</button>
      <button class="category-btn cat-space" onclick="launchTrivia('space')"><span class="cat-emoji">🚀</span>Space</button>
      <button class="category-btn cat-ocean" onclick="launchTrivia('ocean')"><span class="cat-emoji">🌊</span>Ocean</button>
      <button class="category-btn cat-science" onclick="launchTrivia('science')"><span class="cat-emoji">🔬</span>Science</button>
      <button class="category-btn cat-fun" onclick="launchTrivia('fun')"><span class="cat-emoji">😄</span>Fun Facts</button>
    </div>
    <p style="font-size:0.85rem;color:#9ca3af;text-align:center">10 questions per round · Learn amazing facts!</p>
  `;
  showScreen('triviaMode');
}

function launchTrivia(category) {
  tmState.category = category;
  tmState.current = 0;
  tmState.correct = 0;
  tmState.wrong = 0;

  const pool = ALL_TRIVIA.filter(q => category === 'all' || q.cat === category);
  const shuffled = pool.sort(() => Math.random() - 0.5);
  tmState.questions = shuffled.slice(0, Math.min(10, shuffled.length));
  tmState.total = tmState.questions.length;

  renderTriviaQuestion();
}

function renderTriviaQuestion() {
  const q = tmState.questions[tmState.current];
  const pct = Math.round((tmState.current / tmState.total) * 100);
  const screen = screens.triviaMode;
  screen.innerHTML = `
    <div class="mode-header">
      <button class="back-btn" onclick="startTriviaMode()">← Back</button>
      <span class="mode-title-badge">🧠 Trivia</span>
    </div>
    <div class="trivia-game-header">
      <span class="trivia-progress-text">Question ${tmState.current + 1} / ${tmState.total}</span>
      <span class="trivia-live-score">✅ ${tmState.correct} correct</span>
    </div>
    <div class="trivia-progress-bar"><div class="trivia-progress-fill" style="width:${pct}%"></div></div>
    <div class="trivia-card visible">
      <p class="trivia-question">${q.q}</p>
      <div class="trivia-choices" id="tm-choices">
        ${q.choices.map((c, i) =>
          `<button class="trivia-btn" onclick="answerTriviaMode(${i}, ${q.a}, this)">${c}</button>`
        ).join('')}
      </div>
    </div>
  `;
}

function answerTriviaMode(chosen, correct, btn) {
  const btns = document.querySelectorAll('#tm-choices .trivia-btn');
  btns.forEach(b => b.disabled = true);
  const isCorrect = chosen === correct;
  if (isCorrect) { btn.classList.add('trivia-correct'); tmState.correct++; }
  else { btn.classList.add('trivia-wrong'); btns[correct].classList.add('trivia-correct'); tmState.wrong++; }

  const q = tmState.questions[tmState.current];
  const card = document.querySelector('#trivia-mode-screen .trivia-card');
  const factDiv = document.createElement('div');
  factDiv.className = `trivia-fact ${isCorrect ? 'fact-correct' : 'fact-wrong'}`;
  const isLast = tmState.current >= tmState.total - 1;
  factDiv.innerHTML = `
    <p>${isCorrect ? '🎉 Correct!' : '🤔 Not quite!'}</p>
    <p class="fact-text">${q.fact}</p>
    <button class="btn-primary" onclick="${isLast ? 'showTriviaResults()' : 'nextTriviaQuestion()'}" style="margin-top:14px">
      ${isLast ? '🏆 See My Score!' : 'Next Question →'}
    </button>
  `;
  card.appendChild(factDiv);
}

function nextTriviaQuestion() {
  tmState.current++;
  renderTriviaQuestion();
}

function showTriviaResults() {
  const pct = Math.round((tmState.correct / tmState.total) * 100);
  let emoji, title, msg;
  if (pct >= 90) { emoji = '🏆'; title = 'GENIUS!'; msg = "That's incredible! You're a true trivia master! 🌟"; }
  else if (pct >= 70) { emoji = '🌟'; title = 'Amazing!'; msg = "You really know your stuff! Great job! 🎉"; }
  else if (pct >= 50) { emoji = '👍'; title = 'Nice Work!'; msg = "Good job! Play again to beat your score! 💪"; }
  else { emoji = '🤔'; title = 'Keep Learning!'; msg = "Every wrong answer teaches you something new! Try again! 📚"; }

  const screen = screens.triviaMode;
  screen.innerHTML = `
    <div class="mode-header">
      <button class="back-btn" onclick="showScreen('start')">← Home</button>
      <span class="mode-title-badge">🧠 Results</span>
    </div>
    <div class="results-card">
      <span class="results-emoji">${emoji}</span>
      <h2 class="results-title">${title}</h2>
      <div class="results-breakdown">
        <div class="result-stat stat-correct"><span class="stat-num">${tmState.correct}</span><span class="stat-label">Correct ✅</span></div>
        <div class="result-stat stat-wrong"><span class="stat-num">${tmState.wrong}</span><span class="stat-label">Wrong ❌</span></div>
        <div class="result-stat stat-score"><span class="stat-num">${pct}%</span><span class="stat-label">Score ⭐</span></div>
      </div>
      <p class="results-text">${msg}</p>
      <div style="display:flex;flex-direction:column;gap:10px">
        <button class="btn-primary" onclick="launchTrivia('${tmState.category}')">🔄 Play Again!</button>
        <button class="btn-secondary" onclick="startTriviaMode()">📋 Change Category</button>
        <button class="btn-secondary" onclick="showScreen('start')">🏠 Home</button>
      </div>
    </div>
  `;
}

// ===================================================
// ===== STANDALONE MATH GAME =====
// ===================================================

const mathState = {
  difficulty: 'easy',
  score: 0,
  streak: 0,
  questionNum: 0,
  total: 15,
  timeLeft: 15,
  timer: null,
  currentAnswer: 0
};

function startMathMode() {
  if (mathState.timer) { clearInterval(mathState.timer); mathState.timer = null; }
  const screen = screens.mathMode;
  screen.innerHTML = `
    <div class="mode-header">
      <button class="back-btn" onclick="showScreen('start')">← Back</button>
      <span class="mode-title-badge mode-title-badge-math">🔢 Math Challenge</span>
    </div>
    <p class="select-subtitle" style="margin-bottom:20px">Pick your level!</p>
    <div class="difficulty-grid">
      <button class="difficulty-btn diff-easy" onclick="launchMath('easy')">
        <span class="diff-emoji">🌱</span>
        <div class="diff-info"><div class="diff-name">Easy</div><div class="diff-desc">Add & subtract up to 20 · 20 seconds per question</div></div>
      </button>
      <button class="difficulty-btn diff-medium" onclick="launchMath('medium')">
        <span class="diff-emoji">🌟</span>
        <div class="diff-info"><div class="diff-name">Medium</div><div class="diff-desc">Add, subtract, multiply up to 50 · 15 seconds</div></div>
      </button>
      <button class="difficulty-btn diff-hard" onclick="launchMath('hard')">
        <span class="diff-emoji">🔥</span>
        <div class="diff-info"><div class="diff-name">Hard</div><div class="diff-desc">All operations up to 100 · 10 seconds</div></div>
      </button>
    </div>
    <p style="font-size:0.85rem;color:#9ca3af;text-align:center;margin-top:10px">15 questions · Race against the clock!</p>
  `;
  showScreen('mathMode');
}

function launchMath(difficulty) {
  mathState.difficulty = difficulty;
  mathState.score = 0;
  mathState.streak = 0;
  mathState.questionNum = 0;
  renderMathQuestion();
}

function generateMathQuestion() {
  const d = mathState.difficulty;
  const ops = d === 'easy' ? ['+', '-'] : d === 'medium' ? ['+', '-', '×'] : ['+', '-', '×', '÷'];
  const op = ops[Math.floor(Math.random() * ops.length)];
  let a, b, answer;

  const maxNum = d === 'easy' ? 20 : d === 'medium' ? 50 : 100;

  if (op === '+') {
    a = Math.floor(Math.random() * maxNum) + 1;
    b = Math.floor(Math.random() * maxNum) + 1;
    answer = a + b;
  } else if (op === '-') {
    a = Math.floor(Math.random() * maxNum) + 1;
    b = Math.floor(Math.random() * a) + 1;
    answer = a - b;
  } else if (op === '×') {
    const maxFactor = d === 'medium' ? 10 : 12;
    a = Math.floor(Math.random() * maxFactor) + 1;
    b = Math.floor(Math.random() * maxFactor) + 1;
    answer = a * b;
  } else { // ÷
    b = Math.floor(Math.random() * 11) + 2;
    answer = Math.floor(Math.random() * 10) + 1;
    a = b * answer;
  }

  return { problem: `${a} ${op} ${b} = ?`, answer };
}

function generateWrongAnswers(correct) {
  const wrongs = new Set();
  while (wrongs.size < 3) {
    const offset = Math.floor(Math.random() * 10) + 1;
    const wrong = Math.random() < 0.5 ? correct + offset : Math.max(0, correct - offset);
    if (wrong !== correct) wrongs.add(wrong);
  }
  return [...wrongs];
}

function renderMathQuestion() {
  if (mathState.questionNum >= mathState.total) {
    showMathResults();
    return;
  }

  const { problem, answer } = generateMathQuestion();
  mathState.currentAnswer = answer;

  const timeLimit = mathState.difficulty === 'easy' ? 20 : mathState.difficulty === 'medium' ? 15 : 10;
  mathState.timeLeft = timeLimit;
  if (mathState.timer) clearInterval(mathState.timer);

  const wrongs = generateWrongAnswers(answer);
  const allAnswers = [answer, ...wrongs].sort(() => Math.random() - 0.5);
  const pct = Math.round((mathState.questionNum / mathState.total) * 100);
  const streakMsg = mathState.streak >= 3 ? `🔥 ${mathState.streak} in a row!` : mathState.streak >= 2 ? `⚡ Streak: ${mathState.streak}!` : '';

  const screen = screens.mathMode;
  screen.innerHTML = `
    <div class="mode-header">
      <button class="back-btn" onclick="startMathMode()">← Back</button>
      <span class="mode-title-badge mode-title-badge-math">🔢 Math</span>
    </div>
    <div class="math-header">
      <span class="math-score-display">⭐ ${mathState.score} pts · Q${mathState.questionNum + 1}/${mathState.total}</span>
      <span class="math-timer-display timer-ok" id="math-timer">⏱️ ${mathState.timeLeft}s</span>
    </div>
    <div class="math-progress-bar"><div class="math-progress-fill" style="width:${pct}%"></div></div>
    <div class="math-question-card">
      <p class="math-problem">${problem}</p>
      <p class="math-streak">${streakMsg}</p>
    </div>
    <div class="math-answers">
      ${allAnswers.map(ans =>
        `<button class="math-btn" onclick="answerMath(${ans}, this)">${ans}</button>`
      ).join('')}
    </div>
    <div class="math-feedback" id="math-feedback"></div>
  `;

  mathState.timer = setInterval(() => {
    mathState.timeLeft--;
    const timerEl = document.getElementById('math-timer');
    if (!timerEl) { clearInterval(mathState.timer); return; }
    timerEl.textContent = `⏱️ ${mathState.timeLeft}s`;
    if (mathState.timeLeft <= 5) timerEl.className = 'math-timer-display timer-danger';
    else if (mathState.timeLeft <= 8) timerEl.className = 'math-timer-display timer-warn';

    if (mathState.timeLeft <= 0) {
      clearInterval(mathState.timer);
      timeOutMath();
    }
  }, 1000);
}

function answerMath(chosen, btn) {
  clearInterval(mathState.timer);
  const btns = document.querySelectorAll('.math-btn');
  btns.forEach(b => b.disabled = true);

  const isCorrect = chosen === mathState.currentAnswer;
  const timeBonus = mathState.difficulty === 'easy' ? 0 : mathState.timeLeft;
  const pts = isCorrect ? 10 + (mathState.streak * 2) + Math.floor(timeBonus / 3) : 0;

  if (isCorrect) {
    btn.classList.add('math-correct');
    mathState.score += pts;
    mathState.streak++;
    mathState.questionNum++;
    const fb = document.getElementById('math-feedback');
    if (fb) { fb.className = 'math-feedback feedback-correct'; fb.textContent = pts > 10 ? `🎉 +${pts} (streak bonus!)` : `✅ Correct! +${pts}`; }
    setTimeout(renderMathQuestion, 900);
  } else {
    btn.classList.add('math-wrong');
    btns.forEach(b => { if (parseInt(b.textContent) === mathState.currentAnswer) b.classList.add('math-correct'); });
    mathState.streak = 0;
    mathState.questionNum++;
    const fb = document.getElementById('math-feedback');
    if (fb) { fb.className = 'math-feedback feedback-wrong'; fb.textContent = `❌ The answer was ${mathState.currentAnswer}`; }
    setTimeout(renderMathQuestion, 1200);
  }
}

function timeOutMath() {
  const btns = document.querySelectorAll('.math-btn');
  btns.forEach(b => {
    b.disabled = true;
    if (parseInt(b.textContent) === mathState.currentAnswer) b.classList.add('math-correct');
  });
  mathState.streak = 0;
  mathState.questionNum++;
  const fb = document.getElementById('math-feedback');
  if (fb) { fb.className = 'math-feedback feedback-wrong'; fb.textContent = `⏰ Time's up! Answer: ${mathState.currentAnswer}`; }
  setTimeout(renderMathQuestion, 1200);
}

function showMathResults() {
  const maxScore = mathState.total * 14;
  const pct = Math.round((mathState.score / maxScore) * 100);
  let emoji, title, msg;
  if (pct >= 80) { emoji = '🧮'; title = 'Math Genius!'; msg = "Incredible! You're a math superstar! Lightning fast AND accurate! ⚡🌟"; }
  else if (pct >= 60) { emoji = '🌟'; title = 'Math Star!'; msg = "Great job! Your math skills are seriously impressive! 🎉"; }
  else if (pct >= 40) { emoji = '💪'; title = 'Getting There!'; msg = "Nice work! Keep practicing and you'll be unstoppable! 💡"; }
  else { emoji = '🤔'; title = 'Keep Practicing!'; msg = "Math gets easier with practice! Try an easier level first! 📚"; }

  const screen = screens.mathMode;
  screen.innerHTML = `
    <div class="mode-header">
      <button class="back-btn" onclick="showScreen('start')">← Home</button>
      <span class="mode-title-badge mode-title-badge-math">🔢 Results</span>
    </div>
    <div class="results-card">
      <span class="results-emoji">${emoji}</span>
      <h2 class="results-title">${title}</h2>
      <div class="results-score-big">${mathState.score} pts</div>
      <p class="results-text">${msg}</p>
      <div style="display:flex;flex-direction:column;gap:10px">
        <button class="btn-primary" onclick="launchMath('${mathState.difficulty}')">🔄 Play Again!</button>
        <button class="btn-secondary" onclick="startMathMode()">⚙️ Change Difficulty</button>
        <button class="btn-secondary" onclick="showScreen('start')">🏠 Home</button>
      </div>
    </div>
  `;
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  createStars();
  showScreen('start');
});
