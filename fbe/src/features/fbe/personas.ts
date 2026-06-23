import { ImageSource } from 'expo-image';

import { Persona } from './store/use-fbe-store';

type PersonaOption = {
  id: Persona;
  title: string;
  subtitle: string;
  accent: string;
  image: ImageSource;
};

export const personaOptions: PersonaOption[] = [
  {
    id: 'gentle',
    title: 'Gentle friend',
    subtitle: 'Soft, warm, no pressure.',
    accent: '#dde7e1',
    image: require('@/assets/carro/carro_therapist.png'),
  },
  {
    id: 'coach',
    title: 'Strict coach',
    subtitle: 'Firm reminders, direct language.',
    accent: '#f4dede',
    image: require('@/assets/carro/carro_coach.png'),
  },
  {
    id: 'bestie',
    title: 'Funny bestie',
    subtitle: 'Playful roasts, memes, chaos energy.',
    accent: '#f4e5bd',
    image: require('@/assets/carro/carro_hype.png'),
  },
  {
    id: 'sister',
    title: 'Big sister',
    subtitle: 'Protective, honest, loving.',
    accent: '#d7cfc4',
    image: require('@/assets/carro/carro_big_sis.png'),
  },
];

export function getPersonaOption(persona: Persona) {
  return personaOptions.find((option) => option.id === persona) ?? personaOptions[2];
}
