import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity , TextInput,Linking,Platform , StatusBar, Alert} from 'react-native';
import { Ionicons, } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PasswordScreen = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState('');
 const isLengthValid = password.length >= 9;
  const containsLetter = /[a-zA-Z]/.test(password);
  const containsNumber = /[0-9]/.test(password);
  const isPasswordValid = isLengthValid && containsLetter && containsNumber;


  const handleDone = () => {
  if (isPasswordValid) {
    console.log('Password set:', password);
    // Navigate to CommScreen
    navigation.navigate('CommScreen');
  } else {
    Alert.alert(
      'Invalid Password',
      'Your password must be at least 9 characters long and contain both letters and numbers.'
    );
  }
};

  return (
    <View style={styles.container}>
        <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back' size={30} color="black" bottom={-30} />
      </TouchableOpacity>
      </View>

      <View style={styles.content}>
      <Text style={styles.title}>Create a password</Text>
      <Text style={styles.label}>Your password</Text>
      <View style={styles.input}>
  <TextInput
    style={styles.passwordInput}
    secureTextEntry={!showPassword}
    placeholder="Enter your password"
    value={password}
    onChangeText={setPassword}
  />
  <TouchableOpacity
    onPress={() => setShowPassword(!showPassword)}
    style={styles.eyeIconContainer}
  >
    <Ionicons
      name={showPassword ? 'eye-off-outline' : 'eye-outline'}
      size={24}
      color="#888"
    />
  </TouchableOpacity>
</View>
<View style={{ marginBottom: 20 }}>
  <Text style={{ color: isLengthValid ? 'green' : 'red', fontSize: 13 }}>
    • At least 9 characters
  </Text>
  <Text style={{ color: containsLetter ? 'green' : 'red', fontSize: 13 }}>
    • Contains a letter (a-z or A-Z)
  </Text>
  <Text style={{ color: containsNumber ? 'green' : 'red', fontSize: 13 }}>
    • Contains a number (0-9)
  </Text>
</View>
      </View>
      <TouchableOpacity
        style={[styles.doneButton, !isPasswordValid && styles.doneButtonDisabled]}
        onPress={handleDone}
        disabled={!isPasswordValid} // Disable button if password is not valid
      >
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordScreen;

const styles = StyleSheet.create({ 
container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30, // Space below the back arrow
    bottom: 20, // Space below the header
  },
  backButton: {
    padding: 5,
  },
  content: {
    flex: 1, // Allows content to take up available space
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
    bottom: -20, // Space below the title
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    bottom: -20, // Space below the label
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    marginBottom: 30, // Space below the input field
    paddingRight: 10,
    bottom:-20 
  },
  passwordInput: {
    flex: 1, // Allows TextInput to take up most of the space
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
    height: 50,
  },
  eyeIconContainer: {
    padding: 5, // Make touch area larger for the icon
  },

doneButton: {
    backgroundColor: '#69DDF1', // Green color from screenshot
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
    bottom: 100, // Space below the button
  },
  doneButtonDisabled: {
    backgroundColor: '#e2e8f0', // Lighter green when disabled
  },
  doneButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },

});