import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList, NavigationProp } from '../../../types/navigation';
import { ScreenProps } from '@/types/props';

type HelpCategory = {
  id: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  description: string;
  screen?: keyof RootStackParamList;
};

type SupportOption = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  action: () => void;
};

export default function HelpScreen() {
  const navigation = useNavigation<NavigationProp>();

  const helpCategories: HelpCategory[] = [
    {
      id: 'account',
      title: 'Account & Security',
      icon: 'shield-checkmark-outline',
      description: 'Manage your account settings and security preferences',
      screen: 'SecuritySettings',
    },
    {
      id: 'transactions',
      title: 'Transactions',
      icon: 'swap-horizontal-outline',
      description: 'Learn about sending and receiving money',
      screen: 'TransactionHistory',
    },
    {
      id: 'bills',
      title: 'Bills & Payments',
      icon: 'receipt-outline',
      description: 'Pay bills and manage your payment methods',
      screen: 'PayBills',
    },
    {
      id: 'shopping',
      title: 'Shopping',
      icon: 'cart-outline',
      description: 'Shop online and manage your orders',
      screen: 'Shopping',
    },
  ];

  const supportOptions: SupportOption[] = [
    {
      icon: 'chatbubble-ellipses-outline',
      title: 'Chat with Support',
      action: () => navigation.navigate('Chat'),
    },
    {
      icon: 'mail-outline',
      title: 'Email Support',
      action: () => Linking.openURL('mailto:support@myzamtel.com'),
    },
    {
      icon: 'call-outline',
      title: 'Call Support',
      action: () => Linking.openURL('tel:+260123456789'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help & Support</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.searchContainer}>
          <View style={styles.searchInput}>
            <Ionicons name="search-outline" size={20} color="#6b7280" />
            <Text style={styles.searchPlaceholder}>Search for help</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Help Categories</Text>
          <View style={styles.categoriesList}>
            {helpCategories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={styles.categoryItem}
                onPress={() => category.screen && navigation.navigate(category.screen as never)}
              >
                <View style={styles.categoryIcon}>
                  <Ionicons name={category.icon} size={24} color="#60a5fa" />
                </View>
                <View style={styles.categoryContent}>
                  <Text style={styles.categoryTitle}>{category.title}</Text>
                  <Text style={styles.categoryDescription}>{category.description}</Text>
                </View>
                <Ionicons name="chevron-forward" size={24} color="#6b7280" />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Support</Text>
          <View style={styles.supportList}>
            {supportOptions.map((option) => (
              <TouchableOpacity
                key={option.title}
                style={styles.supportItem}
                onPress={option.action}
              >
                <View style={styles.supportItemLeft}>
                  <Ionicons name={option.icon} size={24} color="#6b7280" />
                  <Text style={styles.supportItemText}>{option.title}</Text>
                </View>
                <Ionicons name="chevron-forward" size={24} color="#6b7280" />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Need more help? Visit our website
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.myzamtel.com/help')}
          >
            <Text style={styles.footerLink}>www.myzamtel.com/help</Text>
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
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  categoriesList: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    overflow: 'hidden',
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#eff6ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  categoryContent: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },
  categoryDescription: {
    fontSize: 14,
    color: '#6b7280',
  },
  supportList: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    overflow: 'hidden',
  },
  supportItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  supportItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  supportItemText: {
    fontSize: 16,
    color: '#374151',
    marginLeft: 12,
  },
  footer: {
    padding: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  footerLink: {
    fontSize: 14,
    color: '#60a5fa',
    textDecorationLine: 'underline',
  },
}); 