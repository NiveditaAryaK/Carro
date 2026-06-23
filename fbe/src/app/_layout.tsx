import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';

import '@/global.css';

export default function RootLayout() {
  return (
    <Fragment>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </Fragment>
  );
}
