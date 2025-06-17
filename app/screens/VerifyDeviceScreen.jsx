import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function VerifyDeviceScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Close Icon */}
      <Pressable onPress={() => navigation.goBack()} style={styles.closeButton}>
        <Ionicons name="close" size={24} color="#000" />
      </Pressable>

      {/* Illustration */}
      <Image
        source={require('../assets/Group_15.png')}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>CHECK YOUR{"\n"}OTHER DEVICE</Text>

      {/* Description */}
      <Text style={styles.description}>
        We’ve sent a notification to your trusted device. Can’t see it? Try opening the Lendrix app on that device.
      </Text>

      {/* Button */}
      <Pressable style={styles.button} onPress={() => navigation.navigate('TwoStepVeriScreen')}>
        <Text style={styles.buttonText}>Verify another way</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  image: {
    width: '90%',
    aspectRatio: 1,
    alignSelf: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    color: '#444',
    marginHorizontal: 20,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#69DDF1',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 10,
    width: '80%',
    shadowColor: '#000',
    bottom: -80,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});