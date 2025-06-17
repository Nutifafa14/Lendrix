import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ChangeNumberScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Close Button */}
      <Pressable style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Ionicons name="close" size={28} color="#000" />
      </Pressable>

      {/* Illustration */}
      <Image
        source={require('../assets/Group_11.png')} // update path if your image is in a different folder
        style={styles.image}
        resizeMode="contain"
      />

      {/* Heading */}
      <Text style={styles.heading}>Enter your email to change your phone number</Text>

      {/* Email Input */}
      <Text style={styles.label}>Email address</Text>
      <TextInput
        placeholder=""
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Send Button */}
      <Pressable style={styles.primaryButton} onPress={() => {/* handle send email */}}>
        <Text style={styles.primaryButtonText}>Send email</Text>
      </Pressable>

      
    </View>
  );
};

export default ChangeNumberScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
    padding: 8,
  },
  image: {
    width: '100%',
    height: 260,
    alignSelf: 'center',
    marginTop: 60,
    marginBottom: 30,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 28,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    marginLeft: 4,
    color: '#000',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  primaryButton: {
    alignSelf: 'center',
    backgroundColor: '#7DEFFF',
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
    
  },
  primaryButtonText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 16,

 contactLink: {
    color: '#007AFF',
    textAlign: 'center',
    marginTop: 28,
    fontSize: 15,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  },
});