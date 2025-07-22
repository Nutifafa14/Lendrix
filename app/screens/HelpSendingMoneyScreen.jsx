import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

const topics = [
  'Sending money basics',
  'Where is my money?',
  'Mistakes and editing your transfer',
  'Cancellations and refunds',
  'We support these countries and currencies',
  'Ways to pay',
  'Verifying your transfer',
  'Sending money from your Wise account',
  'Sending large transfers',
  'Managing your recipients',
  'Rates and fees',
];

const articles = {
  "Sending money basics": "To send money, start from your Home screen and tap the 'Send' button or the 'Send' tab in the bottom navigation. Enter the recipient's details, the amount, and follow the prompts. You'll see a summary before confirming. Make sure your balance is sufficient. If you need help, tap the help icon at any time.",
  "Where is my money?": "After sending money, you can track your transfer from the Home screen's recent activity or the Transactions screen. Each transaction shows its status (e.g., pending, completed). If a transfer is delayed, check your notifications for updates or contact support via the Help section.",
  "Mistakes and editing your transfer": "If you made a mistake (wrong amount or recipient), go to the Transactions screen, select the transfer, and look for the 'Edit' or 'Cancel' option. If the transfer is already processed, contact support immediately from the Help screen for further assistance.",
  "Cancellations and refunds": "You can cancel a transfer from the Transactions screen if it hasn't been completed. Tap the transaction, then 'Cancel.' If eligible, your funds will be refunded to your account balance. Refunds may take a few minutes to process.",
  "We support these countries and currencies": "Our app allows you to send money to a wide range of countries and currencies. On the Send screen, you'll see a list of supported destinations. If your desired country isn't listed, it's not currently supported. We're always working to expand our coverage!",
  "Ways to pay": "You can fund your transfers using your app balance. Simply ensure you have enough funds before sending. In future updates, we may add more payment methods for your convenience.",
  "Verifying your transfer": "For your security, some transfers may require additional verification. If prompted, follow the on-screen instructions to verify your identity or confirm the transaction. This helps keep your account safe.",
  "Sending money from your Wise account": "If you have a Wise account linked, you can select it as a funding source on the Send screen. Enter the amount, choose Wise as the source, and proceed as usual. Make sure your Wise account is connected and funded.",
  "Sending large transfers": "For large transfers, you may be asked for extra verification or documentation. This is to comply with financial regulations and keep your money safe. Follow any prompts, and contact support if you need help with large amounts.",
  "Managing your recipients": "You can view and manage your saved recipients from the Send screen. Tap 'Choose recipient' to see your list, add new ones, or remove outdated contacts. Keeping your recipient list up to date helps prevent mistakes.",
  "Rates and fees": "Before confirming a transfer, you'll see a summary showing the exchange rate and any fees. We're committed to transparency—no hidden charges. Review the summary carefully before sending.",
};

export default function HelpSendingMoneyScreen({ navigation }) {
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
        <Text style={styles.headerTitle}>Sending money</Text>
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
