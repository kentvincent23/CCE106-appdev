import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [score, setScore] = useState(0);

  const handleOrder = () => {
    setScore(score + 1);
  };

  const handleReduce = () => {
    setScore(score - 1);
  };

  return (
    <View style={styles.container}>
      <Text>Coffee Order: {score}</Text>

      <TouchableOpacity onPress={handleOrder} style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Pressable onPress={handleReduce} style={styles.button}>
        <Text style={styles.buttonText}>Reduce</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  button: {
    backgroundColor: '#42d10e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});