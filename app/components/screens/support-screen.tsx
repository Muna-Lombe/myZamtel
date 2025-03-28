import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../../types/navigation';

type FAQ = {
  id: string;
  question: string;
  answer: string;
  isExpanded: boolean;
};

type SupportOption = {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  action: () => void;
};

export default function SupportScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [searchQuery, setSearchQuery] = useState('');
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      id: '1',
      question: 'How do I reset my PIN?',
      answer: 'To reset your PIN, go to Security Settings, select "Change PIN", and follow the instructions. You will need to verify your identity with a one-time password sent to your registered mobile number.',
      isExpanded: false,
    },
    {
      id: '2',
      question: 'What are the transaction limits?',
      answer: 'Standard daily transaction limits are K10,000 for transfers and K5,000 for withdrawals. You can request a limit increase by visiting any Zamtel shop with your ID.',
      isExpanded: false,
    },
    {
      id: '3',
      question: 'How do I add money to my account?',
      answer: 'You can add money to your account through bank transfer, at any Zamtel shop, or through authorized agents nationwide. Deposits are usually reflected instantly.',
      isExpanded: false,
    },
    {
      id: '4',
      question: 'Is there a fee for transactions?',
      answer: 'Transfers between Zamtel Money users are free. Withdrawals and transfers to bank accounts or other mobile money providers may incur a small fee based on the amount. See our fee schedule for details.',
      isExpanded: false,
    },
    {
      id: '5',
      question: 'How do I report a suspicious transaction?',
      answer: 'If you notice any unauthorized or suspicious activity, please contact our customer support immediately at 111 (toll-free from a Zamtel line) or email us at support@zamtel.zm.',
      isExpanded: false,
    },
  ]);

  const supportOptions: SupportOption[] = [
    {
      id: '1',
      title: 'Live Chat',
      description: 'Chat with our support team',
      icon: 'chatbubble-ellipses',
      action: () => navigation.navigate('Chat'),
    },
    {
      id: '2',
      title: 'Call Center',
      description: 'Call us at 111 (toll-free)',
      icon: 'call',
      action: () => Linking.openURL('tel:111'),
    },
    {
      id: '3',
      title: 'Email Support',
      description: 'support@zamtel.zm',
      icon: 'mail',
      action: () => Linking.openURL('mailto:support@zamtel.zm'),
    },
    {
      id: '4',
      title: 'Find a Shop',
      description: 'Locate the nearest Zamtel shop',
      icon: 'location',
      action: () => {
        // In a real app, this would navigate to a map or location finder
        alert('This feature will be available soon.');
      },
    },
  ];

  const toggleFAQ = (id: string) => {
    setFaqs(
      faqs.map((faq) =>
        faq.id === id ? { ...faq, isExpanded: !faq.isExpanded } : faq
      )
    );
  };

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help & Support</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for help topics"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={20} color="#999" />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.supportOptionsContainer}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <View style={styles.optionsGrid}>
            {supportOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={styles.optionCard}
                onPress={option.action}
              >
                <View style={styles.optionIcon}>
                  <Ionicons name={option.icon} size={24} color="#10B981" />
                </View>
                <Text style={styles.optionTitle}>{option.title}</Text>
                <Text style={styles.optionDescription}>{option.description}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.faqContainer}>
          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => (
              <TouchableOpacity
                key={faq.id}
                style={styles.faqItem}
                onPress={() => toggleFAQ(faq.id)}
              >
                <View style={styles.faqHeader}>
                  <Text style={styles.faqQuestion}>{faq.question}</Text>
                  <Ionicons
                    name={faq.isExpanded ? 'chevron-up' : 'chevron-down'}
                    size={20}
                    color="#666"
                  />
                </View>
                {faq.isExpanded && (
                  <Text style={styles.faqAnswer}>{faq.answer}</Text>
                )}
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.noResultsText}>
              No results found for "{searchQuery}"
            </Text>
          )}
        </View>

        <View style={styles.feedbackContainer}>
          <Text style={styles.sectionTitle}>Rate Our App</Text>
          <Text style={styles.feedbackText}>
            We value your feedback. Please take a moment to rate our app.
          </Text>
          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((rating) => (
              <TouchableOpacity key={rating} style={styles.ratingButton}>
                <Ionicons name="star" size={32} color="#DDD" />
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit Feedback</Text>
          </TouchableOpacity>
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
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    margin: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  supportOptionsContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  optionCard: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  optionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E8FFF5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
  },
  faqContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  faqItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 12,
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    flex: 1,
    paddingRight: 8,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
    lineHeight: 20,
  },
  noResultsText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 16,
  },
  feedbackContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  feedbackText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  ratingButton: {
    marginHorizontal: 8,
  },
  submitButton: {
    backgroundColor: '#10B981',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 