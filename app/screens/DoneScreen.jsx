import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DoneScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Close Button */}
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.goBack()}
        accessibilityLabel="Close"
      >
        <Ionicons name="close" size={32} color="#222" />
      </TouchableOpacity>

      {/* Illustration */}
      <Image
        source={require("../assets/rafiki.png")}
        style={styles.illustration}
        resizeMode="contain"
      />

      {/* Text */}
      <Text style={styles.title}>WELL DONE!</Text>
      <Text style={styles.subtitle}>You’re set to use your account</Text>

      {/* Done Button */}
      <TouchableOpacity
        style={styles.doneButton}
        onPress={() => navigation.navigate("HomeScreen")}
        accessibilityLabel="Done"
      >
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 150,
  },
  closeButton: {
    position: "absolute",
    top: 80,
    left: 20,
    zIndex: 10,
  },
  illustration: {
    width: 220,
    height: 220,
    marginTop: 40,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#111",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#111",
    marginBottom: 40,
  },
  doneButton: {
    position: "absolute",
    bottom: 90,
    left: 20,
    right: 20,
    backgroundColor: "#69DDF1",
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  doneButtonText: {
    color: "#111",
    fontSize: 18,
    fontWeight: "bold",
  },
});