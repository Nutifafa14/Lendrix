import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
// Remove useRouter import
import { LinearGradient } from 'expo-linear-gradient';

const LoadingScreen = ({ navigation }) => { // Accept navigation prop
  useEffect(() => {
    // Simulate a loading process (e.g. API call or timeout)
    const timer = setTimeout(() => {
      navigation.replace('AccountScreen'); // Use navigation instead of router
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#69DDF1', '#75EAFE']}
      style={styles.container}
    >
      <ActivityIndicator size="large" color="#000" style={styles.loader} />
      <Text style={styles.loadingText}>Loading...</Text>
    </LinearGradient>
  );
};

export default LoadingScreen;





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FF50',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: 2,
 // dark green (optional)
  },
   /*tagline: {
    fontSize: 16,
    color: '#333',
    marginBottom: 30,
    marginTop: 5,
  }, */
  loader: {
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 14,
    color: '#333',
  },
  icon: {
    position: 'absolute',
    top: 5,
    left: 20,
    color: '#000',
  },
});
