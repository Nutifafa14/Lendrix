import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EmailVeriScreen = ({ navigation, route }) => {
  const email = route?.params?.email || 'your email';

  const handleVerifyEmail = () => {
    // Logic to verify email goes here
    navigation.navigate('LoadingScreen');
  };

  return (
    <View style={styles.background}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back' size={30} color="black"/>
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <Image
          source={require('../assets/Group_11.png')} // <-- update this path to your actual icon filename
          style={styles.icon}
          resizeMode="contain"
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Verify Your Email</Text>
        <Text style={styles.description}>
          A verification link has been sent to:
        </Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.description2}>
          Please check your inbox and click the link to verify your email address.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleVerifyEmail}>
          <Text style={styles.buttonText}>Verify Email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  iconContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 10,
  },
  icon: {
    width: '100%',
    height: 250,
    marginTop: 60,
  },
  container: {
    padding: 1,
    borderRadius: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 1,
    textAlign: 'center',
    bottom: -40,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
    textAlign: 'center',
    bottom: -60,
  },
  description2: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
    textAlign: 'center',
    bottom: -30,
    paddingInlineEnd: 10,
    paddingBlockEnd: 10,
    paddingInlineStart: 10,
  },
  email: {
    fontSize: 16,
    color: '#17709C',
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    bottom: -50,
  },
  button: {
    backgroundColor: '#69DDF1',
    paddingVertical: 14,
    paddingHorizontal: 110,
    borderRadius: 30,
    marginTop: 24,
    bottom: -150,
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default EmailVeriScreen;