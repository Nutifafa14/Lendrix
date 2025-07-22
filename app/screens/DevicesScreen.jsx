import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Modal, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DevicesScreen({ navigation }) {
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Sample device data - replace with actual data from your backend
  const devices = [
    {
      id: 1,
      name: 'iPhone 14 Pro',
      firstLogin: '2024-01-15 10:30 AM',
      lastLogin: '2024-01-20 02:15 PM',
      location: 'Accra, Ghana',
    },
    {
      id: 2,
      name: 'MacBook Pro',
      firstLogin: '2024-01-10 09:45 AM',
      lastLogin: '2024-01-19 11:20 AM',
      location: 'Accra, Ghana',
    },
    {
      id: 3,
      name: 'Samsung Galaxy S23',
      firstLogin: '2024-01-12 03:30 PM',
      lastLogin: '2024-01-18 08:45 PM',
      location: 'Kumasi, Ghana',
    },
  ];

  const handleDevicePress = (device) => {
    setSelectedDevice(device);
    setShowModal(true);
  };

  const handleRemoveDevice = () => {
    // Add your device removal logic here
    console.log('Removing device:', selectedDevice?.name);
    setShowModal(false);
    setSelectedDevice(null);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={28} color="#222" />
        </TouchableOpacity>
        
        <Text style={styles.header}>Devices</Text>
        <Text style={styles.desc}>Manage the devices you use to access your account.</Text>

        <ScrollView style={styles.deviceList} showsVerticalScrollIndicator={false}>
          {devices.map((device) => (
            <TouchableOpacity
              key={device.id}
              style={styles.deviceItem}
              onPress={() => handleDevicePress(device)}
            >
              <View style={styles.deviceInfo}>
                <Ionicons name="phone-portrait" size={24} color="#69DDF1" />
                <Text style={styles.deviceName}>{device.name}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#ccc" />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Device Details Modal */}
      <Modal
        visible={showModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Device Details</Text>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <Ionicons name="close" size={24} color="#666" />
              </TouchableOpacity>
            </View>

            {selectedDevice && (
              <View style={styles.deviceDetails}>
                <View style={styles.detailRow}>
                  <Ionicons name="phone-portrait" size={20} color="#69DDF1" />
                  <Text style={styles.detailLabel}>Device:</Text>
                  <Text style={styles.detailValue}>{selectedDevice.name}</Text>
                </View>

                <View style={styles.detailRow}>
                  <Ionicons name="calendar" size={20} color="#69DDF1" />
                  <Text style={styles.detailLabel}>First login:</Text>
                  <Text style={styles.detailValue}>{selectedDevice.firstLogin}</Text>
                </View>

                <View style={styles.detailRow}>
                  <Ionicons name="time" size={20} color="#69DDF1" />
                  <Text style={styles.detailLabel}>Last login:</Text>
                  <Text style={styles.detailValue}>{selectedDevice.lastLogin}</Text>
                </View>

                <View style={styles.detailRow}>
                  <Ionicons name="location" size={20} color="#69DDF1" />
                  <Text style={styles.detailLabel}>Location:</Text>
                  <Text style={styles.detailValue}>{selectedDevice.location}</Text>
                </View>
              </View>
            )}

            <TouchableOpacity
              style={styles.removeButton}
              onPress={handleRemoveDevice}
            >
              <Text style={styles.removeButtonText}>Remove Device</Text>
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
    marginBottom: 10,
    color: '#111',
  },
  desc: {
    fontSize: 15,
    color: '#444',
    marginBottom: 24,
  },
  deviceList: {
    flex: 1,
  },
  deviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  deviceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  deviceName: {
    fontSize: 17,
    fontWeight: '500',
    color: '#111',
    marginLeft: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    width: '90%',
    maxWidth: 400,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111',
  },
  deviceDetails: {
    marginBottom: 24,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  detailLabel: {
    fontSize: 15,
    color: '#666',
    marginLeft: 8,
    width: 80,
  },
  detailValue: {
    fontSize: 15,
    color: '#111',
    fontWeight: '500',
    flex: 1,
  },
  removeButton: {
    backgroundColor: '#ff4757',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
}); 