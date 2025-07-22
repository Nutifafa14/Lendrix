import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useTheme } from '../components/ThemeContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function PersonalDetailsScreen({ navigation }) {
  const { effectiveTheme } = useTheme();
  const insets = useSafeAreaInsets();
  const isDark = effectiveTheme === 'dark';
  const colors = {
    background: isDark ? '#111' : '#fff',
    text: isDark ? '#fff' : '#111',
    subText: isDark ? '#ccc' : '#444',
    iconBg: isDark ? '#222' : '#fafafa',
    border: isDark ? '#333' : '#eee',
    chevron: isDark ? '#fff' : '#222',
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={[styles.container, { backgroundColor: colors.background }]}> 
        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.backBtn, { backgroundColor: colors.iconBg, marginTop: insets.top || 16 }]}> 
          <Ionicons name="arrow-back" size={28} color={colors.chevron} />
        </TouchableOpacity>
        <Text style={[styles.header, { color: colors.text }]}>Personal details</Text>
        <TouchableOpacity style={[styles.row, { borderColor: colors.border }]} onPress={() => navigation.navigate('PersonalInformationScreen')}>
          <View style={[styles.iconCircle, { backgroundColor: colors.iconBg, borderColor: colors.border }]}> 
            <Feather name="user" size={22} color={colors.chevron} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.rowTitle, { color: colors.text }]}>Personal information</Text>
            <Text style={[styles.rowDesc, { color: colors.subText }]}>Manage your personal information</Text>
          </View>
          <Feather name="chevron-right" size={20} color={colors.chevron} />
        </TouchableOpacity>
        <View style={[styles.row, { borderColor: colors.border }]}>
          <View style={[styles.iconCircle, { backgroundColor: colors.iconBg, borderColor: colors.border }]}> 
            <Feather name="mail" size={22} color={colors.chevron} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.rowTitle, { color: colors.text }]}>Email address</Text>
            <Text style={[styles.rowDesc, { color: colors.subText }]}>nutifafadzieidzoave@gmail.com</Text>
          </View>
        </View>
        <View style={[styles.row, { borderColor: colors.border }]}>
          <View style={[styles.iconCircle, { backgroundColor: colors.iconBg, borderColor: colors.border }]}> 
            <Feather name="smartphone" size={22} color={colors.chevron} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.rowTitle, { color: colors.text }]}>Mobile number</Text>
            <Text style={[styles.rowDesc, { color: colors.subText }]}>+233551133908</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 10,
    marginBottom: 16,
    borderWidth: 1,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    borderWidth: 1,
  },
  rowTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rowDesc: {
    fontSize: 13,
    marginTop: 2,
  },
}); 