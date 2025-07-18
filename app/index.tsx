import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Tugas4 from './tugas4';

export default function Index() {
  // Langsung menampilkan Tugas4 sebagai satu-satunya konten
  return (
    <SafeAreaView style={styles.container}>
      <Tugas4 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
});