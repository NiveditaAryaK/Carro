import { create } from 'zustand';

export type Persona = 'gentle' | 'coach' | 'bestie' | 'sister';
export type Craving = 'Sweet' | 'Salty' | 'Fried' | 'Random food noise';

type FbeState = {
  calmPoints: number;
  craving: Craving;
  persona: Persona;
  setCraving: (craving: Craving) => void;
  setPersona: (persona: Persona) => void;
};

export const useFbeStore = create<FbeState>((set) => ({
  calmPoints: 120,
  craving: 'Sweet',
  persona: 'bestie',
  setCraving: (craving) => set({ craving }),
  setPersona: (persona) => set({ persona }),
}));
