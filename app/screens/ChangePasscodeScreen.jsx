import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

const steps = [
  { title: 'Enter current passcode', desc: '' },
  { title: 'Set new passcode', desc: 'Your passcode must be at least 4 characters' },
  { title: 'Confirm passcode', desc: '' },
];

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function ChangePasscodeScreen({ navigation }) {
  const [step, setStep] = useState(0);
  const [current, setCurrent] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirm, setConfirm] = useState('');
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');

  const getValue = () => (step === 0 ? current : step === 1 ? newPass : confirm);
  const setValue = (val) => {
    if (step === 0) setCurrent(val);
    else if (step === 1) setNewPass(val);
    else setConfirm(val);
  };

  const handleKey = (key) => {
    if (key === 'back') {
      setValue(getValue().slice(0, -1));
    } else if (key === 'ok') {
      if (step === 0) {
        // TODO: Validate current passcode
        if (current.length < 4) setError('Enter your current passcode');
        else { setStep(1); setError(''); }
      } else if (step === 1) {
        if (newPass.length < 4) setError('Passcode must be at least 4 digits');
        else { setStep(2); setError(''); }
      } else if (step === 2) {
        if (confirm !== newPass) setError('Passcodes do not match');
        else if (confirm.length < 4) setError('Passcode must be at least 4 digits');
        else { setError(''); navigation.goBack(); /* Success! */ }
      }
    } else {
      if (getValue().length < 6) setValue(getValue() + key);
    }
  };

  const renderKeypad = () => {
    const keys = [1,2,3,4,5,6,7,8,9,'back',0,'ok'];
    const rows = [
      keys.slice(0,3),
      keys.slice(3,6),
      keys.slice(6,9),
      keys.slice(9,12),
    ];
    return (
      <View>
        {rows.map((row, i) => (
          <View key={i} style={{ flexDirection: 'row', justifyContent: 'center' }}>
            {row.map((key, j) => (
              <TouchableOpacity key={j} style={styles.key} onPress={() => handleKey(key.toString())}>
                {key === 'back' ? <Feather name="delete" size={24} color="#222" /> :
                 key === 'ok' ? <Feather name="check" size={24} color="#69DDF1" /> :
                 <Text style={styles.keyText}>{key}</Text>}
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={28} color="#222" />
          </TouchableOpacity>
          <Text style={styles.header}>{steps[step].title}</Text>
          {steps[step].desc ? <Text style={styles.desc}>{steps[step].desc}</Text> : null}
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value={getValue()}
              onChangeText={setValue}
              secureTextEntry={!show}
              keyboardType="numeric"
              maxLength={6}
              editable={false}
            />
            <TouchableOpacity onPress={() => setShow(s => !s)}>
              <Feather name={show ? 'eye' : 'eye-off'} size={22} color="#888" />
            </TouchableOpacity>
          </View>
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <View style={{ flex: 1 }} />
          <View style={styles.keypadContainer}>{renderKeypad()}</View>
        </View>
      </KeyboardAvoidingView>
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
    alignSelf: 'flex-start',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    padding: 4,
    marginBottom: 18,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#111',
  },
  desc: {
    fontSize: 15,
    color: '#666',
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderColor: '#eee',
    marginBottom: 18,
    paddingBottom: 8,
  },
  input: {
    flex: 1,
    fontSize: 28,
    letterSpacing: 8,
    color: '#222',
    paddingVertical: 8,
    backgroundColor: 'transparent',
    borderWidth: 0,
    textAlign: 'left',
  },
  error: {
    color: '#d9534f',
    fontSize: 15,
    marginBottom: 10,
    marginTop: -8,
  },
  keypadContainer: {
    justifyContent: 'flex-end',
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  key: {
    width: (SCREEN_WIDTH - 64) / 3,
    height: 60,
    margin: 6,
    borderRadius: 16,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyText: {
    fontSize: 26,
    color: '#222',
    fontWeight: 'bold',
  },
}); 