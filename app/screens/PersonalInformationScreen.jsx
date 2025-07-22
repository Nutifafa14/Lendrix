import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../components/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function PersonalInformationScreen({ navigation }) {
  const { effectiveTheme } = useTheme();
  const insets = useSafeAreaInsets();
  const isDark = effectiveTheme === 'dark';
  const colors = {
    background: isDark ? '#111' : '#fff',
    text: isDark ? '#fff' : '#111',
    label: isDark ? '#ccc' : '#444',
    inputBg: isDark ? '#222' : '#fafafa',
    border: isDark ? '#333' : '#eee',
    placeholder: isDark ? '#888' : '#aaa',
  };

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dobDay, setDobDay] = useState('');
  const [dobMonth, setDobMonth] = useState('');
  const [dobYear, setDobYear] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    // Load country of residence from AsyncStorage (set in CountryScreen)
    AsyncStorage.getItem('country_of_residence').then(val => {
      if (val) setCountry(val);
    });
  }, []);

  const handleSave = async () => {
    if (!firstName || !lastName || !dobDay || !dobMonth || !dobYear || !homeAddress || !city) {
      Alert.alert('Please fill in all required fields.');
      return;
    }
    try {
      await AsyncStorage.multiSet([
        ['first_name', firstName],
        ['middle_name', middleName],
        ['last_name', lastName],
        ['dob_day', dobDay],
        ['dob_month', dobMonth],
        ['dob_year', dobYear],
        ['home_address', homeAddress],
        ['city', city],
      ]);
      Alert.alert('Saved', 'Your personal information has been saved.');
    } catch (e) {
      Alert.alert('Error', 'Failed to save your information.');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.backBtn, { backgroundColor: colors.inputBg, marginTop: insets.top || 16 }]}> 
          <Ionicons name="arrow-back" size={28} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.header, { color: colors.text }]}>Personal information</Text>

        <Text style={[styles.label, { color: colors.label }]}>First name</Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.inputBg, color: colors.text, borderColor: colors.border }]}
          placeholder="Enter first name"
          placeholderTextColor={colors.placeholder}
          value={firstName}
          onChangeText={setFirstName}
        />

        <Text style={[styles.label, { color: colors.label }]}>Middle name</Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.inputBg, color: colors.text, borderColor: colors.border }]}
          placeholder="Enter middle name"
          placeholderTextColor={colors.placeholder}
          value={middleName}
          onChangeText={setMiddleName}
        />

        <Text style={[styles.label, { color: colors.label }]}>Last name</Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.inputBg, color: colors.text, borderColor: colors.border }]}
          placeholder="Enter last name"
          placeholderTextColor={colors.placeholder}
          value={lastName}
          onChangeText={setLastName}
        />

        <Text style={[styles.label, { color: colors.label }]}>Date of birth</Text>
        <View style={styles.dobRow}>
          <TextInput
            style={[styles.input, styles.dobInput, { backgroundColor: colors.inputBg, color: colors.text, borderColor: colors.border }]}
            placeholder="Day"
            placeholderTextColor={colors.placeholder}
            value={dobDay}
            onChangeText={setDobDay}
            keyboardType="numeric"
            maxLength={2}
          />
          <TextInput
            style={[styles.input, styles.dobInput, { backgroundColor: colors.inputBg, color: colors.text, borderColor: colors.border }]}
            placeholder="Month"
            placeholderTextColor={colors.placeholder}
            value={dobMonth}
            onChangeText={setDobMonth}
            keyboardType="numeric"
            maxLength={2}
          />
          <TextInput
            style={[styles.input, styles.dobInput, { backgroundColor: colors.inputBg, color: colors.text, borderColor: colors.border }]}
            placeholder="Year"
            placeholderTextColor={colors.placeholder}
            value={dobYear}
            onChangeText={setDobYear}
            keyboardType="numeric"
            maxLength={4}
          />
        </View>

        <Text style={[styles.label, { color: colors.label }]}>Home address</Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.inputBg, color: colors.text, borderColor: colors.border }]}
          placeholder="Enter home address"
          placeholderTextColor={colors.placeholder}
          value={homeAddress}
          onChangeText={setHomeAddress}
        />

        <Text style={[styles.label, { color: colors.label }]}>City</Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.inputBg, color: colors.text, borderColor: colors.border }]}
          placeholder="Enter city"
          placeholderTextColor={colors.placeholder}
          value={city}
          onChangeText={setCity}
        />

        <Text style={[styles.label, { color: colors.label }]}>Country of residence</Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.inputBg, color: colors.text, borderColor: colors.border }]}
          value={country}
          editable={false}
        />
        <View style={{ height: 40 }} />
        <TouchableOpacity
          style={[styles.saveBtn, { backgroundColor: colors.text, opacity: (!firstName || !lastName || !dobDay || !dobMonth || !dobYear || !homeAddress || !city) ? 0.5 : 1 }]}
          onPress={handleSave}
          disabled={!firstName || !lastName || !dobDay || !dobMonth || !dobYear || !homeAddress || !city}
        >
          <Text style={[styles.saveBtnText, { color: colors.background }]}>Save</Text>
        </TouchableOpacity>
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 40,
  },
  backBtn: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    padding: 4,
    marginBottom: 18,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 6,
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    marginBottom: 2,
  },
  dobRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  dobInput: {
    flex: 1,
    marginRight: 8,
  },
  saveBtn: {
    marginTop: 24,
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  saveBtnText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
}); 