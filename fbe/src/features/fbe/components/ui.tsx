import { Image, ImageSource } from 'expo-image';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Craving, Persona } from '../store/use-fbe-store';

export function PhoneScreen({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.phone}>{children}</View>
    </SafeAreaView>
  );
}

export function HeroText({
  title,
  subtitle,
  size = 'default',
}: {
  title: string;
  subtitle: string;
  size?: 'default' | 'large';
}) {
  return (
    <View style={styles.hero}>
      <Text style={[styles.heroTitle, size === 'large' && styles.heroTitleLarge]}>{title}</Text>
      <Text style={styles.heroSubtitle}>{subtitle}</Text>
    </View>
  );
}

export function CarroAvatar({
  source,
  width,
  height,
  halo = { width: 88, height: 10, left: 31, bottom: 16 },
}: {
  source: ImageSource;
  width: number;
  height: number;
  halo?: { width: number; height: number; left: number; bottom: number };
}) {
  return (
    <View style={[styles.avatarWrap, { width, height }]}>
      <View style={[styles.avatarHalo, halo]} />
      <Image source={source} style={[styles.avatarImage, { width, height }]} contentFit="contain" />
    </View>
  );
}

export function ChatBubble({ children }: { children: string }) {
  return (
    <View style={styles.chatBubble}>
      <Text style={styles.chatText}>{children}</Text>
    </View>
  );
}

export function PrimaryButton({
  children,
  href,
  height = 58,
}: {
  children: string;
  href?: string;
  height?: number;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => href && router.push(href)}
      style={({ pressed }) => [styles.primaryButton, { height }, pressed && styles.pressed]}>
      <Text style={styles.primaryButtonText}>{children}</Text>
    </Pressable>
  );
}

export function InfoCard({
  title,
  subtitle,
  accent = '#dde7e1',
  compact = false,
  selected = false,
  onPress,
}: {
  title: string;
  subtitle: string;
  accent?: string;
  compact?: boolean;
  selected?: boolean;
  onPress?: () => void;
}) {
  const body = (
    <>
      <View style={[styles.cardAccent, { backgroundColor: accent }]} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
      </View>
      {selected && <View style={styles.cardSelectedDot} />}
    </>
  );

  if (onPress) {
    return (
      <Pressable
        accessibilityRole="button"
        onPress={onPress}
        style={({ pressed }) => [
          styles.infoCard,
          compact ? styles.infoCardCompact : styles.infoCardDefault,
          selected && styles.infoCardSelected,
          pressed && styles.pressed,
        ]}>
        {body}
      </Pressable>
    );
  }

  return (
    <View
      style={[
        styles.infoCard,
        compact ? styles.infoCardCompact : styles.infoCardDefault,
        selected && styles.infoCardSelected,
      ]}>
      {body}
    </View>
  );
}

export function PersonaCard({
  id,
  title,
  subtitle,
  accent,
  selected,
  onSelect,
}: {
  id: Persona;
  title: string;
  subtitle: string;
  accent: string;
  selected: boolean;
  onSelect: (persona: Persona) => void;
}) {
  return (
    <InfoCard
      compact
      title={title}
      subtitle={subtitle}
      accent={accent}
      selected={selected}
      onPress={() => onSelect(id)}
    />
  );
}

export function Pill({
  label,
  selected,
  width,
  onPress,
}: {
  label: Craving;
  selected: boolean;
  width: number;
  onPress: (label: Craving) => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => onPress(label)}
      style={({ pressed }) => [
        styles.pill,
        { width },
        selected ? styles.pillSelected : styles.pillDefault,
        pressed && styles.pressed,
      ]}>
      <Text style={[styles.pillText, selected && styles.pillTextSelected]}>{label}</Text>
    </Pressable>
  );
}

export function CravingMonster() {
  return (
    <View style={styles.monster}>
      <View style={[styles.monsterEye, styles.monsterEyeLeft]} />
      <View style={[styles.monsterEye, styles.monsterEyeRight]} />
      <View style={styles.monsterMouth} />
    </View>
  );
}

