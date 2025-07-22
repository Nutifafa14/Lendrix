import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NotificationAlert = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation && navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="#222" />
      </TouchableOpacity>

      {/* Notification Symbol/Image */}
      <Image
        source={require('../assets/hugeNot_icons.png')}
        style={styles.notificationImage}
        resizeMode="contain"
      />

      <Text style={styles.title}>IT'S QUIET IN HERE</Text>

      <Text style={styles.description}>
        Set up exchange rate alerts on as many currencies as you like. Get
        updates daily, or when the conversion hits the rate you want.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation && navigation.navigate('CreateAlertScreen')}>
        <Text style={styles.buttonText}>Create a new alert</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  backBtn: {
    position: 'absolute',
    top: 70,
    left: 20,
    zIndex: 2,
    backgroundColor: 'transparent',
  },
  notificationImage: {
    width: 350,
    height: 350,
    marginBottom: 30,
    marginTop: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#69DDF1',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#69DDF1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NotificationAlert;
