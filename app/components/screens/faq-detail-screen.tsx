import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList, NavigationProp } from '../../../types/navigation';
import { ScreenProps } from '../../../types/props';//'@/types/props';

type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category: string;
};

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'How do I reset my password?',
    answer: 'To reset your password, go to the Security Settings screen and tap on "Change Password". Follow the prompts to enter your current password and create a new one. Make sure to choose a strong password that includes a mix of letters, numbers, and special characters.',
    category: 'Account & Security',
  },
  {
    id: '2',
    question: 'How do I enable two-factor authentication?',
    answer: 'Two-factor authentication can be enabled in the Security Settings screen. You\'ll need to verify your phone number and set up a PIN or biometric authentication. Once enabled, you\'ll need to provide both your password and the second factor to log in.',
    category: 'Account & Security',
  },
  {
    id: '3',
    question: 'How do I send money to another user?',
    answer: 'To send money, tap the "Send Money" button on the home screen. Enter the recipient\'s phone number or select them from your contacts. Enter the amount you want to send and confirm the transaction. Make sure you have sufficient funds in your account.',
    category: 'Transactions',
  },
  {
    id: '4',
    question: 'What are the transaction limits?',
    answer: 'Transaction limits vary based on your account type and verification level. Basic accounts have a daily limit of K500, while verified accounts can send up to K5,000 per day. You can check your limits in the Account Settings screen.',
    category: 'Transactions',
  },
  {
    id: '5',
    question: 'How do I pay my bills?',
    answer: 'To pay bills, go to the "Pay Bills" section and select your service provider. Choose the bill you want to pay, enter the amount, and confirm the payment. You can also set up recurring payments for convenience.',
    category: 'Bills & Payments',
  },
  {
    id: '6',
    question: 'How do I track my orders?',
    answer: 'You can track your orders in the "Orders" section of the Shopping screen. Each order will show its current status, estimated delivery date, and tracking information if available.',
    category: 'Shopping',
  },
];

export default function FAQDetailScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [animations] = useState(() =>
    faqData.reduce((acc, item) => {
      acc[item.id] = new Animated.Value(0);
      return acc;
    }, {} as { [key: string]: Animated.Value })
  );

  const toggleExpand = (id: string) => {
    const isExpanded = expandedId === id;
    setExpandedId(isExpanded ? null : id);

    Animated.timing(animations[id], {
      toValue: isExpanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const renderFAQItem = (item: FAQItem) => {
    const isExpanded = expandedId === item.id;
    const animation = animations[item.id];

    const maxHeight = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 500],
    });

    return (
      <View key={item.id} style={styles.faqItem}>
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleExpand(item.id)}
        >
          <Text style={styles.question}>{item.question}</Text>
          <Ionicons
            name={isExpanded ? 'chevron-up' : 'chevron-down'}
            size={24}
            color="#6b7280"
          />
        </TouchableOpacity>
        <Animated.View style={[styles.answerContainer, { maxHeight }]}>
          <Text style={styles.answer}>{item.answer}</Text>
        </Animated.View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Frequently Asked Questions</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.searchContainer}>
          <View style={styles.searchInput}>
            <Ionicons name="search-outline" size={20} color="#6b7280" />
            <Text style={styles.searchPlaceholder}>Search FAQs</Text>
          </View>
        </View>

        <View style={styles.categoriesContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesList}
          >
            {Array.from(new Set(faqData.map((item) => item.category))).map(
              (category) => (
                <TouchableOpacity
                  key={category}
                  style={styles.categoryButton}
                >
                  <Text style={styles.categoryButtonText}>{category}</Text>
                </TouchableOpacity>
              )
            )}
          </ScrollView>
        </View>

        <View style={styles.faqList}>
          {faqData.map(renderFAQItem)}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
  },
  content: {
    flex: 1,
  },
  searchContainer: {
    padding: 16,
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    padding: 12,
  },
  searchPlaceholder: {
    marginLeft: 8,
    fontSize: 16,
    color: '#6b7280',
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  categoriesList: {
    paddingRight: 16,
  },
  categoryButton: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  categoryButtonText: {
    fontSize: 14,
    color: '#374151',
  },
  faqList: {
    padding: 16,
  },
  faqItem: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  question: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginRight: 8,
  },
  answerContainer: {
    overflow: 'hidden',
  },
  answer: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
    padding: 16,
    paddingTop: 0,
  },
}); 