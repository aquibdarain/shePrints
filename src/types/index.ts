export type MoodType = 'happy' | 'confident' | 'calm' | 'playful' | 'energetic' | 'relaxed';

export interface ClothingType {
  id: string;
  name: string;
  image: string;
  basePrice: number;
  category: 'top' | 'bottom' | 'dress' | 'outerwear';
}

export interface MoodColor {
  primary: string;
  secondary: string;
  accent: string;
}

export type PrintCategory = 'geometric' | 'floral' | 'abstract' | 'minimalist' | 'bold';

export interface Print {
  id: string;
  name: string;
  image: string;
  category: PrintCategory;
  moodMatch: MoodType[];
}

export interface Design {
  id: string;
  clothingType: ClothingType | null;
  mood: MoodType | null;
  print: string | null;
  colors: string[];
  uploadedArtwork: string | null;
  printCategory: PrintCategory | null;
}

export interface CartItem {
  id: string;
  design: Design;
  size: string;
  quantity: number;
  price: number;
  totalPrice: number;
}