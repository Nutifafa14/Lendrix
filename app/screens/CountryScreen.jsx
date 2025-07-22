import React, { useState } from 'react';
import {
  View, Text,SafeAreaView, StyleSheet, TouchableOpacity,
  Linking, Platform, StatusBar
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CountryPicker from 'react-native-country-picker-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';


const CountryScreen = () => {
  const navigation = useNavigation();
  const [countryCode, setCountryCode] = useState('GH');
  const [country, setCountry] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleNext = async () => {
    if (!country) {
      setShowError(true);
      return;
    }
    setShowError(false);
    // Save country of residence to AsyncStorage
    await AsyncStorage.setItem('country_of_residence', country.name);
    navigation.navigate('NumberVeriScreen', { country });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
  <View style={styles.header}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons name='arrow-back' size={30} color="black" />
    </TouchableOpacity>
  </View>

  <View style={styles.content}>
    <Text style={styles.title}>Your country of primary residence?</Text>
    <Text style={styles.label}>Country</Text>

    <TouchableOpacity
      style={styles.input}
      onPress={() => setShowPicker(true)}
      activeOpacity={0.8}
    >
      <Text style={{ fontSize: 16, color: country ? '#333' : '#aaa' }}>
        {country ? `${country.emoji ?? ''}  ${country.name}` : "Select Country"}
      </Text>
    </TouchableOpacity>

    {showError && (
      <Text style={styles.errorText}>Please select a country before continuing.</Text>
    )}

    {showPicker && (
      <CountryPicker
        countryCode={countryCode}
        withFilter
        withFlag
        withCountryNameButton
        withAlphaFilter
        withEmoji
        visible={showPicker}
        onClose={() => setShowPicker(false)}
        onSelect={country => {
          setCountryCode(country.cca2);
          setCountry(country);
          setShowPicker(false);
          setShowError(false);
        }}
      />
    )}

    {/* Next button and terms go here, after the form content */}
    <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
      <Text style={styles.buttonText}>Next</Text>
    </TouchableOpacity>

    <Text style={styles.termsText}>
      By registering, you accept our{' '}
      <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/terms')}>
        Terms of Use
      </Text>{' '}
      and{' '}
      <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/privacy')}>
        Privacy Policy
      </Text>.
    </Text>
  </View>
</SafeAreaView>
);
};

export default CountryScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 0,
    backgroundColor: '#fff',
    marginBottom: 10,
    bottom: -40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    marginTop: 0,
    bottom: -60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
    bottom: -10,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    bottom: -30,
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 16,
    justifyContent: 'center',
    marginBottom: 25,
    width: '100%',
    backgroundColor: '#fff',
    bottom: -30,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  termsText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 20,
    bottom: -250,
  },
  link: {
    color: '#007AFF',
    textDecorationLine: 'underline',
    bottom: -250,
  },
  nextButton: {
    backgroundColor: '#69DDF1',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 70,
    marginBottom: 0,
    bottom: -250,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});