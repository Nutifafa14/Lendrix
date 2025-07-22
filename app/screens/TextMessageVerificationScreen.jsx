import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TextMessageVerificationScreen({ navigation }) {
  const [timer, setTimer] = useState(60);
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [showSuccess, setShowSuccess] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const formattedTime = `0:${timer < 10 ? '0' : ''}${timer}`;

  const handleChange = (text, idx) => {
    if (/^\d?$/.test(text)) {
      const newCode = [...code];
      newCode[idx] = text;
      setCode(newCode);
      if (text && idx < 5) {
        inputRefs.current[idx + 1].focus();
      }
      if (!text && idx > 0) {
        inputRefs.current[idx - 1].focus();
      }
    }
  };

  const handleResend = () => {
    setTimer(60);
    setCode(['', '', '', '', '', '']);
    inputRefs.current[0].focus();
  };

  const handleContinue = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigation.goBack();
    }, 1500);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={28} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Enter verification code</Text>
        <Text style={styles.headerDesc}>We sent a code to your phone. Enter it below to continue.</Text>
        {timer > 0 ? (
          <Text style={styles.timer}>{formattedTime}</Text>
        ) : (
          <TouchableOpacity onPress={handleResend}>
            <Text style={styles.resendText}>Resend code</Text>
          </TouchableOpacity>
        )}
        <View style={styles.codeInputRow}>
          {code.map((digit, idx) => (
            <TextInput
              key={idx}
              ref={ref => (inputRefs.current[idx] = ref)}
              style={styles.codeBox}
              value={digit}
              onChangeText={text => handleChange(text, idx)}
              keyboardType="numeric"
              maxLength={1}
              returnKeyType="next"
              autoFocus={idx === 0}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === 'Backspace' && !code[idx] && idx > 0) {
                  inputRefs.current[idx - 1].focus();
                }
              }}
            />
          ))}
        </View>
        <TouchableOpacity
          style={[styles.continueBtn, { opacity: code.some(d => d === '') ? 0.5 : 1 }]}
          onPress={handleContinue}
          disabled={code.some(d => d === '')}
        >
          <Text style={styles.continueBtnText}>Continue</Text>
        </TouchableOpacity>
        <Modal
          visible={showSuccess}
          transparent
          animationType="fade"
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Ionicons name="checkmark-circle" size={80} color="#234F1E" style={{ marginBottom: 16 }} />
              <Text style={styles.successText}>Verification complete!</Text>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 8,
  },
  headerDesc: {
    fontSize: 15,
    color: '#444',
    marginBottom: 18,
  },
  timer: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#234F1E',
    marginBottom: 24,
    textAlign: 'center',
  },
  resendText: {
    fontSize: 16,
    color: '#234F1E',
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  codeInputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
    marginTop: 8,
  },
  codeBox: {
    width: 48,
    height: 56,
    borderWidth: 2,
    borderColor: '#69DDF1',
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 28,
    color: '#111',
    backgroundColor: '#f8fafd',
  },
  continueBtn: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 50,
    backgroundColor: '#69DDF1',
    borderRadius: 24,
    paddingVertical: 16,
    alignItems: 'center',
  },
  continueBtnText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 17,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  successText: {
    fontSize: 20,
    color: '#234F1E',
    fontWeight: 'bold',
    textAlign: 'center',
  },
}); 