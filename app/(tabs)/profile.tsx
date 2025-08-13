import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  ScrollView,
  TouchableOpacity,
  Linking
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';

// Data untuk sosial media dan 
const socialLinks = [
  { icon: 'github', url: 'https://github.com/AliSultonsPalilati' },
  { icon: 'instagram', url: 'https://www.instagram.com/alisultn._/?next=%2F' },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={['#f0f5ff', '#e6f0ff', '#dbe7ff']}
        style={styles.gradientBackground}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.profileHeader}>
            <Image
              source={require('../../assets/images/profile.jpg')}
              style={styles.profileImage}
            />
            <Text style={styles.name}>Ali Sulton S. Palilati</Text>
            <Text style={styles.title}>Mahasiswa Informatika</Text>
          </View>

          {/* Kartu Informasi Utama */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Informasi Akademik</Text>
            <InfoRow icon="user" label="NIM" value="105841102222" />
            <InfoRow icon="book" label="Kelas" value="6 A" />
            <InfoRow icon="code" label="Jurusan" value="Informatika" />
            <InfoRow icon="tool" label="Fakultas" value="Teknik" isLast/>
          </View>

          {/* Kartu Media Sosial */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Hubungi Saya</Text>
            <View style={styles.socialContainer}>
              {socialLinks.map((link, index) => (
                <TouchableOpacity key={index} style={styles.socialButton} onPress={() => Linking.openURL(link.url)}>
                  <AntDesign name={link.icon as any} size={24} color="#ffffff" />
                </TouchableOpacity>
              ))}
            </View>
          </View>

        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

// Komponen untuk baris info
const InfoRow = ({ icon, label, value, isLast = false }: { icon: any, label: string, value: string, isLast?: boolean }) => (
  <View style={[styles.infoRow, isLast && { borderBottomWidth: 0 }]}>
    <View style={styles.infoLabelContainer}>
        <Feather name={icon} size={20} color="#4f46e5" />
        <Text style={styles.label}>{label}</Text>
    </View>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#eef2ff',
  },
  gradientBackground: {
    flex: 1,
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: '#ffffff',
    marginBottom: 15,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e1b4b',
  },
  title: {
    fontSize: 18,
    color: '#4338ca',
    marginTop: 4,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#4338ca',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#312e81',
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e7ff',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eef2ff',
  },
  infoLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#475569',
    marginLeft: 15,
  },
  value: {
    fontSize: 16,
    color: '#1e293b',
    fontWeight: '500',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 10,
  },
  socialButton: {
    backgroundColor: '#4f46e5',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#4f46e5',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
  },
});
