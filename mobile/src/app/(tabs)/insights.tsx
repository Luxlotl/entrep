import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Circle, Line } from 'react-native-svg';

export default function InsightsScreen() {
  const categories = [
    { name: 'Food & Dining', amount: '₱3,240', percent: 72, color: '#38bdf8' },
    { name: 'Transport', amount: '₱890', percent: 45, color: '#10b981' },
    { name: 'Shopping', amount: '₱2,100', percent: 58, color: '#8b5cf6' },
    { name: 'Utilities', amount: '₱1,500', percent: 33, color: '#f59e0b' },
  ];

  return (
    <LinearGradient colors={['#0b1528', '#0a0f1e']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Insights</Text>
        <Text style={styles.subtitle}>May 2026 spending overview</Text>

        {/* Summary Card */}
        <LinearGradient colors={['rgba(56,189,248,0.15)', 'rgba(16,185,129,0.08)']} style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>Total Spent This Month</Text>
          <Text style={styles.summaryAmount}>₱7,730.00</Text>
          <Text style={styles.summaryChange}>↓ 12% less than last month</Text>
        </LinearGradient>

        {/* Category Breakdown */}
        <Text style={styles.sectionTitle}>By Category</Text>
        {categories.map((cat, i) => (
          <View key={i} style={styles.catRow}>
            <View style={styles.catHeader}>
              <Text style={styles.catName}>{cat.name}</Text>
              <Text style={[styles.catAmount, { color: cat.color }]}>{cat.amount}</Text>
            </View>
            <View style={styles.barBg}>
              <View style={[styles.barFill, { width: `${cat.percent}%`, backgroundColor: cat.color }]} />
            </View>
          </View>
        ))}

        {/* Monthly Trend */}
        <Text style={styles.sectionTitle}>Monthly Trend</Text>
        <View style={styles.trendCard}>
          {['Jan', 'Feb', 'Mar', 'Apr', 'May'].map((month, i) => {
            const heights = [40, 65, 50, 80, 55];
            return (
              <View key={i} style={styles.barCol}>
                <View style={[styles.trendBar, { height: heights[i], backgroundColor: i === 4 ? '#38bdf8' : 'rgba(56,189,248,0.25)' }]} />
                <Text style={styles.barLabel}>{month}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 24, paddingTop: 60 },
  title: { fontSize: 28, fontWeight: '800', color: '#fff', marginBottom: 4 },
  subtitle: { fontSize: 14, color: '#64748b', marginBottom: 24 },
  summaryCard: {
    borderRadius: 20, padding: 24, marginBottom: 28,
    borderWidth: 1, borderColor: 'rgba(56,189,248,0.15)',
  },
  summaryLabel: { fontSize: 13, color: '#94a3b8', marginBottom: 8 },
  summaryAmount: { fontSize: 36, fontWeight: '800', color: '#fff', marginBottom: 6 },
  summaryChange: { fontSize: 13, color: '#10b981', fontWeight: '600' },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#fff', marginBottom: 16 },
  catRow: { marginBottom: 18 },
  catHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  catName: { fontSize: 14, color: '#cbd5e1', fontWeight: '500' },
  catAmount: { fontSize: 14, fontWeight: '700' },
  barBg: { height: 6, backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 3 },
  barFill: { height: 6, borderRadius: 3 },
  trendCard: {
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: 20, padding: 20,
    borderWidth: 1, borderColor: 'rgba(255,255,255,0.06)',
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end', height: 140,
  },
  barCol: { alignItems: 'center', gap: 8 },
  trendBar: { width: 32, borderRadius: 6 },
  barLabel: { fontSize: 11, color: '#64748b' },
});
