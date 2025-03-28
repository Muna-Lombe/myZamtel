import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../../types/navigation';
import { ScreenProps } from '../../../types/props';

type TransferOption = {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  screen: 'SendMoney' | 'BankTransfer' | 'InternationalTransfer' | 'RequestMoney';
};

const transferOptions: TransferOption[] = [
  {
    id: '1',
    title: 'Send to Zamtel User',
    description: 'Transfer money to another Zamtel user',
    icon: 'person',
    screen: 'SendMoney',
  },
  {
    id: '2',
    title: 'Bank Transfer',
    description: 'Transfer to a bank account',
    icon: 'business',
    screen: 'BankTransfer',
  },
  {
    id: '3',
    title: 'International Transfer',
    description: 'Send money abroad',
    icon: 'globe',
    screen: 'InternationalTransfer',
  },
  {
    id: '4',
    title: 'Request Money',
    description: 'Request money from others',
    icon: 'arrow-down',
    screen: 'RequestMoney',
  },
];

export default function TransferOptionsScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Transfer Money</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Available Balance</Text>
          <Text style={styles.balanceAmount}>K 1,234.56</Text>
          <Text style={styles.balanceInfo}>Daily transfer limit: K 10,000</Text>
        </View>

        <View style={styles.optionsContainer}>
          <Text style={styles.sectionTitle}>Transfer Options</Text>
          {transferOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={styles.optionItem}
              onPress={() => navigation.navigate(option.screen)}
            >
              <View style={styles.optionIcon}>
                <Ionicons name={option.icon} size={24} color="#10B981" />
              </View>
              <View style={styles.optionInfo}>
                <Text style={styles.optionTitle}>{option.title}</Text>
                <Text style={styles.optionDescription}>
                  {option.description}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.recentSection}>
          <Text style={styles.sectionTitle}>Recent Transfers</Text>
          <TouchableOpacity 
            style={styles.viewAllButton}
            onPress={() => navigation.navigate('TransactionHistory')}
          >
            <Text style={styles.viewAllText}>View All</Text>
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
  balanceCard: {
    margin: 16,
    padding: 16,
    backgroundColor: '#10B981',
    borderRadius: 12,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 8,
  },
  balanceInfo: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.8,
  },
  optionsContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8FFF5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  optionInfo: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  recentSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  viewAllButton: {
    padding: 8,
  },
  viewAllText: {
    color: '#10B981',
    fontWeight: '500',
  },
}); 