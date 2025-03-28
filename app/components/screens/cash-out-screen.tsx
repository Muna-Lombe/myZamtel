import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, MapPin, Clock, ChevronRight } from 'lucide-react-native';
import { NavigationProp } from '../../../types/navigation';

export default function CashOutScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [amount, setAmount] = React.useState('');

  const nearbyAgents = [
    {
      id: 1,
      name: 'Shoprite',
      address: 'Manda Hill Mall, Great East Road',
      distance: '0.5 km',
      open: true,
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Game Stores',
      address: 'Levy Mall, Lusaka',
      distance: '1.2 km',
      open: true,
      rating: 4.5,
    },
    {
      id: 3,
      name: 'Pick n Pay',
      address: 'East Park Mall, Lusaka',
      distance: '2.5 km',
      open: false,
      rating: 4.3,
    },
  ];

  const recentTransactions = [
    {
      id: 1,
      agent: 'Shoprite',
      amount: '500.00',
      date: '2024-03-20',
      status: 'completed',
    },
    {
      id: 2,
      agent: 'Game Stores',
      amount: '1,000.00',
      date: '2024-03-18',
      status: 'completed',
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
        <Text style={styles.title}>Cash Out</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.balanceCard}>
            <Text style={styles.balanceLabel}>Available Balance</Text>
            <Text style={styles.balanceAmount}>K 2,500.00</Text>
          </View>

          <View style={styles.inputSection}>
            <Text style={styles.sectionTitle}>Enter Amount</Text>
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

          <View style={styles.agentsSection}>
            <Text style={styles.sectionTitle}>Nearby Agents</Text>
            <View style={styles.agentsList}>
              {nearbyAgents.map((agent) => (
                <TouchableOpacity
                  key={agent.id}
                  style={styles.agentCard}
                  onPress={() => navigation.navigate('MakePayment')}
                >
                  <View style={styles.agentInfo}>
                    <Text style={styles.agentName}>{agent.name}</Text>
                    <View style={styles.agentDetails}>
                      <MapPin size={16} color="#6b7280" />
                      <Text style={styles.agentAddress}>{agent.address}</Text>
                    </View>
                    <View style={styles.agentDetails}>
                      <Clock size={16} color="#6b7280" />
                      <Text style={[
                        styles.agentStatus,
                        agent.open ? styles.openStatus : styles.closedStatus
                      ]}>
                        {agent.open ? 'Open' : 'Closed'}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.agentMeta}>
                    <Text style={styles.agentDistance}>{agent.distance}</Text>
                    <Text style={styles.agentRating}>{agent.rating} ★</Text>
                  </View>
                  <ChevronRight size={24} color="#6b7280" />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.recentSection}>
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            <View style={styles.recentList}>
              {recentTransactions.map((transaction) => (
                <View key={transaction.id} style={styles.recentItem}>
                  <View style={styles.recentInfo}>
                    <Text style={styles.recentAgent}>{transaction.agent}</Text>
                    <Text style={styles.recentDate}>{transaction.date}</Text>
                  </View>
                  <View style={styles.recentAmount}>
                    <Text style={styles.amountText}>K {transaction.amount}</Text>
                    <Text style={styles.statusText}>{transaction.status}</Text>
                  </View>
                </View>
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
  inputSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  amountInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  currencySymbol: {
    fontSize: 24,
    fontWeight: '600',
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 56,
    fontSize: 24,
    fontWeight: '600',
  },
  agentsSection: {
    marginBottom: 24,
  },
  agentsList: {
    gap: 16,
  },
  agentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
  },
  agentInfo: {
    flex: 1,
  },
  agentName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  agentDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  agentAddress: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 8,
  },
  agentStatus: {
    fontSize: 14,
    marginLeft: 8,
  },
  openStatus: {
    color: '#34d399',
  },
  closedStatus: {
    color: '#ef4444',
  },
  agentMeta: {
    alignItems: 'flex-end',
    marginRight: 16,
  },
  agentDistance: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  agentRating: {
    fontSize: 14,
    color: '#fbbf24',
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
  recentAgent: {
    fontSize: 16,
    fontWeight: '500',
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
}); 