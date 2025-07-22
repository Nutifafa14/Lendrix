import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const tabs = [
  { icon: 'home', label: 'Home', screen: 'HomeScreen' },
  { icon: 'arrow-up-circle', label: 'Send', screen: 'SendScreen' },
  { icon: 'arrow-down-circle', label: 'Receive', screen: 'ReceiveScreen' },
  { icon: 'user', label: 'Account', screen: 'UserAccountScreen' },
];

export default function BottomTabs({ navigation }) {
  const insets = useSafeAreaInsets();
  return (
    <View style={{
      flexDirection: 'row',
      borderTopWidth: 1,
      borderColor: '#ccc',
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddingBottom: insets.bottom
    }}>
      {tabs.map((item, idx) => (
        <TouchableOpacity
          key={idx}
          style={{ flex: 1, alignItems: 'center' }}
          onPress={() => navigation.navigate(item.screen)}
        >
          <Feather name={item.icon} size={24} color="black" />
          <Text style={{ fontSize: 12 }}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}