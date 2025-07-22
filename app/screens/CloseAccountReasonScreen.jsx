import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../components/ThemeContext';

const reasons = [
  'Problems with my transfer',
  "Couldn't find the currency I wanted",
  'I want to change my account details',
  'Not using my account anymore',
  'Other reasons',
];

export default function CloseAccountReasonScreen({ navigation }) {
  const { effectiveTheme } = useTheme();
  const isDark = effectiveTheme === 'dark';
  const colors = {
    background: isDark ? '#111' : '#fff',
    text: isDark ? '#fff' : '#111',
    subText: isDark ? '#ccc' : '#444',
    radio: isDark ? '#fff' : '#222',
    radioSelected: '#69DDF1',
    btn: '#69DDF1',
    btnText: '#000',
    skipBorder: isDark ? '#fff' : '#234F1E',
    skipText: '#234F1E',
  };
  const [selected, setSelected] = useState(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.background }]} showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.backBtn, { backgroundColor: '#f5f5f5', marginTop: 16 }]}> 
          <Ionicons name="arrow-back" size={28} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.header, { color: colors.text }]}>Tell us why you're leaving</Text>
        <Text style={[styles.desc, { color: colors.subText }]}>Please choose an option.</Text>
        {reasons.map((reason, idx) => (
          <TouchableOpacity
            key={reason}
            style={styles.reasonRow}
            onPress={() => setSelected(idx)}
            activeOpacity={0.7}
          >
            <Text style={[styles.reasonText, { color: colors.text }]}>{reason}</Text>
            <View style={[styles.radioCircle, { borderColor: colors.radioSelected }]}> 
              {selected === idx && <View style={[styles.radioDot, { backgroundColor: colors.radioSelected }]} />} 
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.bottomBtns}>
        <TouchableOpacity
          style={[styles.submitBtn, { backgroundColor: selected === null ? '#eee' : colors.btn }]}
          disabled={selected === null}
          onPress={() => navigation.navigate('CloseAccountFinalScreen')}
        >
          <Text style={[styles.submitText, { color: selected === null ? '#888' : colors.btnText }]}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.skipBtn, { borderColor: colors.skipBorder }]}
          onPress={() => navigation.navigate('CloseAccountFinalScreen')}
        >
          <Text style={[styles.skipText, { color: colors.skipText }]}>Skip</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 24,
  },
  reasonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  reasonText: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  radioCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
  },
  radioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  bottomBtns: {
    padding: 24,
    paddingTop: 0,
    backgroundColor: 'transparent',
  },
  submitBtn: {
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  submitText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  skipBtn: {
    borderRadius: 30,
    borderWidth: 2,
    paddingVertical: 16,
    alignItems: 'center',
  },
  skipText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
}); 