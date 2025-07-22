import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Modal } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Linking, Platform } from 'react-native';
import { useTheme } from '../components/ThemeContext';

export default function LanguageAndAppearanceScreen({ navigation }) {
  const [showAppearanceModal, setShowAppearanceModal] = useState(false);
  const { theme: appearance, setTheme } = useTheme();

  const handleLanguagePress = () => {
    // Open app settings (normal settings)
    Linking.openSettings();
  };

  const handleAppearanceSelect = (value) => {
    setTheme(value);
    setShowAppearanceModal(false);
    // Here you can also persist the selection if needed
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={28} color="#222" />
        </TouchableOpacity>
        <Text style={styles.header}>Language and appearance</Text>
        <TouchableOpacity style={styles.row} onPress={handleLanguagePress}>
          <View style={styles.iconCircle}>
            <Feather name="message-circle" size={22} color="#222" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.rowTitle}>Language</Text>
            <Text style={styles.rowDesc}>English</Text>
          </View>
          <Feather name="chevron-right" size={20} color="#222" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.row} onPress={() => setShowAppearanceModal(true)}>
          <View style={styles.iconCircle}>
            <Feather name="moon" size={22} color="#222" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.rowTitle}>Appearance</Text>
            <Text style={styles.rowDesc}>
              {appearance === 'device' ? 'Same as device' : appearance.charAt(0).toUpperCase() + appearance.slice(1)}
            </Text>
          </View>
          <Feather name="chevron-right" size={20} color="#222" />
        </TouchableOpacity>
      </View>
      {/* Appearance Modal */}
      <Modal
        visible={showAppearanceModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowAppearanceModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalHeader}>Appearance</Text>
            <TouchableOpacity
              style={styles.modalRow}
              onPress={() => handleAppearanceSelect('device')}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.modalRowTitle}>Same as device</Text>
                <Text style={styles.modalRowDesc}>Uses light or dark mode depending on your device settings</Text>
              </View>
              <View style={styles.radioCircle}>
                {appearance === 'device' && <View style={styles.radioDot} />}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalRow}
              onPress={() => handleAppearanceSelect('light')}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.modalRowTitle}>Light</Text>
              </View>
              <View style={styles.radioCircle}>
                {appearance === 'light' && <View style={styles.radioDot} />}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalRow}
              onPress={() => handleAppearanceSelect('dark')}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.modalRowTitle}>Dark</Text>
              </View>
              <View style={styles.radioCircle}>
                {appearance === 'dark' && <View style={styles.radioDot} />}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    alignSelf: 'flex-start',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    padding: 4,
    marginBottom: 18,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#111',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#eee',
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
  rowTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
  },
  rowDesc: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    backgroundColor: '#fff',
    borderRadius: 28,
    padding: 28,
    width: '90%',
    maxWidth: 400,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  modalHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#111',
  },
  modalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
  },
  modalRowTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
  },
  modalRowDesc: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  radioCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
  },
  radioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#69DDF1',
  },
}); 