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
import ScreenWrapper from '../components/ScreenWrapper';

export default function MyRegisterScreen({ navigation }) {
   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [showUsers, setShowUsers] = useState(false);

  const handleRegister = async () => {
    if (!email || !/^[\w.+-]+@gmail\.com$/.test(email)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    try {
      const response = await fetch('http://10.132.134.92:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });
      if (!response.ok) throw new Error('Failed to register user');
      const data = await response.json();
      // Optionally, handle the response (e.g., show a success message)
      navigation.navigate("EmailVeriScreen", { email, name });
    } catch (error) {
      console.error('Registration failed:', error);
      // Optionally, show an error message to the user
    }
  };

  const handleFetchUsers = async () => {
    setLoadingUsers(true);
    try {
      const response = await fetch('http://localhost:3000/users');
      const data = await response.json();
      setUsers(data);
      setShowUsers(true);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoadingUsers(false);
    }
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>Enter your details</Text>

        {/* Name Label */}
        <Text style={styles.label}>Your  Fullname</Text>
        {/* Name Input */}
        <TextInput
          placeholder="Enter your fullname"
          value={name}
          onChangeText={setName}
          style={styles.input}
          autoCapitalize="words"
        />

        {/* Label */}
        <Text style={styles.label}>Your email</Text>

        {/* Input */}
        <TextInput
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setEmailError(false);
          }}
          style={[styles.input, emailError && styles.inputError]}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Error */}
        {emailError && (
          <View style={styles.errorRow}>
            <FontAwesome5
              name="exclamation-circle"
              size={14}
              color="red"
              style={{ marginRight: 4 }}
            />
            <Text style={styles.errorText}>Please enter a valid Gmail address</Text>
          </View>
        )}

        {/* Button */}
        <View style={{ marginTop: 200 }}>
  <TouchableOpacity
            style={[styles.button, (!email || !name) && styles.buttonDisabled]}
            onPress={handleRegister}
            disabled={!email || !name}
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
    </Text>.
  </Text>
</View>

      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 32,
    textAlign: "left",
  },

  label: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
    marginTop: 8,
  },

  input: {
    borderWidth: 2,
    borderColor: "#000",
    height: 48,
    width:"100%",  
    borderRadius: 30,
    paddingHorizontal: 24,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: "#fff",
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
    marginLeft: 4,
  },

  button: {
    backgroundColor: "#69DDF1",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 16,
    marginTop: 8,
    width: "100%",
    paddingHorizontal: 24,
    
  },

  buttonDisabled: {
    backgroundColor: "#E0E0E0",
  },

  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },

  termsText: {
    fontSize: 12,
    color: "#555",
    textAlign: "center",
    marginTop: 24,
    marginBottom: 8,
  },

  link: {
    color: "#69DDF1",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  backButton: {
    marginTop: 30,
    marginLeft: 10,
  },
});