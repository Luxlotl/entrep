import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Circle, Line, Rect } from 'react-native-svg';

export default function ScanScreen() {
  return (
    <LinearGradient colors={['#0b1528', '#0a0f1e']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Smart Scan</Text>
        <Text style={styles.subtitle}>Capture receipts instantly with AI</Text>

        {/* Camera Placeholder */}
        <View style={styles.cameraBox}>
          <Svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <Path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <Circle cx="12" cy="13" r="4" />
          </Svg>
          <Text style={styles.cameraLabel}>Tap to open camera</Text>
          <Text style={styles.cameraHint}>Point at any receipt or invoice</Text>
        </View>

        {/* Recent Scans */}
        <Text style={styles.sectionTitle}>Recent Scans</Text>
        {[
          { merchant: 'Jollibee', amount: '₱245.00', date: 'Today, 11:30 AM', category: '🍔 Food' },
          { merchant: 'SM Supermarket', amount: '₱1,820.50', date: 'Yesterday', category: '🛒 Groceries' },
          { merchant: 'Grab', amount: '₱180.00', date: 'May 17', category: '🚗 Transport' },
        ].map((item, i) => (
          <View key={i} style={styles.scanCard}>
            <View style={styles.scanLeft}>
              <Text style={styles.scanCategory}>{item.category}</Text>
              <Text style={styles.scanMerchant}>{item.merchant}</Text>
              <Text style={styles.scanDate}>{item.date}</Text>
            </View>
            <Text style={styles.scanAmount}>{item.amount}</Text>
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 24, paddingTop: 60 },
  title: { fontSize: 28, fontWeight: '800', color: '#fff', marginBottom: 4 },
  subtitle: { fontSize: 14, color: '#64748b', marginBottom: 32 },
  cameraBox: {
    backgroundColor: 'rgba(56,189,248,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(56,189,248,0.2)',
    borderRadius: 20,
    borderStyle: 'dashed',
    alignItems: 'center',
    padding: 48,
    marginBottom: 32,
  },
  cameraLabel: { color: '#38bdf8', fontSize: 16, fontWeight: '600', marginTop: 16 },
  cameraHint: { color: '#475569', fontSize: 13, marginTop: 6 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#fff', marginBottom: 16 },
  scanCard: {
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  scanLeft: { gap: 2 },
  scanCategory: { fontSize: 12, color: '#64748b' },
  scanMerchant: { fontSize: 16, fontWeight: '600', color: '#f1f5f9' },
  scanDate: { fontSize: 12, color: '#475569', marginTop: 2 },
  scanAmount: { fontSize: 18, fontWeight: '700', color: '#38bdf8' },
});
