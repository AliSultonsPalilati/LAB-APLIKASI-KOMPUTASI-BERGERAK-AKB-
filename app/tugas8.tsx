import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tugas8 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.mainIcon}>🔧</Text>
        <Text style={styles.title}>Under Construction</Text>
        <Text style={styles.subtitle}>Task 8</Text>
      </View>
      
      <View style={styles.messageContainer}>
        <Text style={styles.message}>
          This task is currently being developed and will be available in the next update. 
          We appreciate your patience!
        </Text>
      </View>
      
      <View style={styles.statusContainer}>
        <View style={styles.statusItem}>
          <View style={styles.statusDot}></View>
          <Text style={styles.statusText}>Planning Phase</Text>
          <Text style={styles.statusCheck}>✅</Text>
        </View>
        
        <View style={styles.statusItem}>
          <View style={[styles.statusDot, styles.statusDotActive]}></View>
          <Text style={styles.statusText}>Development Phase</Text>
          <Text style={styles.statusProgress}>🔄</Text>
        </View>
        
        <View style={styles.statusItem}>
          <View style={[styles.statusDot, styles.statusDotPending]}></View>
          <Text style={styles.statusText}>Testing Phase</Text>
          <Text style={styles.statusPending}>⏳</Text>
        </View>
        
        <View style={styles.statusItem}>
          <View style={[styles.statusDot, styles.statusDotPending]}></View>
          <Text style={styles.statusText}>Release</Text>
          <Text style={styles.statusPending}>🎉</Text>
        </View>
      </View>
      
      <View style={styles.infoBox}>
        <Text style={styles.infoIcon}>💡</Text>
        <Text style={styles.infoText}>
          Want to be notified when this task is ready? Keep checking back for updates!
        </Text>
      </View>
      
      <View style={styles.comingSoonBadge}>
        <Text style={styles.badgeText}>COMING SOON</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 20,
    minHeight: 500,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  mainIcon: {
    fontSize: 70,
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#64748b',
    textAlign: 'center',
    fontWeight: '600',
  },
  messageContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderLeftWidth: 4,
    borderLeftColor: '#f59e0b',
  },
  message: {
    fontSize: 16,
    color: '#374151',
    textAlign: 'center',
    lineHeight: 24,
  },
  statusContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#22c55e',
    marginRight: 15,
  },
  statusDotActive: {
    backgroundColor: '#3b82f6',
  },
  statusDotPending: {
    backgroundColor: '#d1d5db',
  },
  statusText: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
    fontWeight: '500',
  },
  statusCheck: {
    fontSize: 16,
  },
  statusProgress: {
    fontSize: 16,
  },
  statusPending: {
    fontSize: 16,
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    borderRadius: 12,
    padding: 15,
    marginBottom: 25,
    alignItems: 'flex-start',
  },
  infoIcon: {
    fontSize: 20,
    marginRight: 12,
    marginTop: 2,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: '#4338ca',
    lineHeight: 20,
  },
  comingSoonBadge: {
    backgroundColor: '#7c3aed',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignSelf: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  badgeText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
  },
});

export default Tugas8;