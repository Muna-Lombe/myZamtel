import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Building2, Wallet, User } from 'lucide-react-native';

export default function BankTransferScreen() {
  const navigation = useNavigation();
  const [accountNumber, setAccountNumber] = React.useState('');
  const [amount, setAmount] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Bank Transfer</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.form}>
          <View style={styles.bankSelector}>
            <TouchableOpacity style={styles.bankOption}>
              <Building2 size={24} color="#000" />
              <Text style={styles.bankName}>ZANACO</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <User size={20} color="#6b7280" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter account number"
              value={accountNumber}
              onChangeText={setAccountNumber}
              keyboardType="numeric"
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

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>

          <View style={styles.recentSection}>
            <Text style={styles.sectionTitle}>Recent Transfers</Text>
            <View style={styles.recentList}>
              <TouchableOpacity style={styles.recentItem}>
                <View style={styles.avatar}>
                  <User size={24} color="#fff" />
                </View>
                <View style={styles.recentInfo}>
                  <Text style={styles.recentName}>John Doe</Text>
                  <Text style={styles.recentAccount}>1234567890</Text>
                </View>
                <Text style={styles.recentAmount}>K 500.00</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.recentItem}>
                <View style={styles.avatar}>
                  <User size={24} color="#fff" />
                </View>
                <View style={styles.recentInfo}>
                  <Text style={styles.recentName}>Jane Smith</Text>
                  <Text style={styles.recentAccount}>0987654321</Text>
                </View>
                <Text style={styles.recentAmount}>K 1,000.00</Text>
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
  bankSelector: {
    marginBottom: 24,
  },
  bankOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    gap: 12,
  },
  bankName: {
    fontSize: 16,
    fontWeight: '500',
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
  button: {
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  recentSection: {
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
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
  recentAccount: {
    fontSize: 14,
    color: '#6b7280',
  },
  recentAmount: {
    fontSize: 16,
    fontWeight: '600',
  },
}); 