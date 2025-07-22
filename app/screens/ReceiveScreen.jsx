import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import BottomTabs from '../components/BottomTabs';

const { width } = Dimensions.get('window');

const ReceiveScreen = ({ navigation, route }) => {
  // Default user if route.params is undefined
  const user = route?.params?.user ?? {
    bankName: 'Commercial Bank',
    accountHolder: 'Ashiagbor Florence',
    accountNumber: '001234567890',
    swiftCode: 'FNBNUS333XX',
    incomingTransfers: [
      {
        id: '1',
        name: 'Derrick Osei',
        time: '2 hours ago',
        amount: 'EUR 435.99',
        status: 'Pending',
        profileImage: 'https://randomuser.me/api/portraits/men/41.jpg',
      },
      {
        id: '2',
        name: 'James Smith',
        time: '7 hours ago',
        amount: 'EUR 435.99',
        status: 'Received',
        favorite: true,
        profileImage: 'https://randomuser.me/api/portraits/men/18.jpg',
      },
    ],
  };

  const [showAll, setShowAll] = useState(false);
  const transfersToShow = showAll ? user.incomingTransfers : user.incomingTransfers.slice(0, 2);

  const renderTransfer = ({ item }) => (
    <View style={styles.transferItem}>
      <View style={styles.transferRow}>
        {/* Profile Image */}
        <Image source={{ uri: item.profileImage }} style={styles.avatar} />
        {item.favorite && (
          <MaterialCommunityIcons
            name="star-circle"
            size={24}
            color="#FFD700"
            style={{ marginLeft: 6, marginRight: 6 }}
          />
        )}
        <View>
          <Text style={styles.transferName}>{item.name}</Text>
          <Text style={styles.transferAmount}>{item.amount}</Text>
        </View>
      </View>
      <View style={styles.transferStatus}>
        <Text style={styles.transferTime}>{item.time}</Text>
        <View
          style={[
            styles.statusBadge,
            { backgroundColor: item.status === 'Pending' ? '#f5f5f5' : '#d9fafa' },
          ]}
        >
          <Text style={{ color: item.status === 'Pending' ? '#000' : '#007aff' }}>
            {item.status}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header with Back Navigation */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={28} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Receive Money</Text>
      </View>

      {/* Info Card */}
      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Ionicons name="information-circle-outline" size={22} color="#007aff" />
          <Text style={styles.infoTitle}> How to Receive Money</Text>
        </View>
        <Text style={styles.infoText}>
          Share your Lendrix Transfer account details or bank information with the sender. Once the
          transfer is sent, you'll see it appear as an incoming transaction here.
        </Text>
      </View>

      {/* Account Details */}
      <Text style={styles.sectionTitle}>Your Account Details</Text>
      <View style={styles.accountBox}>
        <Text style={styles.label}>Bank Name</Text>
        <Text style={styles.value}>{user.bankName}</Text>
        <Text style={styles.label}>Account Holder</Text>
        <Text style={styles.value}>{user.accountHolder}</Text>
        <Text style={styles.label}>Account Number</Text>
        <Text style={styles.value}>{user.accountNumber}</Text>
        <Text style={styles.label}>SWIFT/BIC Code</Text>
        <Text style={styles.value}>{user.swiftCode}</Text>
      </View>

      {/* Incoming Transfers */}
      <View style={styles.transferHeader}>
        <Text style={styles.sectionTitle}>Incoming Transfers</Text>
        <TouchableOpacity onPress={() => setShowAll((prev) => !prev)}>
          <Text style={styles.viewAll}>{showAll ? 'Show Less' : 'View All'}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={transfersToShow}
        keyExtractor={(item) => item.id}
        renderItem={renderTransfer}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#f0f0f0' }} />}
      />
      <BottomTabs navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
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
    color: '#000',
    marginLeft: 8,
  },
  infoCard: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  infoTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoText: {
    color: '#555',
    fontSize: 15,
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 12,
    color: '#000',
  },
  accountBox: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 10,
    padding: 16,
    marginBottom: 15,
    backgroundColor: '#fafafa',
  },
  label: {
    fontSize: 13,
    color: '#888',
    marginTop: 8,
  },
  value: {
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  transferHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewAll: {
    color: '#007aff',
    fontWeight: '500',
    fontSize: 15,
  },
  transferItem: {
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transferRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  transferName: {
    fontWeight: '600',
    fontSize: 15,
  },
  transferAmount: {
    color: '#333',
    fontSize: 14,
  },
  transferTime: {
    fontSize: 13,
    color: '#888',
    marginBottom: 4,
  },
  transferStatus: {
    alignItems: 'flex-end',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 14,
  },
});

export default ReceiveScreen;
