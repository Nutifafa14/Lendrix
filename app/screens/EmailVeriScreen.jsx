import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScreenWrapper from '../components/ScreenWrapper';

const EmailVeriScreen = ({ navigation, route }) => {
  const email = route?.params?.email || 'your email';
  const userId = '6481'; // Updated user id for verification

  const handleVerifyEmail = async () => {
    try {
      const response = await fetch(`http://10.132.134.92:3000/users/${userId}`);
      if (!response.ok) throw new Error('User not found');
      const user = await response.json();
      if (user.verified) {
        navigation.navigate('LoadingScreen');
      } else {
        alert('Email not verified yet. Please check your inbox.');
      }
    } catch (error) {
      alert('Failed to check verification status.');
    }
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back' size={30} color="black" />
        </TouchableOpacity>

        <View style={styles.contentContainer}>
          {/* Icon Image */}
          <View style={styles.iconContainer}>
            <Image
              source={require('../assets/Group_11.png')}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>

          {/* Text Content */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>Verify Your Email</Text>
            <Text style={styles.description}>A verification link has been sent to:</Text>
            <Text style={styles.email}>{email}</Text>
            <Text style={styles.description2}>
              Please check your inbox and click the link to verify your email address.
            </Text>
          </View>
        </View>
        {/* Verify Button at the bottom */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleVerifyEmail}>
            <Text style={styles.buttonText}>Verify Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default EmailVeriScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  backButton: {
    marginTop: 40,
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  iconContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    width: '100%',
    height: 320,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#17709C',
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  description2: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#69DDF1',
    paddingVertical: 14,
    borderRadius: 30,
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
  },
  contentContainer: {
    marginTop: 40,
  },
});
