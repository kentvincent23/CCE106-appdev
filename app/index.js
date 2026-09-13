import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";

const PRICE_PER_CUP = 150;

export default function OrderScreen() {
  const [coffeeCount, setCoffeeCount] = useState(1);

  const addCup = () => {
    setCoffeeCount((prev) => prev + 1);
  };

  const removeCup = () => {
    setCoffeeCount((prev) => {
      if (prev <= 1) {
        return prev;
      }
      return prev - 1;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Campus Coffee Order</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Cups of Coffee: {coffeeCount}</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.removeButton]}
            onPress={removeCup}
          >
            <Text style={styles.buttonText}>− Remove Cup</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.addButton]}
            onPress={addCup}
          >
            <Text style={styles.buttonText}>+ Add Cup</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subtotal}>
          Estimated total: ₱{coffeeCount * PRICE_PER_CUP}
        </Text>
      </View>

      <Link
        href={{
          pathname: "/receipt",
          params: { coffeeCount },
        }}
        asChild
      >
        <TouchableOpacity style={styles.receiptButton}>
          <Text style={styles.receiptButtonText}>View Receipt</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0",
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#4B2E2B",
    textAlign: "center",
    marginBottom: 32,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  label: {
    fontSize: 22,
    fontWeight: "600",
    color: "#3A2A20",
    marginBottom: 28,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 12,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 22,
    borderRadius: 10,
  },
  addButton: {
    backgroundColor: "#77553d",
  },
  removeButton: {
    backgroundColor: "#C97B4A",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 15,
  },
  subtotal: {
    marginTop: 20,
    fontSize: 16,
    color: "#6F4E37",
  },
  receiptButton: {
    marginTop: 32,
    backgroundColor: "#503b36",
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 12,
    alignItems: "center",
    alignSelf: "center",
  },
  receiptButtonText: {
    color: "#FFF8F0",
    fontSize: 17,
    fontWeight: "bold",
  },
});