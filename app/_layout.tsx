import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

/**
 * Root layout.
 *
 * Single Stack navigator — MVP does not use tabs. See project-spec.md §4.2.
 * expo-router resolves child routes from the `app/` directory.
 */
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#0B1220' },
          headerTintColor: '#E6EDF7',
          headerTitleStyle: { fontWeight: '600' },
          contentStyle: { backgroundColor: '#0B1220' },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Today' }} />
      </Stack>
    </SafeAreaProvider>
  );
}
