import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function StatAndReportScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={28} color="#222" />
        </TouchableOpacity>
        <Text style={styles.header}>Statements and reports</Text>
        <Text style={styles.sectionLabel}>Transactions and fees</Text>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.itemRow} onPress={() => navigation.navigate('StatementOfFeesScreen')}>
          <View style={styles.iconCircle}>
            <Feather name="percent" size={22} color="#222" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.itemTitle}>Statement of fees</Text>
            <Text style={styles.itemDesc}>Summary of the fees you have paid on your balances or Jars.</Text>
          </View>
          <Feather name="chevron-right" size={20} color="#234F1E" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  backBtn: {
    alignSelf: 'flex-start',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    padding: 4,
    marginBottom: 10,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
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
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
  },
  iconCircle: {
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
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
  },
  itemDesc: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
});