export function BottomNav({ active = 'Buddy' }: { active?: 'Buddy' | 'Rescue' | 'Quest' | 'Me' }) {
  const items = ['Buddy', 'Rescue', 'Quest', 'Me'] as const;
  return (
    <View style={styles.bottomNav}>
      {items.map((item) => (
        <View
          key={item}
          style={[styles.navItem, active === item && styles.navItemActive]}>
          <Text style={[styles.navText, active === item && styles.navTextActive]}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const colors = {
  bg: '#fafaf7',
  ink: '#1e1e1e',
  muted: '#72726c',
  primary: '#4a635d',
  active: '#dde7e1',
  tan: '#d7cfc4',
  white: '#ffffff',
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.bg,
  },
  phone: {
    width: '100%',
    maxWidth: 390,
    minHeight: 844,
    paddingHorizontal: 32,
    paddingBottom: 110,
    backgroundColor: colors.bg,
  },
  hero: {
    marginTop: 32,
  },
  heroTitle: {
    color: colors.ink,
    fontSize: 26,
    fontWeight: '700',
    lineHeight: 31,
  },
  heroTitleLarge: {
    fontSize: 30,
    lineHeight: 36,
  },
  heroSubtitle: {
    marginTop: 7,
    color: colors.muted,
    fontSize: 15,
    lineHeight: 18,
  },
  avatarWrap: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'flex-start',
  },
  avatarImage: {
    zIndex: 1,
  },
  avatarHalo: {
    position: 'absolute',
    borderRadius: 999,
    backgroundColor: colors.tan,
    zIndex: 0,
  },
  chatBubble: {
    marginTop: 14,
    borderRadius: 22,
    paddingHorizontal: 18,
    paddingVertical: 16,
    backgroundColor: colors.white,
  },
  chatText: {
    color: colors.ink,
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 22,
  },
  primaryButton: {
    height: 58,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    backgroundColor: colors.primary,
  },
  pressed: {
    opacity: 0.8,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '600',
  },
  infoCard: {
    overflow: 'hidden',
    borderRadius: 24,
    backgroundColor: colors.white,
  },
  infoCardSelected: {
    borderWidth: 1,
    borderColor: colors.primary,
  },
  infoCardDefault: {
    height: 88,
  },
  infoCardCompact: {
    height: 74,
  },
  cardAccent: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 6,
  },
  cardContent: {
    paddingHorizontal: 22,
    paddingVertical: 18,
  },
  cardTitle: {
    color: colors.ink,
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 22,
  },
  cardSubtitle: {
    marginTop: 5,
    color: colors.muted,
    fontSize: 13,
    lineHeight: 19,
  },
  cardSelectedDot: {
    position: 'absolute',
    top: 27,
    right: 22,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: colors.primary,
  },
  pill: {
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21,
  },
  pillDefault: {
    backgroundColor: colors.white,
  },
  pillSelected: {
    backgroundColor: colors.primary,
  },
  pillText: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: '500',
  },
  pillTextSelected: {
    color: colors.white,
    fontWeight: '600',
  },
  monster: {
    position: 'absolute',
    top: 182,
    right: 31,
    width: 92,
    height: 92,
    borderRadius: 32,
    backgroundColor: '#f4dede',
  },
  monsterEye: {
    position: 'absolute',
    top: 34,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2f4741',
  },
  monsterEyeLeft: {
    left: 25,
  },
  monsterEyeRight: {
    right: 27,
  },
  monsterMouth: {
    position: 'absolute',
    top: 64,
    left: 31,
    width: 30,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#2f4741',
  },
  bottomNav: {
    position: 'absolute',
    right: 22,
    bottom: 22,
    left: 22,
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 28,
    backgroundColor: colors.white,
  },
  navItem: {
    width: 74,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
  },
  navItemActive: {
    backgroundColor: colors.active,
  },
  navText: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '500',
  },
  navTextActive: {
    color: '#2f4741',
    fontWeight: '600',
  },
});
