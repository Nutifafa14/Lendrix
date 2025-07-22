import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function TwoFactorAuthScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        {/* Header */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={28} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>2-step verification</Text>
        <Text style={styles.headerDesc}>
          Manage how you complete 2-step verification. It's an extra layer of security on your account, on top of your password.
        </Text>
        <Text style={styles.sectionLabel}>Your verification methods</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LendrixAppMethodScreen')} style={styles.methodCard}>
          <View style={styles.iconCircle}>
            <Feather name="smartphone" size={22} color="#222" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.methodTitle}>Lendrix app (default)</Text>
            <Text style={styles.methodDesc}>
              Verify yourself with this app. No need to wait for a text, and you just need an internet connection.
            </Text>
            <Text style={styles.verySecure}>Very secure</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TextMessageVerificationScreen')} style={styles.methodCard}>
          <View style={styles.iconCircle}>
            <Feather name="message-circle" size={22} color="#222" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.methodTitle}>Text message</Text>
            <Text style={styles.methodDesc}>
              Receive a verification code by text. We'll only use this if you can't verify via other methods.
            </Text>
            <Text style={styles.fairlySecure}>Fairly secure</Text>
          </View>
        </TouchableOpacity>
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
  sectionLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 2,
    fontWeight: '600',
  },
  changeDefault: {
    color: '#234F1E',
    fontWeight: '600',
    marginBottom: 18,
    textDecorationLine: 'underline',
    alignSelf: 'flex-start',
  },
  methodCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fafafa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#eee',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e6f7f7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    marginTop: 2,
  },
  methodTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 2,
  },
  methodDesc: {
    fontSize: 14,
    color: '#444',
    marginBottom: 4,
  },
  verySecure: {
    color: '#1a7f37',
    fontWeight: 'bold',
    fontSize: 13,
  },
  fairlySecure: {
    color: '#b58900',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
