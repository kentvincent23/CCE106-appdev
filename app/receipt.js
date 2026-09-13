import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

const PRICE_PER_CUP = 150;

export default function ReceiptScreen() {
  const { coffeeCount } = useLocalSearchParams();


  const cups = Number(coffeeCount) || 0;
  const totalBill = cups * PRICE_PER_CUP;

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Your Receipt</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Item</Text>
          <Text style={styles.rowValue}>Coffee</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Cups Ordered</Text>
          <Text style={styles.rowValue}>{cups}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Price per Cup</Text>
          <Text style={styles.rowValue}>₱{PRICE_PER_CUP}</Text>
        </View>

        <View style={styles.divider} />

        <Text style={styles.total}>Total Bill: ₱{totalBill}</Text>
      </View>
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
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 220,
    marginBottom: 18,
  },
  rowLabel: {
    fontSize: 16,
    color: "#6F4E37",
  },
  rowValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3A2A20",
  },
  divider: {
    height: 1,
    backgroundColor: "#EEE",
    marginVertical: 20,
  },
  total: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4B2E2B",
    textAlign: "center",
  },
});