// Tugas2.tsx
import React, { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  Text,
  ScrollView,
} from 'react-native';

const NUM_COLUMNS = 3;
const SPACING = 8;
const { width } = Dimensions.get('window');
const IMAGE_SIZE = (width - SPACING * (NUM_COLUMNS + 1)) / NUM_COLUMNS;

interface ImageItem {
  id: string;
  primary: string;
  secondary: string;
  scale: Animated.Value;
  currentScale: number;
  isAlt: boolean;
}

// Buat array gambar utama dan alternatif
const initialImages: ImageItem[] = Array.from({ length: 9 }).map((_, index) => ({
  id: `${index + 1}`,
  primary: `https://picsum.photos/id/${100 + index}/200`,
  secondary: `https://picsum.photos/id/${200 + index}/200`,
  scale: new Animated.Value(1),
  currentScale: 1,
  isAlt: false,
}));

const Tugas2: React.FC = () => {
  const [images, setImages] = useState<ImageItem[]>(initialImages);
  const [clicks, setClicks] = useState(0);

  const handlePress = (index: number) => {
    const updated = [...images];
    const item = updated[index];

    const nextScale = Math.min(2, item.currentScale * 1.2);
    item.currentScale = nextScale;
    item.isAlt = !item.isAlt;

    Animated.spring(item.scale, {
      toValue: nextScale,
      useNativeDriver: true,
      friction: 6,
    }).start();

    setImages(updated);
    setClicks((prev) => prev + 1);
  };

  const handleReset = () => {
    const reset = images.map((img) => {
      img.scale.setValue(1);
      return {
        ...img,
        currentScale: 1,
        isAlt: false,
      };
    });
    setImages(reset);
    setClicks(0);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🖼️ Grid Gambar Interaktif</Text>
      <Text style={styles.subtitle}>Klik gambar untuk mengganti dan membesarkan</Text>

      <View style={styles.grid}>
        {images.map((img, index) => (
          <TouchableWithoutFeedback key={img.id} onPress={() => handlePress(index)}>
            <Animated.View
              style={[
                styles.imageWrapper,
                { transform: [{ scale: img.scale }] },
              ]}
            >
              <Image
                source={{ uri: img.isAlt ? img.secondary : img.primary }}
                style={styles.image}
              />
            </Animated.View>
          </TouchableWithoutFeedback>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.clickText}>Total Klik: {clicks}</Text>
        <TouchableWithoutFeedback onPress={handleReset}>
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
    padding: SPACING,
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1e293b',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imageWrapper: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    margin: SPACING / 2,
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
    color: '#334155',
    marginBottom: 8,
  },
  resetButton: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
  },
  resetText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default Tugas2;
