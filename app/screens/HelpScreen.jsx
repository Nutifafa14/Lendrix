import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

const helpTopics = [
  {
    icon: <Feather name="arrow-up-right" size={22} color="#222" />,
    title: 'Sending money',
    desc: 'Setting up, paying for, editing, and cancelling transfers.',
  },
  {
    icon: <Feather name="user" size={22} color="#222" />,
    title: 'Managing your account',
    desc: 'Setting up your account and getting verified.',
  },
  {
    icon: <Feather name="credit-card" size={22} color="#222" />,
    title: 'Lendrix card',
    desc: 'Ordering, activating, spending, and troubleshooting.',
  },
  {
    icon: <Feather name="arrow-down-left" size={22} color="#222" />,
    title: 'Receiving money',
    desc: 'Using your account details to receive money.',
  },
];

export default function HelpScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Close Button */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeBtn}>
          <Ionicons name="close" size={28} color="#222" />
        </TouchableOpacity>

        <Text style={styles.header}>Hi, how can we help?</Text>

        <Text style={styles.sectionLabel}>Explore all topics</Text>
        <View style={styles.divider} />

        {helpTopics.map((topic, idx) => (
          <TouchableOpacity key={topic.title} style={styles.topicRow}
            onPress={() => {
              if (topic.title === 'Managing your account') {
                navigation.navigate('HelpManageAccountScreen');
              } else if (topic.title === 'Sending money') {
                navigation.navigate('HelpSendingMoneyScreen');
              } else if (topic.title === 'Lendrix card') {
                navigation.navigate('HelpVirtualCardScreen');
              } else if (topic.title === 'Receiving money') {
                navigation.navigate('HelpReceiveMoneyScreen');
              }
            }}
          >
            <View style={styles.topicIconCircle}>{topic.icon}</View>
            <View style={{ flex: 1 }}>
              <Text style={styles.topicTitle}>{topic.title}</Text>
              <Text style={styles.topicDesc}>{topic.desc}</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#234F1E" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  closeBtn: {
    alignSelf: 'flex-start',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    padding: 4,
    marginBottom: 10,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 18,
    marginTop: 10,
    color: '#111',
  },
  sectionLabel: {
    fontSize: 15,
    color: '#222',
    marginBottom: 8,
    marginTop: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginBottom: 10,
    width: '100%',
  },
  topicRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
  },
  topicIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    borderWidth: 1,
    borderColor: '#eee',
  },
  topicTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
  },
  topicDesc: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
});
