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
  ScrollView,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';

const { width } = Dimensions.get('window');

export default function LoginScreen({ navigation }) {
  const redirectUri = "https://auth.expo.io/@dzie_nuti/MyProject";
console.log("Redirect URI:", redirectUri);



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  WebBrowser.maybeCompleteAuthSession();

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '22225975817-3rcfe0elct39o9ku4hrkprt1lg0uqc7d.apps.googleusercontent.com',
    androidClientId: '22225975817-v1idqmgd4r57rru6vp0680uh4uvn41n3.apps.googleusercontent.com',
    expoClientId: '22225975817-3rcfe0elct39o9ku4hrkprt1lg0uqc7d.apps.googleusercontent.com',
    redirectUri: redirectUri,
    useProxy: true,
  });



  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: { Authorization: `Bearer ${authentication.accessToken}` },
      })
        .then(res => res.json())
        .then(data => {
          Alert.alert('Google Sign-In Success', `Welcome, ${data.name}!`);
        })
        .catch(err => {
          Alert.alert('Error', 'Failed to fetch user info');
        });
    }
  }, [response]);

  const handleLogin = () => {
    if (!emailRegex.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }
    console.log('Email:', email, 'Password:', password);
    navigation.navigate('VerifyDeviceScreen');
  };

  const handleTroubleLogin = () => {
    navigation.navigate('ForgottenPasswordScreen');
  };

  const handleGoogleLogin = () => {
    promptAsync();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={30} color="black" />
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
            autoCorrect={false}
          />

          {email.length > 0 && !emailRegex.test(email) && (
            <Text style={styles.errorText}>Please enter a valid email address</Text>
          )}

          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
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

        <View style={{ flex: 1 }} />

        <View style={styles.bottomSection}>
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('MyRegisterScreen')}>
              <Text style={styles.registerLink}> Register</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomContainer}>
            <View style={styles.socialButtonsContainer}>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={handleGoogleLogin}
              >
                <View style={styles.socialContent}>
                  <Image
                    source={require('../assets/googleIcon.png')}
                    style={styles.socialIcon}
                  />
                  <Text style={styles.socialText}>Continue with Google</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  formContainer: {
    marginTop: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 30,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
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
  },
  loginButton: {
    backgroundColor: '#69DDF1',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 10,
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
  },
  bottomContainer: {
    // marginBottom removed for better bottom alignment
  },
  bottomSection: {
    justifyContent: 'flex-end',
    flex: 1,
    marginBottom: 80,
    alignItems: 'center',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  socialButton: {
    height: 50,
    borderRadius: 30,
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#000',
    marginHorizontal: 10,
    width: '90%',
    alignSelf: 'center',
  },
  socialContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  socialIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 12,
  },
  socialText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
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