import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Pressable, Alert,
  TextInput, TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ModalBottom from 'react-native-modal';

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
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
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
  container: {
    flex: 1,
    padding: 21,
    paddingTop: 12,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 10,
    marginTop: 10,
    width: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 18,
    marginBottom: 6,
  },
  subheading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 4,
  },
  paragraph: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    lineHeight: 20,
  },
  listItem: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
    paddingLeft: 8,
    lineHeight: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#eaeaea',
    marginVertical: 18,
    width: '120%',
    marginLeft: '-10%',
  },
  feedbackPrompt: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 12,
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 30,
  },
  feedbackButton: {
    backgroundColor: '#CFFFE5',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginRight: 10,
  },
  feedbackText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
    paddingBottom: 30,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  radioCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#555',
    marginRight: 12,
  },
  radioSelected: {
    backgroundColor: '#000',
  },
  optionText: {
    fontSize: 15,
    color: '#333',
  },
  textInputLabel: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  note: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    fontSize: 14,
    textAlignVertical: 'top',
    backgroundColor: '#f9f9f9',
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: '#98f5a3',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  submitText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});