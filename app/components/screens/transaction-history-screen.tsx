import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { ScreenProps } from '@/types/props';

type Transaction = {
  id: string;
  type: 'send' | 'receive' | 'payment' | 'withdraw';
  amount: number;
  date: string;
  description: string;
  status: 'completed' | 'pending' | 'failed';
  recipient?: string;
};

const transactions: Transaction[] = [
  {
    id: '1',
    type: 'send',
    amount: 100,
    date: '2024-03-20',
    description: 'Sent to John Doe',
    status: 'completed',
    recipient: 'John Doe',
  },
  {
    id: '2',
    type: 'receive',
    amount: 50,
    date: '2024-03-19',
    description: 'Received from Jane Smith',
    status: 'completed',
    recipient: 'Jane Smith',
  },
  {
    id: '3',
    type: 'payment',
    amount: 75,
    date: '2024-03-18',
    description: 'Electricity Bill Payment',
    status: 'completed',
  },
  {
    id: '4',
    type: 'withdraw',
    amount: 200,
    date: '2024-03-17',
    description: 'ATM Withdrawal',
    status: 'completed',
  },
];

const filterOptions = ['All', 'Sent', 'Received', 'Payments', 'Withdrawals'];

export default function TransactionHistoryScreen() {
  const navigation = useNavigation();
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredTransactions = transactions.filter((transaction) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Sent') return transaction.type === 'send';
    if (selectedFilter === 'Received') return transaction.type === 'receive';
    if (selectedFilter === 'Payments') return transaction.type === 'payment';
    if (selectedFilter === 'Withdrawals') return transaction.type === 'withdraw';
    return true;
  });

  const getTransactionIcon = (type: Transaction['type']) => {
    switch (type) {
      case 'send':
        return 'arrow-up-circle';
      case 'receive':
        return 'arrow-down-circle';
      case 'payment':
        return 'card-outline';
      case 'withdraw':
        return 'cash-outline';
      default:
        return 'swap-horizontal';
    }
  };

  const getStatusColor = (status: Transaction['status']) => {
    switch (status) {
      case 'completed':
        return '#10b981';
      case 'pending':
        return '#f59e0b';
      case 'failed':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  const renderTransaction = ({ item }: { item: Transaction }) => (
    <TouchableOpacity style={styles.transactionItem}>
      <View style={styles.transactionLeft}>
        <View style={[styles.iconContainer, { backgroundColor: '#f3f4f6' }]}>
          <Ionicons name={getTransactionIcon(item.type)} size={24} color="#4b5563" />
        </View>
        <View style={styles.transactionInfo}>
          <Text style={styles.transactionDescription}>{item.description}</Text>
          <Text style={styles.transactionDate}>{item.date}</Text>
        </View>
      </View>
      <View style={styles.transactionRight}>
        <Text style={[
          styles.transactionAmount,
          { color: item.type === 'receive' ? '#10b981' : '#111827' }
        ]}>
          {item.type === 'receive' ? '+' : '-'}K{item.amount}
        </Text>
        <Text style={[styles.transactionStatus, { color: getStatusColor(item.status) }]}>
          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
        </Text>
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
        <Text style={styles.headerTitle}>Transaction History</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
      >
        {filterOptions.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterButton,
              selectedFilter === filter && styles.filterButtonActive,
            ]}
            onPress={() => setSelectedFilter(filter)}
          >
            <Text
              style={[
                styles.filterButtonText,
                selectedFilter === filter && styles.filterButtonTextActive,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={filteredTransactions}
        renderItem={renderTransaction}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.transactionList}
      />
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
  filterContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    marginRight: 8,
  },
  filterButtonActive: {
    backgroundColor: '#60a5fa',
  },
  filterButtonText: {
    color: '#6b7280',
    fontWeight: '500',
  },
  filterButtonTextActive: {
    color: '#fff',
  },
  transactionList: {
    padding: 16,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionDescription: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  transactionDate: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
  transactionRight: {
    alignItems: 'flex-end',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '600',
  },
  transactionStatus: {
    fontSize: 12,
    marginTop: 4,
  },
}); 