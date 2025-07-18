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

export default function Index(): React.JSX.Element {
  // PERUBAHAN UTAMA: Ganti state awal menjadi 4.
  // Ini memaksa aplikasi untuk langsung menampilkan Tugas4 saat dibuka.
  const [activeTask, setActiveTask] = useState<number>(4);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tugas LAB</Text>
        <Text style={styles.headerSubtitle}>Pilih Untuk Melihat Tugas</Text>
      </View>

      <View style={styles.navigationContainer}>
        {/* Navigasi tetap ada, tapi defaultnya sudah diubah */}
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
              // AI akan langsung melihat ini karena activeTask adalah 4
              <Tugas4 />
            ) : null}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

// Stylesheet (tidak perlu diubah, tetap sama seperti milik Anda)
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc" },
  header: {
    paddingTop: 25,
    paddingBottom: 15,
    paddingHorizontal: 24,
    backgroundColor: "#ffffff",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e293b",
    textAlign: "center",
    marginBottom: 8,
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
    paddingHorizontal: 24,
    paddingVertical: 5,
    gap: 16,
  },
  navButton: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 2,
    borderColor: "#e2e8f0",
  },
  activeNavButton: {
    backgroundColor: "#3b82f6",
    borderColor: "#2563eb",
    shadowColor: "#3b82f6",
    shadowOpacity: 0.3,
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#475569",
    textAlign: "center",
  },
  activeNavButtonText: { color: "#ffffff" },
  contentWrapper: { flex: 1, paddingHorizontal: 24, paddingBottom: 32 },
  contentCard: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 24,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 12,
    borderWidth: 1,
    borderColor: "#f1f5f9",
  },
});
