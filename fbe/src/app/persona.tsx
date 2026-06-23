import { router } from 'expo-router';
import { View } from 'react-native';

import { personaOptions } from '@/features/fbe/personas';
import {
  CarroAvatar,
  HeroText,
  PersonaCard,
  PhoneScreen,
  PrimaryButton,
} from '@/features/fbe/components/ui';
import { useFbeStore } from '@/features/fbe/store/use-fbe-store';

export default function PersonaScreen() {
  const persona = useFbeStore((state) => state.persona);
  const setPersona = useFbeStore((state) => state.setPersona);
  const selectedPersona = personaOptions.find((option) => option.id === persona) ?? personaOptions[2];

  return (
    <PhoneScreen>
      <HeroText
        size="large"
        title="How should Carro talk to you?"
        subtitle="Pick what actually works for you. You can switch anytime."
      />
      <View style={{ marginTop: 3, alignItems: 'center' }}>
        <CarroAvatar
          source={selectedPersona.image}
          width={138}
          height={148}
          halo={{ width: 108, height: 18, left: 17, bottom: 23 }}
        />
      </View>
      <View style={{ marginTop: -3 }}>
        {personaOptions.map((option, index) => (
          <View key={option.id} style={{ marginTop: index === 0 ? 0 : 14 }}>
            <PersonaCard
              id={option.id}
              title={option.title}
              subtitle={option.subtitle}
              accent={option.accent}
              selected={option.id === persona}
              onSelect={setPersona}
            />
          </View>
        ))}
      </View>
      <PrimaryButton height={56} href="/rescue">
        Save persona
      </PrimaryButton>
    </PhoneScreen>
  );
}
