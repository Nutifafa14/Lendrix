import React, { useRef, useState } from 'react';
import {
  View, Text, TextInput, StyleSheet,
  TouchableOpacity, KeyboardAvoidingView, Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CODE_LENGTH = 6;

const SmsScreen = ({ navigation }) => {
  const [code, setCode] = useState(new Array(CODE_LENGTH).fill(''));
  const [isDoneEnabled, setIsDoneEnabled] = useState(false);

  const inputs = useRef([]);

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
    setIsDoneEnabled(newCode.join('').replace(/\s/g, '').length > 0);
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && code[index] === '' && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleDone = () => {
    navigation.navigate('PasswordScreen');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Top row */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back" size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpText}>Help</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>We just sent you an SMS</Text>
      <Text style={styles.subTitle}>Enter the security code we sent to{'\n'}*1234</Text>

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
        <Text style={styles.resend}>Didn't receive a code?</Text>
      </TouchableOpacity>

      {/* Done button */}
      <TouchableOpacity
        style={[styles.doneButton, isDoneEnabled ? styles.buttonEnabled : styles.buttonDisabled]}
        disabled={!isDoneEnabled}
        onPress={handleDone}
      >
        <Text style={styles.doneText}>Done</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default SmsScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   
  },
  helpButton: {
    backgroundColor: '#69DDF1',
    paddingHorizontal: 20, // increased from 10
    paddingVertical: 12,   // increased from 5
    borderRadius: 25,      // slightly larger for a bigger button
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
    marginTop: 32,
    textAlign: 'center',
    color: '#000',
  },
  subTitle: {
    textAlign: 'center',
    marginVertical: 12,
    color: '#666',
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
  textAlign: 'center',           // Center horizontally
  textAlignVertical: 'center',   // Center vertically (Android)
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
  },
  doneButton: {
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 30,
    bottom: -300,
  },
  buttonEnabled: {
    backgroundColor: '#69DDF1',
  },
  buttonDisabled: {
    backgroundColor: '#e2e8f0',
  },
  doneText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});