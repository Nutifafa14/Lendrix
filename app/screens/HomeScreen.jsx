import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, StyleSheet, Pressable, ScrollView,
  Image, Platform, Dimensions, TouchableOpacity, Modal, FlatList, Alert
} from 'react-native';
import { Ionicons, Feather, MaterialIcons, Entypo } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomTabs from '../components/BottomTabs';

const { width } = Dimensions.get('window');
const EXCHANGE_API_KEY = 'aa77171108427c01fd5c95c7'; // TODO: Move to env for production

const currencies = ['USD', 'EUR', 'GBP', 'GHS', 'NGN', 'CAD', 'AUD', 'JPY', 'CNY', 'INR', 'ZAR'];
const FLAGS = {
  USD: 'https://flagcdn.com/40x30/us.png',
  EUR: 'https://flagcdn.com/40x30/eu.png',
  GBP: 'https://flagcdn.com/40x30/gb.png',
  GHS: 'https://flagcdn.com/40x30/gh.png',
  NGN: 'https://flagcdn.com/40x30/ng.png',
  CAD: 'https://flagcdn.com/40x30/ca.png',
  AUD: 'https://flagcdn.com/40x30/au.png',
  JPY: 'https://flagcdn.com/40x30/jp.png',
  CNY: 'https://flagcdn.com/40x30/cn.png',
  INR: 'https://flagcdn.com/40x30/in.png',
  ZAR: 'https://flagcdn.com/40x30/za.png',
};

