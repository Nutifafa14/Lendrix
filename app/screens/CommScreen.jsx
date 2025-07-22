import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import ScreenWrapper from '../components/ScreenWrapper';

const CommScreen = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={styles.contentContainer}>
          {/* Back Arrow */}
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} color="black" />
          </TouchableOpacity>

          {/* Icon-like Image */}
          <Image
            source={require("../assets/notifyIcon.png")}
            style={styles.iconImage}
            resizeMode="contain"
          />

          {/* Title under the icon */}
          <Text style={styles.title}>SET YOUR{"\n"}COMMUNICATION{"\n"}PREFERENCES</Text>

          {/* Notification Box */}
          <View style={styles.notificationBox}>
            <View style={styles.checkIconBox}>
              <FontAwesome name="check" size={22} color="black" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.notificationTitle}>Security notifications</Text>
              <Text style={styles.notificationDesc}>
                Switch on notifications to ensure you receive 2-step verification requests.
              </Text>
            </View>
          </View>
        </View>
        {/* Continue Button */}
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('AdTrackingScreen')}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default CommScreen;
const styles = StyleSheet.create({

  backButton: {
    position: 'absolute',
    top: 0,
    left: 10,
    zIndex: 1,
  },
  iconImage: {
    width: '90%',
    height: '50%',
    alignSelf: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  notificationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  checkIconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationDesc: {
    fontSize: 14,
    color: '#666666',
  },
  continueButton: {
    backgroundColor: "#69DDF1",
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  continueText: {
    fontSize: 18,
    color: '#000000',
  },
  contentContainer: {
    marginTop: 20,
  },
})