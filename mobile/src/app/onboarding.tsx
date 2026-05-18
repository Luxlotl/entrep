import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Rect, Path, Circle, Defs, LinearGradient as SvgLinearGradient, Stop, G, Polygon, Line } from 'react-native-svg';

const { width } = Dimensions.get('window');

const slides = [
  {
    title: 'Track Your Expenses Easily',
    desc: 'Snap a picture of any receipt. Our advanced OCR scanner extracts merchants, items, and tax rates instantly into your ledger.',
    id: 0
  },
  {
    title: 'Smart Insights & Budget Control',
    desc: 'Receive interactive pie charts, personalized monthly trends, and visual indicators pointing out optimization opportunities in real time.',
    id: 1
  },
  {
    title: 'Secure & Private',
    desc: 'Rest easy knowing your statements and receipts are fully encrypted with AES-256 shields. Your personal financial habits are completely anonymous.',
    id: 2
  }
];

export default function OnboardingScreen() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setActiveIndex(index);
  };

  const handleNext = () => {
    if (activeIndex < slides.length - 1) {
      scrollRef.current?.scrollTo({ x: (activeIndex + 1) * width, animated: true });
    } else {
      router.replace('/welcome');
    }
  };

  const renderIllustration = (index: number) => {
    if (index === 0) {
      return (
        <Svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <Rect x="50" y="30" width="100" height="140" rx="16" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2" />
          <Rect x="65" y="55" width="70" height="90" rx="6" fill="#1e293b" />
          <Line x1="75" y1="70" x2="125" y2="70" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="4" strokeLinecap="round" />
          <Line x1="75" y1="85" x2="105" y2="85" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="4" strokeLinecap="round" />
          <Line x1="75" y1="100" x2="115" y2="100" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="4" strokeLinecap="round" />
          <Line x1="75" y1="115" x2="95" y2="115" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
          <Line x1="45" y1="95" x2="155" y2="95" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
        </Svg>
      );
    } else if (index === 1) {
      return (
        <Svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <Circle cx="100" cy="100" r="75" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.05)" />
          <Rect x="55" y="110" width="18" height="40" rx="4" fill="#3b82f6" opacity="0.6" />
          <Rect x="80" y="80" width="18" height="70" rx="4" fill="#38bdf8" />
          <Rect x="105" y="95" width="18" height="55" rx="4" fill="#10b981" />
          <Rect x="130" y="60" width="18" height="90" rx="4" fill="#818cf8" />
          <Path d="M50 130 Q 80 80 110 90 T 170 50" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" fill="none" />
          <Circle cx="170" cy="50" r="6" fill="#10b981" stroke="#fff" strokeWidth="2" />
        </Svg>
      );
    } else {
      return (
        <Svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <Defs>
            <SvgLinearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <Stop offset="0%" stopColor="#38bdf8" />
              <Stop offset="100%" stopColor="#1e1b4b" />
            </SvgLinearGradient>
          </Defs>
          <Path d="M100 35C125 35 155 45 155 45C155 85 145 135 100 165C55 135 45 85 45 45C45 45 75 35 100 35Z" fill="url(#shieldGrad)" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="3" />
          <Rect x="80" y="90" width="40" height="32" rx="6" fill="#10b981" />
          <Path d="M87 90V78C87 70.82 92.82 65 100 65C107.18 65 113 70.82 113 78V90" stroke="#38bdf8" strokeWidth="4" fill="none" strokeLinecap="round" />
          <Circle cx="100" cy="103" r="3" fill="#0f172a" />
          <Path d="M100 106V113" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
        </Svg>
      );
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipBtn} onPress={() => router.replace('/welcome')}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scrollView}
      >
        {slides.map((slide, index) => (
          <View key={slide.id} style={styles.slide}>
            <View style={styles.illustrationContainer}>
              {renderIllustration(index)}
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{slide.title}</Text>
              <Text style={styles.desc}>{slide.desc}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.dotsContainer}>
          {slides.map((_, index) => (
            <View key={index} style={[styles.dot, activeIndex === index && styles.activeDot]} />
          ))}
        </View>
        <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
          <LinearGradient colors={['#3b82f6', '#38bdf8']} style={styles.nextBtnGradient}>
            <Text style={styles.nextText}>{activeIndex === 2 ? 'Get Started' : 'Next'}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030712',
    paddingTop: 50,
  },
  skipBtn: {
    position: 'absolute',
    top: 60,
    right: 24,
    zIndex: 10,
    backgroundColor: 'rgba(255,255,255,0.08)',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  skipText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  slide: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  illustrationContainer: {
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
  },
  desc: {
    fontSize: 14,
    color: '#94a3b8',
    textAlign: 'center',
    lineHeight: 22,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.05)',
    backgroundColor: 'rgba(10,15,30,0.3)',
    paddingBottom: 40,
  },
  dotsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  activeDot: {
    width: 24,
    backgroundColor: '#38bdf8',
  },
  nextBtn: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  nextBtnGradient: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  nextText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  }
});
