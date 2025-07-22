import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LogOutEverywhereScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={28} color="#222" />
        </TouchableOpacity>
        <Text style={styles.header}>Log out everywhere</Text>
        <Text style={styles.desc}>Are you sure you want to log out of your Lendrix account on all devices?</Text>
        <Text style={styles.warning}>
          Keep in mind — once you're logged out, you'll be asked to reset your password the next time you log in.
        </Text>
        <TouchableOpacity style={styles.logoutBtn}>
          <Text style={styles.logoutBtnText}>Confirm log out</Text>
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
    color: '#444',
    marginBottom: 18,
  },
  warning: {
    fontSize: 15,
    color: '#111',
    fontWeight: '500',
    marginBottom: 36,
  },
  logoutBtn: {
    backgroundColor: '#69DDF1',
    borderRadius: 24,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 12,
  },
  logoutBtnText: {
    color: '#000',
    fontSize: 17,
    fontWeight: 'bold',
  },
}); 