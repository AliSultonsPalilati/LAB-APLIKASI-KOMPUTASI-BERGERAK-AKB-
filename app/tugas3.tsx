import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const Tugas3 = () => {
  const [activeSection, setActiveSection] = useState('reactNative');

  const sections = [
    { id: 'reactNative', title: 'React Native' },
    { id: 'expo', title: 'Expo' },
    { id: 'perbedaan', title: 'Perbedaan' }
  ];

  const renderReactNativeContent = () => (
    <View style={styles.contentContainer}>
      <Text style={styles.sectionTitle}>React Native</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📱 Apa itu React Native?</Text>
        <Text style={styles.cardContent}>
          React Native adalah kerangka kerja (framework) sumber terbuka yang dibuat oleh Facebook untuk membuat aplikasi ponsel. Dengan React Native, kita bisa membuat aplikasi Android dan iPhone sekaligus menggunakan satu kode yang sama, seperti membuat website tetapi hasilnya adalah aplikasi ponsel yang sesungguhnya.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎯 Fitur Utama</Text>
        <Text style={styles.bulletPoint}>• Bisa membuat aplikasi Android dan iPhone bersamaan</Text>
        <Text style={styles.bulletPoint}>• Perubahan kode langsung terlihat tanpa menjalankan ulang</Text>
        <Text style={styles.bulletPoint}>• Kinerja aplikasi sama baiknya dengan aplikasi asli</Text>
        <Text style={styles.bulletPoint}>• Dapat menggunakan fitur-fitur ponsel seperti kamera, GPS</Text>
        <Text style={styles.bulletPoint}>• Komponen yang dibuat bisa digunakan berulang-ulang</Text>
        <Text style={styles.bulletPoint}>• Komunitas pengguna yang besar dan aktif</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>⚙️ Bagaimana Cara Kerjanya?</Text>
        <Text style={styles.cardContent}>
          React Native bekerja dengan cara menerjemahkan kode JavaScript menjadi komponen asli ponsel. Bayangkan seperti penerjemah yang mengubah bahasa Indonesia menjadi bahasa Inggris. Hasilnya adalah aplikasi yang benar-benar berjalan seperti aplikasi asli, bukan aplikasi website yang dibungkus.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>✅ Keunggulan</Text>
        <Text style={styles.bulletPoint}>• Pengembangan aplikasi lebih cepat</Text>
        <Text style={styles.bulletPoint}>• Hemat biaya (satu tim bisa buat dua aplikasi)</Text>
        <Text style={styles.bulletPoint}>• Mudah dipelihara dan diperbarui</Text>
        <Text style={styles.bulletPoint}>• Kinerja mendekati aplikasi asli</Text>
        <Text style={styles.bulletPoint}>• Didukung penuh oleh Facebook/Meta</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>❌ Kekurangan</Text>
        <Text style={styles.bulletPoint}>• Perlu waktu belajar untuk fitur-fitur khusus ponsel</Text>
        <Text style={styles.bulletPoint}>• Mencari kesalahan kode bisa rumit</Text>
        <Text style={styles.bulletPoint}>• Tidak semua fitur ponsel tersedia</Text>
        <Text style={styles.bulletPoint}>• Ukuran aplikasi lebih besar dari aplikasi asli</Text>
      </View>
    </View>
  );

  const renderExpoContent = () => (
    <View style={styles.contentContainer}>
      <Text style={styles.sectionTitle}>Expo</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🚀 Apa itu Expo?</Text>
        <Text style={styles.cardContent}>
          Expo adalah kumpulan alat dan layanan yang memudahkan pembuatan aplikasi dengan React Native. Bayangkan Expo seperti paket lengkap yang berisi semua peralatan yang dibutuhkan untuk membuat aplikasi ponsel, mulai dari awal hingga aplikasi siap dipublikasikan di toko aplikasi.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🛠️ Bagian-bagian Utama Expo</Text>
        <Text style={styles.bulletPoint}>• Expo CLI - Alat perintah untuk mengatur proyek</Text>
        <Text style={styles.bulletPoint}>• Expo Go - Aplikasi untuk mencoba hasil di ponsel</Text>
        <Text style={styles.bulletPoint}>• Expo SDK - Kumpulan fitur siap pakai</Text>
        <Text style={styles.bulletPoint}>• EAS - Layanan untuk membuat dan menerbitkan aplikasi</Text>
        <Text style={styles.bulletPoint}>• Expo Dev Tools - Alat untuk membantu pengembangan</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📦 Expo SDK</Text>
        <Text style={styles.cardContent}>
          Expo SDK adalah kumpulan fitur-fitur ponsel yang sudah siap pakai seperti kamera, lokasi GPS, pemberitahuan, penyimpanan file, dan masih banyak lagi. Semua fitur ini sudah dikemas rapi dan mudah digunakan, sehingga kita tidak perlu membuat dari nol.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🔧 Cara Kerja Expo</Text>
        <Text style={styles.cardContent}>
          <Text style={styles.subTitle}>Cara Terpandu (Managed Workflow):</Text>
          {'\n'}• Expo mengurus semua hal teknis yang rumit
          {'\n'}• Tidak perlu menginstal perangkat lunak khusus
          {'\n'}• Aplikasi bisa diperbarui tanpa mengunduh ulang
          {'\n'}• Proses pembuatan aplikasi jadi lebih sederhana
          {'\n\n'}
          <Text style={styles.subTitle}>Cara Mandiri (Bare Workflow):</Text>
          {'\n'}• Kita punya kontrol penuh terhadap kode aplikasi
          {'\n'}• Bisa menggunakan fitur-fitur khusus tambahan
          {'\n'}• Lebih fleksibel untuk kebutuhan yang spesifik
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>✨ Keunggulan Expo</Text>
        <Text style={styles.bulletPoint}>• Langsung bisa digunakan tanpa pengaturan rumit</Text>
        <Text style={styles.bulletPoint}>• Banyak fitur yang sudah siap pakai</Text>
        <Text style={styles.bulletPoint}>• Mudah mencoba aplikasi di ponsel dengan Expo Go</Text>
        <Text style={styles.bulletPoint}>• Aplikasi bisa diperbarui secara otomatis</Text>
        <Text style={styles.bulletPoint}>• Proses pembuatan aplikasi lebih sederhana</Text>
        <Text style={styles.bulletPoint}>• Pengalaman pengembangan yang menyenangkan</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>⚠️ Keterbatasan</Text>
        <Text style={styles.bulletPoint}>• Tidak semua fitur ponsel tersedia</Text>
        <Text style={styles.bulletPoint}>• Ukuran aplikasi menjadi lebih besar</Text>
        <Text style={styles.bulletPoint}>• Tergantung pada sistem Expo</Text>
        <Text style={styles.bulletPoint}>• Beberapa fitur khusus memerlukan keluar dari Expo</Text>
      </View>
    </View>
  );

  const renderPerbedaanContent = () => (
    <View style={styles.contentContainer}>
      <Text style={styles.sectionTitle}>Perbedaan React Native & Expo</Text>
      
      <View style={styles.comparisonCard}>
        <Text style={styles.comparisonTitle}>🏗️ Pengaturan Awal & Konfigurasi</Text>
        <View style={styles.comparisonRow}>
          <View style={styles.comparisonColumn}>
            <Text style={styles.comparisonHeader}>React Native</Text>
            <Text style={styles.comparisonContent}>
              • Perlu pengaturan yang rumit secara manual
              {'\n'}• Harus menginstal Android Studio atau Xcode
              {'\n'}• Perlu mengatur alat-alat pembuatan aplikasi
              {'\n'}• Harus menyiapkan simulasi ponsel di komputer
            </Text>
          </View>
          <View style={styles.comparisonColumn}>
            <Text style={styles.comparisonHeader}>Expo</Text>
            <Text style={styles.comparisonContent}>
              • Tidak perlu pengaturan rumit
              {'\n'}• Tidak perlu menginstal alat-alat khusus
              {'\n'}• Bisa langsung mulai dengan template siap pakai
              {'\n'}• Bisa langsung mencoba di ponsel sungguhan
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.comparisonCard}>
        <Text style={styles.comparisonTitle}>🔧 Pengalaman Pengembangan</Text>
        <View style={styles.comparisonRow}>
          <View style={styles.comparisonColumn}>
            <Text style={styles.comparisonHeader}>React Native</Text>
            <Text style={styles.comparisonContent}>
              • Kontrol penuh terhadap kode aplikasi
              {'\n'}• Bisa menggunakan fitur tambahan apa saja
              {'\n'}• Mencari kesalahan kode lebih rumit
              {'\n'}• Harus menghubungkan perpustakaan secara manual
            </Text>
          </View>
          <View style={styles.comparisonColumn}>
            <Text style={styles.comparisonHeader}>Expo</Text>
            <Text style={styles.comparisonContent}>
              • Proses kerja yang lebih sederhana
              {'\n'}• Fitur-fitur sudah siap pakai dalam SDK
              {'\n'}• Alat bantu untuk mencari kesalahan mudah
              {'\n'}• Perpustakaan terhubung otomatis
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.comparisonCard}>
        <Text style={styles.comparisonTitle}>📱 Pengujian & Penerbitan</Text>
        <View style={styles.comparisonRow}>
          <View style={styles.comparisonColumn}>
            <Text style={styles.comparisonHeader}>React Native</Text>
            <Text style={styles.comparisonContent}>
              • Proses pembuatan aplikasi secara manual
              {'\n'}• Perlu alat-alat khusus untuk membangun aplikasi
              {'\n'}• Penerbitan ke toko aplikasi secara tradisional
              {'\n'}• Tidak ada pembaruan otomatis
            </Text>
          </View>
          <View style={styles.comparisonColumn}>
            <Text style={styles.comparisonHeader}>Expo</Text>
            <Text style={styles.comparisonContent}>
              • Menggunakan Expo Go untuk mencoba aplikasi
              {'\n'}• Layanan EAS untuk membangun aplikasi
              {'\n'}• Proses penerbitan yang lebih mudah
              {'\n'}• Pembaruan aplikasi bisa dilakukan secara otomatis
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.comparisonCard}>
        <Text style={styles.comparisonTitle}>🎯 Kapan Digunakan</Text>
        <View style={styles.comparisonRow}>
          <View style={styles.comparisonColumn}>
            <Text style={styles.comparisonHeader}>React Native</Text>
            <Text style={styles.comparisonContent}>
              • Integrasi rumit dengan fitur ponsel khusus
              {'\n'}• Memerlukan fitur tambahan yang dibuat sendiri
              {'\n'}• Aplikasi yang membutuhkan kinerja sangat tinggi
              {'\n'}• Menggabungkan dengan aplikasi lama yang sudah ada
            </Text>
          </View>
          <View style={styles.comparisonColumn}>
            <Text style={styles.comparisonHeader}>Expo</Text>
            <Text style={styles.comparisonContent}>
              • Membuat prototipe dengan cepat
              {'\n'}• Aplikasi ponsel pada umumnya
              {'\n'}• Pengembangan produk minimum yang layak
              {'\n'}• Belajar React Native untuk pemula
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.recommendationCard}>
        <Text style={styles.recommendationTitle}>💡 Rekomendasi Penggunaan</Text>
        <Text style={styles.recommendationContent}>
          <Text style={styles.boldText}>Gunakan Expo jika:</Text>
          {'\n'}• Baru mulai belajar React Native
          {'\n'}• Ingin pengembangan aplikasi yang cepat
          {'\n'}• Tidak memerlukan fitur ponsel yang khusus
          {'\n'}• Fokus pada fitur-fitur ponsel yang umum
          {'\n\n'}
          <Text style={styles.boldText}>Gunakan React Native CLI jika:</Text>
          {'\n'}• Memerlukan fitur ponsel yang sangat spesifik
          {'\n'}• Perlu kontrol penuh terhadap kode aplikasi
          {'\n'}• Menggabungkan dengan aplikasi asli yang sudah ada
          {'\n'}• Memerlukan pengoptimalan kinerja yang ekstrem
        </Text>
      </View>
    </View>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'reactNative':
        return renderReactNativeContent();
      case 'expo':
        return renderExpoContent();
      case 'perbedaan':
        return renderPerbedaanContent();
      default:
        return renderReactNativeContent();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabContainer}>
        {sections.map((section) => (
          <TouchableOpacity
            key={section.id}
            style={[
              styles.tab,
              activeSection === section.id && styles.activeTab
            ]}
            onPress={() => setActiveSection(section.id)}
            activeOpacity={0.7}
          >
            <Text style={[
              styles.tabText,
              activeSection === section.id && styles.activeTabText
            ]}>
              {section.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView 
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContentContainer}
      >
        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#667eea',
  },
  tabText: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#667eea',
    fontWeight: 'bold',
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingBottom: 20,
  },
  contentContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 10,
  },
  cardContent: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 22,
  },
  bulletPoint: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 5,
    lineHeight: 20,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  comparisonCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  comparisonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 15,
    textAlign: 'center',
  },
  comparisonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  comparisonColumn: {
    flex: 1,
    marginHorizontal: 5,
  },
  comparisonHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#667eea',
    marginBottom: 10,
    textAlign: 'center',
  },
  comparisonContent: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 20,
  },
  recommendationCard: {
    backgroundColor: '#f0f9ff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#0ea5e9',
  },
  recommendationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0c4a6e',
    marginBottom: 15,
  },
  recommendationContent: {
    fontSize: 14,
    color: '#0c4a6e',
    lineHeight: 22,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#1e293b',
  },
});

export default Tugas3;