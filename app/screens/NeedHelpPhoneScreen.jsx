import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function NeedHelpPhoneScreen() {
  const navigation = useNavigation();

  const phoneNumber = '+233 204017850';
  const availability = 'Available Sunday - Saturday, from 8:00 to 23:59 (GMT)';
  const flag = require('../assets/ghana.png'); 

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Pressable onPress={() => navigation.goBack()} style={styles.iconButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </Pressable>
        <Pressable onPress={() => navigation.goBack()} style={styles.iconButton}>
          <Ionicons name="close" size={24} color="#000" />
        </Pressable>
      </View>

      
      <Text style={styles.title}>Talk to our team</Text>
      <Text style={styles.subtitle}>We’ll have all your details ready</Text>

      
      <Text style={styles.sectionTitle}>Personal</Text>
      <View style={styles.divider} />
      <Pressable style={styles.card} onPress={() => { /* handle personal call */ }}>
        <Image source={flag} style={styles.flag} />
        <View style={{ flex: 1 }}>
          <Text style={styles.phone}>{phoneNumber}</Text>
          <Text style={styles.availability}>{availability}</Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="#000" />
      </Pressable>

      
      <Text style={styles.sectionTitle}>Business</Text>
      <View style={styles.divider} />
      <Pressable style={styles.card} onPress={() => { /* handle business call */ }}>
        <Image source={flag} style={styles.flag} />
        <View style={{ flex: 1 }}>
          <Text style={styles.phone}>{phoneNumber}</Text>
          <Text style={styles.availability}>{availability}</Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="#000" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    paddingTop: 18,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
    marginTop: 4,
    color: '#000',
  },
  subtitle: {
    fontSize: 15,
    color: '#333',
    marginBottom: 22,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 18,
    marginBottom: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginBottom: 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 8,
  },
  flag: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
    backgroundColor: '#eee',
  },
  phone: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
    color: '#000',
  },
  availability: {
    fontSize: 13,
    color: '#444',
  },
});