import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ScreenWrapper from "../components/ScreenWrapper";

const API_BASE_URL = 'http://10.132.134.92:3000'; // <-- replace with your backend IP if needed

export default function PasscodeScreen({ navigation }) {
  const [passcode, setPasscode] = useState("");
  const [showPasscode, setShowPasscode] = useState(false);

  const handlePress = (val) => {
    if (passcode.length < 4) setPasscode(passcode + val);
  };

  const handleClear = () => setPasscode(passcode.slice(0, -1));

  const handleSubmit = async () => {
    if (passcode.length !== 4) return;
    try {
      const response = await fetch(`${API_BASE_URL}/users/c45a`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode }),
      });
      if (!response.ok) throw new Error('Failed to save passcode');
      navigation.navigate("DoneScreen");
    } catch (err) {
      alert('Error saving passcode. Please try again.');
    }
  };

  const handleLogout = () => {
    alert("Logged out");
  };

  const keypadRows = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["erase", "0", "check"],
  ];

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>

        <Text style={styles.title}>Set Passcode</Text>
        <Text style={styles.info}>
          This passcode would be used in case you are having trouble logging in.
        </Text>
        <View style={styles.inputRow}>
          <Text style={styles.inputText}>
            {showPasscode
              ? passcode
              : passcode.split("").map(() => "●").join("")}
          </Text>
          <TouchableOpacity
            onPress={() => setShowPasscode((prev) => !prev)}
            style={{ padding: 4 }}
            disabled={passcode.length === 0}
          >
            <Ionicons
              name={showPasscode ? "eye-off-outline" : "eye-outline"}
              size={22}
              color={passcode.length === 0 ? "#ccc" : "#333"}
            />
          </TouchableOpacity>
        </View>
        {passcode.length === 0 && (
          <Text style={styles.label}>Enter a 4-digit passcode</Text>
        )}
        <View style={styles.divider} />

        <View style={styles.keypad}>
          {keypadRows.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.keypadRow}>
              {row.map((item, colIndex) => {
                if (item === "erase") {
                  return (
                    <TouchableOpacity
                      key={colIndex}
                      style={styles.key}
                      onPress={handleClear}
                      disabled={passcode.length === 0}
                    >
                      <Ionicons
                        name="backspace"
                        size={28}
                        color={passcode.length === 0 ? "#ccc" : "#333"}
                      />
                    </TouchableOpacity>
                  );
                }
                if (item === "check") {
                  return (
                    <TouchableOpacity
                      key={colIndex}
                      style={styles.key}
                      onPress={handleSubmit}
                      disabled={passcode.length !== 4}
                    >
                      <Ionicons
                        name="checkmark"
                        size={28}
                        color={passcode.length === 4 ? "#333" : "#ccc"}
                      />
                    </TouchableOpacity>
                  );
                }
                return (
                  <TouchableOpacity
                    key={colIndex}
                    style={styles.key}
                    onPress={() => handlePress(item)}
                  >
                    <Text style={styles.keyText}>{item}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 16,
    zIndex: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 10,
    alignSelf: "center",
  },
  info: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 24,
    marginHorizontal: 10,
    maxWidth: 320,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 4,
  },
  inputText: {
    fontSize: 22,
    letterSpacing: 8,
    minHeight: 32,
    minWidth: 120,
    marginRight: 8,
    color: "#222",
  },
  label: {
    fontSize: 16,
    color: "#333",
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#bbb",
    alignSelf: "stretch",
    marginVertical: 10,
    width: "100%",
    maxWidth: 350,
  },
  keypad: {
    marginTop: 10,
    width: "100%",
    maxWidth: 350,
  },
  keypadRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 8,
  },
  key: {
    flex: 1,
    height: 60,
    marginHorizontal: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eee",
    minWidth: 0,
  },
  keyText: {
    fontSize: 26,
    color: "#222",
  },
  logoutText: {
    fontSize: 16,
    color: "#333",
  },
});