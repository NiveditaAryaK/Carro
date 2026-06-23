import { View, Text, StyleSheet } from 'react-native';

import {
  BottomNav,
  CarroAvatar,
  ChatBubble,
  HeroText,
  InfoCard,
  PhoneScreen,
  Pill,
  PrimaryButton,
} from '@/features/fbe/components/ui';
import { useFbeStore } from '@/features/fbe/store/use-fbe-store';

const coach = require('@/assets/carro/carro_coach.png');

const cravings = [
  { label: 'Sweet', width: 94 },
  { label: 'Salty', width: 92 },
  { label: 'Fried', width: 82 },
  { label: 'Random food noise', width: 160 },
] as const;

export default function RescueScreen() {
  const craving = useFbeStore((state) => state.craving);
  const setCraving = useFbeStore((state) => state.setCraving);

  return (
    <PhoneScreen>
      <HeroText size="large" title="A craving monster appeared." subtitle="" />
      <View style={styles.coach}>
        <CarroAvatar
          source={coach}
          width={122}
          height={154}
          halo={{ width: 95, height: 18, left: 15, bottom: 25 }}
        />
      </View>
      <View style={styles.monsterBubble}>
        <ChatBubble>Wait. Don’t autopilot. Tell me what it wants.</ChatBubble>
      </View>
      <Text style={styles.optionsTitle}>What is it asking for?</Text>
      <View style={styles.pillRows}>
        <View style={styles.pillRow}>
          {cravings.slice(0, 3).map((option, index) => (
            <View key={option.label} style={{ marginLeft: index === 0 ? 0 : 10 }}>
              <Pill
                label={option.label}
                width={option.width}
                selected={craving === option.label}
                onPress={setCraving}
              />
            </View>
          ))}
        </View>
        <View style={styles.secondPillRow}>
          <Pill
            label="Random food noise"
            width={160}
            selected={craving === 'Random food noise'}
            onPress={setCraving}
          />
        </View>
      </View>
      <View style={styles.questCard}>
        <InfoCard
          title="Quest step 1"
          subtitle="Name the urge. You are not the urge."
          accent="#dde7e1"
        />
      </View>
      <View style={styles.continueButton}>
        <PrimaryButton height={56}>Continue quest</PrimaryButton>
      </View>
      <BottomNav active="Rescue" />
    </PhoneScreen>
  );
}

const styles = StyleSheet.create({
  coach: {
    position: 'absolute',
    top: 150,
    left: 24,
  },
  monsterBubble: {
    position: 'absolute',
    top: 162,
    right: 15,
    width: 198,
  },
  optionsTitle: {
    marginTop: 180,
    color: '#1e1e1e',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
  },
  pillRows: {
    marginTop: 24,
  },
  pillRow: {
    flexDirection: 'row',
  },
  secondPillRow: {
    marginTop: 14,
  },
  questCard: {
    marginTop: 56,
  },
  continueButton: {
    position: 'absolute',
    right: 32,
    bottom: 106,
    left: 32,
  },
});
