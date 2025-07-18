import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tugas4 from './tugas4'; // Hanya mengimpor Tugas4 yang akan ditampilkan

export default function Index() {
  // Langsung menampilkan Tugas 4 sebagai satu-satunya konten utama
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>TUGAS 4 - FONT & URUTAN</Text>
      </View>
      <View style={styles.contentCard}>
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
    borderBottomWidth: 2,
    borderBottomColor: '#3b82f6',
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