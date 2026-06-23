import { View } from 'react-native';

import {
  BottomNav,
  CarroAvatar,
  ChatBubble,
  HeroText,
  InfoCard,
  PhoneScreen,
  PrimaryButton,
} from '@/features/fbe/components/ui';
import { useFbeStore } from '@/features/fbe/store/use-fbe-store';

const bestie = require('@/assets/carro/carro_bestie.png');

export default function CompanionHomeScreen() {
  const calmPoints = useFbeStore((state) => state.calmPoints);

  return (
    <PhoneScreen>
      <HeroText title="Your buddy is awake" subtitle="Carro has your back today." />
      <CarroAvatar source={bestie} width={114} height={187} />
      <ChatBubble>I know the snack thoughts are loud. Want to beat one urge together?</ChatBubble>
      <PrimaryButton href="/persona">Start rescue quest</PrimaryButton>
      <View style={{ marginTop: 32 }}>
        <InfoCard title="Today’s quest" subtitle="Pause once before a craving choice." />
        <View style={{ height: 24 }} />
        <InfoCard
          compact
          title="Calm points"
          subtitle={`${calmPoints} points • 3-day gentle streak`}
          accent="#d7cfc4"
        />
      </View>
      <BottomNav active="Buddy" />
    </PhoneScreen>
  );
}
