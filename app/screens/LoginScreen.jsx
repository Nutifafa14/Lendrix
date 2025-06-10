import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }
    console.log('Email:', email, 'Password:', password);
    navigation.navigate('TwoStepVeriScreen');
  };

  const handleTroubleLogin = () => {
    Alert.alert('Forgot Password', 'Redirecting to password recovery screen...');
    // navigation.navigate('ForgotPassword');
  };

  const handleGoogleLogin = () => {
    console.log('Google login pressed');
    // Implement Google login logic here
  };

  const handleFacebookLogin = () => {
    console.log('Facebook login pressed');
    // Implement Facebook login logic here
  };

  const handleAppleLogin = () => {
    console.log('Apple login pressed');
    // Implement Apple login logic here
  };

  return (
    <SafeAreaView style={styles.container}>
       <TouchableOpacity onPress={() => navigation.goBack()}>
             <Ionicons name='arrow-back' size={30} color="black" bottom ={-20}/>
             </TouchableOpacity>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Log In</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { flex: 1, marginBottom: 0 }]}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={showPassword ? 'eye-off' : 'eye'}
              size={24}
              color="#888"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleTroubleLogin}>
          <Text style={styles.troubleText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      {/* Social Login Section */}
      <View style={styles.bottomContainer}>
        <Text style={styles.orText}>Or log in with</Text>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
            <Image
              source={require('../assets/googleIcon.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} onPress={handleFacebookLogin}>
            <Image
              source={require('../assets/facebookIcon.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} onPress={handleAppleLogin}>
            <Image
              source={require('../assets/appleIcon.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Register link */}
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("MyRegisterScreen")}>
          <Text style={styles.registerLink}> Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
  },
  formContainer: {
    marginTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    bottom: 100,
  },
  input: {
    height: 50,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 30,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    bottom: 50,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    padding: 5,
    bottom: 55,
  },
  loginButton: {
    backgroundColor: '#69DDF1',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 10,
    bottom: 30,
  },
  loginButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  troubleText: {
    textAlign: 'center',
    color: '#007AFF',
    textDecorationLine: 'underline',
    marginTop: 5,
    bottom: -80,
  },
  bottomContainer: {
    marginBottom: 30,
  },
  orText: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
    fontSize: 14,
    bottom: -70,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: -90,
  },
  socialButton: {
    width: 100,
    height: 48,
    borderRadius: 30,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: '#000',
  },
  socialIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  registerText: {
    fontSize: 14,
    color: '#666',
  },
  registerLink: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
  },
});