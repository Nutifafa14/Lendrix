import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, Alert } from 'react-native';

export default function AdTrackingScreen({ navigation }) {
  const handleContinue = () => {
    // Navigate to the next screen or show an alert
    // navigation.navigate('NextScreen'); // Uncomment and set your next screen
    Alert.alert('Continue pressed', 'Now you can choose to allow or deny tracking.');
  };

  const handleClose = () => {
    // Go back or close modal
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Close button */}
      <Pressable style={styles.closeContainer} onPress={handleClose}>
        <Text style={styles.close}>✕</Text>
      </Pressable>

      {/* Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/TrackingIcon.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Text */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>WE’D LIKE TO USE AD TRACKING</Text>
        <Text style={styles.description}>
          We need your permission to see if you browse other apps and websites where we run ads.
          This helps us keep our advertising costs down and focus even more on our mission - 
          building the best way to move and manage the world’s money.
        </Text>
        <Text style={styles.note}>
          Tap continue and you can choose whether or not to allow tracking.
        </Text>
      </View>

      {/* Continue Button */}
      <View style={[styles.buttonContainer, { pointerEvents: 'box-none' }]}>
        <Pressable style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'space-between',
  },
  closeContainer: {
    alignItems: 'flex-start',
  },
  close: {
    fontSize: 25,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    bottom: -20,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: '80%',
    height: 200,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
    bottom: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 12,
  },
  note: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
  },
  buttonContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
 button: {
    backgroundColor: "#69DDF1",
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "absolute",
    bottom: 70,
    left: 5,
    right: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});