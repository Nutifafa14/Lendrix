import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Switch } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function LendrixAppMethodScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={[styles.container, { marginTop: 32 }]}>
        {/* Header */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={28} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Lendrix App</Text>
        <Text style={styles.headerDesc}>
          You can use this app to confirm it's you during 2-step verification.
        </Text>
        {/* Warning Box */}
        <View style={styles.warningBox}>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
            <Feather name="alert-circle" size={22} color="#FFD600" style={{ marginTop: 2, marginRight: 8 }} />
            <View style={{ flex: 1 }}>
              <Text style={styles.warningText}>
                You have another device registered with app approval requests. If you need to change your security setup you have to trust this device.
              </Text>
              <TouchableOpacity style={styles.trustBtn}>
                <Text style={styles.trustBtnText}>Trust this device</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Toggle Row */}
        <View style={styles.toggleRow}>
          <View style={styles.iconCircle}>
            <Feather name="smartphone" size={22} color="#222" />
          </View>
          <Text style={styles.toggleLabel}>Verify with this app</Text>
          <Switch
            value={isEnabled}
            onValueChange={setIsEnabled}
            trackColor={{ false: '#ccc', true: '#234F1E' }}
            thumbColor={isEnabled ? '#fff' : '#fff'}
          />
        </View>
        {/* Remove Button */}
        <TouchableOpacity style={styles.removeBtn}>
          <Text style={styles.removeBtnText}>Remove this method</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 8,
  },
  headerDesc: {
    fontSize: 15,
    color: '#444',
    marginBottom: 18,
  },
  warningBox: {
    backgroundColor: '#F6F6F2',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E6E6E6',
  },
  warningText: {
    color: '#222',
    fontSize: 15,
    marginBottom: 8,
  },
  trustBtn: {
    backgroundColor: '#eee',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
  },
  trustBtnText: {
    fontWeight: 'bold',
    color: '#222',
    fontSize: 15,
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
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
  toggleLabel: {
    fontSize: 16,
    color: '#111',
    flex: 1,
    fontWeight: '600',
  },
  removeBtn: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 50,
    backgroundColor: '#69DDF1',
    borderRadius: 24,
    paddingVertical: 16,
    alignItems: 'center',
  },
  removeBtnText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 17,
  },
}); 