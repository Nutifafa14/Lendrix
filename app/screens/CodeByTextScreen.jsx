import React, { useRef, useState } from 'react';
import {
  View, Text, TextInput, StyleSheet,
  TouchableOpacity, KeyboardAvoidingView, Platform,
  TouchableWithoutFeedback, Keyboard 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CODE_LENGTH = 6;

const CodeByTextScreen = ({ navigation }) => {
  const [code, setCode] = useState(new Array(CODE_LENGTH).fill(''));
  const [isDoneEnabled, setIsDoneEnabled] = useState(false);

  const inputs = useRef([]);
  // Example phone number, replace with actual user number as needed
  const phoneNumber = '0801234908';

  const handleChange = (text, index) => {
    if (!/^\d*$/.test(text)) return;

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Move to next input
    if (text && index < CODE_LENGTH - 1) {
      inputs.current[index + 1]?.focus();
    }

    // Enable Done button
    setIsDoneEnabled(newCode.join('').replace(/\s/g, '').length === CODE_LENGTH);
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && code[index] === '' && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleDone = () => {
    // Add your code verification logic here
    // Example: navigation.navigate('NextScreen');
    alert('Code submitted: ' + code.join(''));
  };

  // Mask phone number: show ****** and last 3 digits
  const getMaskedNumber = () => {
    if (!phoneNumber || phoneNumber.length < 3) return '';
    return '******' + phoneNumber.slice(-3);
  };

 return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Top row */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back" size={35} color="black" bottom={20} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title} bottom={20}>We just sent you a code</Text>
      <Text style={styles.subtitle}>
        To log in, enter the security code we sent to you {getMaskedNumber() && `on ${getMaskedNumber()}`}. It will expire in 5 minutes
      </Text>

      {/* Code boxes */}
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={[styles.codeBox, digit !== '' && styles.activeBox]}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            autoFocus={index === 0}
            textAlign="center"
          />
        ))}
      </View>
<TouchableOpacity>
        <Text style={styles.resend}>Try another way</Text>
      </TouchableOpacity>

      {/* Done button */}
      <TouchableOpacity
        style={[styles.ContinueButton, isDoneEnabled ? styles.buttonEnabled : styles.buttonDisabled]}
        disabled={!isDoneEnabled}
        onPress={handleDone}
      >
        <Text style={styles.ContinueText}>Continue</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  </TouchableWithoutFeedback>
);
};

export default CodeByTextScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: -5,
    bottom: 20,
  },
  helpButton: {
    backgroundColor: '#69DDF1',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    flexDirection: 'row-reverse',
    bottom: 10,
    marginRight: 10,
  },
  helpText: {
    color: '#2d6a4f',
    fontWeight: '500',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
    color: '#000',
    botttom: 20,
    
  },
  subtitle: {
    textAlign: 'center',
    marginVertical: 12,
    color: '#666',
    fontSize: 16,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 32,
    gap: 10,
  },
  codeBox: {
    width: 48,
    height: 56,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 0,
  },
  activeBox: {
    borderColor: '#4f46e5',
  },
  resend: {
    textAlign: 'center',
    color: '#1e3a8a',
    textDecorationLine: 'underline',
    marginBottom: 30,
    fontSize: 16,
  },
  ContinueButton: {
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 30,
    bottom: -200,
  },
  buttonEnabled: {
    backgroundColor: '#69DDF1',
  },
  buttonDisabled: {
    backgroundColor: '#e2e8f0',
  },
  ContinueText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});