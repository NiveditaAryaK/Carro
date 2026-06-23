import { create } from 'zustand';

export type Persona = 'gentle' | 'coach' | 'bestie' | 'sister';

type FbeState = {
  calmPoints: number;
  persona: Persona;
  setPersona: (persona: Persona) => void;
};

export const useFbeStore = create<FbeState>((set) => ({
  calmPoints: 120,
  persona: 'bestie',
  setPersona: (persona) => set({ persona }),
}));
