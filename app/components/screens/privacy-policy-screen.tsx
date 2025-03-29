import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, ChevronRight } from 'lucide-react-native';
import { NavigationProp } from '../../../types/navigation';
import { ScreenProps } from '../../../types/props';//'@/types/props';

type PolicySection = {
  id: string;
  title: string;
  content: string;
};

export default function PrivacyPolicyScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [activeTab, setActiveTab] = React.useState<'privacy' | 'terms'>('privacy');

  const privacyPolicy: PolicySection[] = [
    {
      id: '1',
      title: 'Information We Collect',
      content: 'We collect information that you provide directly to us, including but not limited to your name, phone number, email address, and financial information. We also collect information about your device and how you use our app.',
    },
    {
      id: '2',
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, to process your transactions, to communicate with you, and to comply with legal obligations.',
    },
    {
      id: '3',
      title: 'Information Sharing',
      content: 'We do not sell your personal information. We may share your information with service providers who assist in operating our services, with law enforcement when required by law, and with other parties as described in this policy.',
    },
    {
      id: '4',
      title: 'Data Security',
      content: 'We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.',
    },
    {
      id: '5',
      title: 'Your Rights',
      content: 'You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your information.',
    },
  ];

  const termsOfService: PolicySection[] = [
    {
      id: '1',
      title: 'Acceptance of Terms',
      content: 'By accessing or using our app, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the app.',
    },
    {
      id: '2',
      title: 'Account Registration',
      content: 'You must register for an account to use our services. You are responsible for maintaining the confidentiality of your account information and for all activities under your account.',
    },
    {
      id: '3',
      title: 'Service Usage',
      content: 'You agree to use our services only for lawful purposes and in accordance with these terms. You may not use our services in any way that could damage or impair our services.',
    },
    {
      id: '4',
      title: 'Intellectual Property',
      content: 'The app and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, and other intellectual property laws.',
    },
    {
      id: '5',
      title: 'Limitation of Liability',
      content: 'We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.',
    },
  ];

  const sections = activeTab === 'privacy' ? privacyPolicy : termsOfService;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Legal</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'privacy' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('privacy')}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'privacy' && styles.activeTabText,
          ]}>
            Privacy Policy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'terms' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('terms')}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'terms' && styles.activeTabText,
          ]}>
            Terms of Service
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {sections.map((section) => (
          <View key={section.id} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.sectionContent}>{section.content}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 16,
    color: '#6b7280',
  },
  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
}); 