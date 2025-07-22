import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Pressable, Alert,
  TextInput, TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ModalBottom from 'react-native-modal';
import ScreenWrapper from '../components/ScreenWrapper';

const HelpChangeNumberScreen = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedbackText, setFeedbackText] = useState('');

  const handleYes = () => {
    Alert.alert('Thanks for the feedback!');
  };

  const handleNo = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedOption(null);
    setFeedbackText('');
  };

  const handleSubmit = () => {
    Alert.alert('Thanks for your feedback!');
    closeModal();
  };

  return (
    <>
      <ScreenWrapper>
        <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
          <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} color="black" />
          </Pressable>

          <Text style={styles.title}>I need to change my{'\n'}phone number</Text>
          <Text style={styles.paragraph}>
            This article covers how you can change your phone number and what to do if you’ve changed your phone and can’t log in.
          </Text>

          <Text style={styles.subtitle}>I’ve changed my phone number and can’t log in</Text>
          <Text style={styles.paragraph}>
            If you’ve lost access to your old number and can’t access your account, don’t worry - here’s how you can change your number:
          </Text>

          <Text style={styles.listItem}>1. Log in with your email and password</Text>
          <Text style={styles.listItem}>2. In the 2-step verification page, choose <Text style={styles.bold}>Try another way</Text></Text>
          <Text style={styles.listItem}>3. If you can’t use any alternative 2-step verification methods, choose <Text style={styles.bold}>I don’t have any of these</Text></Text>
          <Text style={styles.listItem}>4. Follow the steps to confirm your identity and phone number</Text>
          <Text style={styles.listItem}>5. Once confirmed, we’ll be able to change your phone number.</Text>

          <Text style={styles.subtitle}>I’m logged in and need to change my phone number</Text>
          <Text style={styles.paragraph}>You can change your phone number on your app.</Text>

          <Text style={styles.subheading}>App</Text>
          <Text style={styles.listItem}>1. Go to your profile name in the top corner</Text>
          <Text style={styles.listItem}>2. Go to <Text style={styles.bold}>Personal details</Text> and select <Text style={styles.bold}>Mobile Number</Text></Text>
          <Text style={styles.listItem}>3. Select <Text style={styles.bold}>Change Mobile number</Text></Text>
          <Text style={styles.listItem}>4. Complete the steps to update your number</Text>
          <Text style={styles.listItem}>5. After you’re done, we’ll send an SMS to your new number to verify it</Text>

          <Text style={styles.paragraph}>
            The steps can differ, and in some cases we’ll need to request more information to verify who you are.
          </Text>
          <Text style={styles.paragraph}>
            You might need to update your phone number on your account before getting rid of your old SIM, as we might need to send an SMS to your phone number to confirm it’s really you making the changes.
          </Text>
          <Text style={styles.paragraph}>
            If you don’t have access to your old SIM, you can use the logged out instructions above.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.feedbackPrompt}>Was this article helpful?</Text>
          <View style={styles.buttonRow}>
            <Pressable style={styles.feedbackButton} onPress={handleYes}>
              <Text style={styles.feedbackText}>😊 Yes</Text>
            </Pressable>
            <Pressable style={styles.feedbackButton} onPress={handleNo}>
              <Text style={styles.feedbackText}>😞 No</Text>
            </Pressable>
          </View>
        </ScrollView>
      </ScreenWrapper>

      <ModalBottom
        isVisible={isModalVisible}
        onBackdropPress={closeModal}
        style={styles.modalContainer}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Sorry about that, what went wrong?</Text>

          {[
            'It was confusing, or difficult to read',
            "It didn't answer my question",
            "It wasn't relevant to what I was looking for",
            'Something else',
          ].map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => setSelectedOption(option)}
            >
              <View style={[
                styles.radioCircle,
                selectedOption === option && styles.radioSelected
              ]} />
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}

          {selectedOption && (
            <>
              <Text style={styles.textInputLabel}>Anything else you'd like to share? (Optional)</Text>
              <Text style={styles.note}>
                We can't respond to individual feedback — so please don't leave any personal information.
              </Text>
              <TextInput
                style={styles.textInput}
                multiline
                numberOfLines={4}
                value={feedbackText}
                onChangeText={setFeedbackText}
                placeholder="Type here..."
              />
              <Pressable style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitText}>Submit</Text>
              </Pressable>
            </>
          )}
        </View>
      </ModalBottom>
    </>
  );
};

export default HelpChangeNumberScreen;
const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 15,
    left: 16,
    zIndex: 10,
    padding: 8,
    marginLeft: -25
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 32,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 16,
    lineHeight: 22,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 24,
    textAlign: 'left',
  },
  subheading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
  },
  listItem: {
    fontSize: 15,
    marginLeft: 10,
    marginTop: 8,
    color: '#333',
  },
  bold: {
    fontWeight: 'bold',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  feedbackPrompt: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#555',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  feedbackButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 5,
  },
  feedbackText: {
    fontSize: 16,
    color: '#333',
  },
});