import React, { useState } from 'react';
import { View, Text, Pressable, Modal, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function TalkToTeam1Screen() {
  const navigation = useNavigation();
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = ['English', 'French', 'Spanish', 'Arabic', 'German'];

  //Actual navigation or logic
  const handlePhonePress = () => {
    navigation.navigate('NeedHelpPhoneScreen');
  };

  const handleEmailPress = () => {
    // navigation.navigate('EmailScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} color="black" />
        </Pressable>
      </View>

      
      <Text style={styles.title}>Talk to our team</Text>

      {/* Language Selector */}
      <Text style={styles.subTitle}>Conversation language</Text>
      <Pressable onPress={() => setLanguageModalVisible(true)} style={styles.dropdown}>
        <Text style={styles.dropdownText}>{selectedLanguage}</Text>
        <MaterialIcons name="keyboard-arrow-down" size={20} color="black" />
      </Pressable>

      <Text style={styles.preferenceText}>Your preferred option</Text>

      <Pressable style={styles.option} onPress={handlePhonePress}>
        <Feather name="phone" size={18} color="black" style={styles.optionIcon} />
        <Text style={styles.optionText}>Phone</Text>
        <Ionicons name="chevron-forward" size={20} color="black" style={styles.chevron} />
      </Pressable>

      <Pressable style={styles.option} onPress={handleEmailPress}>
        <Feather name="mail" size={18} color="black" style={styles.optionIcon} />
        <Text style={styles.optionText}>Email</Text>
        <Ionicons name="chevron-forward" size={20} color="black" style={styles.chevron} />
      </Pressable>

      <View style={[styles.option, styles.disabledOption]}>
        <Feather name="message-circle" size={18} color="#999" style={styles.optionIcon} />
        <View>
          <Text style={[styles.optionText, { color: '#999' }]}>Chat</Text>
          <Text style={styles.unavailableText}>Unavailable</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#999" style={styles.chevron} />
      </View>

      {/* Language Modal */}
      <Modal
        visible={languageModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setLanguageModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={languages}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.languageOption}
                  onPress={() => {
                    setSelectedLanguage(item);
                    setLanguageModalVisible(false);
                  }}
                >
                  <Text style={styles.languageText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  subTitle: {
    fontWeight: '500',
    marginBottom: 10,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  dropdownText: {
    fontSize: 16,
  },
  preferenceText: {
    fontSize: 14,
    color: '#777',
    marginBottom: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  optionIcon: {
    marginRight: 15,
  },
  optionText: {
    fontSize: 16,
    flex: 1,
  },
  unavailableText: {
    fontSize: 12,
    color: '#aaa',
  },
  chevron: {
    marginLeft: 'auto',
  },
  disabledOption: {
    opacity: 0.6,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '40%',
  },
  languageOption: {
    paddingVertical: 15,
  },
  languageText: {
    fontSize: 16,
  },
});