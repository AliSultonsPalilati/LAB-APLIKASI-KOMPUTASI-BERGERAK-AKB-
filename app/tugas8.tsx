import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Tugas8 = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Text style={styles.mainIcon}>📱</Text>
          <Text style={styles.sparkles}>✨</Text>
        </View>
        
        <Text style={styles.title}>Tabs Bar Implementation</Text>
        <Text style={styles.subtitle}>Navigasi dengan Tab Bar</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.flexContainer}>
          {/* Left Column - What is Tabs Bar */}
          <View style={styles.leftColumn}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionIcon}>🔧</Text>
              <Text style={styles.sectionTitle}>Apa itu Tabs Bar?</Text>
            </View>
            
            <View style={styles.answerBox}>
              <Text style={styles.answerText}>
                <Text style={styles.boldText}>Tabs Bar</Text> adalah komponen navigasi yang memungkinkan pengguna 
                untuk berpindah antar halaman atau section dengan mudah melalui tab yang tersedia di bagian bawah 
                atau atas layar. Tabs bar sangat umum digunakan dalam aplikasi mobile karena memberikan akses cepat 
                ke berbagai fitur utama aplikasi. Setiap tab biasanya memiliki icon dan label yang menggambarkan 
                konten atau fungsi dari halaman tersebut. Dengan tabs bar, pengguna dapat dengan intuitif memahami 
                struktur aplikasi dan navigasi menjadi lebih user-friendly.
              </Text>
            </View>
          </View>

          {/* Right Column - Implementation Status */}
          <View style={styles.rightColumn}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionIcon}>✅</Text>
              <Text style={styles.sectionTitle}>Status Implementasi</Text>
            </View>
            
            <View style={styles.answerBox}>
              <Text style={styles.answerText}>
                <Text style={styles.boldText}>Tabs Bar telah berhasil diimplementasikan</Text> dan sudah digunakan 
                pada tampilan utama aplikasi ini. Anda dapat melihat tabs bar yang berfungsi dengan baik di bagian 
                bawah layar, yang memungkinkan navigasi antar berbagai tugas (Tugas 1, Tugas 2, Tugas 3, dan seterusnya). 
                Implementasi ini menggunakan React Navigation dengan bottom tabs navigator yang memberikan pengalaman 
                navigasi yang smooth dan responsif. Setiap tab memiliki icon yang sesuai dengan konten halaman dan 
                styling yang konsisten dengan desain keseluruhan aplikasi. Tabs bar ini sudah fully functional dan 
                siap digunakan untuk navigasi dalam aplikasi.
              </Text>
            </View>
          </View>
        </View>

        {/* Implementation Demo Section */}
        <View style={styles.demoSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>🎯</Text>
            <Text style={styles.sectionTitle}>Demo Tabs Bar</Text>
          </View>
          
          <View style={styles.demoContainer}>
            <Text style={styles.demoText}>
              Tabs Bar yang sudah diimplementasikan dapat Anda lihat di bagian bawah layar aplikasi ini.
            </Text>
            
            <View style={styles.tabsPreview}>
              <View style={styles.tabItem}>
                <Text style={styles.tabIcon}>🏠</Text>
                <Text style={styles.tabLabel}>Halaman Utama</Text>
              </View>
              <View style={styles.tabItem}>
                <Text style={styles.tabIcon}>👤</Text>
                <Text style={styles.tabLabel}>Tentang Saya</Text>
              </View>
              <View style={styles.tabItem}>
                <Text style={styles.tabIcon}>📄</Text>
                <Text style={styles.tabLabel}>Profile</Text>
              </View>
              <View style={[styles.tabItem, styles.activeTab]}>
                <Text style={styles.tabIcon}>📝</Text>
                <Text style={[styles.tabLabel, styles.activeTabLabel]}>Tugas</Text>
              </View>
              <View style={styles.tabItem}>
                <Text style={styles.tabIcon}>➕</Text>
                <Text style={styles.tabLabel}>More</Text>
              </View>
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
    marginBottom: 30,
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
  demoSection: {
    marginTop: 20,
  },
  demoContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  demoText: {
    fontSize: 16,
    color: '#475569',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  tabsPreview: {
    flexDirection: 'row',
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 10,
    justifyContent: 'space-around',
    borderWidth: 2,
    borderColor: '#e2e8f0',
  },
  tabItem: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#3b82f6',
  },
  tabIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  tabLabel: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: '500',
  },
  activeTabLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Tugas8;