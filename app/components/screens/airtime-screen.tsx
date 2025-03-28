import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Phone, Wallet, User } from 'lucide-react-native';
import { NavigationProp } from '../../../types/navigation';

export default function AirtimeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const airtimeOptions = [
    { amount: '5.00', label: 'K 5.00' },
    { amount: '10.00', label: 'K 10.00' },
    { amount: '20.00', label: 'K 20.00' },
    { amount: '50.00', label: 'K 50.00' },
    { amount: '100.00', label: 'K 100.00' },
    { amount: '200.00', label: 'K 200.00' },
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
        <Text style={styles.title}>Buy Airtime</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Phone size={20} color="#6b7280" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter phone number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputContainer}>
            <Wallet size={20} color="#6b7280" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter amount"
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
            />
          </View>

          <Text style={styles.sectionTitle}>Quick Select</Text>
          <View style={styles.optionsGrid}>
            {airtimeOptions.map((option) => (
              <TouchableOpacity
                key={option.amount}
                style={styles.optionButton}
                onPress={() => setAmount(option.amount)}
              >
                <Text style={styles.optionText}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Buy Airtime</Text>
          </TouchableOpacity>

          <View style={styles.recentSection}>
            <Text style={styles.sectionTitle}>Recent Purchases</Text>
            <View style={styles.recentList}>
              <TouchableOpacity style={styles.recentItem}>
                <View style={styles.avatar}>
                  <User size={24} color="#fff" />
                </View>
                <View style={styles.recentInfo}>
                  <Text style={styles.recentName}>+260 955 123 456</Text>
                  <Text style={styles.recentDate}>2024-03-20 14:30</Text>
                </View>
                <Text style={styles.recentAmount}>K 50.00</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.recentItem}>
                <View style={styles.avatar}>
                  <User size={24} color="#fff" />
                </View>
                <View style={styles.recentInfo}>
                  <Text style={styles.recentName}>+260 955 789 012</Text>
                  <Text style={styles.recentDate}>2024-03-19 09:15</Text>
                </View>
                <Text style={styles.recentAmount}>K 100.00</Text>
              </TouchableOpacity>
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
  form: {
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  optionButton: {
    width: '47%',
    padding: 16,
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 32,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
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
    padding: 12,
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6b7280',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  recentInfo: {
    flex: 1,
  },
  recentName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  recentDate: {
    fontSize: 14,
    color: '#6b7280',
  },
  recentAmount: {
    fontSize: 16,
    fontWeight: '600',
  },
}); 