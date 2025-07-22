import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ScreenWrapper from '../components/ScreenWrapper';

export default function ResetPasswordScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleReset = () => {
    if (!email) {
      alert('Please enter your email address');
      return;
    }
    console.log('Reset password for:', email);
    navigation.navigate('ResetPasswordEmailScreen', { email });
  };

  return (
    <ScreenWrapper>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Reset Password</Text>

      <Text style={styles.description}>
        Enter the email address you signed up with. We’ll send you an email in order to let you choose a new password.
      </Text>

      <Text style={styles.label}>Your Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder=""
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Pressable style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetButtonText}>Reset password</Text>
      </Pressable>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 22,
  },
  backButton: {
    marginBottom: 18,
    marginTop: 4,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#000',
  },
  description: {
    fontSize: 15,
    color: '#222',
    marginBottom: 28,
    lineHeight: 22,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 18,
  },
  resetButton: {
    backgroundColor: '#7DEFFF',
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 'auto',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  resetButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
