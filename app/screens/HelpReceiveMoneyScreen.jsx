import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

const topics = [
  'Receiving money basics',
  'Using your account details',
  'Receiving e-commerce payments',
];

const articles = {
  'Receiving money basics': "To receive money, simply share your Lendrix account details with the sender. Once the transfer is made, you'll see the incoming transaction in your app. You can track the status of each transfer in the 'Incoming Transfers' section on the Receive screen.",
  'Using your account details': "Your Lendrix account details include your bank name, account holder name, account number, and SWIFT/BIC code. Share these details securely with anyone who wants to send you money. You can find your account details on the Receive screen in your app.",
  'Receiving e-commerce payments': "To receive e-commerce payments, provide your Lendrix account details to the payment provider or platform. Once the payment is processed, it will appear in your incoming transfers. Always verify the sender and the platform before sharing your details.",
};

export default function HelpReceiveMoneyScreen({ navigation }) {
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
        <Text style={styles.headerTitle}>Receiving money</Text>
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
