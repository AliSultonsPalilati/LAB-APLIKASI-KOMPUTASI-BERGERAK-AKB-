import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

const Tugas5 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.mainTitle}>📱 Tanya Jawab React Native</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.questionsRow}>
          {/* Pertanyaan 1 - Kiri */}
          <View style={[styles.card, styles.leftCard]}>
            <View style={styles.cardHeader}>
              <Text style={styles.questionTitle}>
                🤔 Apakah sebuah kata bisa dimasukkan ke dalam komponen selain &lt;Text /&gt; di React Native?
              </Text>
            </View>
            
            <View style={styles.answerContainer}>
              <Text style={styles.answerIcon}>💡</Text>
              <Text style={styles.answerText}>
                Menurut saya <Text style={styles.boldText}>bisa</Text>, karena seperti pada praktikum ke 4 dimana teks atau kata dimasukkan ke dalam komponen TouchableOpacity.
              </Text>
            </View>

            <View style={styles.noteContainer}>
              <Text style={styles.noteIcon}>⚠️</Text>
              <Text style={styles.noteText}>
                Tetapi penggunaannya tidak direkomendasikan karena akan muncul peringatan ketika dijalankan aplikasi expo.
              </Text>
            </View>

            <View style={styles.exampleContainer}>
              <Text style={styles.exampleTitle}>📝 Contoh Komponen yang Bisa:</Text>
              <View style={styles.componentList}>
                <View style={styles.componentItem}>
                  <View style={styles.bulletPoint} />
                  <Text style={styles.componentText}>TouchableOpacity</Text>
                </View>
                <View style={styles.componentItem}>
                  <View style={styles.bulletPoint} />
                  <Text style={styles.componentText}>View</Text>
                </View>
                <View style={styles.componentItem}>
                  <View style={styles.bulletPoint} />
                  <Text style={styles.componentText}>ScrollView</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Pertanyaan 2 - Kanan */}
          <View style={[styles.card, styles.rightCard]}>
            <View style={styles.cardHeader}>
              <Text style={styles.questionTitle}>
                🖼️ Apa saja batasan dari komponen Image di React Native?
              </Text>
            </View>
            
            <View style={styles.answerContainer}>
              <Text style={styles.answerIcon}>💡</Text>
              <Text style={styles.answerText}>
                Menurut saya batasan dari komponen Image adalah:
              </Text>
            </View>

            <View style={styles.limitationsList}>
              <View style={styles.limitationItem}>
                <View style={styles.limitationIconContainer}>
                  <Text style={styles.limitationIcon}>🎯</Text>
                </View>
                <Text style={styles.limitationText}>
                  <Text style={styles.boldText}>Cuma bisa menampilkan gambar</Text>
                </Text>
              </View>
              
              <View style={styles.limitationItem}>
                <View style={styles.limitationIconContainer}>
                  <Text style={styles.limitationIcon}>🚫</Text>
                </View>
                <Text style={styles.limitationText}>
                  <Text style={styles.boldText}>Tidak bisa menampung teks atau komponen lain</Text> di dalamnya
                </Text>
              </View>
            </View>

            <View style={styles.conclusionContainer}>
              <Text style={styles.conclusionIcon}>✅</Text>
              <Text style={styles.conclusionText}>
                Mungkin menurut saya itu saja untuk jawaban kedua soalnya.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 25,
    alignItems: 'center',
  },
  divider: {
    height: 3,
    width: '40%',
    backgroundColor: '#3b82f6',
    marginTop: 10,
    borderRadius: 3,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1e3a8a',
    textAlign: 'center',
  },
  questionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  leftCard: {
    flex: 1,
  },
  rightCard: {
    flex: 1,
  },
  cardHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    paddingBottom: 15,
    marginBottom: 15,
  },
  questionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e40af',
    lineHeight: 24,
  },
  answerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#f0fdf4',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#10b981',
  },
  answerIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  answerText: {
    flex: 1,
    fontSize: 14,
    color: '#334155',
    lineHeight: 22,
  },
  noteContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#fffbeb',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#f59e0b',
  },
  noteIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  noteText: {
    flex: 1,
    fontSize: 14,
    color: '#334155',
    lineHeight: 22,
  },
  exampleContainer: {
    padding: 15,
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#6366f1',
    marginBottom: 10,
  },
  exampleTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1e40af',
    marginBottom: 12,
  },
  componentList: {
    marginLeft: 5,
  },
  componentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#6366f1',
    marginRight: 10,
  },
  componentText: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },
  limitationsList: {
    marginTop: 5,
  },
  limitationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#fef2f2',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#ef4444',
  },
  limitationIconContainer: {
    marginRight: 10,
  },
  limitationIcon: {
    fontSize: 20,
  },
  limitationText: {
    flex: 1,
    fontSize: 14,
    color: '#334155',
    lineHeight: 22,
  },
  conclusionContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 15,
    padding: 15,
    backgroundColor: '#ecfdf5',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#10b981',
  },
  conclusionIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  conclusionText: {
    flex: 1,
    fontSize: 14,
    color: '#334155',
    lineHeight: 22,
    fontStyle: 'italic',
  },
  boldText: {
    fontWeight: '700',
    color: '#1e40af',
  },
});

export default Tugas5;