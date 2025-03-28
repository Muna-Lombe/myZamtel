import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../../types/navigation';

type Bank = {
  id: string;
  name: string;
  logo: string;
  isPopular: boolean;
};

type BankAccount = {
  id: string;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  isRecent: boolean;
};

const popularBanks: Bank[] = [
  { id: '1', name: 'Zanaco', logo: 'Z', isPopular: true },
  { id: '2', name: 'Standard Chartered', logo: 'SC', isPopular: true },
  { id: '3', name: 'First National Bank', logo: 'FNB', isPopular: true },
  { id: '4', name: 'Stanbic Bank', logo: 'S', isPopular: true },
];

const allBanks: Bank[] = [
  ...popularBanks,
  { id: '5', name: 'Atlas Mara', logo: 'AM', isPopular: false },
  { id: '6', name: 'Investrust', logo: 'I', isPopular: false },
  { id: '7', name: 'Ecobank', logo: 'E', isPopular: false },
  { id: '8', name: 'Bank of Zambia', logo: 'BOZ', isPopular: false },
];

const recentAccounts: BankAccount[] = [
  {
    id: '1',
    bankName: 'Zanaco',
    accountNumber: '1234567890',
    accountHolder: 'John Mulenga',
    isRecent: true,
  },
  {
    id: '2',
    bankName: 'Standard Chartered',
    accountNumber: '0987654321',
    accountHolder: 'Mary Banda',
    isRecent: true,
  },
];

