import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Globe, ChevronRight, Search, MapPin } from 'lucide-react-native';
import { NavigationProp } from '../../../types/navigation';
import { ScreenProps } from '@/types/props';

export default function InternationalMoneyTransferScreen({ onNavigate }: ScreenProps) {
  const navigation = useNavigation<NavigationProp>();
  const [amount, setAmount] = React.useState('');
  const [selectedCountry, setSelectedCountry] = React.useState('');

  const countries = [
    {
      id: 'uk',
      name: 'United Kingdom',
      code: 'GBP',
      flag: 'https://via.placeholder.com/40',
      exchangeRate: '0.032',
    },
    {
      id: 'us',
      name: 'United States',
      code: 'USD',
      flag: 'https://via.placeholder.com/40',
      exchangeRate: '0.040',
    },
    {
      id: 'sa',
      name: 'South Africa',
      code: 'ZAR',
      flag: 'https://via.placeholder.com/40',
      exchangeRate: '0.75',
    },
  ];

  const recentTransfers = [
    {
      id: 1,
      country: 'United Kingdom',
      amount: '500.00',
      recipient: 'John Smith',
      date: '2024-03-20',
      status: 'completed',
    },
    {
      id: 2,
      country: 'United States',
      amount: '1000.00',
      recipient: 'Jane Doe',
      date: '2024-03-19',
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

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Amount to Send</Text>
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

          <Text style={styles.sectionTitle}>Select Country</Text>
          <View style={styles.countriesList}>
            {countries.map((country) => (
              <TouchableOpacity
                key={country.id}
                style={[
                  styles.countryCard,
                  selectedCountry === country.id && styles.selectedCountryCard,
                ]}
                onPress={() => setSelectedCountry(country.id)}
              >
                <Image source={{ uri: country.flag }} style={styles.countryFlag} />
                <View style={styles.countryInfo}>
                  <Text style={styles.countryName}>{country.name}</Text>
                  <Text style={styles.exchangeRate}>
                    1 {country.code} = K {country.exchangeRate}
                  </Text>
                </View>
                <ChevronRight size={24} color="#6b7280" />
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.recentSection}>
            <Text style={styles.sectionTitle}>Recent Transfers</Text>
            <View style={styles.recentList}>
              {recentTransfers.map((transfer) => (
                <TouchableOpacity key={transfer.id} style={styles.recentItem}>
                  <View style={styles.recentInfo}>
                    <Text style={styles.recentCountry}>{transfer.country}</Text>
                    <Text style={styles.recentRecipient}>{transfer.recipient}</Text>
                    <Text style={styles.recentDate}>{transfer.date}</Text>
                  </View>
                  <View style={styles.recentAmount}>
                    <Text style={styles.amountText}>{transfer.amount}</Text>
                    <Text style={styles.statusText}>{transfer.status}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={[styles.button, !selectedCountry && styles.buttonDisabled]}
          disabled={!selectedCountry}
        >
          <Text style={styles.buttonText}>Continue</Text>
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
  countriesList: {
    gap: 12,
    marginBottom: 32,
  },
  countryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
  },
  selectedCountryCard: {
    backgroundColor: '#f0fdf4',
    borderColor: '#34d399',
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