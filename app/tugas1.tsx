import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Tugas4 from "./tugas4"; 

export default function Index() {
  // Hanya ada satu komponen yang ditampilkan: Tugas4
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tugas 4 Final</Text>
      </View>
      <View style={styles.contentCard}>
        {/* Langsung menampilkan Tugas4 sebagai satu-satunya konten */}
        <Tugas4 />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: "#1e293b",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  contentCard: {
    flex: 1,
    backgroundColor: "#f0f2f5",
  },
});