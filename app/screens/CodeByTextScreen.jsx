import React, { useRef, useState } from 'react';
import {
  View, Text, TextInput, StyleSheet,
  TouchableOpacity, KeyboardAvoidingView, Platform,
  TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScreenWrapper from '../components/ScreenWrapper';

const CODE_LENGTH = 6;

const CodeByTextScreen = ({ navigation }) => {
  const [code, setCode] = useState(new Array(CODE_LENGTH).fill(''));
  const [isDoneEnabled, setIsDoneEnabled] = useState(false);
  const inputs = useRef([]);

  const phoneNumber = '0801234908'; // Example, replace later

  const handleChange = (text, index) => {
    if (!/^\d*$/.test(text)) return;

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < CODE_LENGTH - 1) {
      inputs.current[index + 1]?.focus();
    }

    setIsDoneEnabled(newCode.join('').replace(/\s/g, '').length === CODE_LENGTH);
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && code[index] === '' && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleBack = () => navigation.goBack();
  const handleDone = () => alert('Code submitted: ' + code.join(''));

  const getMaskedNumber = () => {
    return phoneNumber?.length >= 3 ? '*******' + phoneNumber.slice(-3) : '';
  };

  return (
    <ScreenWrapper>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          {/* Back Button */}
          <View style={styles.absoluteBackButton}>
            <TouchableOpacity onPress={handleBack}>
              <Ionicons name="arrow-back" size={30} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.title}>We just sent you a code</Text>
            <Text style={styles.subtitle}>
              To log in, enter the security code we sent to you {getMaskedNumber() && `on ${getMaskedNumber()}`}. It will expire in 5 minutes
            </Text>

            {/* Code Input */}
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
                  textAlign="center"
                />
              ))}
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('TwoStepVeriScreen')}>
              <Text style={styles.resend}>Try another way</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.ContinueButton, isDoneEnabled ? styles.buttonEnabled : styles.buttonDisabled]}
              disabled={!isDoneEnabled}
              onPress={handleDone}
            >
              <Text style={styles.ContinueText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ScreenWrapper>
  );
};

export default CodeByTextScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom:  10, textAlign: 'center' },   
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    marginTop: 10,
  },
  codeBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
    color: '#000',
  },
  activeBox: {
    borderColor: '#007AFF',
    backgroundColor: '#f0f8ff',
  },
  resend: {
    color: '#007AFF',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  ContinueButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    padding: 15,
    borderRadius: 30,
    width: '100%',
    marginBottom: 30,
  },
  buttonEnabled: {
    backgroundColor: '#69DDF1',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  ContinueText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  absoluteBackButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50,
  },
  bottomButtonWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 30,
  },
  contentContainer: {
    marginTop: 70,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
})