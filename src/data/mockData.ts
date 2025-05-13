import { ClothingType, Print, MoodType } from '../types';

export const clothingTypes: ClothingType[] = [
  {
    id: 'tshirt',
    name: 'T-Shirt',
    image: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    basePrice: 25,
    category: 'top',
  },
  {
    id: 'hoodie',
    name: 'Hoodie',
    image: 'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    basePrice: 45,
    category: 'top',
  },
  {
    id: 'dress',
    name: 'Dress',
    image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    basePrice: 60,
    category: 'dress',
  },
  {
    id: 'sweater',
    name: 'Sweater',
    image: 'https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    basePrice: 50,
    category: 'top',
  },
  {
    id: 'jacket',
    name: 'Jacket',
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    basePrice: 80,
    category: 'outerwear',
  },
  {
    id: 'pants',
    name: 'Pants',
    image: 'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    basePrice: 55,
    category: 'bottom',
  },
];

export const moods: MoodType[] = [
  'happy',
  'confident',
  'calm',
  'playful',
  'energetic',
  'relaxed',
];

export const moodDescriptions: Record<MoodType, string> = {
  happy: 'Bright, cheerful designs that radiate positivity and joy',
  confident: 'Bold, striking patterns that make a statement',
  calm: 'Soothing, gentle designs that promote tranquility',
  playful: 'Fun, whimsical patterns full of creativity',
  energetic: 'Dynamic, vibrant designs that exude power',
  relaxed: 'Laid-back, cool patterns for casual comfort',
};

export const prints: Print[] = [
  {
    id: 'geo-lines',
    name: 'Geometric Lines',
    image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'geometric',
    moodMatch: ['confident', 'energetic'],
  },
  {
    id: 'floral-joy',
    name: 'Floral Joy',
    image: 'https://images.pexels.com/photos/4220967/pexels-photo-4220967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'floral',
    moodMatch: ['happy', 'playful', 'relaxed'],
  },
  {
    id: 'abstract-waves',
    name: 'Abstract Waves',
    image: 'https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'abstract',
    moodMatch: ['calm', 'relaxed'],
  },
  {
    id: 'minimalist-circles',
    name: 'Minimalist Circles',
    image: 'https://images.pexels.com/photos/4019766/pexels-photo-4019766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'minimalist',
    moodMatch: ['calm', 'confident'],
  },
  {
    id: 'bold-stripes',
    name: 'Bold Stripes',
    image: 'https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'bold',
    moodMatch: ['confident', 'energetic'],
  },
  {
    id: 'playful-dots',
    name: 'Playful Dots',
    image: 'https://images.pexels.com/photos/751373/pexels-photo-751373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'playful',
    moodMatch: ['happy', 'playful'],
  },
  {
    id: 'serene-gradient',
    name: 'Serene Gradient',
    image: 'https://images.pexels.com/photos/3826435/pexels-photo-3826435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'minimalist',
    moodMatch: ['calm', 'relaxed'],
  },
  {
    id: 'energetic-splash',
    name: 'Energetic Splash',
    image: 'https://images.pexels.com/photos/3255761/pexels-photo-3255761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'abstract',
    moodMatch: ['energetic', 'playful', 'happy'],
  },
];

export const featuredDesigns = [
  {
    id: 'featured-1',
    title: 'Confident Geometric Tee',
    image: 'https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Bold geometric patterns on a premium cotton tee',
    mood: 'confident',
  },
  {
    id: 'featured-2',
    title: 'Serene Ocean Hoodie',
    image: 'https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Calm, flowing patterns inspired by ocean waves',
    mood: 'calm',
  },
  {
    id: 'featured-3',
    title: 'Playful Summer Dress',
    image: 'https://images.pexels.com/photos/6044226/pexels-photo-6044226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Vibrant, fun patterns perfect for summer days',
    mood: 'playful',
  },
  {
    id: 'featured-4',
    title: 'Energetic Sport Jacket',
    image: 'https://images.pexels.com/photos/6311171/pexels-photo-6311171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Dynamic patterns that express energy and movement',
    mood: 'energetic',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah L.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    text: 'I created a hoodie based on my "calm" mood and it perfectly captures how I\'m relaxing at home. The design process was so intuitive!',
  },
  {
    id: 2,
    name: 'Michael T.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    text: 'The "confident" designs helped me create a shirt I wear to important meetings. It\'s become my power outfit!',
  },
  {
    id: 3,
    name: 'Elena R.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    text: 'I uploaded my own artwork and the print quality is amazing. The colors are vibrant and the fabric feels premium.',
  },
];