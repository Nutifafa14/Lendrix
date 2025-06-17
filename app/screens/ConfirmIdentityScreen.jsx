import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ConfirmIdentityScreen = () => {
  const navigation = useNavigation();

  const handleChangePhone = () => {
    navigation.navigate('ChangeNumberScreen');
  };

 

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="#000" />
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

      <Pressable style={styles.primaryButton} onPress={handleChangePhone}>
        <Text style={styles.primaryButtonText}>Change phone number</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('HelpChangeNumberScreen')}>
              <Text style={styles.secondaryText}>Contact Us</Text>
            </Pressable>
      
    </View>
  );
};

export default ConfirmIdentityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 15,
    left: 16,
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
    bottom: -48
  },
});