import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tugas7 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.mainIcon}>🚀</Text>
        <Text style={styles.sparkles}>✨</Text>
      </View>
      
      <Text style={styles.title}>Coming Soon</Text>
      <Text style={styles.subtitle}>Task 7</Text>
      
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}> 
          This task is currently under development and will be available soon.
        </Text>
      </View>
      
      <View style={styles.featuresList}>
        <View style={styles.featureItem}>
          <Text style={styles.featureIcon}>🎯</Text>
          <Text style={styles.featureText}>New exciting features</Text>
        </View>
        
        <View style={styles.featureItem}>
          <Text style={styles.featureIcon}>💡</Text>
          <Text style={styles.featureText}>Enhanced user experience</Text>
        </View>
        
        <View style={styles.featureItem}>
          <Text style={styles.featureIcon}>⚡</Text>
          <Text style={styles.featureText}>Improved performance</Text>
        </View>
      </View>
      
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Stay tuned for updates!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    padding: 20,
    minHeight: 400,
  },
  iconContainer: {
    position: 'relative',
    marginBottom: 30,
  },
  mainIcon: {
    fontSize: 80,
    textAlign: 'center',
  },
  sparkles: {
    position: 'absolute',
    top: -10,
    right: -15,
    fontSize: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#64748b',
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: '600',
  },
  descriptionContainer: {
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
  },
  description: {
    fontSize: 16,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 24,
  },
  featuresList: {
    width: '100%',
    marginBottom: 30,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  featureIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  featureText: {
    fontSize: 16,
    color: '#1e293b',
    fontWeight: '500',
  },
  footerContainer: {
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: 'rgba(34, 197, 94, 0.2)',
  },
  footerText: {
    fontSize: 16,
    color: '#16a34a',
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default Tugas7;