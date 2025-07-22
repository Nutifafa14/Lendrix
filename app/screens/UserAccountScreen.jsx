import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import BottomTabs from '../components/BottomTabs';

const user = {
  initials: 'FA',
  name: 'FLORENCE ASHIAGBOR',
  type: 'Personal account',
};

const menu = [
  {
    section: 'Your account',
    items: [
      { icon: <Feather name="help-circle" size={24} color="#222" />, label: 'Help' },
      { icon: <Feather name="file-text" size={22} color="#222" />, label: 'Statements and reports' },
    ],
  },
  {
    section: 'Settings',
    items: [
      {
        icon: <Feather name="shield" size={22} color="#222" />,
        label: 'Security and privacy',
        desc: 'Change your security and privacy settings',
      },
      {
        icon: <Feather name="bell" size={22} color="#222" />,
        label: 'Notifications',
        desc: 'Customize how you get updates',
      },
      {
        icon: <Feather name="circle" size={22} color="#222" />,
        label: 'Language and appearance',
        desc: 'Customize language settings and which theme is used',
      },
      {
        icon: <Feather name="user" size={22} color="#222" />,
        label: 'Personal details',
        desc: 'Update your personal information',
      },
    ],
  },
  {
    section: 'Actions',
    items: [
      {
        icon: <Feather name="x-circle" size={22} color="#222" />,
        label: 'Close account',
        desc: 'Close your personal account',
      },
      {
        icon: <Feather name="log-out" size={22} color="#222" />,
        label: 'Log out',
      },
    ],
  },
];

export default function UserAccountScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Static Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={28} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account</Text>
      </View>
      <View style={styles.headerDivider} />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Profile */}
        <View style={styles.profileSection}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarText}>{user.initials}</Text>
            </View>
            <TouchableOpacity style={styles.cameraIcon}>
              <Feather name="camera" size={20} color="#222" />
            </TouchableOpacity>
          </View>
          <Text style={styles.profileName}>{user.name}</Text>
          <Text style={styles.profileType}>{user.type}</Text>
        </View>
        {/* Menu Sections */}
        {menu.map((section, idx) => (
          <View key={section.section} style={{ marginBottom: 18 }}>
            <Text style={styles.sectionTitle}>{section.section}</Text>
            {section.items.map((item, i) => (
              <TouchableOpacity 
                key={item.label} 
                style={styles.menuRow}
                onPress={() => {
                  if (item.label === 'Help') {
                    navigation.navigate('HelpScreen');
                  } else if (item.label === 'Statements and reports') {
                    navigation.navigate('StatAndReportScreen');
                  } else if (item.label === 'Security and privacy') {
                    navigation.navigate('SecurityAndPrivacyScreen');
                  } else if (item.label === 'Language and appearance') {
                    navigation.navigate('LanguageAndAppearanceScreen');
                  } else if (item.label === 'Personal details') {
                    navigation.navigate('PersonalDetailsScreen');
                  } else if (item.label === 'Close account') {
                    navigation.navigate('CloseAccountScreen');
                  } else if (item.label === 'Log out') {
                    navigation.navigate('Login');
                  }
                }}
              >
                <View style={styles.menuIconCircle}>{item.icon}</View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.menuLabel}>{item.label}</Text>
                  {item.desc && <Text style={styles.menuDesc}>{item.desc}</Text>}
                </View>
                <Feather name="chevron-right" size={20} color="#234F1E" />
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
    marginTop: 40,
  },
  backBtn: {
    marginRight: 10,
    padding: 4,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    color: '#000',
    marginRight: 38, // to balance the back button
  },
  headerDivider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
    width: '100%',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 18,
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 10,
  },
  avatarCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#aef4ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#222',
  },
  cameraIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 2,
    borderWidth: 1,
    borderColor: '#eee',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 2,
    marginTop: 2,
    letterSpacing: 1,
  },
  profileType: {
    fontSize: 15,
    color: '#222',
    textAlign: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    marginTop: 10,
    color: '#000',
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
  },
  menuIconCircle: {
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
  menuLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
  },
  menuDesc: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
});
