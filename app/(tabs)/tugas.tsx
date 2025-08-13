import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
} from "react-native";

// Mengimpor komponen tugas dari direktori induk (../)
import Tugas1 from '../tugas1';
import Tugas2 from '../tugas2';
import Tugas3 from '../tugas3';
import Tugas4 from '../tugas4';
import Tugas5 from '../tugas5';
import Tugas6 from '../tugas6';
import Tugas7 from '../tugas7';
import Tugas8 from '../tugas8';
import Tugas9 from '../tugas9';
import Tugas10 from '../tugas10'; // Import Tugas 10

export default function TugasScreen(): React.JSX.Element {
  const [activeTask, setActiveTask] = useState<number>(1);
  const screenWidth = Dimensions.get('window').width;

  const isDesktop = screenWidth > 768;

  const tasks = [
    { id: 1, title: "📋 Tugas 1", component: <Tugas1 /> },
    { id: 2, title: "🖼️ Tugas 2", component: <Tugas2 /> },
    { id: 3, title: "⚙️ Tugas 3", component: <Tugas3 /> },
    { id: 4, title: "✒️ Tugas 4", component: <Tugas4 /> },
    { id: 5, title: "🤔 Tugas 5", component: <Tugas5 /> },
    { id: 6, title: "🧩 Tugas 6", component: <Tugas6 /> },
    { id: 7, title: "🎯 Tugas 7", component: <Tugas7 /> },
    { id: 8, title: "🚀 Tugas 8", component: <Tugas8 /> },
    { id: 9, title: "🤔 Tugas 9", component: <Tugas9 /> },
    { id: 10, title: "📚 Tugas 10", component: <Tugas10 /> }, 
  ];

  const getTaskRows = () => {
    if (isDesktop) {
      const rows = [];
      for (let i = 0; i < tasks.length; i += 6) {
        rows.push(tasks.slice(i, i + 6));
      }
      return rows;
    } else {
      const rows = [];
      if (tasks.length > 4) {
        rows.push(tasks.slice(0, 4));
        for (let i = 4; i < tasks.length; i += 2) {
          rows.push(tasks.slice(i, i + 2));
        }
      } else {
        rows.push(tasks);
      }
      return rows;
    }
  };

  const taskRows = getTaskRows();

  const renderTaskButton = (task: any, isInCenterRow: boolean = false) => (
    <TouchableOpacity
      key={task.id}
      style={[
        styles.navButton,
        activeTask === task.id && styles.activeNavButton,
        isDesktop ? styles.desktopButton : styles.mobileButton,
        isInCenterRow && styles.centerRowButton,
      ]}
      onPress={() => setActiveTask(task.id)}
    >
      <Text
        style={[
          styles.navButtonText,
          activeTask === task.id && styles.activeNavButtonText,
        ]}
      >
        {task.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tugas LAB</Text>
        <Text style={styles.headerSubtitle}>Pilih Untuk Melihat Tugas</Text>
      </View>

      <View style={styles.navigationContainer}>
        {taskRows.map((row, rowIndex) => (
          <View
            key={rowIndex}
            style={[
              styles.navigationRow,
              rowIndex === 0 ? styles.fullWidthRow : styles.centerRow
            ]}
          >
            {row.map((task) =>
              renderTaskButton(task, rowIndex > 0)
            )}
          </View>
        ))}
      </View>

      <View style={styles.contentWrapper}>
        <View style={styles.contentCard}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {tasks.find(task => task.id === activeTask)?.component}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc"
  },
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
    padding: 20,
    gap: 10,
  },
  navigationRow: {
    flexDirection: "row",
    gap: 10,
  },
  fullWidthRow: {
    justifyContent: "center",
  },
  centerRow: {
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    minHeight: 45,
    justifyContent: "center",
  },
  desktopButton: {
    flex: 1,
    maxWidth: 150,
    minWidth: 120,
  },
  mobileButton: {
    flex: 1,
    maxWidth: 120,
    minWidth: 80,
  },
  centerRowButton: {
    flex: 0,
    width: 120,
    paddingHorizontal: 16,
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
  activeNavButtonText: {
    color: "#ffffff"
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20
  },
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