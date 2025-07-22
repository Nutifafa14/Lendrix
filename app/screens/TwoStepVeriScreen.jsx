import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import ScreenWrapper from '../components/ScreenWrapper';

const TwoStepVeriScreen = ({ navigation }) => {
  const phoneNumber = '**6071';

  const handleOptionPress = (option) => {
    if (option === 'text') {
      navigation.navigate('CodeByTextScreen');
    } else if (option === 'app') {
      console.log('App notification selected');
    }
  };

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Close Button */}
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={35} color="#000"  />
        </TouchableOpacity>

        <View style={styles.contentWrapper}>
        {/* Title */}
        <Text style={styles.title}>Choose a 2-step{'\n'}verification method</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          For text, we’ll use your primary phone number <Text style={{ fontWeight: 'bold' }}>{phoneNumber}</Text>
        </Text>

        {/* Option: Text */}
        <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('text')}>
          <MaterialIcons name="textsms" size={30} color="#007aff" />
          <Text style={styles.optionText}>Receive code by text</Text>
        </TouchableOpacity>

        {/* Option: App Notification */}
        <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('app')}>
          <Ionicons name="notifications-outline" size={30} color="blue" />
          <Text style={styles.optionText}>Resend Lendrix app notification</Text>
        </TouchableOpacity>

        {/* Fallback Option */}
        <TouchableOpacity onPress={() => navigation.navigate('ConfirmIdentityScreen')}>
          <Text style={styles.link}>I don’t have any of these</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  closeButton: {
    alignSelf: 'flex-start',
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 0,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    lineHeight: 25,
  },
  subtitle: {
    fontSize: 15,
    color: '#444',
    marginBottom: 20,
    lineHeight: 22,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 16,
  },
  link: {
    marginTop: 40,
    color: '#007aff',
    fontSize: 18,
    textAlign: 'center',
  },
  contentWrapper: {
    marginTop: 30,
  },
});

export default TwoStepVeriScreen;
