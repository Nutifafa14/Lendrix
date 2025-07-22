// Auth.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

const Auth = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Login or Register</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default Auth;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '70%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
  },
});
