import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function MyRegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

 const handleRegister = () => {
  // Only allow emails ending with @gmail.com
  if (!email || !/^[\w.+-]+@gmail\.com$/.test(email)) {
    setEmailError(true);
    return;
  }
  setEmailError(false);
  navigation.navigate("EmailVeriScreen", { email }); // Pass email to EmailVeriScreen
};

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" bottom={-30} />
        </TouchableOpacity>

        <Text style={styles.title}>Enter your email address</Text>
        <Text style={styles.label}>Your email</Text>

        <TextInput
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setEmailError(false);
          }}
          style={[styles.input, emailError && styles.inputError]}
        />

        {emailError && (
          <View style={styles.errorRow}>
            <FontAwesome5
              name="exclamation-circle"
              size={14}
              color="red"
              style={{ marginRight: 4 }}
            />
            <Text style={styles.errorText}>
              Please enter a valid email address
            </Text>
          </View>
        )}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.button, !email && styles.buttonDisabled]}
          onPress={handleRegister}
          disabled={!email}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By registering, you accept our{" "}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("https://example.com/terms")}
          >
            Terms of Use
          </Text>{" "}
          and{" "}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("https://example.com/privacy")}
          >
            Privacy Policy
          </Text>
          .
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 24,
    justifyContent: "space-between",
  },

  content: {
    flexGrow: 1,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    marginTop: 24,
    bottom:-30
  },

  label: {
    fontSize: 16,
    color: "#555",
    bottom: -38,
  },

  input: {
    borderWidth: 2,
    borderColor: "#000",
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 8,
    marginBottom: 16,
    paddingVertical: 10,
    borderRadius: 20,
    bottom: -50,
  },

  inputError: {
    borderColor: "red",
  },

  errorRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  errorText: {
    color: "red",
    fontSize: 12,
  },

  footer: {
    paddingVertical: 16,
  },

  button: {
    backgroundColor: "#69DDF1",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 12,
    bottom: 50,
  },

  buttonDisabled: {
    backgroundColor: "#E0E0E0",
  },

  buttonText: {
    color: "black",
    fontSize: 20,
  },

  termsText: {
    fontSize: 12,
    color: "#555",
    textAlign: "center",
    bottom:50
  },

  link: {
    color: "#69DDF1",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});