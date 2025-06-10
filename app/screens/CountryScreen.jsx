import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CountryPicker from 'react-native-country-picker-modal';

const CountryScreen = () => {
  const navigation = useNavigation();
  const [countryCode, setCountryCode] = useState('GH');
  const [country, setCountry] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [showError, setShowError] = useState(false);
  const handleNext = () => {
  if (!country) {
    setShowError(true);
    return;
  }
  setShowError(false);
  navigation.navigate('NumberVeriScreen', { country });
};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back' size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Your country of primary residence?</Text>
        <Text style={styles.label}>Country</Text>
        {/* Custom input-like box */}
<TouchableOpacity
  style={styles.input}
  onPress={() => setShowPicker(true)}
  activeOpacity={0.8}
>
  <Text style={{ fontSize: 16, color: country ? '#333' : '#aaa' }}>
    {country ? `${country.emoji ? country.emoji : ''}  ${country.name}` : "Select Country"}
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
      setShowError(false); // clear error if country is selected
    }}
  />
)}

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

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CountryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // White background
    paddingHorizontal: 20, // Horizontal padding for content
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 50, // Adjust for status bar on Android/iOS
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20, // Space below the back arrow
  },
  content: {
    flex: 1, // Allows content to take up available space
    // justifyContent: 'center', // Uncomment if you want to center content vertically
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30, // Space below the title
    color: '#333', // Dark text color
  },
  errorText: {
  color: 'red',
  fontSize: 14,
  marginTop: 4,
  marginBottom: 10,
  bottom: 20,
},
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8, // Space below the label
  },
  input: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  paddingHorizontal: 15,
  paddingVertical: 12,
  fontSize: 16,
  marginBottom: 30,
  color: '#333',
  flexDirection: 'row',
  alignItems: 'center',
},
  termsText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20, // Spacing between lines
    textAlign: 'center',
    marginTop: 'auto', // Pushes this text to the bottom before the button
    marginBottom: 10, // Space above the button
  },
  link: {
    color: '#007AFF', // Standard link blue
    textDecorationLine: 'underline',
  },
  nextButton: {
    backgroundColor: '#69DDF1', // Light green color from screenshot
    paddingVertical: 15,
    borderRadius: 25, // More rounded button
    alignItems: 'center',
    marginBottom: 20, // Space from the bottom edge
    bottom: 150, // Space from the bottom edge
  },
  buttonText: {
    color: 'black', // Black text for the button
    fontSize: 18,
    fontWeight: '600',
  },
});