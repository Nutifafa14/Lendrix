import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { useNavigation, useRoute } from '@react-navigation/native';
import ScreenWrapper from '../components/ScreenWrapper';

export default function NumberVeriScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const country = route.params?.country;
  const [phoneNumber, setPhoneNumber] = useState('');

  // Get the country code dynamically, fallback to empty string
  const countryCode = country?.callingCode ? `+${country.callingCode[0]}` : '';
  const countryISO = country?.cca2 || undefined;

  // Validate using libphonenumber-js
  const fullNumber = countryCode + phoneNumber;
  const isButtonDisabled = !isValidPhoneNumber(fullNumber, countryISO);

  const handleSendCode = async () => {
    if (isButtonDisabled) return;
    try {
      const response = await fetch('http://10.132.134.92:3000/verifications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: fullNumber, country: countryISO }),
      });
      if (!response.ok) throw new Error('Failed to send code');
      navigation.navigate('SmsScreen', { phone: fullNumber, country: countryISO });
    } catch (error) {
      alert('Failed to send verification code.');
    }
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <View>
            <View style={styles.header}>
              <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name='arrow-back' size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.helpButton}>
                <Text style={styles.helpText}> Help</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.content}>
              <Text style={styles.title}>Verify your phone number with a code</Text>
              <Text style={styles.subtitle}>
                We'll send you a code - it helps keep your account secure
              </Text>

              <View style={styles.inputRow}>
                <View style={styles.codeContainer}>
                  <TextInput
                    style={styles.countryCodeInput}
                    value={countryCode}
                    editable={false}
                  />
                </View>
                <View style={styles.numberContainer}>
                  <TextInput
                    style={styles.phoneInput}
                    keyboardType="phone-pad"
                    placeholder="Your phone number"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    maxLength={9}
                  />
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={[
              styles.sendButton,
              isButtonDisabled && { backgroundColor: '#B0BEC5' },
            ]}
            onPress={handleSendCode}
            disabled={isButtonDisabled}
          >
            <Text style={styles.buttonText}>Send Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    width: '100%',
    marginBottom: 10,
  },
  backButton: {
    marginLeft: 10,
  },
  helpButton: {
    backgroundColor: '#69DDF1',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    flexDirection: 'row-reverse',
    marginRight: 10,
  },
  helpText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 18,
  },
  content: {
    marginTop: 30,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 10,
  },
  subtitle: {
    color: '#6B7280',
    marginBottom: 30,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  codeContainer: {
    marginRight: 10,
    width: 70,
  },
  numberContainer: {
    flex: 1,
  },
  countryCodeInput: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#f5f5f5',
    color: '#333',
    textAlign: 'center',
  },
  phoneInput: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
  },
  sendButton: {
    marginTop: 40,
    backgroundColor: '#69DDF1',
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginBottom: 60,
  },
  buttonText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
  },
});
