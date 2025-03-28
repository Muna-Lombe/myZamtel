import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Building2, Receipt, CreditCard, ChevronRight } from 'lucide-react-native';
import { NavigationProp } from '../../../types/navigation';
import { ScreenProps } from '@/types/props';

export default function PayBillsScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [searchQuery, setSearchQuery] = React.useState('');

  const billCategories = [
    {
      id: 'electricity',
      name: 'Electricity',
      description: 'Pay your electricity bill',
      icon: Building2,
      color: '#fbbf24',
    },
    {
      id: 'water',
      name: 'Water',
      description: 'Pay your water bill',
      icon: Receipt,
      color: '#60a5fa',
    },
    {
      id: 'council',
      name: 'Council',
      description: 'Pay your council bill',
      icon: Building2,
      color: '#34d399',
    },
    {
      id: 'tv',
      name: 'TV License',
      description: 'Pay your TV license',
      icon: CreditCard,
      color: '#f87171',
    },
  ];

  const recentBills = [
    {
      id: 1,
      type: 'Electricity',
      account: '1234567890',
      amount: '150.00',
      dueDate: '2024-03-25',
      status: 'pending',
    },
    {
      id: 2,
      type: 'Water',
      account: '0987654321',
      amount: '75.00',
      dueDate: '2024-03-28',
      status: 'pending',
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
        <Text style={styles.title}>Pay Bills</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search bills..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          <View style={styles.balanceCard}>
            <Text style={styles.balanceLabel}>Available Balance</Text>
            <Text style={styles.balanceAmount}>K 2,500.00</Text>
          </View>

          <Text style={styles.sectionTitle}>Bill Categories</Text>
          <View style={styles.categoriesGrid}>
            {billCategories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={styles.categoryCard}
                onPress={() => navigation.navigate('MakePayment')}
              >
                <View style={[styles.categoryIcon, { backgroundColor: category.color }]}>
                  <category.icon size={24} color="#fff" />
                </View>
                <Text style={styles.categoryName}>{category.name}</Text>
                <Text style={styles.categoryDescription}>{category.description}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.recentSection}>
            <Text style={styles.sectionTitle}>Recent Bills</Text>
            <View style={styles.recentList}>
              {recentBills.map((bill) => (
                <TouchableOpacity key={bill.id} style={styles.recentItem}>
                  <View style={styles.recentInfo}>
                    <Text style={styles.recentType}>{bill.type}</Text>
                    <Text style={styles.recentAccount}>Account: {bill.account}</Text>
                    <Text style={styles.recentDate}>Due: {bill.dueDate}</Text>
                  </View>
                  <View style={styles.recentAmount}>
                    <Text style={styles.amountText}>K {bill.amount}</Text>
                    <Text style={styles.statusText}>{bill.status}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
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
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  searchContainer: {
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 32,
  },
  categoryCard: {
    width: '47%',
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  categoryDescription: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
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
    color: '#f59e0b',
  },
}); 