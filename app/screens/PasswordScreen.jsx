import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  TextInput, Alert,
  KeyboardAvoidingView, Platform, ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ScreenWrapper from '../components/ScreenWrapper';

const PasswordScreen = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isLengthValid = password.length >= 9;
  const containsLetter = /[a-zA-Z]/.test(password);
  const containsNumber = /[0-9]/.test(password);
  const isPasswordValid = isLengthValid && containsLetter && containsNumber;

  const handleDone = async () => {
    if (isPasswordValid) {
      try {
        // PATCH the password for user with id 'f8a2'
        await fetch('http://10.132.134.92:3000/users/6481', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password }),
        });
        navigation.navigate('CommScreen');
      } catch (error) {
        Alert.alert('Error', 'Failed to save password.');
      }
    } else {
      Alert.alert(
        'Invalid Password',
        'Your password must be at least 9 characters long and contain both letters and numbers.'
      );
    }
  };

  return (
    <ScreenWrapper>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      >
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <ScrollView contentContainerStyle={{ paddingBottom: 20 }} keyboardShouldPersistTaps="handled">
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={30} color="black" />
              </TouchableOpacity>
            </View>

            <View style={styles.content}>
              <Text style={styles.title}>Create a password</Text>
              <Text style={styles.label}>Your password</Text>

              <View style={styles.input}>
                <TextInput
                  style={styles.passwordInput}
                  secureTextEntry={!showPassword}
                  placeholder="Enter your password"
                  value={password}
                  onChangeText={setPassword}
                  autoComplete="off"
                  textContentType="none"
                  type={showPassword ? "text" : "password"}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIconContainer}
                >
                  <Ionicons
                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                    size={24}
                    color="#888"
                  />
                </TouchableOpacity>
              </View>

              <View style={{ marginBottom: 20 }}>
                <Text style={{ color: isLengthValid ? 'green' : 'red', fontSize: 13 }}>
                  • At least 9 characters
                </Text>
                <Text style={{ color: containsLetter ? 'green' : 'red', fontSize: 13 }}>
                  • Contains a letter (a-z or A-Z)
                </Text>
                <Text style={{ color: containsNumber ? 'green' : 'red', fontSize: 13 }}>
                  • Contains a number (0-9)
                </Text>
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity
            style={[styles.doneButton, !isPasswordValid && styles.doneButtonDisabled]}
            onPress={handleDone}
            disabled={!isPasswordValid}
          >
            <Text style={styles.doneButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

export default PasswordScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 35,
  },
  content: {
    // removed flex: 1
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    marginBottom: 30,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
  
  },
  eyeIconContainer: {
    padding: 5,
    backgroundColor: 'transparent', // Make sure it's transparent
  borderTopRightRadius: 8,
  borderBottomRightRadius: 8,
  },
  doneButton: {
    backgroundColor: '#69DDF1',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 40,
  },
  doneButtonDisabled: {
    backgroundColor: '#e2e8f0',
  },
  doneButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
});
