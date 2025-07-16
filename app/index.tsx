import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView, // 1. ScrollView diimpor di sini
} from "react-native";

// Import komponen dari file lain
import Tugas1 from "./tugas1";
import Tugas2 from "./tugas2";
import Tugas3 from "./tugas3";
import Tugas4 from "./tugas4";

const { height } = Dimensions.get("window");

export default function Index(): React.JSX.Element {
  const [activeTask, setActiveTask] = useState<number>(1);

  return (
    <View style={styles.container}>
      {/* Header dengan gradient */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tugas LAB</Text>
        <Text style={styles.headerSubtitle}>Pilih Untuk Melihat Tugas</Text>
      </View>

      {/* Navigation Pills */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={[styles.navButton, activeTask === 1 && styles.activeNavButton]}
          onPress={() => setActiveTask(1)}
          activeOpacity={0.8}
        >
          <View style={styles.navButtonContent}>
            <Text
              style={[
                styles.navButtonText,
                activeTask === 1 && styles.activeNavButtonText,
              ]}
            >
              📋 Tugas 1
            </Text>
            {activeTask === 1 && <View style={styles.activeIndicator} />}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, activeTask === 2 && styles.activeNavButton]}
          onPress={() => setActiveTask(2)}
          activeOpacity={0.8}
        >
          <View style={styles.navButtonContent}>
            <Text
              style={[
                styles.navButtonText,
                activeTask === 2 && styles.activeNavButtonText,
              ]}
            >
              📝 Tugas 2
            </Text>
            {activeTask === 2 && <View style={styles.activeIndicator} />}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, activeTask === 3 && styles.activeNavButton]}
          onPress={() => setActiveTask(3)}
          activeOpacity={0.8}
        >
          <View style={styles.navButtonContent}>
            <Text
              style={[
                styles.navButtonText,
                activeTask === 3 && styles.activeNavButtonText,
              ]}
            >
              📝 Tugas 3
            </Text>
            {activeTask === 3 && <View style={styles.activeIndicator} />}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, activeTask === 4 && styles.activeNavButton]}
          onPress={() => setActiveTask(4)}
          activeOpacity={0.8}
        >
          <View style={styles.navButtonContent}>
            <Text
              style={[
                styles.navButtonText,
                activeTask === 4 && styles.activeNavButtonText,
              ]}
            >
              📝 Tugas 4
            </Text>
            {activeTask === 4 && <View style={styles.activeIndicator} />}
          </View>
        </TouchableOpacity>
      </View>

      {/* Content Area with Card Design */}
      <View style={styles.contentWrapper}>
        <View style={styles.contentCard}>
          {/* 2. Konten sekarang dibungkus dengan ScrollView */}
          <ScrollView showsVerticalScrollIndicator={false}>
            {activeTask === 1 ? (
              <Tugas1 />
            ) : activeTask === 2 ? (
              <Tugas2 />
            ) : activeTask === 3 ? (
              <Tugas3 />
            ) : activeTask === 4 ? (
              <Tugas4 />
            ) : null}
          </ScrollView>
        </View>
      </View>

      {/* Decorative Elements */}
      <View style={styles.decorativeCircle1} />
      <View style={styles.decorativeCircle2} />
      <View style={styles.decorativeCircle3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    position: "relative",
    width: "100%",
    height: "100%",
  },

  header: {
    paddingTop: 25, // 3. Ukuran header dikurangi
    paddingBottom: 15, // 3. Ukuran header dikurangi
    paddingHorizontal: 24,
    backgroundColor: "#ffffff",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
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
    paddingVertical: 5, // 3. Ukuran navigasi dikurangi
    gap: 16,
  },

  navButton: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 2,
    borderColor: "#e2e8f0",
    transform: [{ scale: 1 }],
  },

  activeNavButton: {
    backgroundColor: "#3b82f6",
    borderColor: "#2563eb",
    shadowColor: "#3b82f6",
    shadowOpacity: 0.3,
    transform: [{ scale: 1.02 }],
  },

  navButtonContent: {
    alignItems: "center",
    position: "relative",
  },

  navButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#475569",
    textAlign: "center",
  },

  activeNavButtonText: {
    color: "#ffffff",
  },

  activeIndicator: {
    position: "absolute",
    bottom: -8,
    width: 30,
    height: 3,
    backgroundColor: "#ffffff",
    borderRadius: 2,
  },

  contentWrapper: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 32,
  },

  contentCard: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 24,
    // Padding dipindahkan ke ScrollView atau konten di dalamnya jika perlu,
    // atau biarkan jika Anda ingin ada jarak di dalam kartu
    padding: 24, 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 12,
    borderWidth: 1,
    borderColor: "#f1f5f9",
  },

  // Decorative Elements
  decorativeCircle1: {
    position: "absolute",
    top: -50,
    right: -50,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#dbeafe",
    opacity: 0.6,
  },

  decorativeCircle2: {
    position: "absolute",
    bottom: 100,
    left: -40,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#fef3c7",
    opacity: 0.7,
  },

  decorativeCircle3: {
    position: "absolute",
    top: height * 0.4,
    right: -30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fecaca",
    opacity: 0.5,
  },
});