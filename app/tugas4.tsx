import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function TugasAkhir() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header Section */}
        <View style={styles.headerContainer}>
          <Text style={[styles.headerTitle, { fontFamily: 'PoppinsBold' }]}>
            🎓 Final Project Showcase
          </Text>
          <Text style={styles.headerSubtitle}>
            Referensi NIM: 105841102222 (Ali Sulton S Palilati)
          </Text>
        </View>

        {/* Section: 5 Nama Sebelum */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <View style={styles.decorativeLine} />
            <Text style={styles.sectionTitle}>5 NAMA SEBELUM (FONT STATIS)</Text>
            <View style={styles.decorativeLine} />
          </View>
          
          {/* 5 NAMA SEBELUM DENGAN 5 FONT STATIS BERBEDA */}
          <View style={styles.nameCardsContainer}>
            <View style={styles.nameCard}>
              <Text style={[styles.nameText, { fontFamily: 'LatoRegular' }]}>
                Absarmarsal Rizwal Mahua
              </Text>
              <Text style={styles.nimText}>(105841101522)</Text>
              <View style={[styles.fontTag, { backgroundColor: '#EF4444' }]}>
                <Text style={styles.fontTagText}>Lato Regular</Text>
              </View>
            </View>

            <View style={styles.nameCard}>
              <Text style={[styles.nameText, { fontFamily: 'RobotoMedium' }]}>
                Syawaluddin
              </Text>
              <Text style={styles.nimText}>(105841101622)</Text>
              <View style={[styles.fontTag, { backgroundColor: '#F59E0B' }]}>
                <Text style={styles.fontTagText}>Roboto Medium</Text>
              </View>
            </View>

            <View style={styles.nameCard}>
              <Text style={[styles.nameText, { fontFamily: 'OpenSansRegular' }]}>
                Andi Citra Ayu Lestari
              </Text>
              <Text style={styles.nimText}>(105841101722)</Text>
              <View style={[styles.fontTag, { backgroundColor: '#10B981' }]}>
                <Text style={styles.fontTagText}>Open Sans Regular</Text>
              </View>
            </View>

            <View style={styles.nameCard}>
              <Text style={[styles.nameText, { fontFamily: 'MerriweatherBold' }]}>
                Farisan
              </Text>
              <Text style={styles.nimText}>(105841101822)</Text>
              <View style={[styles.fontTag, { backgroundColor: '#3B82F6' }]}>
                <Text style={styles.fontTagText}>Merriweather Bold</Text>
              </View>
            </View>

            <View style={styles.nameCard}>
              <Text style={[styles.nameText, { fontFamily: 'PoppinsBold' }]}>
                Erick Yusuf Kotte
              </Text>
              <Text style={styles.nimText}>(105841101922)</Text>
              <View style={[styles.fontTag, { backgroundColor: '#8B5CF6' }]}>
                <Text style={styles.fontTagText}>Poppins Bold</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Section: 5 Nama Setelah */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <View style={styles.decorativeLine} />
            <Text style={styles.sectionTitle}>5 NAMA SETELAH (FONT VARIABEL)</Text>
            <View style={styles.decorativeLine} />
          </View>

          {/* 5 NAMA SETELAH DENGAN 5 FONT VARIABEL BERBEDA */}
          <View style={styles.nameCardsContainer}>
            <View style={styles.nameCard}>
              <Text style={[styles.nameText, { fontFamily: 'MulishVariable', fontWeight: '300' }]}>
                A. Ikram Mukarram
              </Text>
              <Text style={styles.nimText}>(105841102622)</Text>
              <View style={[styles.fontTag, { backgroundColor: '#EC4899' }]}>
                <Text style={styles.fontTagText}>Mulish Variable (300)</Text>
              </View>
            </View>

            <View style={styles.nameCard}>
              <Text style={[styles.nameText, { fontFamily: 'NunitoSansVariable', fontWeight: '400' }]}>
                Ahmad Fathir
              </Text>
              <Text style={styles.nimText}>(105841102922)</Text>
              <View style={[styles.fontTag, { backgroundColor: '#06B6D4' }]}>
                <Text style={styles.fontTagText}>Nunito Sans Variable (400)</Text>
              </View>
            </View>

            <View style={styles.nameCard}>
              <Text style={[styles.nameText, { fontFamily: 'WorkSansVariable', fontWeight: '500' }]}>
                Nur Muhammad Ashman
              </Text>
              <Text style={styles.nimText}>(105841103122)</Text>
              <View style={[styles.fontTag, { backgroundColor: '#84CC16' }]}>
                <Text style={styles.fontTagText}>Work Sans Variable (500)</Text>
              </View>
            </View>

            <View style={styles.nameCard}>
              <Text style={[styles.nameText, { fontFamily: 'RubikVariable', fontWeight: '700' }]}>
                Muhammad Faturrachman Iswan
              </Text>
              <Text style={styles.nimText}>(105841103322)</Text>
              <View style={[styles.fontTag, { backgroundColor: '#F97316' }]}>
                <Text style={styles.fontTagText}>Rubik Variable (700)</Text>
              </View>
            </View>

            <View style={styles.nameCard}>
              <Text style={[styles.nameText, { fontFamily: 'OswaldVariable', fontWeight: '900' }]}>
                Nurmisba
              </Text>
              <Text style={styles.nimText}>(105841103422)</Text>
              <View style={[styles.fontTag, { backgroundColor: '#DC2626' }]}>
                <Text style={styles.fontTagText}>Oswald Variable (900)</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            ✨ Tugas Akhir - Font Showcase Demo
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Container Styles
  safeArea: { 
    flex: 1, 
    backgroundColor: '#F8FAFC',
  },
  container: { 
    paddingHorizontal: 20,
    paddingVertical: 25,
    paddingBottom: 40,
  },

  // Header Styles
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  headerTitle: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#1E293B',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  headerSubtitle: { 
    fontSize: 14, 
    color: '#64748B',
    textAlign: 'center',
    fontStyle: 'italic',
  },

  // Section Styles
  sectionContainer: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  decorativeLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#CBD5E1',
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#475569',
    textAlign: 'center',
    paddingHorizontal: 15,
    letterSpacing: 1.2,
  },

  // Name Cards Container
  nameCardsContainer: {
    gap: 16,
  },

  // Name Card Styles
  nameCard: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
    position: 'relative',
  },
  nameText: {
    fontSize: 18,
    color: '#1E293B',
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 6,
    lineHeight: 24,
  },
  nimText: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 12,
  },

  // Font Tag Styles
  fontTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 8,
  },
  fontTagText: {
    fontSize: 11,
    color: '#FFFFFF',
    fontWeight: '600',
    letterSpacing: 0.5,
  },

  footer: {
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  footerText: {
    fontSize: 14,
    color: '#64748B',
    fontStyle: 'italic',
  },
});
