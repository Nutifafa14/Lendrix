import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Modal,
  Pressable,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomTabs from '../components/BottomTabs';

const currencyData = {
  USD: { rate: 10.28, flag: 'https://flagcdn.com/w320/us.png' },
  EUR: { rate: 11.15, flag: 'https://flagcdn.com/w320/eu.png' },
  GBP: { rate: 13.21, flag: 'https://flagcdn.com/w320/gb.png' },
  GHS: { rate: 1.0, flag: 'https://flagcdn.com/w320/gh.png' },
  NGN: { rate: 0.074, flag: 'https://flagcdn.com/w320/ng.png' },
  CAD: { rate: 7.60, flag: 'https://flagcdn.com/w320/ca.png' },
  AUD: { rate: 6.95, flag: 'https://flagcdn.com/w320/au.png' },
  JPY: { rate: 0.091, flag: 'https://flagcdn.com/w320/jp.png' },
  CNY: { rate: 1.42, flag: 'https://flagcdn.com/w320/cn.png' },
  INR: { rate: 0.12, flag: 'https://flagcdn.com/w320/in.png' },
  ZAR: { rate: 0.56, flag: 'https://flagcdn.com/w320/za.png' },
};

const { width } = Dimensions.get('window');

const SendScreen = ({ navigation }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [modalVisible, setModalVisible] = useState(false);
  const [amount, setAmount] = useState('');

  const handleAmountChange = (text) => {
    setAmount(text.replace(/[^0-9.]/g, ''));
  };

  const calculateConvertedAmount = () => {
    const rate = currencyData[selectedCurrency].rate;
    const fee = 0.57;
    const amountNum = parseFloat(amount);
    if (isNaN(amountNum)) return '0.00';
    return ((amountNum - fee) * rate).toFixed(2);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Static Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={32} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Send Money</Text>
      </View>
      <ScrollView contentContainerStyle={{ ...styles.container, flexGrow: 1, paddingBottom: 40 }}>
        {/* Form Content */}
        <Text style={styles.label}>Recipient's Full Name</Text>
        <TextInput placeholder="Enter full name" style={styles.input} />
        <Text style={styles.label}>Recipient's Bank Account</Text>
        <TextInput placeholder="Enter account number" style={styles.input} keyboardType="numeric" />
        <Text style={styles.label}>Recipient's Email</Text>
        <TextInput placeholder="Enter email address" style={styles.input} keyboardType="email-address" />
        <Text style={styles.label}>Transfer Amount</Text>
        <View style={styles.transferRow}>
          <TextInput
            style={styles.amountInput}
            keyboardType="numeric"
            placeholder="Amount"
            value={amount}
            onChangeText={handleAmountChange}
          />
          <TouchableOpacity style={styles.dropdown} onPress={() => setModalVisible(true)}>
            <Image source={{ uri: currencyData[selectedCurrency].flag }} style={styles.flag} />
            <Text style={styles.currencyText}>{selectedCurrency} ⌵</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.estimate}>
          Estimated equivalent: 1 {selectedCurrency} = {currencyData[selectedCurrency].rate} GHS
        </Text>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryText}>
            Exchange Rate: 1 {selectedCurrency} = {currencyData[selectedCurrency].rate} GHS
          </Text>
          <Text style={styles.summaryText}>
            Transfer Fee: 0.57 {selectedCurrency}
          </Text>
          <Text style={[styles.summaryText, styles.recipientGets]}>
            Recipient Gets: {calculateConvertedAmount()} GHS
          </Text>
        </View>
        <TouchableOpacity style={styles.continueBtn} onPress={() => navigation.navigate('SuccessScreen')}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
        {/* Currency Modal */}
        <Modal visible={modalVisible} animationType="slide" transparent>
          <Pressable style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
            <View style={styles.modalContainer}>
              {Object.entries(currencyData).map(([code, data]) => (
                <TouchableOpacity
                  key={code}
                  style={styles.currencyOption}
                  onPress={() => {
                    setSelectedCurrency(code);
                    setModalVisible(false);
                  }}
                >
                  <Image source={{ uri: data.flag }} style={styles.flag} />
                  <Text style={styles.optionText}>{code}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </Pressable>
        </Modal>
        <BottomTabs navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  backBtn: {
    marginBottom: 10,
    marginTop: 30,
    alignSelf: 'flex-start',
  },
  backArrow: {
    fontSize: 40,
    color: '#000',
    fontWeight: '500',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    color: '#000',
    marginRight: 38,
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontWeight: '600',
    marginBottom: 6,
    fontSize: 16,
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
  },
  transferRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountInput: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 12,
    fontSize: 16,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 12,
    height: '100%',
  },
  currencyText: {
    marginLeft: 5,
    fontSize: 14,
  },
  flag: {
    width: 20,
    height: 14,
    resizeMode: 'contain',
  },
  estimate: {
    color: '#777',
    fontSize: 16,
    marginVertical: 15,
  },
  summaryBox: {
    backgroundColor: '#f9f9f9',
    padding: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 25,
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 0,
  },
  recipientGets: {
    backgroundColor: '#e0f7fa',
    padding: 10,
    borderRadius: 8,
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 22,
  },
  continueBtn: {
    backgroundColor: '#75eaff',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  continueText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  currencyOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default SendScreen;
