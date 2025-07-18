import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';
import Tugas4 from './tugas4'; // Langsung impor Tugas4

export default function Index() {
  // Langsung menampilkan Tugas4 sebagai satu-satunya konten.
  // Tidak ada navigasi tab.
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tugas 4: Font Showcase</Text>
      </View>
      <Tugas4 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    paddingTop: StatusBar.currentHeight || 0,
  },
  header: {
    padding: 15,
    backgroundColor: '#1e293b',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
});