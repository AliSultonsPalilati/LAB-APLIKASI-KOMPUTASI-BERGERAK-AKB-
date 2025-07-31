import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
      
      <Image 
        source={require('../../assets/images/logo_unismuh.png')} 
        style={styles.image}
      />
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Tentang Unismuh</Text>
        <Text style={styles.description}>
          Universitas Muhammadiyah Makassar, atau dikenal sebagai Unismuh Makassar, adalah salah satu perguruan tinggi swasta terkemuka di Indonesia Timur. Berlokasi di Kota Makassar, Sulawesi Selatan.
        </Text>
        <Text style={styles.description}>
          Unismuh berkomitmen untuk menghasilkan lulusan yang tidak hanya unggul dalam bidang akademik, tetapi juga memiliki karakter Islami dan berjiwa wirausaha.
        </Text>
        <Text style={styles.location}>
          Lokasi: Jl. Sultan Alauddin No. 259, Makassar, Sulawesi Selatan.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#003366',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 10,
    color: '#333',
  },
  location: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#555',
    marginTop: 10,
  },
});
