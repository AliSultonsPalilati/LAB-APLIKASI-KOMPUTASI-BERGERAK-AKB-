// GalleryGrid.tsx
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
const TILE_SIZE = (width - 40) / 3; // 3 columns with some padding

// Data gambar utama dan alternatif
const images = Array.from({ length: 9 }).map((_, i) => ({
  id: String(i + 1),
  main: `https://picsum.photos/id/${i * 15 + 100}/300`,
  alt: `https://picsum.photos/id/${i * 15 + 300}/300`,
  scale: new Animated.Value(1),
  currentScale: 1, // ✅ skala saat ini disimpan manual
  isAlt: false,
}));

const GalleryGrid: React.FC = () => {
  const [imageData, setImageData] = useState(images);
  const [clicks, setClicks] = useState(0);

  const handlePress = (index: number) => {
    const updated = [...imageData];
    const item = updated[index];

    // Hitung skala baru tanpa __getValue()
    const current = item.currentScale;
    const next = Math.min(2, current * 1.2);
    item.currentScale = next;

    // Animasi scale
    Animated.spring(item.scale, {
      toValue: next,
      useNativeDriver: true,
      friction: 7,
      tension: 80,
    }).start();

    // Toggle ke gambar alternatif
    item.isAlt = !item.isAlt;

    setImageData(updated);
    setClicks((prev) => prev + 1);
  };

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
      <Text style={styles.title}>🖼️ Interactive Gallery Grid</Text>
      <Text style={styles.subtitle}>Tap images to animate and switch version</Text>

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
              />
            </Animated.View>
          </TouchableWithoutFeedback>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.clickText}>Total Clicks: {clicks}</Text>
        <TouchableWithoutFeedback onPress={resetAll}>
          <View style={styles.resetButton}>
            <Text style={styles.resetText}>Reset Gallery</Text>
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
    fontSize: 24,
    fontWeight: '800',
    color: '#1e293b',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 15,
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
  },
  image: {
    width: '100%',
    height: '100%',
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

export default GalleryGrid;