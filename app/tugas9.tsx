import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Tugas9 = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Text style={styles.mainIcon}>🎯</Text>
          <Text style={styles.sparkles}>✨</Text>
        </View>
        
        <Text style={styles.title}>Expo Icon & Icon Family</Text>
        <Text style={styles.subtitle}>di Expo React Native</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.flexContainer}>
          {/* Left Column - Expo Icon */}
          <View style={styles.leftColumn}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionIcon}>🎨</Text>
              <Text style={styles.sectionTitle}>Apa itu Expo Icon?</Text>
            </View>
            
            <View style={styles.answerBox}>
              <Text style={styles.answerText}>
                <Text style={styles.boldText}>Expo Icon</Text> adalah fitur dari library @expo/vector-icons yang sudah 
                disediakan oleh Expo untuk memudahkan kita menampilkan ikon di aplikasi React Native tanpa harus repot-repot 
                mengunduh file gambar satu per satu. Library ini sudah menyediakan banyak sekali icon yang siap di gunakan 
                seperti FontAwesome dll. Dengan Expo Icon, developer dapat dengan mudah mengintegrasikan berbagai macam ikon 
                ke dalam aplikasi mereka hanya dengan mengimpor komponen yang diperlukan dan menggunakannya seperti komponen 
                React biasa. Hal ini sangat menghemat waktu dan effort dalam pengembangan aplikasi mobile.
              </Text>
            </View>
          </View>

          {/* Right Column - Icon Family */}
          <View style={styles.rightColumn}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionIcon}>👨‍👩‍👧‍👦</Text>
              <Text style={styles.sectionTitle}>Icon Family</Text>
            </View>
            
            <View style={styles.answerBox}>
              <Text style={styles.answerText}>
                <Text style={styles.boldText}>Icon Family</Text> adalah keluarga atau kumpulan ikon dari satu gaya atau 
                penyedia tertentu. Misalnya, MaterialIcons adalah satu family yang berisi ikon dengan gaya desain Google 
                Material Design, sedangkan FontAwesome adalah family dengan ikon-ikon khas Font Awesome. Salah satu contoh 
                yang saya pakai yaitu AntDesign untuk icon yang bernama profile dan juga user. Setiap icon family memiliki 
                karakteristik visual yang konsisten, sehingga ketika digunakan dalam satu aplikasi akan memberikan tampilan 
                yang harmonis dan profesional. Pemilihan icon family yang tepat juga dapat mendukung branding aplikasi.
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

export default Tugas9;