import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, CreditCard, Building2, Receipt, ChevronRight } from 'lucide-react-native';
import { NavigationProp } from '../../../types/navigation';
import { ScreenProps } from '@/types/props';

export default function MakePaymentScreen({ onNavigate }: ScreenProps) {
  const navigation = useNavigation<NavigationProp>();
  const [amount, setAmount] = React.useState('');
  const [selectedPayment, setSelectedPayment] = React.useState('');

  const paymentOptions = [
    {
      id: 'electricity',
      name: 'Electricity Bill',
      description: 'Pay your electricity bill',
      icon: Building2,
      color: '#fbbf24',
    },
    {
      id: 'water',
      name: 'Water Bill',
      description: 'Pay your water bill',
      icon: Receipt,
      color: '#60a5fa',
    },
    {
      id: 'council',
      name: 'Council Bill',
      description: 'Pay your council bill',
      icon: Building2,
      color: '#34d399',
    },
  ];

  const recentPayments = [
    {
      id: 1,
      type: 'Electricity Bill',
      account: '1234567890',
      amount: '150.00',
      date: '2024-03-20',
      status: 'paid',
    },
    {
      id: 2,
      type: 'Water Bill',
      account: '0987654321',
      amount: '75.00',
      date: '2024-03-19',
      status: 'paid',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Make Payment</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.balanceCard}>
            <Text style={styles.balanceLabel}>Available Balance</Text>
            <Text style={styles.balanceAmount}>K 2,500.00</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Amount to Pay</Text>
            <View style={styles.amountInput}>
              <Text style={styles.currencySymbol}>K</Text>
              <TextInput
                style={styles.input}
                placeholder="0.00"
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
              />
            </View>
          </View>

          <Text style={styles.sectionTitle}>Select Payment Type</Text>
          <View style={styles.paymentOptions}>
            {paymentOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.paymentCard,
                  selectedPayment === option.id && styles.selectedPaymentCard,
                ]}
                onPress={() => setSelectedPayment(option.id)}
              >
                <View style={[styles.paymentIcon, { backgroundColor: option.color }]}>
                  <option.icon size={24} color="#fff" />
                </View>
                <View style={styles.paymentInfo}>
                  <Text style={styles.paymentName}>{option.name}</Text>
                  <Text style={styles.paymentDescription}>{option.description}</Text>
                </View>
                <ChevronRight size={24} color="#6b7280" />
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.recentSection}>
            <Text style={styles.sectionTitle}>Recent Payments</Text>
            <View style={styles.recentList}>
              {recentPayments.map((payment) => (
                <TouchableOpacity key={payment.id} style={styles.recentItem}>
                  <View style={styles.recentInfo}>
                    <Text style={styles.recentType}>{payment.type}</Text>
                    <Text style={styles.recentAccount}>Account: {payment.account}</Text>
                    <Text style={styles.recentDate}>{payment.date}</Text>
                  </View>
                  <View style={styles.recentAmount}>
                    <Text style={styles.amountText}>K {payment.amount}</Text>
                    <Text style={styles.statusText}>{payment.status}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={[styles.button, !selectedPayment && styles.buttonDisabled]}
          disabled={!selectedPayment}
        >
          <Text style={styles.buttonText}>Proceed to Payment</Text>
        </TouchableOpacity>
      </View>
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
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  balanceCard: {
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  balanceLabel: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  amountInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  currencySymbol: {
    fontSize: 20,
    fontWeight: '500',
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 20,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  paymentOptions: {
    gap: 12,
    marginBottom: 32,
  },
  paymentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
  },
  selectedPaymentCard: {
    backgroundColor: '#f0fdf4',
    borderColor: '#34d399',
    borderWidth: 1,
  },
  paymentIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  paymentInfo: {
    flex: 1,
  },
  paymentName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  paymentDescription: {
    fontSize: 14,
    color: '#6b7280',
  },
  recentSection: {
    marginTop: 32,
  },
  recentList: {
    gap: 16,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
  },
  recentInfo: {
    flex: 1,
  },
  recentType: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  recentAccount: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  recentDate: {
    fontSize: 14,
    color: '#6b7280',
  },
  recentAmount: {
    alignItems: 'flex-end',
  },
  amountText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  statusText: {
    fontSize: 14,
    color: '#34d399',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#9ca3af',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
}); 