import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

const topics = [
  'Setting up and managing your account',
  'Account and settings',
  'Logging in',
  'Privacy and security',
  'Fraud and complaints',
  'Closing your account',
  'Bills and statements',
];

const articles = {
  'Setting up and managing your account': 'To set up your account, follow the registration steps on the app, providing your personal details and verifying your phone number or email. Once registered, you can manage your account details from the User Account screen. Here, you can update your name, contact information, and view your account type. For any changes, tap the relevant section and follow the prompts.',
  'Account and settings': 'Access your account settings from the User Account screen. Here, you can adjust preferences such as language, appearance, and notification settings. Tap on "Settings" to customize your experience, including privacy options and app theme. Changes are saved automatically.',
  'Logging in': 'To log in, open the app and enter your registered phone number or email and password. If you forget your password, use the "Forgotten Password" link on the login screen to reset it. For extra security, you may be prompted for two-step verification or a passcode.',
  'Privacy and security': 'Your privacy and security are important. In the User Account screen, tap "Security and privacy" to update your password, enable two-step verification, or review your privacy settings. Always keep your app updated and never share your login details.',
  'Fraud and complaints': 'If you notice suspicious activity or need to report fraud, go to the Help section and select "Fraud and complaints." You can contact support directly from the app. We take all reports seriously and will investigate promptly.',
  'Closing your account': 'To close your account, go to the User Account screen and select "Close account." Follow the on-screen instructions. Please ensure all transactions are complete before closing your account. If you need help, contact support through the Help section.',
  'Bills and statements': 'You can view and download your bills and statements from the User Account screen under "Statements and reports." Select the period you want to review, and tap to download or share your statement as needed.',
};

export default function HelpManageAccountScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
            <Ionicons name="arrow-back" size={28} color="#222" />
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
          <TouchableOpacity style={styles.iconBtn}>
            <Feather name="search" size={24} color="#222" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Managing your account</Text>
        {/* Topics List */}
        {topics.map((topic, idx) => (
          <TouchableOpacity key={topic} style={styles.topicRow} onPress={() => navigation.navigate('HelpArticleScreen', { title: topic, content: articles[topic] })}>
            <Text style={styles.topicText}>{topic}</Text>
            <Feather name="chevron-right" size={22} color="#222" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 5,
  },
  iconBtn: {
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    padding: 4,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 18,
    marginTop: 10,
    color: '#111',
  },
  topicRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
    justifyContent: 'space-between',
  },
  topicText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#111',
  },
});
