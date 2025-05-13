import { MoodType, MoodColor } from '../types';

export const moodColorMap: Record<MoodType, MoodColor> = {
  happy: {
    primary: '#FBBF24', // Yellow
    secondary: '#F97316', // Orange
    accent: '#EC4899', // Pink
  },
  confident: {
    primary: '#7C3AED', // Purple
    secondary: '#4F46E5', // Indigo
    accent: '#2563EB', // Blue
  },
  calm: {
    primary: '#0EA5E9', // Sky blue
    secondary: '#14B8A6', // Teal
    accent: '#10B981', // Emerald
  },
  playful: {
    primary: '#EC4899', // Pink
    secondary: '#8B5CF6', // Violet
    accent: '#F97316', // Orange
  },
  energetic: {
    primary: '#EF4444', // Red
    secondary: '#F97316', // Orange
    accent: '#FBBF24', // Yellow
  },
  relaxed: {
    primary: '#14B8A6', // Teal
    secondary: '#0EA5E9', // Sky blue
    accent: '#8B5CF6', // Violet
  },
};

export const getComplementaryColors = (baseColor: string): string[] => {
  // Simple implementation - in a real app, would use color theory algorithms
  const colors = Object.values(moodColorMap).flatMap(
    mood => [mood.primary, mood.secondary, mood.accent]
  );
  
  return colors.filter(color => color !== baseColor).slice(0, 5);
};

export const generatePalette = (mood: MoodType): string[] => {
  const { primary, secondary, accent } = moodColorMap[mood];
  return [primary, secondary, accent];
};

export const lightenColor = (color: string, amount: number): string => {
  // Simple implementation - in a real app, would use proper color transformation
  return color;
};

export const darkenColor = (color: string, amount: number): string => {
  // Simple implementation - in a real app, would use proper color transformation
  return color;
};