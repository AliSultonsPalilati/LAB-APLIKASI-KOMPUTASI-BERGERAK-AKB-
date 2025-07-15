// tugas2.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

const { width } = Dimensions.get('window');
const TILE_SIZE = (width - 40) / 3; // 3 kolom dengan margin

// Buat 9 gambar utama dan 9 alternatif, dipasangkan 1 banding 1
const images = Array.from({ length: 9 }).map((_, i) => ({
  id: String(i + 1),
  main: `https://picsum.photos/id/${i * 15 + 100}/300`,
  alt: `https://picsum.photos/id/${i * 15 + 300}/300`,
  scale: new Animated.Value(1),
  currentScale: 1,
  isAlt: false,
}));

const Tugas2: React.FC = () => {
  const [imageData, setImageData] = useState(images);
  const [clicks, setClicks] = useState(0);

  // Fungsi saat gambar diklik: toggle + scale up
  const handlePress = (index: number) => {
    const updated = [...imageData];
    const item = updated[index];

    const current = item.currentScale;
    const next = Math.min(2, current * 1.2); // maksimum skala 2x
    item.currentScale = next;

    Animated.spring(item.scale, {
      toValue: next,
      useNativeDriver: true,
      friction: 7,
      tension: 80,
    }).start();

    item.isAlt = !item.isAlt;
    setImageData(updated);
    setClicks((prev) => prev + 1);
  };

  // Reset semua gambar ke kondisi awal
  const resetAll = () => {
    const resetImages = imageData.map((item) => {
      item.scale.setValue(1);
      item.currentScale = 1;
      item.isAlt = false;
      return item;
    });
    setImageData([...resetImages]);
    setClicks(0);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🖼️ Tugas 2 - Gallery Grid</Text>
      <Text style={styles.subtitle}>
        9 gambar utama, 9 gambar alternatif, klik untuk toggle dan perbesar
      </Text>

      <View style={styles.grid}>
        {imageData.map((item, index) => (
          <TouchableWithoutFeedback key={item.id} onPress={() => handlePress(index)}>
            <Animated.View
              style={[
                styles.imageBox,
                {
                  transform: [{ scale: item.scale }],
                  zIndex: item.isAlt ? 10 : 1,
                },
              ]}
            >
              <Image
                source={{ uri: item.isAlt ? item.alt : item.main }}
                style={styles.image}
                onError={() => console.warn(`Gagal memuat gambar ID ${item.id}`)}
              />
              <Text style={styles.imageId}>ID: {item.id}</Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.clickText}>Total Klik: {clicks}</Text>
        <TouchableWithoutFeedback onPress={resetAll}>
          <View style={styles.resetButton}>
            <Text style={styles.resetText}>Reset Semua</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
    marginTop: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 15,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imageBox: {
    width: TILE_SIZE,
    height: TILE_SIZE,
    margin: 5,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#e2e8f0',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageId: {
    position: 'absolute',
    bottom: 4,
    left: 6,
    fontSize: 10,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  clickText: {
    fontSize: 14,
    color: '#1e293b',
    marginBottom: 10,
  },
  resetButton: {
    backgroundColor: '#ef4444',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  resetText: {
    color: '#ffffff',
    fontWeight: '600',
  },
});

export default Tugas2;
