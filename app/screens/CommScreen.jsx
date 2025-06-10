import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const CommScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="black"/>
      </TouchableOpacity>

      {/* Icon-like Image */}
      <Image
        source={require("../assets/notifyIcon.png")} // Change to your image path
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

      {/* Continue Button */}
      <TouchableOpacity
  style={styles.continueButton}
  onPress={() => navigation.navigate('AdTrackingScreen')}
>
  <Text style={styles.continueText}>Continue</Text>
</TouchableOpacity>
    </View>
  );
};

export default CommScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 2,
    bottom: -20,
  },
  iconImage: {
    width: 150,
    height: 150,
    marginTop: 50,
    marginBottom: 18,
    
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 28,
    color: "#000",
    letterSpacing: 0.5,
    bottom:-60
  },
  notificationBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#eee",
    padding: 18,
    marginBottom: 60,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
    bottom:-90
  },
  checkIconBox: {
    backgroundColor: "#69DDF1",
    borderRadius: 8,
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    
  },
  notificationTitle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#000",
    marginBottom: 2,
  },
  notificationDesc: {
    fontSize: 13,
    color: "#222",
  },
  continueButton: {
    backgroundColor: "#69DDF1",
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "absolute",
    bottom: 100,
    left: 20,
    right: 20,
  },
  continueText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});