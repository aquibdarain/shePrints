import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ClothingType, MoodType, Design, PrintCategory } from '../types';
import { moodColorMap } from '../utils/colorUtils';

interface DesignContextType {
  selectedClothing: ClothingType | null;
  setSelectedClothing: (clothing: ClothingType | null) => void;
  selectedMood: MoodType | null;
  setSelectedMood: (mood: MoodType | null) => void;
  selectedPrint: string | null;
  setSelectedPrint: (print: string | null) => void;
  customColors: string[];
  setCustomColors: (colors: string[]) => void;
  uploadedArtwork: string | null;
  setUploadedArtwork: (artwork: string | null) => void;
  saveDesign: () => void;
  savedDesigns: Design[];
  currentDesign: Design | null;
  printCategory: PrintCategory | null;
  setPrintCategory: (category: PrintCategory | null) => void;
  resetDesign: () => void;
}

const DesignContext = createContext<DesignContextType | undefined>(undefined);

export const useDesign = () => {
  const context = useContext(DesignContext);
  if (context === undefined) {
    throw new Error('useDesign must be used within a DesignProvider');
  }
  return context;
};

interface DesignProviderProps {
  children: ReactNode;
}

export const DesignProvider: React.FC<DesignProviderProps> = ({ children }) => {
  const [selectedClothing, setSelectedClothing] = useState<ClothingType | null>(null);
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);
  const [selectedPrint, setSelectedPrint] = useState<string | null>(null);
  const [customColors, setCustomColors] = useState<string[]>([]);
  const [uploadedArtwork, setUploadedArtwork] = useState<string | null>(null);
  const [savedDesigns, setSavedDesigns] = useState<Design[]>([]);
  const [printCategory, setPrintCategory] = useState<PrintCategory | null>(null);

  // Initialize current design state
  const currentDesign: Design | null = selectedClothing ? {
    id: Date.now().toString(),
    clothingType: selectedClothing,
    mood: selectedMood,
    print: selectedPrint,
    colors: customColors.length > 0 ? customColors : (selectedMood ? [moodColorMap[selectedMood].primary] : []),
    uploadedArtwork,
    printCategory
  } : null;

  const saveDesign = () => {
    if (currentDesign) {
      setSavedDesigns([...savedDesigns, currentDesign]);
    }
  };

  const resetDesign = () => {
    setSelectedClothing(null);
    setSelectedMood(null);
    setSelectedPrint(null);
    setCustomColors([]);
    setUploadedArtwork(null);
    setPrintCategory(null);
  };

  return (
    <DesignContext.Provider
      value={{
        selectedClothing,
        setSelectedClothing,
        selectedMood,
        setSelectedMood,
        selectedPrint,
        setSelectedPrint,
        customColors,
        setCustomColors,
        uploadedArtwork,
        setUploadedArtwork,
        saveDesign,
        savedDesigns,
        currentDesign,
        printCategory,
        setPrintCategory,
        resetDesign
      }}
    >
      {children}
    </DesignContext.Provider>
  );
};