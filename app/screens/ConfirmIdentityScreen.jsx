import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import ScreenWrapper from '../components/ScreenWrapper';

const ConfirmIdentityScreen = () => {
  const navigation = useNavigation();

  const handleChangePhone = () => {
    navigation.navigate('ChangeNumberScreen');
  };

  return (
    <ScreenWrapper>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="#000"  />
      </Pressable>

      <Image
        source={require('../assets/Group_10.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.heading}>CONFIRM YOUR IDENTITY</Text>

      <Text style={styles.bodyText}>
        To help keep your account safe, we need to make sure it’s really you trying to login. To start, please confirm if you’d like to change your current number.
      </Text>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.primaryButton} onPress={handleChangePhone}>
          <Text style={styles.primaryButtonText}>Change phone number</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('HelpChangeNumberScreen')}>
          <Text style={styles.secondaryText}>Contact Us</Text>
        </Pressable>
      </View>
    </ScreenWrapper>
  );
};

export default ConfirmIdentityScreen;

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 15,
    left: 20,
    zIndex: 10,
    padding: 8,
    
  },
  image: {
    width: '100%',
    height: 250,
    marginTop: 60,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 32,
    textAlign: 'center',
  },
  bodyText: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 16,
    lineHeight: 22,
    color: '#333',
  },
  primaryButton: {
    marginTop: 30,
    backgroundColor: '#00C6FF',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    width: '100%',
  },
  primaryButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#007AFF',
    textDecorationLine: 'underline',
    bottom: -40,
  },
  buttonContainer: {
    marginTop: 80,
    width: '100%',
  },
});
