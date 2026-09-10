import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: '#1e1e1e' },
    headerTintColor: '#ffffff' }}>
      <Stack.Screen name="index" options={{ title: 'Home Dashboard' }} />
      <Stack.Screen name="profile" options={{ title: 'User Profile' }} />
      <Stack.Screen name="settings" options={{ title: 'App Settings' }} />
    </Stack>
  );
}