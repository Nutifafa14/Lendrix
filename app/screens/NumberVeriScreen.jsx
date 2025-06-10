import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function NumberVeriScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const country = route.params?.country;
  const [phoneNumber, setPhoneNumber] = useState('');

  // Get the country code dynamically, fallback to empty string
  const countryCode = country?.callingCode ? `+${country.callingCode[0]}` : '';

  // Only enable if 9 digits and all are numbers
  const isButtonDisabled = !(phoneNumber.length === 9 && /^\d{9}$/.test(phoneNumber));

  const handleSendCode = () => {
    if (isButtonDisabled) return;
    console.log('Sending code to', countryCode, phoneNumber);
    navigation.navigate('SmsScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back' size={30} color="black" bottom={-10} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpText}> Help</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Verify your phone number with a code</Text>
        <Text style={styles.subtitle}>We'll send you a code - it helps keep your account secure</Text>
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
        <TouchableOpacity
          style={[
            styles.sendButton,
            isButtonDisabled && { backgroundColor: '#B0BEC5' }
          ]}
          onPress={handleSendCode}
          disabled={isButtonDisabled}
        >
          <Text style={styles.buttonText}>Send Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    width: '100%',
  },
  helpButton: {
    backgroundColor: '#69DDF1',
    paddingHorizontal: 20, // increased from 10
    paddingVertical: 12,   // increased from 5
    borderRadius: 25,      // slightly larger for a bigger button
    flexDirection: 'row-reverse',
    bottom: -10,
    marginRight: 10,
  },
  helpText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 18, // increased from default
  },
  helpText: {
    color: 'black',
    fontWeight: '500',
  },
  content: {
    marginTop: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 10,
    bottom: -10
  },
  subtitle: {
    color: '#6B7280',
    marginBottom: 50,
    bottom: -25,
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
  label: {
    color: '#6B7280',
    marginBottom: 8,
    fontSize: 14,
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
    textAlign: 'center', // Center the code
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
    bottom: -250,
  },
  buttonText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
  },
});