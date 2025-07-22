import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Linking, ScrollView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useTheme } from '../components/ThemeContext';

export default function CloseAccountScreen({ navigation }) {
  const { effectiveTheme } = useTheme();
  const isDark = effectiveTheme === 'dark';
  const colors = {
    background: isDark ? '#111' : '#fff',
    text: isDark ? '#fff' : '#111',
    subText: isDark ? '#ccc' : '#444',
    divider: isDark ? '#333' : '#eee',
    iconBg: isDark ? '#222' : '#fafafa',
    green: '#69DDF1',
    greenText: '#000',
    link: '#234F1E',
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.backBtn, { backgroundColor: colors.iconBg, marginTop: 16 }]}> 
          <Ionicons name="arrow-back" size={28} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.header, { color: colors.text }]}>Close your account</Text>
        <Text style={[styles.desc, { color: colors.text }]}>Follow these steps to start closing your account.</Text>
        <Text style={[styles.desc, { color: colors.text, marginBottom: 18 }]}>To come back to Lendrix in future, you'll need to reopen this account.</Text>
        <Text style={[styles.sectionLabel, { color: colors.text }]}>Recommended actions</Text>
        <View style={[styles.divider, { backgroundColor: colors.divider }]} />
        <Text style={[styles.desc, { color: colors.text, marginBottom: 18 }]}>By law, we are obliged to hold your data for 6 years, but you will no longer have access to your Lendrix activity and transaction history.</Text>
        <View style={styles.actionRow}>
          <Feather name="file-text" size={22} color={colors.text} style={styles.actionIcon} />
          <View style={{ flex: 1 }}>
            <Text style={[styles.actionTitle, { color: colors.text }]}>Download your statements and reports</Text>
            <Text style={[styles.actionDesc, { color: colors.subText }]}>To download statements, log in to your account on a web browser and go to Manage.</Text>
          </View>
        </View>
        <View style={styles.actionRow}>
          <Feather name="clipboard" size={22} color={colors.text} style={styles.actionIcon} />
          <View style={{ flex: 1 }}>
            <Text style={[styles.actionTitle, { color: colors.text }]}>Download receipts</Text>
            <Text style={[styles.actionDesc, { color: colors.subText }]}>For individual transactions, you can download a PDF receipt and save any uploaded receipts or invoices.</Text>
            <TouchableOpacity onPress={() => navigation.navigate('TransactionsScreen')}>
              <Text style={[styles.link, { color: colors.link }]}>Go to transactions</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={[styles.closeBtn, { backgroundColor: colors.green }]}
        onPress={() => navigation.navigate('CloseAccountReasonScreen')}
      >
        <Text style={[styles.closeBtnText, { color: colors.greenText }]}>Start account closure</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 40,
  },
  backBtn: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    padding: 4,
    marginBottom: 18,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  desc: {
    fontSize: 15,
    marginBottom: 4,
  },
  sectionLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 8,
  },
  divider: {
    height: 1,
    marginBottom: 18,
    width: '100%',
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  actionIcon: {
    marginRight: 14,
    marginTop: 2,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  actionDesc: {
    fontSize: 13,
    marginBottom: 2,
  },
  link: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 4,
    textDecorationLine: 'underline',
  },
  closeBtn: {
    borderRadius: 30,
    paddingVertical: 18,
    alignItems: 'center',
    margin: 24,
    marginBottom: 32,
  },
  closeBtnText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
}); 