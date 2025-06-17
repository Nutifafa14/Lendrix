import React from 'react';
import { View, Text, Image, TouchableOpacity, Pressable, StyleSheet, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function ResetPasswordEmailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const email = route.params?.email || 'your@email.com'; // fallback if no email passed

  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      
      <Image
        source={require('../assets/Group_15.png')} 
        style={styles.image}
        resizeMode="contain"
      />

     
      <Text style={styles.title}>CHECK YOUR{'\n'}EMAIL</Text>

      
      <Text style={styles.description}>
        We sent an email to{'\n'}
        <Text style={styles.email}>{email}</Text>. If you don’t get the email soon, check your spam folder.
        {'\n'}Still need help?
      </Text>

      
     

      
      <Pressable style={styles.loginButton} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.loginButtonText}>Back to login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 22,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 24,
    left: 16,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  image: {
    width: 260,
    height: 180,
    marginTop: 60,
    marginBottom: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 18,
    color: '#000',
  },
  description: {
    fontSize: 15,
    color: '#222',
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 22,
  },
  email: {
    fontWeight: 'bold',
    color: '#000',
  },
  
  loginButton: {
    backgroundColor: '#7DEFFF',
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 30,
    left: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  loginButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 17,
  },
});