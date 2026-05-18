import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, withSequence, Easing } from 'react-native-reanimated';
import Svg, { Circle, Path, Polygon, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';

export default function SplashScreen() {
  const router = useRouter();
  const floatAnim = useSharedValue(0);

  useEffect(() => {
    // Floating animation for logo
    floatAnim.value = withRepeat(
      withSequence(
        withTiming(-15, { duration: 1500, easing: Easing.inOut(Easing.ease) }),
        withTiming(0, { duration: 1500, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      true
    );

    // Navigate to onboarding after 3 seconds
    const timer = setTimeout(() => {
      router.replace('/onboarding');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const animatedLogoStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: floatAnim.value }]
    };
  });

  return (
    <LinearGradient colors={['#0b1528', '#031c17']} style={styles.container}>
      <Animated.View style={[styles.logoContainer, animatedLogoStyle]}>
        <Svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <Defs>
            <SvgLinearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <Stop offset="0%" stopColor="#38bdf8" />
              <Stop offset="50%" stopColor="#3b82f6" />
              <Stop offset="100%" stopColor="#10b981" />
            </SvgLinearGradient>
          </Defs>
          <Circle cx="50" cy="50" r="38" stroke="url(#logoGrad)" strokeWidth="8" strokeDasharray="160 80" />
          <Path d="M35 65C35 48.4315 48.4315 35 65 35" stroke="#38bdf8" strokeWidth="8" strokeLinecap="round" />
          <Polygon points="50,42 53,49 60,50 54,54 56,61 50,57 44,61 46,54 40,50 47,49" fill="#10b981" />
        </Svg>
      </Animated.View>
      <Text style={styles.title}>Clarity Finance</Text>
      <Text style={styles.tagline}>Smarter expenses. Clearer goals.</Text>
      
      <View style={styles.loader}>
        <View style={[styles.dot, { backgroundColor: '#38bdf8' }]} />
        <View style={[styles.dot, { backgroundColor: '#3b82f6' }]} />
        <View style={[styles.dot, { backgroundColor: '#10b981' }]} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
    shadowColor: '#38bdf8',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 14,
    color: '#94a3b8',
    fontWeight: '500',
  },
  loader: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 40,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  }
});
