import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ScreenWrapper from "../components/ScreenWrapper";

const avatars = [
  require("../assets/Image1.jpg"),
  require("../assets/Image2.jpg"),
  require("../assets/Image3.jpg"),
  require("../assets/Image4.jpg"),
  require("../assets/Image5.jpg"),
  require("../assets/Image6.jpg"),
  require("../assets/Image7.jpg"),
  require("../assets/Image8.jpg"),
];

const transactions = [
  {
    type: "Sent",
    name: "Christabel",
    detail: "Today, 10:30 AM. MTN Wallet",
    amount: "GHS 560",
    avatar: avatars[0],
  },
  {
    type: "Received",
    name: "Akua",
    detail: "Yesterday, 2:15 PM. Bank Transfer",
    amount: "GHS 890",
    avatar: avatars[1],
  },
  {
    type: "Received",
    name: "Andrews",
    detail: "2 days ago, 11:00 AM. Bank Transfer",
    amount: "GHS 200",
    avatar: avatars[2],
  },
  {
    type: "Sent",
    name: "Selalie",
    detail: "2 days ago, 10:30 AM. MTN Wallet",
    amount: "GHS 560",
    avatar: avatars[3],
  },
  {
    type: "Received",
    name: "Sarah",
    detail: "2 days ago, 2:15 PM. Bank Transfer",
    amount: "GHS 890",
    avatar: avatars[4],
  },
  {
    type: "Received",
    name: "Jeremy",
    detail: "2 days ago, 11:00 AM. Bank Transfer",
    amount: "GHS 200",
    avatar: avatars[5],
  },
  {
    type: "Sent",
    name: "Derrick",
    detail: "3 days ago, 10:30 AM. MTN Wallet",
    amount: "GHS 560",
    avatar: avatars[6],
  },
  {
    type: "Received",
    name: "Deborah",
    detail: "3 days ago, 2:15 PM. Bank Transfer",
    amount: "GHS 890",
    avatar: avatars[7],
  },
  
];

export default function TransactionsScreen({ navigation }) {
  const [tab, setTab] = useState("All");

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#222" left={-10} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Transaction History</Text>
        <Ionicons name="menu" size={24} color="#222" right={-10} />
      </View>
      <View style={styles.headerDivider} />
      <View style={styles.summaryRow}>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryLabel}>Total Sent</Text>
          <Text style={styles.summaryAmount}>GHS 2,300.00</Text>
        </View>
        <Image
          source={require("../assets/transactionIcon.png")}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      <View style={styles.tabs}>
        {["All", "Sent", "Received", "Failed"].map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.tab,
              tab === item && styles.tabActive,
            ]}
            onPress={() => setTab(item)}
          >
            <Text style={[styles.tabText, tab === item && styles.tabTextActive]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.list}>
        {transactions
          .filter((tx) => tab === "All" || tx.type === tab)
          .map((tx, idx) => (
            <View key={idx} style={styles.txRow}>
              <Image source={tx.avatar} style={styles.avatar} />
              <View style={styles.txInfo}>
                <Text style={styles.txTitle}>
                  {tx.type === "Sent" ? `Sent to ${tx.name}` : `Received from ${tx.name}`}
                </Text>
                <Text style={styles.txDetail}>{tx.detail}</Text>
              </View>
              <Text style={styles.txAmount}>{tx.amount}</Text>
            </View>
          ))}
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
  },
  headerDivider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 12,
    width: '100%',
  },
  summaryRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 10,
    marginTop: 10,
  },
  summaryBox: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginRight: 10,
    flex: 1,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  summaryLabel: {
    color: "#888",
    fontSize: 14,
    marginBottom: 4,
  },
  summaryAmount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
  },
  illustration: {
    width: 90,
    height: 90,
  },
  tabs: {
    flexDirection: "row",
    backgroundColor: "#f2fafd",
    borderRadius: 30,
    marginHorizontal: 16,
    marginBottom: 10,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: "center",
  },
  tabActive: {
    backgroundColor: "#b2f3fa",
  },
  tabText: {
    color: "#222",
    fontWeight: "500",
  },
  tabTextActive: {
    color: "#000",
    fontWeight: "bold",
  },
  list: {
    flex: 1,
    paddingHorizontal: 8,
    marginTop: 4,
  },
  txRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 10,
    marginBottom: 10,
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  txInfo: {
    flex: 1,
  },
  txTitle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#222",
  },
  txDetail: {
    color: "#888",
    fontSize: 13,
    marginTop: 2,
  },
  txAmount: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#222",
    marginLeft: 8,
  },
});