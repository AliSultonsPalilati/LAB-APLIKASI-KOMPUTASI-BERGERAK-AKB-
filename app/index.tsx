import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

// Import komponen dari file lain
import Tugas1 from "./tugas1";
import Tugas2 from "./tugas2";
import Tugas3 from "./tugas3";
import Tugas4 from "./tugas4";
import Tugas6 from "./tugas6"; // Pastikan Anda memiliki file tugas5.tsx

export default function Index(): React.JSX.Element {
  // Anda bisa mengatur state awal ke 1 atau 4, sesuai keinginan
  const [activeTask, setActiveTask] = useState<number>(1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tugas LAB</Text>
        <Text style={styles.headerSubtitle}>Pilih Untuk Melihat Tugas</Text>
      </View>

      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={[styles.navButton, activeTask === 1 && styles.activeNavButton]}
          onPress={() => setActiveTask(1)}
        >
          <Text
            style={[
              styles.navButtonText,
              activeTask === 1 && styles.activeNavButtonText,
            ]}
          >
            📋 Tugas 1
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, activeTask === 2 && styles.activeNavButton]}
          onPress={() => setActiveTask(2)}
        >
          <Text
            style={[
              styles.navButtonText,
              activeTask === 2 && styles.activeNavButtonText,
            ]}
          >
            🖼️ Tugas 2
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, activeTask === 3 && styles.activeNavButton]}
          onPress={() => setActiveTask(3)}
        >
          <Text
            style={[
              styles.navButtonText,
              activeTask === 3 && styles.activeNavButtonText,
            ]}
          >
            ⚙️ Tugas 3
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, activeTask === 4 && styles.activeNavButton]}
          onPress={() => setActiveTask(4)}
        >
          <Text
            style={[
              styles.navButtonText,
              activeTask === 4 && styles.activeNavButtonText,
            ]}
          >
            ✒️ Tugas 4
          </Text>
        </TouchableOpacity>

        {/* BAGIAN INI YANG DIPERBAIKI */}
        <TouchableOpacity
          style={[styles.navButton, activeTask === 6 && styles.activeNavButton]}
          onPress={() => setActiveTask(6)}
        >
          <Text
            style={[
              styles.navButtonText,
              activeTask === 5 && styles.activeNavButtonText,
            ]}
          >
            🧩 Tugas 6
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentWrapper}>
        <View style={styles.contentCard}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {activeTask === 1 ? (
              <Tugas1 />
            ) : activeTask === 2 ? (
              <Tugas2 />
            ) : activeTask === 3 ? (
              <Tugas3 />
            ) : activeTask === 4 ? (
              <Tugas4 />
            ) : activeTask === 6 ? (
              <Tugas6 />
            ) : null}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc" },
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 24,
    backgroundColor: "#ffffff",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    elevation: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e293b",
    textAlign: "center",
  },
  headerSubtitle: {
    fontSize: 12,
    color: "#64748b",
    textAlign: "center",
    fontWeight: "500",
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    gap: 10,
  },
  navButton: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    paddingVertical: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  activeNavButton: {
    backgroundColor: "#3b82f6",
    borderColor: "#2563eb",
  },
  navButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#475569",
    textAlign: "center",
  },
  activeNavButtonText: { color: "#ffffff" },
  contentWrapper: { flex: 1, paddingHorizontal: 20, paddingBottom: 20 },
  contentCard: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 24,
    padding: 20,
    elevation: 8,
    borderWidth: 1,
    borderColor: "#f1f5f9",
  },
});