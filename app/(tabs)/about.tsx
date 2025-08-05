import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';

export default function AboutScreen() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1e40af" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          {/* Hero Section with Gradient */}
          <LinearGradient
            colors={['#1e40af', '#3b82f6', '#60a5fa'] as const}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.heroSection}
          >
            <View style={styles.heroIcon}>
              <AntDesign name="mobile1" size={48} color="white" />
            </View>
            <Text style={styles.heroTitle}>Tentang Aplikasi</Text>
            <Text style={styles.heroSubtitle}>
              Dibangun dengan React Native & Expo
            </Text>
          </LinearGradient>

          {/* Purpose Card */}
          <View style={styles.purposeCard}>
            <View style={styles.purposeHeader}>
              <LinearGradient
                colors={['#f59e0b', '#f97316'] as const}
                style={styles.purposeIconContainer}
              >
                <AntDesign name="bulb1" size={28} color="white" />
              </LinearGradient>
              <Text style={styles.purposeTitle}>Tujuan Aplikasi</Text>
            </View>
            <Text style={styles.purposeDescription}>
              Aplikasi ini dirancang dan dikembangkan sebagai bagian dari pemenuhan tugas mata kuliah 
              <Text style={styles.highlightText}> Aplikasi Komputasi Bergerak</Text>, 
              dengan fokus pada pengembangan antarmuka yang intuitif dan fungsionalitas yang komprehensif.
            </Text>
          </View>

          {/* Features Section */}
          <View style={styles.featuresCard}>
            <View style={styles.featuresHeader}>
              <LinearGradient
                colors={['#8b5cf6', '#a855f7'] as const}
                style={styles.featuresIconContainer}
              >
                <AntDesign name="appstore-o" size={28} color="white" />
              </LinearGradient>
              <Text style={styles.featuresTitle}>Fitur & Halaman</Text>
            </View>
            
            <FeatureItem
              icon="home"
              title="Halaman Utama"
              description="Dashboard informatif dengan tampilan overview Universitas Muhammadiyah Makassar yang menarik dan mudah dipahami."
              gradientColors={['#10b981', '#059669'] as const}
            />
            
            <FeatureItem
              icon="infocirlceo"
              title="Tentang Aplikasi"
              description="Dokumentasi lengkap mengenai teknologi, arsitektur, dan penjelasan detail setiap fungsionalitas aplikasi."
              gradientColors={['#3b82f6', '#2563eb'] as const}
            />
            
            <FeatureItem
              icon="user"
              title="Profil Pengembang"
              description="Portfolio digital yang menampilkan identitas, kredensial akademik, dan informasi kontak pengembang."
              gradientColors={['#f59e0b', '#d97706'] as const}
            />
            
            <FeatureItem
              icon="book"
              title="Halaman Tugas"
              description="Koleksi terorganisir dari semua assignment dan project yang telah diselesaikan selama masa perkuliahan."
              gradientColors={['#8b5cf6', '#7c3aed'] as const}
              isLastItem
            />
          </View>

          {/* Tech Stack Card */}
          <View style={styles.techCard}>
            <View style={styles.techHeader}>
              <LinearGradient
                colors={['#06b6d4', '#0891b2'] as const}
                style={styles.techIconContainer}
              >
                <AntDesign name="codesquareo" size={28} color="white" />
              </LinearGradient>
              <Text style={styles.techTitle}>Teknologi yang Digunakan</Text>
            </View>
            
            <View style={styles.techStack}>
              <TechBadge title="React Native" />
              <TechBadge title="Expo SDK" />
              <TechBadge title="TypeScript" />
              <TechBadge title="React Navigation" />
              <TechBadge title="Expo Vector Icons" />
              <TechBadge title="Linear Gradient" />
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <LinearGradient
              colors={['#6366f1', '#8b5cf6'] as const}
              style={styles.versionBadge}
            >
              <AntDesign name="tag" size={16} color="white" />
              <Text style={styles.versionText}>Versi 1.0.0</Text>
            </LinearGradient>
            <Text style={styles.footerText}>
              © 2024 • Dibuat dengan ❤️ untuk Tugas Mobile Programming
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const FeatureItem = ({ 
  icon, 
  title, 
  description, 
  gradientColors, 
  isLastItem = false 
}: { 
  icon: any; 
  title: string; 
  description: string; 
  gradientColors: readonly [string, string]; 
  isLastItem?: boolean; 
}) => (
  <View style={[styles.featureItem, isLastItem && styles.lastFeatureItem]}>
    <LinearGradient
      colors={gradientColors}
      style={styles.featureIconContainer}
    >
      <AntDesign name={icon} size={24} color="white" />
    </LinearGradient>
    <View style={styles.featureTextContainer}>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </View>
  </View>
);

const TechBadge = ({ title }: { title: string }) => (
  <View style={styles.techBadge}>
    <Text style={styles.techBadgeText}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  container: {
    paddingBottom: 30,
  },
  
  // Hero Section
  heroSection: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  heroIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 20,
    borderRadius: 50,
    marginBottom: 20,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
  },
  heroDecoration: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    gap: 8,
  },
  decorationDot: {
    width: 8,
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 4,
  },
  decorationDotDelay: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  decorationDotDelay2: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },

  // Purpose Card
  purposeCard: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: -20,
    borderRadius: 20,
    padding: 24,
    elevation: 8,
    shadowColor: '#1e40af',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
  },
  purposeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  purposeIconContainer: {
    padding: 12,
    borderRadius: 12,
    marginRight: 16,
  },
  purposeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
    flex: 1,
  },
  purposeDescription: {
    fontSize: 16,
    color: '#64748b',
    lineHeight: 24,
  },
  highlightText: {
    color: '#1e40af',
    fontWeight: '600',
  },

  // Features Card
  featuresCard: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 24,
    borderRadius: 20,
    padding: 24,
    elevation: 8,
    shadowColor: '#8b5cf6',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
  },
  featuresHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  featuresIconContainer: {
    padding: 12,
    borderRadius: 12,
    marginRight: 16,
  },
  featuresTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
    flex: 1,
  },
  featureItem: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  lastFeatureItem: {
    borderBottomWidth: 0,
  },
  featureIconContainer: {
    padding: 12,
    borderRadius: 12,
    marginRight: 16,
    alignSelf: 'flex-start',
  },
  featureTextContainer: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 6,
  },
  featureDescription: {
    fontSize: 15,
    color: '#64748b',
    lineHeight: 22,
  },

  // Tech Stack Card
  techCard: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 24,
    borderRadius: 20,
    padding: 24,
    elevation: 8,
    shadowColor: '#06b6d4',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
  },
  techHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  techIconContainer: {
    padding: 12,
    borderRadius: 12,
    marginRight: 16,
  },
  techTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
    flex: 1,
  },
  techStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  techBadge: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  techBadgeText: {
    fontSize: 14,
    color: '#475569',
    fontWeight: '500',
  },

  // Footer
  footer: {
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 20,
  },
  versionBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 16,
    gap: 8,
  },
  versionText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  footerText: {
    fontSize: 14,
    color: '#94a3b8',
    textAlign: 'center',
    lineHeight: 20,
  },
});