import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Circle, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';

export default function DashboardScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greetingSubtitle}>Hello, Clarity Member</Text>
          <Text style={styles.greetingTitle}>Your Balance</Text>
        </View>
        <TouchableOpacity style={styles.notificationRing}>
          <Svg viewBox="0 0 24 24" width="20" height="20" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <Path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <Path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </Svg>
          <View style={styles.activeBadge} />
        </TouchableOpacity>
      </View>

      {/* Balance Card */}
      <LinearGradient colors={['rgba(59, 130, 246, 0.15)', 'rgba(16, 185, 129, 0.05)']} style={styles.balanceCard}>
        <View style={styles.balanceMeta}>
          <Text style={styles.balanceAmount}>$5,248.90</Text>
          <Text style={styles.balanceGrowth}>+14.2% this month</Text>
        </View>
        <View style={styles.balanceSubDetails}>
          <View style={styles.subDetailItem}>
            <Text style={styles.subDetailTitle}>Income</Text>
            <Text style={styles.subDetailVal}>$8,450.00</Text>
          </View>
          <View style={styles.subDetailSeparator} />
          <View style={styles.subDetailItem}>
            <Text style={styles.subDetailTitle}>Expenses</Text>
            <Text style={styles.subDetailVal}>$3,201.10</Text>
          </View>
        </View>
      </LinearGradient>

      {/* Spending Overview */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeaderFlex}>
          <Text style={styles.sectionHeading}>Spending Overview</Text>
          <TouchableOpacity><Text style={styles.sectionLink}>View Details</Text></TouchableOpacity>
        </View>
        <View style={styles.chartCard}>
          <Svg width="100%" height="150" viewBox="0 0 100 100" preserveAspectRatio="none">
            <Defs>
              <SvgLinearGradient id="chartFillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <Stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                <Stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
              </SvgLinearGradient>
            </Defs>
            <Path d="M 0 85 Q 16.6 60, 33.3 45 T 50 65 T 66.6 30 T 83.3 20 T 100 35 L 100 100 L 0 100 Z" fill="url(#chartFillGrad)" />
            <Path d="M 0 85 Q 16.6 60, 33.3 45 T 50 65 T 66.6 30 T 83.3 20 T 100 35" fill="none" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
            <Circle cx="83.3" cy="20" r="3" fill="#38bdf8" stroke="#fff" strokeWidth="1" />
          </Svg>
        </View>
      </View>

      {/* Recent Expenses */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeaderFlex}>
          <Text style={styles.sectionHeading}>Recent Expenses</Text>
          <TouchableOpacity><Text style={styles.sectionLink}>See All</Text></TouchableOpacity>
        </View>

        <View style={styles.transactionList}>
          <View style={styles.transactionItem}>
            <View style={[styles.txIcon, { backgroundColor: 'rgba(234, 179, 8, 0.2)' }]}><Text>☕</Text></View>
            <View style={styles.txDetails}>
              <Text style={styles.txTitle}>Starbucks Coffee</Text>
              <Text style={styles.txTimestamp}>Today, 2:30 PM • Food</Text>
            </View>
            <Text style={styles.txValueNegative}>-$8.50</Text>
          </View>
          <View style={styles.transactionItem}>
            <View style={[styles.txIcon, { backgroundColor: 'rgba(56, 189, 248, 0.2)' }]}><Text>🛒</Text></View>
            <View style={styles.txDetails}>
              <Text style={styles.txTitle}>Whole Foods Market</Text>
              <Text style={styles.txTimestamp}>Yesterday, 5:10 PM • Grocery</Text>
            </View>
            <Text style={styles.txValueNegative}>-$74.20</Text>
          </View>
          <View style={styles.transactionItem}>
            <View style={[styles.txIcon, { backgroundColor: 'rgba(239, 68, 68, 0.2)' }]}><Text>🍿</Text></View>
            <View style={styles.txDetails}>
              <Text style={styles.txTitle}>Netflix Subscription</Text>
              <Text style={styles.txTimestamp}>May 15 • Digital</Text>
            </View>
            <Text style={styles.txValueNegative}>-$15.49</Text>
          </View>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#030712', padding: 24, paddingTop: 60, paddingBottom: 100 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  greetingSubtitle: { color: '#94a3b8', fontSize: 13, fontWeight: '600' },
  greetingTitle: { color: '#fff', fontSize: 24, fontWeight: '800', marginTop: 4 },
  notificationRing: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.05)', justifyContent: 'center', alignItems: 'center' },
  activeBadge: { position: 'absolute', top: 10, right: 10, width: 8, height: 8, borderRadius: 4, backgroundColor: '#ef4444', borderWidth: 2, borderColor: '#030712' },
  balanceCard: { borderRadius: 16, padding: 20, borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)', marginBottom: 30 },
  balanceMeta: { marginBottom: 20 },
  balanceAmount: { color: '#fff', fontSize: 36, fontWeight: '800' },
  balanceGrowth: { color: '#10b981', fontSize: 14, fontWeight: '600', marginTop: 4 },
  balanceSubDetails: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.2)', padding: 12, borderRadius: 12 },
  subDetailItem: { flex: 1, alignItems: 'center' },
  subDetailSeparator: { width: 1, height: '100%', backgroundColor: 'rgba(255,255,255,0.1)' },
  subDetailTitle: { color: '#94a3b8', fontSize: 12, marginBottom: 4 },
  subDetailVal: { color: '#fff', fontSize: 14, fontWeight: '700' },
  sectionContainer: { marginBottom: 30 },
  sectionHeaderFlex: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  sectionHeading: { color: '#fff', fontSize: 18, fontWeight: '700' },
  sectionLink: { color: '#38bdf8', fontSize: 13, fontWeight: '600' },
  chartCard: { backgroundColor: 'rgba(15,23,42,0.45)', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)', overflow: 'hidden' },
  transactionList: { gap: 12 },
  transactionItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(15,23,42,0.45)', borderRadius: 12, padding: 16, borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)' },
  txIcon: { width: 40, height: 40, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  txDetails: { flex: 1 },
  txTitle: { color: '#fff', fontSize: 15, fontWeight: '700', marginBottom: 4 },
  txTimestamp: { color: '#64748b', fontSize: 12 },
  txValueNegative: { color: '#fff', fontSize: 15, fontWeight: '700' }
});
