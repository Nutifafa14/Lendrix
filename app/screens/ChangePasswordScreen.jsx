import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function ChangePasswordScreen({ navigation }) {
  const [current, setCurrent] = useState('');
  const [newPass, setNewPass] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={28} color="#222" />
          </TouchableOpacity>
          <Text style={styles.header}>Change password</Text>
          {/* Info Box */}
          <View style={styles.infoBox}>
            <View style={styles.infoRow}>
              <Feather name="alert-circle" size={20} color="#FFD600" style={{ marginRight: 8 }} />
              <Text style={styles.infoText}>
                We will never send you a temporary password by phone, email or text message. When changing your password, always use something that's only known by you.
              </Text>
            </View>
            <TouchableOpacity style={styles.infoBtn}>
              <Text style={styles.infoBtnText}>Learn how to keep your account safe</Text>
            </TouchableOpacity>
          </View>
          {/* Password Inputs */}
          <Text style={styles.label}>Current password</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value={current}
              onChangeText={setCurrent}
              secureTextEntry={!showCurrent}
              placeholder=""
            />
            <TouchableOpacity onPress={() => setShowCurrent(s => !s)}>
              <Feather name={showCurrent ? 'eye' : 'eye-off'} size={22} color="#888" />
            </TouchableOpacity>
          </View>
          <Text style={styles.label}>New password</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value={newPass}
              onChangeText={setNewPass}
              secureTextEntry={!showNew}
              placeholder=""
            />
            <TouchableOpacity onPress={() => setShowNew(s => !s)}>
              <Feather name={showNew ? 'eye' : 'eye-off'} size={22} color="#888" />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }} />
          <TouchableOpacity style={styles.saveBtn}>
            <Text style={styles.saveText}>Change password</Text>
          </TouchableOpacity>
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
  infoBox: {
    backgroundColor: '#fafafa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#eee',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  infoText: {
    color: '#444',
    fontSize: 14,
    flex: 1,
  },
  infoBtn: {
    backgroundColor: '#ededed',
    borderRadius: 8,
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  infoBtnText: {
    color: '#222',
    fontWeight: '500',
    fontSize: 14,
  },
  label: {
    fontSize: 15,
    color: '#222',
    marginBottom: 6,
    fontWeight: 'bold',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#eee',
    borderRadius: 10,
    marginBottom: 18,
    paddingHorizontal: 10,
    backgroundColor: '#fafafa',
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#222',
    paddingVertical: 12,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  saveBtn: {
    backgroundColor: '#69DDF1',
    borderRadius: 24,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  saveText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
