// Auth.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Auth = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login or Register</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'
  },
  title: {
    fontSize: 24, marginBottom: 40
  },
  button: {
    backgroundColor: '#FFD700', padding: 15, borderRadius: 10, marginBottom: 20, width: '70%', alignItems: 'center'
  },
  buttonText: {
    fontSize: 18, color: '#000'
  }
});
