import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Circle, Path, Polygon, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Svg width="45" height="45" viewBox="0 0 100 100" fill="none">
            <Defs>
              <SvgLinearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <Stop offset="0%" stopColor="#38bdf8" />
                <Stop offset="100%" stopColor="#10b981" />
              </SvgLinearGradient>
            </Defs>
            <Circle cx="50" cy="50" r="38" stroke="url(#logoGrad)" strokeWidth="8" strokeDasharray="160 80" />
            <Path d="M35 65C35 48.4315 48.4315 35 65 35" stroke="#38bdf8" strokeWidth="8" strokeLinecap="round" />
            <Polygon points="50,42 53,49 60,50 54,54 56,61 50,57 44,61 46,54 40,50 47,49" fill="#10b981" />
          </Svg>
        </View>
        <Text style={styles.title}>Welcome to{'\n'}<Text style={styles.gradientText}>Clarity Finance</Text></Text>
        <Text style={styles.tagline}>Unlock clarity. Elevate your savings.</Text>
      </View>

      <View style={styles.cardsContainer}>
        <TouchableOpacity style={styles.card} onPress={() => router.push('/(tabs)')}>
          <Text style={styles.cardIcon}>📸</Text>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Smart Scanning</Text>
            <Text style={styles.cardDesc}>Scan receipts instantly</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => router.push('/(tabs)')}>
          <Text style={styles.cardIcon}>📊</Text>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Analytics</Text>
            <Text style={styles.cardDesc}>Track spending trends</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => router.push('/signup')}>
          <Text style={styles.cardIcon}>🔒</Text>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Secure</Text>
            <Text style={styles.cardDesc}>Your data is encrypted</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.ctasContainer}>
        <TouchableOpacity style={styles.btnPrimary} onPress={() => router.push('/signup')}>
          <LinearGradient colors={['#3b82f6', '#38bdf8']} style={styles.btnGradient}>
            <Text style={styles.btnPrimaryText}>Create Account</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOutline} onPress={() => router.push('/login')}>
          <Text style={styles.btnOutlineText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnGhost} onPress={() => router.replace('/(tabs)')}>
          <Text style={styles.btnGhostText}>Continue as Guest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030712',
    padding: 24,
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  logoContainer: {
    shadowColor: '#38bdf8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 38,
  },
  gradientText: {
    color: '#38bdf8', // Fallback color since true gradient text requires MaskedView
  },
  tagline: {
    fontSize: 14,
    color: '#94a3b8',
    marginTop: 12,
  },
  cardsContainer: {
    width: '100%',
    gap: 12,
    marginVertical: 30,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(15, 23, 42, 0.45)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 12,
    padding: 16,
    gap: 16,
  },
  cardIcon: {
    fontSize: 24,
  },
  cardBody: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 13,
    color: '#94a3b8',
  },
  ctasContainer: {
    width: '100%',
    gap: 12,
  },
  btnPrimary: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  btnGradient: {
    padding: 16,
    alignItems: 'center',
  },
  btnPrimaryText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
  btnOutline: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  btnOutlineText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
  btnGhost: {
    padding: 12,
    alignItems: 'center',
    marginTop: 4,
  },
  btnGhostText: {
    color: '#94a3b8',
    fontWeight: '600',
    fontSize: 14,
  }
});
