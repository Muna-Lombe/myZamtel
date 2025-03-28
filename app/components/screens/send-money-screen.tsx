import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../../types/navigation';
import { ScreenProps } from '@/types/props';

type Contact = {
  id: string;
  name: string;
  phone: string;
  recentTransaction: boolean;
};

const recentContacts: Contact[] = [
  {
    id: '1',
    name: 'John Mulenga',
    phone: '+260 97 1234567',
    recentTransaction: true,
  },
  {
    id: '2',
    name: 'Mary Banda',
    phone: '+260 96 7654321',
    recentTransaction: true,
  },
  {
    id: '3',
    name: 'David Tembo',
    phone: '+260 95 9876543',
    recentTransaction: true,
  },
];

const contacts: Contact[] = [
  ...recentContacts,
  {
    id: '4',
    name: 'Sarah Phiri',
    phone: '+260 97 1122334',
    recentTransaction: false,
  },
  {
    id: '5',
    name: 'Michael Zulu',
    phone: '+260 96 5566778',
    recentTransaction: false,
  },
  {
    id: '6',
    name: 'Elizabeth Mumba',
    phone: '+260 95 9988776',
    recentTransaction: false,
  },
];

export default function SendMoneyScreen({ onNavigate }: ScreenProps) {
  const navigation = useNavigation<NavigationProp>();
  const [step, setStep] = useState<'recipient' | 'amount' | 'confirm'>('recipient');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');

  const filteredContacts = contacts.filter(
    contact => 
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.phone.includes(searchQuery)
  );

  const handleContactSelect = (contact: Contact) => {
    setSelectedContact(contact);
    setStep('amount');
  };

  const handleAmountSubmit = () => {
    if (parseFloat(amount) > 0) {
      setStep('confirm');
    }
  };

  const handleConfirm = () => {
    // In a real app, this would send the transaction to an API
    alert(`Transfer of K${amount} to ${selectedContact?.name} initiated successfully!`);
    navigation.navigate('Home');
  };

  const renderRecipientStep = () => (
    <>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search name or phone number"
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
        <View style={styles.recentContactsContainer}>
          <Text style={styles.sectionTitle}>Recent</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {recentContacts.map(contact => (
              <TouchableOpacity
                key={contact.id}
                style={styles.recentContactItem}
                onPress={() => handleContactSelect(contact)}
              >
                <View style={styles.contactAvatar}>
                  <Text style={styles.avatarText}>{contact.name.charAt(0)}</Text>
                </View>
                <Text style={styles.contactName} numberOfLines={1}>
                  {contact.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      <View style={styles.contactsContainer}>
        <Text style={styles.sectionTitle}>All Contacts</Text>
        <FlatList
          data={filteredContacts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.contactItem}
              onPress={() => handleContactSelect(item)}
            >
              <View style={styles.contactAvatar}>
                <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactName}>{item.name}</Text>
                <Text style={styles.contactPhone}>{item.phone}</Text>
              </View>
              {item.recentTransaction && (
                <Text style={styles.recentTag}>Recent</Text>
              )}
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );

  const renderAmountStep = () => (
    <View style={styles.amountContainer}>
      <View style={styles.selectedContactContainer}>
        <Text style={styles.toLabel}>To:</Text>
        <View style={styles.contactAvatar}>
          <Text style={styles.avatarText}>{selectedContact?.name.charAt(0)}</Text>
        </View>
        <View style={styles.contactInfo}>
          <Text style={styles.contactName}>{selectedContact?.name}</Text>
          <Text style={styles.contactPhone}>{selectedContact?.phone}</Text>
        </View>
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
            <Text style={styles.summaryValue}>{selectedContact?.name}</Text>
            <Text style={styles.summaryPhone}>{selectedContact?.phone}</Text>
          </View>
        </View>
        
        {note.length > 0 && (
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Note:</Text>
            <Text style={styles.summaryValue}>{note}</Text>
          </View>
        )}
        
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Fee:</Text>
          <Text style={styles.summaryValue}>K 0.00</Text>
        </View>
        
        <View style={[styles.summaryRow, styles.totalRow]}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalValue}>K {amount}</Text>
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
            if (step === 'recipient') {
              navigation.goBack();
            } else if (step === 'amount') {
              setStep('recipient');
            } else {
              setStep('amount');
            }
          }}
        >
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {step === 'recipient' ? 'Select Recipient' : 
           step === 'amount' ? 'Enter Amount' : 'Confirm Transfer'}
        </Text>
        <View style={{ width: 24 }} />
      </View>

      {step === 'recipient' && renderRecipientStep()}
      {step === 'amount' && renderAmountStep()}
      {step === 'confirm' && renderConfirmStep()}
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
  recentContactsContainer: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginHorizontal: 16,
    marginBottom: 12,
  },
  recentContactItem: {
    alignItems: 'center',
    marginHorizontal: 8,
    marginLeft: 16,
    width: 70,
  },
  contactAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#10B981',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  contactName: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  contactsContainer: {
    flex: 1,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  contactInfo: {
    flex: 1,
    marginLeft: 12,
  },
  contactPhone: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  recentTag: {
    fontSize: 12,
    color: '#10B981',
    fontWeight: '500',
  },
  amountContainer: {
    flex: 1,
    padding: 16,
  },
  selectedContactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  toLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginRight: 12,
  },
  amountInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 32,
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
  confirmContainer: {
    flex: 1,
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
  summaryPhone: {
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