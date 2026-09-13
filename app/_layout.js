import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#4B2E2B" },
        headerTintColor: "#FFF8F0",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Order Coffee" }} />
      <Stack.Screen name="receipt" options={{ title: "Receipt" }} />
    </Stack>
  );
}