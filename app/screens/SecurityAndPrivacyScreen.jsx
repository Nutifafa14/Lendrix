import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Modal } from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const securityOptions = [
  {
    icon: <Feather name="shield" size={22} color="#222" />,
    title: 'Password',
    desc: '********',
  },
  {
    icon: <MaterialCommunityIcons name="fingerprint" size={22} color="#222" />, // fingerprint icon
    title: '2-step verification',
    desc: 'Status: On',
    warning: true,
  },
  {
    icon: <Feather name="grid" size={22} color="#222" />,
    title: 'App security',
    desc: 'Passcode is required if you don\'t use this app for 5 minutes',
    isAppSecurity: true,
  },
  {
    icon: <Feather name="link-2" size={22} color="#222" />,
    title: 'Social login options',
    desc: 'Manage the social accounts you use to log in',
  },
  {
    icon: <Feather name="smartphone" size={22} color="#222" />,
    title: 'Devices',
    desc: 'Manage your devices',
  },
  {
    icon: <Feather name="log-out" size={22} color="#222" />,
    title: 'Log out everywhere',
    desc: 'If you notice any suspicious activity, log out across all devices',
  },
];

export default function SecurityAndPrivacyScreen({ navigation }) {
  const [showAppSecurity, setShowAppSecurity] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={28} color="#222" />
        </TouchableOpacity>
        <Text style={styles.header}>Security and privacy</Text>
        <Text style={styles.sectionLabel}>Security</Text>
        {securityOptions.map((item, idx) => (
          <TouchableOpacity
            key={item.title}
            style={styles.itemRow}
            onPress={() => {
              if (item.isAppSecurity) setShowAppSecurity(true);
              else if (item.title === 'Password') navigation.navigate('ChangePasswordScreen');
              else if (item.title === '2-step verification') navigation.navigate('TwoFactorAuthScreen');
              else if (item.title === 'Social login options') navigation.navigate('SocialLoginOptionsScreen');
              else if (item.title === 'Devices') navigation.navigate('DevicesScreen');
              else if (item.title === 'Log out everywhere') navigation.navigate('LogOutEverywhereScreen');
            }}
          >
            <View style={styles.iconCircle}>
              {item.icon}
              {item.warning && (
                <View style={styles.warningDot} />
              )}
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              {item.desc && <Text style={styles.itemDesc}>{item.desc}</Text>}
            </View>
            <Feather name="chevron-right" size={20} color="#234F1E" />
          </TouchableOpacity>
        ))}
        {/* App Security Bottom Sheet */}
        {showAppSecurity && (
          <View style={styles.overlay}>
            <TouchableOpacity style={styles.overlayBg} onPress={() => setShowAppSecurity(false)} />
            <View style={styles.bottomSheet}>
              <View style={styles.sheetHandle} />
              <Text style={styles.sheetHeader}>App security</Text>
              <TouchableOpacity
                style={styles.sheetRow}
                onPress={() => {
                  setShowAppSecurity(false);
                  setTimeout(() => navigation.navigate('ChangePasscodeScreen'), 200);
                }}
              >
                <View style={styles.sheetIconCircle}>
                  <Feather name="grid" size={22} color="#222" />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.sheetTitle}>Change passcode</Text>
                  <Text style={styles.sheetDesc}>For unlocking this app when you haven't used it for 5 minutes</Text>
                </View>
                <Feather name="chevron-right" size={20} color="#234F1E" />
              </TouchableOpacity>
            </View>
          </View>
        )}
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
    fontWeight: 'bold',
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
    position: 'relative',
  },
  warningDot: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFD600',
    borderWidth: 1,
    borderColor: '#fff',
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
  // Custom modal styles
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    zIndex: 100,
  },
  overlayBg: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.15)',
  },
  bottomSheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingBottom: 36,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  sheetHandle: {
    width: 40,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#eee',
    alignSelf: 'center',
    marginBottom: 18,
  },
  sheetHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#111',
  },
  sheetRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
  },
  sheetIconCircle: {
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
  sheetTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
  },
  sheetDesc: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
});
