import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Tugas7 = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Text style={styles.mainIcon}>🔤</Text>
          <Text style={styles.sparkles}>✨</Text>
        </View>
        
        <Text style={styles.title}>Font & Font Family</Text>
        <Text style={styles.subtitle}>di Expo React Native</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.flexContainer}>
          {/* Left Column - Font */}
          <View style={styles.leftColumn}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionIcon}>📝</Text>
              <Text style={styles.sectionTitle}>Apa itu Font?</Text>
            </View>
            
            <View style={styles.answerBox}>
              <Text style={styles.answerText}>
                <Text style={styles.boldText}>Font</Text> adalah gaya tulisan yang muncul di layar ketika kamu menampilkan teks, 
                misalnya tulisan tebal, miring, besar, kecil, dan lainnya. Font itu seperti &ldquo;baju&rdquo; untuk huruf-huruf: 
                walau kata-katanya sama, tapi tampilannya bisa beda tergantung font yang dipakai. Dalam pengembangan aplikasi, 
                font digunakan supaya tampilan teks lebih menarik, mudah dibaca, atau sesuai dengan suasana aplikasi. 
                Misalnya, font lucu cocok untuk aplikasi anak-anak, sedangkan font elegan cocok untuk aplikasi bisnis.
              </Text>
            </View>
          </View>

          {/* Right Column - Font Family */}
          <View style={styles.rightColumn}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionIcon}>👨‍👩‍👧‍👦</Text>
              <Text style={styles.sectionTitle}>Font Family</Text>
            </View>
            
            <View style={styles.answerBox}>
              <Text style={styles.answerText}>
                <Text style={styles.boldText}>Font family</Text> adalah nama kelompok dari beberapa jenis gaya tulisan 
                yang masih satu &ldquo;keluarga&rdquo;. Contohnya, dalam font family &ldquo;Poppins&rdquo;, kamu bisa punya 
                `Poppins-Regular`, `Poppins-Bold`, `Poppins-Italic`, dan lainnya. Jadi walaupun gayanya berbeda (tebal, miring, biasa), 
                mereka tetap satu jenis font. Di Expo (React Native), kamu bisa menggunakan font custom (buatan sendiri atau dari Google Fonts) 
                dengan cara mengimpor file font tersebut, lalu menggunakan library `expo-font` untuk memuatnya ke aplikasi. 
                Setelah dimuat, kamu bisa pakai font itu di seluruh komponen aplikasi dengan memberi nama font family yang sesuai.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: '#667eea',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  iconContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  mainIcon: {
    fontSize: 60,
    textAlign: 'center',
  },
  sparkles: {
    position: 'absolute',
    top: -5,
    right: -10,
    fontSize: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    fontWeight: '500',
  },
  contentContainer: {
    padding: 20,
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  answerBox: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
    minHeight: 200,
  },
  answerText: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 24,
    textAlign: 'justify',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#1e293b',
  },
});

export default Tugas7;