export default function BankTransferScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [step, setStep] = useState<'bank' | 'account' | 'amount' | 'confirm'>('bank');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [selectedAccount, setSelectedAccount] = useState<BankAccount | null>(null);
  const [accountNumber, setAccountNumber] = useState('');
  const [accountHolder, setAccountHolder] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [reason, setReason] = useState('');

  const filteredBanks = allBanks.filter(
    bank => bank.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBankSelect = (bank: Bank) => {
    setSelectedBank(bank);
    setStep('account');
  };

  const handleAccountSelect = (account: BankAccount) => {
    setSelectedAccount(account);
    setAccountNumber(account.accountNumber);
    setAccountHolder(account.accountHolder);
    setStep('amount');
  };

  const handleAccountSubmit = () => {
    if (accountNumber.trim() === '' || accountHolder.trim() === '') return;

    setSelectedAccount({
      id: Date.now().toString(),
      bankName: selectedBank?.name || '',
      accountNumber,
      accountHolder,
      isRecent: false,
    });
    setStep('amount');
  };

  const handleAmountSubmit = () => {
    if (parseFloat(amount) > 0) {
      setStep('confirm');
    }
  };

  const handleConfirm = () => {
    // In a real app, this would send the transaction to an API
    alert(`Transfer of K${amount} to ${accountHolder} initiated successfully!`);
    navigation.navigate('Home');
  };

  const renderBankStep = () => (
    <>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a bank"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Ionicons name="close-circle" size={20} color="#999" />
          </TouchableOpacity>
        )}
      </View>

      {searchQuery.length === 0 && (
        <View style={styles.popularBanksContainer}>
          <Text style={styles.sectionTitle}>Popular Banks</Text>
          <View style={styles.popularBanksGrid}>
            {popularBanks.map(bank => (
              <TouchableOpacity
                key={bank.id}
                style={styles.bankCard}
                onPress={() => handleBankSelect(bank)}
              >
                <View style={styles.bankLogo}>
                  <Text style={styles.bankLogoText}>{bank.logo}</Text>
                </View>
                <Text style={styles.bankName}>{bank.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      <View style={styles.allBanksContainer}>
        <Text style={styles.sectionTitle}>All Banks</Text>
        <FlatList
          data={filteredBanks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.bankItem}
              onPress={() => handleBankSelect(item)}
            >
              <View style={styles.bankLogo}>
                <Text style={styles.bankLogoText}>{item.logo}</Text>
              </View>
              <Text style={styles.bankItemName}>{item.name}</Text>
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );

  const renderAccountStep = () => (
    <>
      {recentAccounts.length > 0 && (
        <View style={styles.recentAccountsContainer}>
          <Text style={styles.sectionTitle}>Recent Accounts</Text>
          {recentAccounts
            .filter(account => account.bankName === selectedBank?.name)
            .map(account => (
              <TouchableOpacity
                key={account.id}
                style={styles.accountItem}
                onPress={() => handleAccountSelect(account)}
              >
                <View style={styles.accountInfo}>
                  <Text style={styles.accountNumber}>{account.accountNumber}</Text>
                  <Text style={styles.accountHolder}>{account.accountHolder}</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#999" />
              </TouchableOpacity>
            ))}
        </View>
      )}

      <View style={styles.newAccountContainer}>
        <Text style={styles.sectionTitle}>Enter Account Details</Text>
        
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Account Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter account number"
            value={accountNumber}
            onChangeText={setAccountNumber}
            keyboardType="numeric"
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Account Holder Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter account holder name"
            value={accountHolder}
            onChangeText={setAccountHolder}
          />
        </View>
        
        <TouchableOpacity
          style={[
            styles.continueButton,
            { opacity: accountNumber.trim() && accountHolder.trim() ? 1 : 0.5 }
          ]}
          onPress={handleAccountSubmit}
          disabled={!accountNumber.trim() || !accountHolder.trim()}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </>
  );

  const renderAmountStep = () => (
    <View style={styles.amountContainer}>
      <View style={styles.selectedAccountContainer}>
        <Text style={styles.bankNameText}>{selectedAccount?.bankName}</Text>
        <Text style={styles.accountNumberText}>{selectedAccount?.accountNumber}</Text>
        <Text style={styles.accountHolderText}>{selectedAccount?.accountHolder}</Text>
      </View>

      <View style={styles.amountInputContainer}>
        <Text style={styles.currencySymbol}>K</Text>
        <TextInput
          style={styles.amountInput}
          keyboardType="decimal-pad"
          placeholder="0.00"
          value={amount}
          onChangeText={setAmount}
          autoFocus
        />
      </View>

      <Text style={styles.balanceText}>Available balance: K 1,234.56</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Reason for Transfer</Text>
        <TextInput
          style={styles.input}
          placeholder="Select or enter reason"
          value={reason}
          onChangeText={setReason}
        />
      </View>

      <View style={styles.noteContainer}>
        <TextInput
          style={styles.noteInput}
          placeholder="Add a note (optional)"
          value={note}
          onChangeText={setNote}
          multiline
        />
      </View>

      <TouchableOpacity
        style={[
          styles.continueButton,
          { opacity: parseFloat(amount) > 0 ? 1 : 0.5 }
        ]}
        onPress={handleAmountSubmit}
        disabled={!(parseFloat(amount) > 0)}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );

  const renderConfirmStep = () => (
    <View style={styles.confirmContainer}>
      <View style={styles.transferSummary}>
        <Text style={styles.summaryTitle}>Transfer Summary</Text>
        
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Amount:</Text>
          <Text style={styles.summaryValue}>K {amount}</Text>
        </View>
        
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>To:</Text>
          <View style={styles.summaryValueColumn}>
            <Text style={styles.summaryValue}>{selectedAccount?.accountHolder}</Text>
            <Text style={styles.summaryBankDetails}>
              {selectedAccount?.bankName} • {selectedAccount?.accountNumber}
            </Text>
          </View>
        </View>
        
        {reason && (
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Reason:</Text>
            <Text style={styles.summaryValue}>{reason}</Text>
          </View>
        )}
        
        {note && (
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Note:</Text>
            <Text style={styles.summaryValue}>{note}</Text>
          </View>
        )}
        
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Fee:</Text>
          <Text style={styles.summaryValue}>K 5.00</Text>
        </View>
        
        <View style={[styles.summaryRow, styles.totalRow]}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalValue}>K {(parseFloat(amount) + 5).toFixed(2)}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={handleConfirm}
      >
        <Text style={styles.confirmButtonText}>Confirm Transfer</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => setStep('amount')}
      >
        <Text style={styles.cancelButtonText}>Edit Transfer</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            if (step === 'bank') {
              navigation.goBack();
            } else if (step === 'account') {
              setStep('bank');
            } else if (step === 'amount') {
              setStep('account');
            } else {
              setStep('amount');
            }
          }}
        >
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {step === 'bank' ? 'Select Bank' : 
           step === 'account' ? 'Enter Account Details' : 
           step === 'amount' ? 'Enter Amount' : 'Confirm Transfer'}
        </Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        {step === 'bank' && renderBankStep()}
        {step === 'account' && renderAccountStep()}
        {step === 'amount' && renderAmountStep()}
        {step === 'confirm' && renderConfirmStep()}
      </ScrollView>
    </KeyboardAvoidingView>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    margin: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  popularBanksContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  popularBanksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bankCard: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  bankLogo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E8FFF5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  bankLogoText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#10B981',
  },
  bankName: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  allBanksContainer: {
    padding: 16,
    flex: 1,
  },
  bankItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  bankItemName: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 12,
  },
  recentAccountsContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  accountInfo: {
    flex: 1,
  },
  accountNumber: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  accountHolder: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  newAccountContainer: {
    padding: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#333',
  },
  continueButton: {
    backgroundColor: '#10B981',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  amountContainer: {
    padding: 16,
  },
  selectedAccountContainer: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 16,
  },
  bankNameText: {
    fontSize: 14,
    color: '#666',
  },
  accountNumberText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 4,
  },
  accountHolderText: {
    fontSize: 14,
    color: '#333',
    marginTop: 2,
  },
  amountInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 24,
  },
  currencySymbol: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 8,
  },
  amountInput: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    minWidth: 150,
  },
  balanceText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  noteContainer: {
    marginVertical: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
  },
  noteInput: {
    fontSize: 16,
    color: '#333',
    minHeight: 60,
  },
  confirmContainer: {
    padding: 16,
  },
  transferSummary: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    marginVertical: 16,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  summaryLabel: {
    fontSize: 16,
    color: '#666',
  },
  summaryValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    textAlign: 'right',
  },
  summaryValueColumn: {
    alignItems: 'flex-end',
  },
  summaryBankDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  totalRow: {
    marginTop: 8,
    paddingTop: 8,
    borderBottomWidth: 0,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10B981',
  },
  confirmButton: {
    backgroundColor: '#10B981',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '500',
  },
}); 