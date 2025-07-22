import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import googleIcon from '../assets/googleIcon.png';

export default function SocialLoginOptionsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={28} color="#222" />
        </TouchableOpacity>
        <Text style={styles.header}>Social login options</Text>
        <Text style={styles.desc}>The social accounts you can use for logging in to Lendrix.</Text>
        <View style={styles.socialRow}>
          <Image source={googleIcon} style={styles.socialIcon} />
          <Text style={styles.socialLabel}>Google</Text>
          <TouchableOpacity style={styles.disconnectBtn}>
            <Text style={styles.disconnectText}>Disconnect</Text>
          </TouchableOpacity>
        </View>
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
    alignSelf: 'flex-start',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    padding: 4,
    marginBottom: 18,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#111',
  },
  desc: {
    fontSize: 15,
    color: '#444',
    marginBottom: 24,
  },
  socialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  socialIcon: {
    width: 32,
    height: 32,
    marginRight: 12,
    resizeMode: 'contain',
  },
  socialLabel: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#111',
    flex: 1,
  },
  disconnectBtn: {
    backgroundColor: '#ededed',
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 7,
  },
  disconnectText: {
    color: '#222',
    fontWeight: '500',
    fontSize: 15,
  },
});
