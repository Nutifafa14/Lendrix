import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HelpArticleScreen({ navigation, route }) {
  const { title, content } = route.params;
  const [feedback, setFeedback] = useState(null);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={28} color="#222" />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        <View style={styles.feedbackSection}>
          <Text style={styles.feedbackPrompt}>Was this article helpful?</Text>
          {feedback === null && (
            <View style={styles.feedbackButtons}>
              <TouchableOpacity style={styles.emojiBtn} onPress={() => setFeedback('yes')}>
                <Text style={styles.emoji}>👍</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.emojiBtn} onPress={() => setFeedback('no')}>
                <Text style={styles.emoji}>👎</Text>
              </TouchableOpacity>
            </View>
          )}
          {feedback === 'yes' && (
            <Text style={styles.thankYou}>Thank you for your feedback!</Text>
          )}
          {feedback === 'no' && (
            <Text style={styles.sorry}>Sorry to hear that. We'll use your feedback to improve.</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    paddingBottom: 40,
  },
  backBtn: {
    alignSelf: 'flex-start',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    padding: 4,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#111',
  },
  content: {
    fontSize: 16,
    color: '#222',
    lineHeight: 24,
  },
  feedbackSection: {
    marginTop: 40,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingTop: 24,
    marginBottom: 20,
  },
  feedbackPrompt: {
    fontSize: 16,
    color: '#222',
    marginBottom: 12,
    fontWeight: '500',
  },
  feedbackButtons: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 10,
  },
  emojiBtn: {
    backgroundColor: '#f5f5f5',
    borderRadius: 24,
    padding: 12,
    marginHorizontal: 10,
  },
  emoji: {
    fontSize: 28,
  },
  thankYou: {
    color: '#234F1E',
    fontSize: 16,
    marginTop: 8,
    fontWeight: '500',
  },
  sorry: {
    color: '#d9534f',
    fontSize: 16,
    marginTop: 8,
    fontWeight: '500',
  },
}); 