import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Polyline, Line, Circle } from 'react-native-svg';

export default function SignupScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const isPasswordMatch = confirmPassword.length > 0 ? password === confirmPassword : true;
  const isFormValid = name.length > 1 && email.includes('@') && password.length >= 8 && (password === confirmPassword) && termsAccepted;

  const handleSignup = () => {
    if (isFormValid) {
      router.replace('/(tabs)');
    }
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Svg viewBox="0 0 24 24" width="20" height="20" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <Line x1="19" y1="12" x2="5" y2="12" />
              <Polyline points="12 19 5 12 12 5" />
            </Svg>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Create Account</Text>
          <View style={{ width: 40 }} />
        </View>

        <View style={styles.formContainer}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput style={styles.input} placeholder="John Doe" placeholderTextColor="#64748b" value={name} onChangeText={setName} />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput style={styles.input} placeholder="name@example.com" placeholderTextColor="#64748b" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput style={[styles.input, { flex: 1 }]} placeholder="Min. 8 characters" placeholderTextColor="#64748b" secureTextEntry={!showPassword} value={password} onChangeText={setPassword} />
              <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <Svg viewBox="0 0 24 24" width="20" height="20" stroke="#94a3b8" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><Line x1="1" y1="1" x2="23" y2="23" /></Svg>
                ) : (
                  <Svg viewBox="0 0 24 24" width="20" height="20" stroke="#94a3b8" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><Circle cx="12" cy="12" r="3" /></Svg>
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput style={[styles.input, { flex: 1, borderColor: isPasswordMatch ? 'rgba(255, 255, 255, 0.1)' : '#ef4444' }]} placeholder="Re-enter password" placeholderTextColor="#64748b" secureTextEntry={!showConfirmPassword} value={confirmPassword} onChangeText={setConfirmPassword} />
              <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? (
                  <Svg viewBox="0 0 24 24" width="20" height="20" stroke="#94a3b8" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><Line x1="1" y1="1" x2="23" y2="23" /></Svg>
                ) : (
                  <Svg viewBox="0 0 24 24" width="20" height="20" stroke="#94a3b8" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><Circle cx="12" cy="12" r="3" /></Svg>
                )}
              </TouchableOpacity>
            </View>
            {!isPasswordMatch && <Text style={styles.errorText}>Passwords do not match.</Text>}
          </View>

          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.checkboxContainer} onPress={() => setTermsAccepted(!termsAccepted)}>
              <View style={[styles.checkbox, termsAccepted && styles.checkboxChecked]}>
                {termsAccepted && (
                  <Svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <Polyline points="20 6 9 17 4 12" />
                  </Svg>
                )}
              </View>
              <Text style={styles.checkboxText}>I agree to the <Text style={styles.policyLink}>Privacy Policy</Text> & <Text style={styles.policyLink}>Terms</Text></Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={[styles.btnPrimary, !isFormValid && styles.btnDisabled]} onPress={handleSignup} disabled={!isFormValid}>
            <LinearGradient colors={isFormValid ? ['#3b82f6', '#38bdf8'] : ['#1e293b', '#1e293b']} style={styles.btnGradient}>
              <Text style={[styles.btnPrimaryText, !isFormValid && styles.btnDisabledText]}>Create Account</Text>
            </LinearGradient>
          </TouchableOpacity>

        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text style={styles.footerLink}>Login here</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#030712', padding: 24, paddingTop: 60 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 },
  backButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.05)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.08)', justifyContent: 'center', alignItems: 'center' },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: '700' },
  formContainer: { flex: 1 },
  formGroup: { marginBottom: 16 },
  label: { color: '#94a3b8', fontSize: 12, fontWeight: '700', textTransform: 'uppercase', marginBottom: 8 },
  input: { backgroundColor: 'rgba(15, 23, 42, 0.6)', borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.1)', borderRadius: 12, color: '#fff', padding: 16, fontSize: 15 },
  passwordContainer: { flexDirection: 'row', alignItems: 'center' },
  eyeIcon: { position: 'absolute', right: 16, padding: 4 },
  errorText: { color: '#ef4444', fontSize: 12, marginTop: 6, fontWeight: '600' },
  optionsContainer: { marginBottom: 30, marginTop: 10 },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  checkbox: { width: 20, height: 20, borderRadius: 4, borderWidth: 1, borderColor: 'rgba(255,255,255,0.15)', backgroundColor: 'rgba(255,255,255,0.06)', justifyContent: 'center', alignItems: 'center' },
  checkboxChecked: { backgroundColor: '#3b82f6', borderColor: '#38bdf8' },
  checkboxText: { color: '#94a3b8', fontSize: 14 },
  policyLink: { color: '#38bdf8', fontWeight: '600' },
  btnPrimary: { borderRadius: 12, overflow: 'hidden' },
  btnDisabled: { opacity: 0.8 },
  btnGradient: { padding: 16, alignItems: 'center' },
  btnPrimaryText: { color: '#fff', fontWeight: '700', fontSize: 15 },
  btnDisabledText: { color: '#64748b' },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 30 },
  footerText: { color: '#94a3b8', fontSize: 14 },
  footerLink: { color: '#38bdf8', fontSize: 14, fontWeight: '700' }
});