const transactionsData = [
  { id: '1', name: 'Nutifafa Dziedzoave', type: 'Transfer', amount: 5000, avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { id: '2', name: 'Frederick Baah', type: 'Transfer', amount: 5000, avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { id: '3', name: 'Carie-Anne Banseh', type: 'Payment', amount: 5000, avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
];

export default function HomeScreen() {
  // State
  const [showBalance, setShowBalance] = useState(true);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [fromAmount, setFromAmount] = useState('789.78');
  const [toAmount, setToAmount] = useState('');
  const [exchangeRate, setExchangeRate] = useState(0);
  const [exchangeHistory, setExchangeHistory] = useState([]);
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);
  const [viewAll, setViewAll] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const insets = useSafeAreaInsets();

  // Debug logs for navigation params and state
  console.log('HomeScreen route params:', route.params);
  console.log('fromAmount:', fromAmount);
  console.log('toAmount:', toAmount);
  console.log('exchangeRate:', exchangeRate);
  console.log('exchangeHistory:', exchangeHistory);

  // Fetch exchange rate and fake history
  useEffect(() => {
    axios.get(`https://v6.exchangerate-api.com/v6/${EXCHANGE_API_KEY}/latest/${fromCurrency}`)
      .then(res => {
        console.log('API response:', res.data);
        const rawRate = Number(res.data.conversion_rates[toCurrency]);
        if (!rawRate || isNaN(rawRate) || !isFinite(rawRate)) {
          console.warn('Invalid rate received, using fallback.', rawRate);
          setExchangeRate(0.8693);
          const fallbackConverted = parseFloat(fromAmount || '0') * 0.8693;
          setToAmount(isFinite(fallbackConverted) && !isNaN(fallbackConverted) ? fallbackConverted.toFixed(2) : '0.00');
          setExchangeHistory([0.86, 0.87, 0.88, 0.86, 0.89, 0.87, 0.86, 0.88]);
        } else {
          setExchangeRate(rawRate);
          const converted = parseFloat(fromAmount || '0') * rawRate;
          setToAmount(isFinite(converted) && !isNaN(converted) ? converted.toFixed(2) : '0.00');
          const fakeHistory = Array.from({ length: 8 }, (_, i) => {
            const num = Number((rawRate + Math.sin(i) * 0.005).toFixed(4));
            if (!isFinite(num) || isNaN(num)) {
              console.warn('Invalid chart data point:', num);
              return 0;
            }
            return num;
          });
          setExchangeHistory(fakeHistory);
        }
      })
      .catch((e) => {
        console.log("Error" , e)
        Alert.alert('Exchange Rate Error', 'Failed to fetch exchange rates. Please try again later.');
        setExchangeRate(0.8693);
        const fallbackConverted = parseFloat(fromAmount || '0') * 0.8693;
        setToAmount(isFinite(fallbackConverted) && !isNaN(fallbackConverted) ? fallbackConverted.toFixed(2) : '0.00');
        setExchangeHistory([0.86, 0.87, 0.88, 0.86, 0.89, 0.87, 0.86, 0.88]);
      });
  }, [fromAmount, fromCurrency, toCurrency]);
  const safeData = (
    Array.isArray(exchangeHistory) &&
    exchangeHistory.length === 8 &&
    exchangeHistory.every(n => typeof n === 'number' && isFinite(n) && !isNaN(n))
  ) ? exchangeHistory : [0,0,0,0,0,0,0,0];
  console.log('safeData:', safeData);

  // Swap currencies and amounts
  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  // Quick Actions navigation
  const handleQuickAction = (label) => {
    if (label === 'Send money') navigation.navigate('Main', { screen: 'Send' });
    else if (label === 'Receive money') navigation.navigate('Main', { screen: 'Receive' });
    else if (label === 'Transactions') navigation.navigate('TransactionsScreen');
    else if (label === 'Insights') navigation.navigate('Insights');
    else Alert.alert(`${label} pressed`);
  };

  // Currency Picker Modal
  const CurrencyPicker = ({ visible, onSelect, onClose }) => (
    <Modal visible={visible} transparent animationType="slide">
      <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center' }}>
        <View style={{ backgroundColor: 'white', margin: 40, borderRadius: 8, padding: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Select Currency</Text>
          <FlatList
            data={currencies}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  onSelect(item);
                  onClose(); 
                }}
                style={{ paddingVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{ uri: FLAGS[item] }} style={{ width: 32, height: 22, marginRight: 10 }} />
                <Text style={{ fontSize: 16 }}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );

  // Input sanitization
  const sanitizeInput = (text) => {
    let sanitized = text.replace(/[^0-9.]/g, '');
    const parts = sanitized.split('.');
    if (parts.length > 2) sanitized = parts[0] + '.' + parts.slice(1).join('');
    return sanitized;
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Static Header */}
      <View style={[styles.headerContainer, { paddingTop: insets.top || 20, backgroundColor: '#fff', zIndex: 10 }]}> 
        <View style={styles.headerRow}>
          <View style={{ width: 40, alignItems: 'flex-start' }}>
            <Image source={{ uri: 'https://randomuser.me/api/portraits/women/1.jpg' }} style={styles.profilePic} />
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.topBarTitle}>Home</Text>
          </View>
          <View style={{ width: 40, alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={() => navigation.navigate('NotificationAlert')}>
              <Ionicons name="notifications-outline" size={28} color="#000" style={styles.notifIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.headerDivider} />
      </View>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 180 }}>
        <Text style={styles.welcome}>Welcome Florencia!</Text>
        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Your current balance</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceAmount}>
              {showBalance ? 'GHS 15,865.88' : '••••••••'}
            </Text>
            <Pressable onPress={() => setShowBalance(v => !v)} style={styles.eyeIconBox}>
              <Ionicons
                name={showBalance ? 'eye-outline' : 'eye-off-outline'}
                size={22}
                color="#888"
              />
            </Pressable>
          </View>
          <Text style={styles.balanceUpdated}>Last updated: 12th June, 2025</Text>
        </View>

        {/* Transfer Calculator */}
        <Text style={styles.sectionTitle}>Transfer calculator</Text>
        <View style={styles.transferBox}>
          <View style={styles.chartWrapper}>
            <View style={styles.labelRow}>
              <Text style={styles.labelText}>A month ago</Text>
              <Text style={styles.labelTextRight}>Today</Text>
            </View>
            <LineChart
              data={{
                labels: ['', '', '', '', '', '', '', ''],
                datasets: [{ data: safeData }]
              }}
              width={width - 40}
              height={120}
              chartConfig={{
                backgroundColor: '#eafaff',
                backgroundGradientFrom: '#eafaff',
                backgroundGradientTo: '#eafaff',
                decimalPlaces: 2,
                color: () => '#234F1E',
                labelColor: () => '#999',
                propsForDots: {
                  r: '3',
                  strokeWidth: '2',
                  stroke: '#234F1E'
                }
              }}
              withHorizontalLines={false}
              withVerticalLines={false}
              withDots
              withInnerLines={false}
              withOuterLines={false}
              bezier
              style={styles.chartStyle}
            />
          </View>
          <Text style={styles.smallText}>
            1 {fromCurrency} = {isFinite(exchangeRate) && !isNaN(exchangeRate) ? exchangeRate.toFixed(4) : '0.0000'} {toCurrency}
          </Text>
          <View style={styles.inputRow}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              keyboardType="numeric"
              value={fromAmount}
              onChangeText={text => setFromAmount(sanitizeInput(text))}
            />
            <Pressable style={styles.currencyPickerBox} onPress={() => setShowFromPicker(true)}>
              <Image source={{ uri: FLAGS[fromCurrency] }} style={styles.flagIcon} />
              <Text style={styles.currencyText}>{fromCurrency}</Text>
              <MaterialIcons name="keyboard-arrow-down" size={18} color="#234F1E" />
            </Pressable>
          </View>
          <View style={styles.swapRow}>
            <Pressable style={styles.swapCircle} onPress={handleSwapCurrencies}>
              <Entypo name="swap" size={22} color="#234F1E" />
            </Pressable>
          </View>
          <View style={styles.inputRow}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              keyboardType="numeric"
              value={toAmount}
              onChangeText={text => setToAmount(sanitizeInput(text))}
            />
            <Pressable style={styles.currencyPickerBox} onPress={() => setShowToPicker(true)}>
              <Image source={{ uri: FLAGS[toCurrency] }} style={styles.flagIcon} />
              <Text style={styles.currencyText}>{toCurrency}</Text>
              <MaterialIcons name="keyboard-arrow-down" size={18} color="#234F1E" />
            </Pressable>
          </View>
          <Pressable style={styles.sendBtn} onPress={() => Alert.alert('Send', 'Send functionality coming soon!')}>
            <Text style={styles.sendText}>Send</Text>
          </Pressable>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActionsGrid}>
          <View style={styles.quickActionsRow}>
            {[{ icon: 'send', label: 'Send money', color: 'dodgerblue', border: '#2196F3' },
              { icon: 'download', label: 'Receive money', color: 'deeppink', border: '#E91E63' }].map((item, idx) => (
              <Pressable
                key={idx}
                onPress={() => handleQuickAction(item.label)}
                style={[styles.quickAction, { borderColor: item.border }]}
              >
                <Feather name={item.icon} size={24} color={item.color} />
                <Text style={{ color: item.color, marginTop: 4 }}>{item.label}</Text>
              </Pressable>
            ))}
          </View>
          <View style={styles.quickActionsRow}>
            {[{ icon: 'file-text', label: 'Transactions', color: 'gold', border: '#FFEB3B' },
              { icon: 'bar-chart', label: 'Insights', color: 'limegreen', border: '#4CAF50' }].map((item, idx) => (
              <Pressable
                key={idx}
                onPress={() => handleQuickAction(item.label)}
                style={[styles.quickAction, { borderColor: item.border }]}
              >
                <Feather name={item.icon} size={24} color={item.color} />
                <Text style={{ color: item.color, marginTop: 4 }}>{item.label}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Recent Activity */}
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        {(viewAll ? transactionsData : transactionsData.slice(0, 3)).map(item => (
          <View key={item.id} style={styles.activityRow}>
            <Image source={{ uri: item.avatar }} style={styles.activityAvatar} />
            <View style={{ flex: 1 }}>
              <Text style={styles.activityName}>{item.name}</Text>
              <Text style={styles.activityType}>{item.type}</Text>
            </View>
            <Text style={styles.activityAmount}>
              $ {isFinite(item.amount) && !isNaN(item.amount) ? item.amount.toLocaleString() : '0.00'}
            </Text>
          </View>
        ))}
        <TouchableOpacity style={styles.viewAllRow} onPress={() => setViewAll(prev => !prev)}>
          <Text style={styles.viewAllText}>{viewAll ? 'Show Less' : 'View All'}</Text>
          <Feather name="chevron-right" size={18} color="#234F1E" />
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Tabs */}
      <BottomTabs navigation={navigation} />

      {/* Currency Pickers */}
      <CurrencyPicker visible={showFromPicker} onSelect={setFromCurrency} onClose={() => setShowFromPicker(false)} />
      <CurrencyPicker visible={showToPicker} onSelect={setToCurrency} onClose={() => setShowToPicker(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 40 : 60,
    backgroundColor: '#fff',
  },
  headerContainer: {
    marginBottom: 0,
    marginTop: 0,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  topBarTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  welcome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 0,
    marginLeft: 4,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  notifIcon: {
    marginLeft: 16,
  },
  headerDivider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 8,
    width: '100%',
  },
  balanceCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
  },
  balanceLabel: {
    color: '#888',
    fontSize: 14,
    marginBottom: 2,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  eyeIconBox: {
    marginLeft: 8,
    padding: 4,
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#234F1E',
  },
  balanceUpdated: {
    color: '#888',
    fontSize: 12,
    marginTop: 6,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 18,
    marginBottom: 10,
    color: '#000',
  },
  transferBox: {
    backgroundColor: '#eafaff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  chartWrapper: {
    marginBottom: 10,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  labelText: {
    fontSize: 12,
    color: '#888',
  },
  labelTextRight: {
    fontSize: 12,
    color: '#888',
    textAlign: 'right',
  },
  chartStyle: {
    borderRadius: 10,
    marginVertical: 4,
  },
  smallText: {
    fontSize: 13,
    color: '#234F1E',
    marginBottom: 10,
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    flex: 1,
    marginRight: 8,
  },
  currencyPickerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eafaff',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  flagIcon: {
    width: 22,
    height: 16,
    marginRight: 6,
    borderRadius: 2,
  },
  currencyText: {
    fontWeight: 'bold',
    color: '#234F1E',
    marginRight: 2,
  },
  swapRow: {
    alignItems: 'center',
    marginVertical: 4,
  },
  swapCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#eafaff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  sendBtn: {
    backgroundColor: '#69DDF1',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  sendText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  quickActionsGrid: {
    marginBottom: 10,
  },
  quickActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  quickAction: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 12,
    marginHorizontal: 4,
    paddingVertical: 14,
    backgroundColor: '#fff',
  },
  activityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  activityAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  activityName: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#222',
  },
  activityType: {
    fontSize: 12,
    color: '#888',
  },
  activityAmount: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#222',
  },
  viewAllRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 20,
  },
  viewAllText: {
    color: '#234F1E',
    fontWeight: 'bold',
    marginRight: 4,
  },
  bottomTabs: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingBottom: Platform.OS === 'android' ? 10 : 30,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
});