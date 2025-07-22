import React from 'react';
import {
  View, Text, StyleSheet, Pressable, TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ScreenWrapper from '../components/ScreenWrapper';

const ForgottenPasswordScreen = () => {
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* Heading */}
      <Text style={styles.heading}>I’ve forgotten my{'\n'}password</Text>

      {/* Info Paragraphs */}
      <Text style={styles.paragraph}>
        If you’re logged out and can’t remember your password, we can send you an email with a link to reset it.
      </Text>
      <Text style={styles.paragraph}>
        If you didn’t get the email, here are a few of the most common reasons why, and what to do to fix it.
      </Text>

      {/* Bullet List */}
      <View style={styles.bulletList}>
        <View style={styles.bulletItem}>
          <Text style={styles.bullet}>{'\u2022'}</Text>
          <Text style={styles.bulletText}>
            You didn’t provide the right email. Try again with the one you used for Lendrix.
          </Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bullet}>{'\u2022'}</Text>
          <Text style={styles.bulletText}>
            You spelt your email wrong. Double check for any typos and fix them before trying again.
          </Text>
        </View>
        <View style={styles.bulletItem}>
          <Text style={styles.bullet}>{'\u2022'}</Text>
          <Text style={styles.bulletText}>
            The email’s in a different inbox. Make sure you check the right email inbox you provided, as well as the spam folder.
          </Text>
        </View>
      </View>

      {/* Reset Password Button */}
      <Pressable style={styles.resetButton} onPress={() => {/* handle reset */}}>
        <Text style={styles.resetButtonText}>Reset password</Text>
      </Pressable>

      
    </ScreenWrapper>
  );
};

export default ForgottenPasswordScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 16,
    marginTop: 4,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 18,
    marginTop: 8,
    color: '#000',
  },
  paragraph: {
    fontSize: 15,
    color: '#222',
    marginBottom: 14,
    lineHeight: 22,
  },
  bulletList: {
    marginBottom: 28,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  bullet: {
    fontSize: 18,
    marginRight: 8,
    lineHeight: 22,
    color: '#000',
  },
  bulletText: {
    flex: 1,
    fontSize: 15,
    color: '#222',
    lineHeight: 22,
  },
  resetButton: {
    backgroundColor: '#7DEFFF',
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  resetButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 17,
  },
  helpLink: {
    color: '#007AFF',
    textAlign: 'center',
    fontSize: 15,
    textDecorationLine: 'underline',
    fontWeight: '500',
    marginTop: 4,
  },
});
