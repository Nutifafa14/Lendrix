import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, ScrollView } from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';

const TwoStepVeriScreen = ({ navigation }) => {
  const phoneNumber = '**6071';

  const handleOptionPress = (option) => {
    if (option === 'text') {
      navigation.navigate('CodeByTextScreen');
    } else {
      console.log(`${option} selected`);
      // You can add navigation or logic here for other options
    }
    if (option === 'whatsapp') {
      navigation.navigate('WhatsappCodeScreen');
    } else {
      console.log(`${option} selected`);
      // You can add navigation or logic here for other options
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Ionicons name="close" size={35} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Choose a 2-step{'\n'}verification method</Text>

      <Text style={styles.subtitle}>
        For text, we’ll use your primary phone number <Text style={{ fontWeight: 'bold' }}>{phoneNumber}</Text>
      </Text>

      <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('text')}>
        <MaterialIcons name="textsms" size={30} color="#007aff" />
        <Text style={styles.optionText}>Receive code by text</Text>
      </TouchableOpacity>

      


      <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('app')}>
        <Ionicons name="notifications-outline" size={30} color="blue" />
        <Text style={styles.optionText}>Resend Lendrix app notification</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ConfirmIdentityScreen')}>
  <Text style={styles.link}>I don’t have any of these</Text>
</TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  closeButton: {
    alignSelf: 'flex-start',
    marginBottom: 19,
    bottom: 8,
    marginTop: 20,
    bottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    lineHeight: 25,
    bottom : -10
  },
  subtitle: {
    fontSize: 15,
    color: '#444',
    marginBottom: 20,
    lineHeight: 22,
    bottom: -20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    bottom: -10
  },
  optionText: {
    fontSize: 16,
  },
  link: {
    marginTop: 100,
    color: '#007aff',
    fontSize: 20,
    textAlign: 'center',
   bottom: 40,
  },
});

export default TwoStepVeriScreen;
