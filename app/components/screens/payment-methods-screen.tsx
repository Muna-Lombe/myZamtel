import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { ScreenProps } from '../../../types/props';

type PaymentMethod = {
  id: string;
  type: 'card' | 'bank';
  name: string;
  details: string;
  isDefault: boolean;
  lastUsed?: string;
};

const paymentMethods: PaymentMethod[] = [
  {
    id: '1',
    type: 'card',
    name: 'Visa Card',
    details: '**** **** **** 1234',
    isDefault: true,
    lastUsed: '2024-03-20',
  },
  {
    id: '2',
    type: 'bank',
    name: 'ZANACO Bank',
    details: 'Account ending in 5678',
    isDefault: false,
    lastUsed: '2024-03-19',
  },
  {
    id: '3',
    type: 'card',
    name: 'Mastercard',
    details: '**** **** **** 9012',
    isDefault: false,
    lastUsed: '2024-03-18',
  },
];

export default function PaymentMethodsScreen() {
  const navigation = useNavigation();

  const renderPaymentMethod = (method: PaymentMethod) => (
    <TouchableOpacity
      key={method.id}
      style={styles.paymentMethodItem}
      onPress={() => {
        // Handle payment method selection
      }}
    >
      <View style={styles.paymentMethodLeft}>
        <View style={styles.iconContainer}>
          <Ionicons
            name={method.type === 'card' ? 'card' : 'business'}
            size={24}
            color="#4b5563"
          />
        </View>
        <View style={styles.paymentMethodInfo}>
          <Text style={styles.paymentMethodName}>{method.name}</Text>
          <Text style={styles.paymentMethodDetails}>{method.details}</Text>
          {method.lastUsed && (
            <Text style={styles.lastUsed}>Last used: {method.lastUsed}</Text>
          )}
        </View>
      </View>
      <View style={styles.paymentMethodRight}>
        {method.isDefault && (
          <View style={styles.defaultBadge}>
            <Text style={styles.defaultBadgeText}>Default</Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.moreButton}
          onPress={() => {
            // Handle more options
          }}
        >
          <Ionicons name="ellipsis-vertical" size={20} color="#6b7280" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Methods</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Saved Payment Methods</Text>
          {paymentMethods.map(renderPaymentMethod)}
        </View>

        <TouchableOpacity style={styles.addButton}>
          <View style={styles.addButtonContent}>
            <Ionicons name="add-circle-outline" size={24} color="#60a5fa" />
            <Text style={styles.addButtonText}>Add New Payment Method</Text>
          </View>
        </TouchableOpacity>
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
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  paymentMethodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    marginBottom: 12,
  },
  paymentMethodLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  paymentMethodInfo: {
    flex: 1,
  },
  paymentMethodName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  paymentMethodDetails: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
  lastUsed: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
  paymentMethodRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  defaultBadge: {
    backgroundColor: '#dbeafe',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  defaultBadgeText: {
    fontSize: 12,
    color: '#2563eb',
    fontWeight: '500',
  },
  moreButton: {
    padding: 4,
  },
  addButton: {
    margin: 16,
    padding: 16,
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderStyle: 'dashed',
  },
  addButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 16,
    color: '#60a5fa',
    fontWeight: '500',
    marginLeft: 8,
  },
}); 