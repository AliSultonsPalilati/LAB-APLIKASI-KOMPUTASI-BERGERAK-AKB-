import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity,
  StatusBar 
} from 'react-native';
import { Link, Href } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { dataMahasiswa, Mahasiswa } from '../../app/data/mahasiswa';

export default function DaftarMahasiswa() {
  const renderMahasiswa = ({ item }: { item: Mahasiswa }) => {
    const href = `/tugas10/${item.id}` as Href;
    
    return (
      <Link href={href} asChild>
        <TouchableOpacity style={styles.mahasiswaCard}>
          <View style={styles.cardContent}>
            <Ionicons 
              name="person-circle-outline" 
              size={24} 
              color="#667eea" 
              style={styles.icon}
            />
            <View style={styles.textContainer}>
              <Text style={styles.namaMahasiswa}>{item.nama}</Text>
              <Text style={styles.nimMahasiswa}>NIM: {item.nim}</Text>
            </View>
            <Ionicons 
              name="chevron-forward-outline" 
              size={20} 
              color="#94a3b8" 
            />
          </View>
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#667eea" barStyle="light-content" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📚 Daftar Mahasiswa</Text>
        <Text style={styles.headerSubtitle}>
          Total: {dataMahasiswa.length} mahasiswa
        </Text>
      </View>

      <FlatList
        data={dataMahasiswa}
        keyExtractor={(item) => item.id}
        renderItem={renderMahasiswa}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    backgroundColor: '#667eea',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  mahasiswaCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  icon: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  namaMahasiswa: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 2,
  },
  nimMahasiswa: {
    fontSize: 14,
    color: '#64748b',
  },
  separator: {
    height: 10,
  },
});