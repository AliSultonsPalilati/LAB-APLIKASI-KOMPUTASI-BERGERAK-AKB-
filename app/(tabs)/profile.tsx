import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          // Pastikan path dan nama file gambar sudah benar
          source={require('../../assets/images/profile.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>[Nama Lengkap Anda]</Text>
        
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>NIM:</Text>
            <Text style={styles.value}>[105841102222]</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Kelas:</Text>
            <Text style={styles.value}>[6 - A]</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Jurusan:</Text>
            <Text style={styles.value}>[Informatika]</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Fakultas:</Text>
            <Text style={styles.value}>[Teknik]</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef5ff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Membuat gambar menjadi bulat
    borderWidth: 4,
    borderColor: '#007bff',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 16,
    color: '#555',
    fontWeight: '500',
  },
  value: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
});
