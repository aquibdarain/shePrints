import { MoodType, MoodColor } from '../types';

export const moodColorMap: Record<MoodType, MoodColor> = {
  happy: {
    primary: '#f43f5e',
    secondary: '#fb7185',
    accent: '#fda4af',
  },
  confident: {
    primary: '#7c3aed',
    secondary: '#8b5cf6',
    accent: '#a78bfa',
  },
  calm: {
    primary: '#0ea5e9',
    secondary: '#38bdf8',
    accent: '#7dd3fc',
  },
  playful: {
    primary: '#d946ef',
    secondary: '#e879f9',
    accent: '#f0abfc',
  },
  energetic: {
    primary: '#ef4444',
    secondary: '#f87171',
    accent: '#fca5a5',
  },
  relaxed: {
    primary: '#14b8a6',
    secondary: '#2dd4bf',
    accent: '#5eead4',
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