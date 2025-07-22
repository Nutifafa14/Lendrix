import React, { useRef, useState ,useEffect} from 'react';
import {
  View, Text, TextInput, StyleSheet,
  TouchableOpacity, KeyboardAvoidingView, Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScreenWrapper from '../components/ScreenWrapper';

const CODE_LENGTH = 6;

const SmsScreen = ({ navigation }) => {
  const [code, setCode] = useState(new Array(CODE_LENGTH).fill(''));
  const [isDoneEnabled, setIsDoneEnabled] = useState(false);
  const inputs = useRef([]);
  const [timer, setTimer] = useState(120);
  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleResend = () => {
    // TODO: trigger resend code logic here
    setTimer(120); // restart timer
  };


  const handleChange = (text, index) => {
    if (!/^\d*$/.test(text)) return;

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < CODE_LENGTH - 1) {
      inputs.current[index + 1]?.focus();
    }

    setIsDoneEnabled(newCode.join('').replace(/\s/g, '').length > 0);
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && code[index] === '' && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleDone = () => {
    const enteredCode = code.join('');
    if (enteredCode === '123456') {
      navigation.navigate('PasswordScreen');
    } else {
      alert('Invalid code. Please try again.');
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ScreenWrapper>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
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

        <TouchableOpacity
          onPress={handleResend}
          disabled={timer > 0}
        >
          <Text style={[styles.resend, timer > 0 && { color: '#aaa' }]}> 
            {timer > 0
              ? `Resend code in ${formatTime(timer)}`
              : "Didn't receive a code? Tap to resend"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.doneButton, isDoneEnabled ? styles.buttonEnabled : styles.buttonDisabled]}
          disabled={!isDoneEnabled}
          onPress={handleDone}
        >
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

export default SmsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 1,
    bottom: -60,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    bottom: 50,
  },
  helpButton: {
    paddingHorizontal: 10,
    backgroundColor: '#69DDF1',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  helpText: {
    color: 'blackF',
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    bottom: 15,
  },
  subTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    bottom: 15,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  codeBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 24,
  },
  activeBox: {
    borderColor: '#007AFF',
  },
  resend: {
    color: '#007AFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  doneButton: {
    paddingVertical: 15,
    alignItems: 'center',
    padding: 15,
    borderRadius: 30,
    bottom: -250,
  },
  buttonEnabled: {
    backgroundColor: '#69DDF1',
  },
  buttonDisabled: {
    backgroundColor: '#B0BEC5',
  },
  doneText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});