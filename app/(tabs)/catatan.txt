import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/logo_unismuh.png')}
            style={styles.logo}
          />
          <View>
            <Text style={styles.headerTitle}>Universitas Muhammadiyah</Text>
            <Text style={styles.headerSubtitle}>Makassar</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <AntDesign name="infocirlce" size={22} color="#0284c7" />
            <Text style={styles.cardTitle}>Tentang Unismuh</Text>
          </View>
          <Text style={styles.description}>
            Universitas Muhammadiyah Makassar, atau dikenal sebagai Unismuh Makassar, adalah salah satu perguruan tinggi swasta terkemuka di Indonesia Timur. Berlokasi di Kota Makassar, Sulawesi Selatan.
          </Text>
          <Text style={styles.description}>
            Unismuh berkomitmen untuk menghasilkan lulusan yang tidak hanya unggul dalam bidang akademik, tetapi juga memiliki karakter Islami dan berjiwa wirausaha.
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <AntDesign name="enviromento" size={22} color="#0284c7" />
            <Text style={styles.cardTitle}>Lokasi Kampus</Text>
          </View>
          <Text style={styles.location}>
            Jl. Sultan Alauddin No. 259, Gn. Sari, Kec. Rappocini, Kota Makassar, Sulawesi Selatan 90221
          </Text>
        </View>
        
        <View style={styles.footer}>
            <Text style={styles.footerText}>Unggul, Terpercaya, dan Mandiri</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f9ff',
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#0c4a6e',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 15,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0c4a6e',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 18,
    color: '#0369a1',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#0c4a6e',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0f2fe',
    paddingBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0369a1',
    marginLeft: 10,
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'justify',
    color: '#334155',
    marginBottom: 10,
  },
  location: {
    fontSize: 15,
    lineHeight: 24,
    color: '#334155',
  },
  footer: {
      marginTop: 20,
      padding: 15,
      alignItems: 'center',
  },
  footerText: {
      fontSize: 14,
      color: '#64748b',
      fontStyle: 'italic',
  }
});
