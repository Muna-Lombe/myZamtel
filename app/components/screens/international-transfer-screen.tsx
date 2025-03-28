import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Search, ChevronRight, Globe, CreditCard } from 'lucide-react-native';
import { NavigationProp } from '../../../types/navigation';
import { ScreenProps } from '../../../types/props';

export default function InternationalTransferScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCountry, setSelectedCountry] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const popularCountries = [
    {
      id: 'uk',
      name: 'United Kingdom',
      code: 'GBP',
      flag: require('../../../assets/flags/uk.png'),
      rate: '0.032',
    },
    {
      id: 'us',
      name: 'United States',
      code: 'USD',
      flag: require('../../../assets/flags/us.png'),
      rate: '0.040',
    },
    {
      id: 'sa',
      name: 'South Africa',
      code: 'ZAR',
      flag: require('../../../assets/flags/sa.png'),
      rate: '0.75',
    },
  ];

  const recentTransfers = [
    {
      id: 1,
      country: 'United Kingdom',
      recipient: 'John Smith',
      amount: '500.00',
      date: '2024-03-20',
      status: 'completed',
    },
    {
      id: 2,
      country: 'United States',
      recipient: 'Jane Doe',
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
        <Text style={styles.title}>International Transfer</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.balanceCard}>
            <Text style={styles.balanceLabel}>Available Balance</Text>
            <Text style={styles.balanceAmount}>K 2,500.00</Text>
          </View>

          <View style={styles.searchSection}>
            <View style={styles.searchInputContainer}>
              <Search size={20} color="#6b7280" style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search country..."
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>
          </View>

          <View style={styles.countriesSection}>
            <Text style={styles.sectionTitle}>Popular Countries</Text>
            <View style={styles.countriesList}>
              {popularCountries.map((country) => (
                <TouchableOpacity
                  key={country.id}
                  style={[
                    styles.countryCard,
                    selectedCountry === country.id && styles.selectedCountryCard,
                  ]}
                  onPress={() => setSelectedCountry(country.id)}
                >
                  <Image source={country.flag} style={styles.countryFlag} />
                  <View style={styles.countryInfo}>
                    <Text style={styles.countryName}>{country.name}</Text>
                    <Text style={styles.exchangeRate}>
                      1 {country.code} = K {country.rate}
                    </Text>
                  </View>
                  <ChevronRight size={24} color="#6b7280" />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {selectedCountry && (
            <View style={styles.transferSection}>
              <Text style={styles.sectionTitle}>Transfer Details</Text>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Amount (K)</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter amount"
                  value={amount}
                  onChangeText={setAmount}
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.feeInfo}>
                <Text style={styles.feeLabel}>Transfer Fee:</Text>
                <Text style={styles.feeAmount}>K 50.00</Text>
              </View>
            </View>
          )}

          <View style={styles.recentSection}>
            <Text style={styles.sectionTitle}>Recent Transfers</Text>
            <View style={styles.recentList}>
              {recentTransfers.map((transfer) => (
                <View key={transfer.id} style={styles.recentItem}>
                  <View style={styles.recentInfo}>
                    <Text style={styles.recentCountry}>{transfer.country}</Text>
                    <Text style={styles.recentRecipient}>{transfer.recipient}</Text>
                    <Text style={styles.recentDate}>{transfer.date}</Text>
                  </View>
                  <View style={styles.recentAmount}>
                    <Text style={styles.amountText}>K {transfer.amount}</Text>
                    <Text style={styles.statusText}>{transfer.status}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {selectedCountry && (
        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.proceedButton}
            onPress={() => navigation.navigate('MakePayment')}
          >
            <CreditCard size={24} color="#fff" />
            <Text style={styles.proceedButtonText}>Proceed to Payment</Text>
          </TouchableOpacity>
        </View>
      )}
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
  searchSection: {
    marginBottom: 24,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 48,
    fontSize: 16,
  },
  countriesSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  countriesList: {
    gap: 12,
  },
  countryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
  },
  selectedCountryCard: {
    backgroundColor: '#eff6ff',
    borderColor: '#2563eb',
    borderWidth: 1,
  },
  countryFlag: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  countryInfo: {
    flex: 1,
  },
  countryName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  exchangeRate: {
    fontSize: 14,
    color: '#6b7280',
  },
  transferSection: {
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
    color: '#374151',
  },
  input: {
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  feeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
  },
  feeLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  feeAmount: {
    fontSize: 14,
    fontWeight: '500',
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
  recentCountry: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  recentRecipient: {
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
  proceedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 8,
    gap: 8,
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
}); 