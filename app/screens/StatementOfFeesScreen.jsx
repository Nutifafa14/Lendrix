import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const periods = [
  { label: 'Last month', range: { start: '29 April 2025', end: '29 May 2025' } },
  { label: 'Last quarter', range: { start: '01 March 2025', end: '29 May 2025' } },
  { label: 'Last year', range: { start: '29 May 2024', end: '29 May 2025' } },
];

function formatDate(date) {
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

export default function StatementOfFeesScreen({ navigation }) {
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [startDate, setStartDate] = useState(new Date(2025, 3, 29)); // 29 April 2025
  const [endDate, setEndDate] = useState(new Date(2025, 4, 29)); // 29 May 2025
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const handlePeriodSelect = (period) => {
    setSelectedPeriod(period.label);
    setStartDate(new Date(period.range.start));
    setEndDate(new Date(period.range.end));
  };

  const onChangeStart = (event, selectedDate) => {
    setShowStartPicker(Platform.OS === 'ios');
    if (selectedDate) setStartDate(selectedDate);
  };
  const onChangeEnd = (event, selectedDate) => {
    setShowEndPicker(Platform.OS === 'ios');
    if (selectedDate) setEndDate(selectedDate);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={28} color="#222" />
        </TouchableOpacity>
        <Text style={styles.header}>Statement of fees</Text>
        <Text style={styles.desc}>Summary of the fees you have paid on your account.</Text>
        <Text style={styles.desc2}>
          Statements can cover any period of time up to one year. For longer periods, you'll need to download multiple statements.
        </Text>
        {/* Period Buttons */}
        <View style={styles.periodRow}>
          {periods.map((period) => (
            <TouchableOpacity
              key={period.label}
              style={[styles.periodBtn, selectedPeriod === period.label && styles.periodBtnActive]}
              onPress={() => handlePeriodSelect(period)}
            >
              <Text style={[styles.periodBtnText, selectedPeriod === period.label && styles.periodBtnTextActive]}>{period.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Date Pickers */}
        <Text style={styles.label}>Select a start date</Text>
        <TouchableOpacity style={styles.dateInput} onPress={() => setShowStartPicker(true)}>
          <Text style={styles.dateText}>{formatDate(startDate)}</Text>
          <Ionicons name="chevron-down" size={20} color="#888" />
        </TouchableOpacity>
        {showStartPicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="default"
            onChange={onChangeStart}
            maximumDate={endDate}
          />
        )}
        <Text style={styles.label}>Select an end date</Text>
        <TouchableOpacity style={styles.dateInput} onPress={() => setShowEndPicker(true)}>
          <Text style={styles.dateText}>{formatDate(endDate)}</Text>
          <Ionicons name="chevron-down" size={20} color="#888" />
        </TouchableOpacity>
        {showEndPicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="default"
            onChange={onChangeEnd}
            minimumDate={startDate}
          />
        )}
        {/* Download Button */}
        <TouchableOpacity style={styles.downloadBtn}>
          <Text style={styles.downloadText}>Download</Text>
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
  desc: {
    fontSize: 15,
    color: '#222',
    marginBottom: 6,
  },
  desc2: {
    fontSize: 14,
    color: '#444',
    marginBottom: 18,
  },
  periodRow: {
    flexDirection: 'row',
    marginBottom: 18,
    gap: 10,
  },
  periodBtn: {
    borderWidth: 1,
    borderColor: '#69DDF1',
    borderRadius: 18,
    paddingVertical: 7,
    paddingHorizontal: 16,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  periodBtnActive: {
    backgroundColor: '#69DDF1',
    borderColor: '#69DDF1',
  },
  periodBtnText: {
    color: '#69DDF1',
    fontWeight: '500',
    fontSize: 15,
  },
  periodBtnTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 15,
    color: '#222',
    marginBottom: 6,
    marginTop: 10,
    fontWeight: 'bold',
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#fafafa',
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 15,
    color: '#222',
  },
  downloadBtn: {
    backgroundColor: '#69DDF1',
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 24,
  },
  downloadText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
}); 