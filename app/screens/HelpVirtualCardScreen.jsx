import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

const topics = [
  'Lendrix card basics',
  'ATM and PIN',
  'Problems using your card',
  'Ordering and activating',
  'Mobile wallet',
  'Fraud and security',
];

const articles = {
  'Lendrix card basics': "The Lendrix virtual card is a digital payment card you can use for online purchases and mobile wallets. It works just like a physical card, but exists only in your app. You can view your card details securely, use them for payments, and manage your card instantly. No waiting for mail—your card is ready as soon as you create it.",
  'ATM and PIN': "Currently, the Lendrix virtual card is designed for online and mobile wallet payments. It cannot be used at ATMs or for cash withdrawals. If ATM access becomes available in the future, you'll be able to set or view your PIN securely in the app.",
  'Problems using your card': "If your Lendrix virtual card is declined, check that you have sufficient balance, the card is active, and the merchant accepts virtual cards. You can freeze or unfreeze your card instantly in the app. For further help, contact support through the Help section.",
  'Ordering and activating': "To get your Lendrix virtual card, go to the card section in your app and tap 'Create card.' Your card will be issued instantly—no need to wait for delivery. Activate it by following the on-screen instructions. Your card is ready to use as soon as it's activated.",
  'Mobile wallet': "You can add your Lendrix virtual card to Apple Pay, Google Pay, or other supported mobile wallets directly from the app. This allows you to make secure, contactless payments in stores and online. Follow the prompts in the app to add your card to your preferred wallet.",
  'Fraud and security': "Your Lendrix virtual card is protected with advanced security features. You can freeze or delete your card at any time if you suspect fraud. Never share your card details with anyone. For suspicious activity, contact support immediately through the Help section.",
};

export default function HelpVirtualCardScreen({ navigation }) {
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
        <Text style={styles.headerTitle}>Lendrix card</Text>
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
