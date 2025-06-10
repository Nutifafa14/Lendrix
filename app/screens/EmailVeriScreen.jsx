import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const EmailVeriScreen = ({ navigation, route }) => {
  const email = route?.params?.email || 'your email'; // fallback if not provided
 console.log("Email received:", email);
  const handleVerifyEmail = () => {
    // Logic to verify email goes here
    console.log("Email verification logic goes here");
    navigation.navigate('LoadingScreen'); // Navigate to LoadingScreen after verification
  };

  return (
    <ImageBackground 
      source={require('../assets/checky.png')}
      style={styles.background}
      resizeMode="cover"  
    >
      
       <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.goBack()}>
         <Ionicons name='arrow-back' size={30} color="black"/>
      </TouchableOpacity>

       <View style={styles.container}>
        <Text style={styles.title}>Verify Your Email</Text>
        <Text style={styles.description}>
          A verification link has been sent to:{'\n'}
        </Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.description2}>
          Please check your inbox and click the link to verify your email address.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleVerifyEmail}>
          <Text style={styles.buttonText}>Verify Email</Text>
        </TouchableOpacity>
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  header: {
  position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
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
    bottom: -60
  },

  description2: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
    textAlign: 'center',
    bottom: -40,
     paddingInlineEnd: 10,
    paddingBlockEnd: 10,
    paddingInlineStart: 10,
  },
  email: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    bottom: -40,
    
  },
  button: {
    backgroundColor: '#69DDF1',
    paddingVertical: 14,      // standard height
    paddingHorizontal: 110,     // let width handle the length
    borderRadius: 30,
    marginTop: 24,
    bottom: -200,              // match other elements' spacing
    width: '90%',             // long button, but not too big
    alignItems: 'center',
    alignSelf: 'center',      // center horizontally
  },
  buttonText: {
    color: 'black',
    fontSize: 20,             // standard size
    fontWeight: '700',
  },
});

export default EmailVeriScreen;