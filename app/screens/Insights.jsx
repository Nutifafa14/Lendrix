import React, { useState } from 'react';
import {
  View, Text, StyleSheet, Pressable, TextInput, ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Insights({ navigation }) {
  const [activeTab, setActiveTab] = useState('Last Month');
  const [totalSent, setTotalSent] = useState('2300.00');
  const [totalReceived, setTotalReceived] = useState('4900.89');
  const [totalExchanged, setTotalExchanged] = useState('56000.00');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backBtn} onPress={() => navigation && navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </Pressable>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.title}>Financial Insights</Text>
        </View>
        <View style={{ width: 34 }} />
      </View>
      <View style={styles.headerDivider} />
      <View style={styles.tabContainer}>
        <Pressable
          style={[styles.tab, activeTab === 'This Month' && styles.tabActive]}
          onPress={() => setActiveTab('This Month')}
        >
          <Text style={activeTab === 'This Month' ? styles.tabTextActive : styles.tabText}>This Month</Text>
        </Pressable>
        <Pressable
          style={[styles.tab, activeTab === 'Last Month' && styles.tabActive]}
          onPress={() => setActiveTab('Last Month')}
        >
          <Text style={activeTab === 'Last Month' ? styles.tabTextActive : styles.tabText}>Last Month</Text>
        </Pressable>
      </View>

      <View style={styles.boxRow}>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Total Sent</Text>
          <TextInput
            value={`GHS ${totalSent}`}
            onChangeText={val => setTotalSent(val.replace(/[^0-9.]/g, ''))}
            keyboardType="numeric"
            style={styles.boxValue}
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Total Received</Text>
          <TextInput
            value={`GHS ${totalReceived}`}
            onChangeText={val => setTotalReceived(val.replace(/[^0-9.]/g, ''))}
            keyboardType="numeric"
            style={styles.boxValue}
          />
        </View>
      </View>

      <View style={styles.largeBox}>
        <Text style={styles.boxLabel}>Total Exchanged</Text>
        <TextInput
          value={`GHS ${totalExchanged}`}
          onChangeText={val => setTotalExchanged(val.replace(/[^0-9.]/g, ''))}
          keyboardType="numeric"
          style={styles.boxValue}
        />
      </View>

      <Text style={styles.sectionTitle}>Spending Analysis</Text>

      <Text style={styles.subTitle}>By Recipient</Text>
      <View style={styles.barContainer}><View style={[styles.bar, { width: '80%', backgroundColor: 'lightgreen' }]} /></View>
      <Text>Family</Text>
      <View style={styles.barContainer}><View style={[styles.bar, { width: '60%', backgroundColor: 'lightyellow' }]} /></View>
      <Text>Friends</Text>

      <Text style={styles.subTitle}>By Country</Text>
      <View style={styles.barContainer}><View style={[styles.bar, { width: '90%', backgroundColor: 'pink' }]} /></View>
      <Text>Ghana</Text>
      <View style={styles.barContainer}><View style={[styles.bar, { width: '65%', backgroundColor: 'salmon' }]} /></View>
      <Text>Nigeria</Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingTop: 40,
  },
  backBtn: { marginRight: 10 },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center' },

  tabContainer: { flexDirection: 'row', marginVertical: 10 },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    marginRight: 5
  },
  tabActive: { backgroundColor: '#ccf5ff' },
  tabText: { color: '#333' },
  tabTextActive: { color: '#000', fontWeight: 'bold' },

  boxRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  box: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  largeBox: {
    marginTop: 10,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  boxLabel: { fontSize: 14, marginBottom: 5 },
  boxValue: { fontSize: 16, fontWeight: 'bold', borderBottomWidth: 1, borderColor: '#eee' },

  sectionTitle: { marginTop: 20, fontSize: 16, fontWeight: 'bold' },
  subTitle: { marginTop: 15, fontSize: 14, fontWeight: 'bold' },
  barContainer: { height: 30, backgroundColor: '#eee', borderRadius: 0, marginVertical: 4 },
  bar: { height: '100%', borderRadius: 0 },

  headerDivider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 12,
    width: '100%',
  },
});
