import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../components/ThemeContext';

const user = {
  initials: 'ND',
  name: 'Nutifafa Adzo Dziedzoave',
  type: 'Personal account',
};

const bulletPoints = [
  'Your Lendrix cards will be permanently deactivated',
  'The account details for receiving money will be permanently deactivated',
  'Any payment request links will stop working',
  'All scheduled transfers and direct debits will be cancelled',
];

export default function CloseAccountFinalScreen({ navigation }) {
  const { effectiveTheme } = useTheme();
  const isDark = effectiveTheme === 'dark';
  const colors = {
    background: isDark ? '#111' : '#fff',
    text: isDark ? '#fff' : '#111',
    card: isDark ? '#181818' : '#fff',
    border: isDark ? '#333' : '#eee',
    red: '#D32F2F',
    redText: '#fff',
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={[styles.container, { backgroundColor: colors.background }]}> 
        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.backBtn, { backgroundColor: '#f5f5f5', marginTop: 16 }]}> 
          <Ionicons name="arrow-back" size={28} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.header, { color: colors.text }]}>What happens when you close your account</Text>
        <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}> 
          <View style={styles.userRow}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarText}>{user.initials}</Text>
            </View>
            <View>
              <Text style={[styles.userName, { color: colors.text }]}>{user.name}</Text>
              <Text style={[styles.userType, { color: colors.text }]}>{user.type}</Text>
            </View>
          </View>
          <View style={styles.divider} />
          {bulletPoints.map((point, idx) => (
            <View key={idx} style={styles.bulletRow}>
              <Text style={styles.bulletDot}>{'7'}</Text>
              <Text style={[styles.bulletText, { color: colors.text }]}>{point}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity style={[styles.closeBtn, { backgroundColor: colors.red }]}
          onPress={() => {/* handle final close */}}>
          <Text style={[styles.closeBtnText, { color: colors.redText }]}>Close account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 24,
  },
  card: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    marginBottom: 40,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userType: {
    fontSize: 14,
    color: '#888',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 16,
    width: '100%',
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  bulletDot: {
    fontSize: 22,
    marginRight: 10,
    color: '#888',
    lineHeight: 22,
  },
  bulletText: {
    fontSize: 15,
    flex: 1,
  },
  closeBtn: {
    borderRadius: 30,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 24,
  },
  closeBtnText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
}); 