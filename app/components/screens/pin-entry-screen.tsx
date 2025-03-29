import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Lock } from 'lucide-react-native';
import { NavigationProp } from '../../../types/navigation';
import { ScreenProps } from '../../../types/props';//'@/types/props';

type RouteParams = {
  amount: number;
  recipient: string;
  type: 'send' | 'withdraw' | 'payment';
  onSuccess: () => void;
};

export default function PinEntryScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute();
  const { amount, recipient, type, onSuccess } = route.params as RouteParams;
  const [pin, setPin] = React.useState('');
  const [error, setError] = React.useState('');

  const handlePinPress = (digit: string) => {
    if (pin.length < 4) {
      const newPin = pin + digit;
      setPin(newPin);
      if (newPin.length === 4) {
        validatePin(newPin);
      }
    }
  };

  const handleDelete = () => {
    if (pin.length > 0) {
      setPin(pin.slice(0, -1));
      setError('');
    }
  };

  const validatePin = (enteredPin: string) => {
    // In a real app, this would validate against the user's stored PIN
    if (enteredPin === '1234') {
      onSuccess();
      navigation.goBack();
    } else {
      setError('Incorrect PIN. Please try again.');
      setPin('');
    }
  };

  const getTransactionTitle = () => {
    switch (type) {
      case 'send':
        return 'Send Money';
      case 'withdraw':
        return 'Cash Out';
      case 'payment':
        return 'Make Payment';
      default:
        return 'Transaction';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Enter PIN</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.transactionInfo}>
          <Text style={styles.transactionTitle}>{getTransactionTitle()}</Text>
          <Text style={styles.amount}>K{amount.toFixed(2)}</Text>
          <Text style={styles.recipient}>{recipient}</Text>
        </View>

        <View style={styles.pinContainer}>
          <View style={styles.pinDots}>
            {[0, 1, 2, 3].map((index) => (
              <View
                key={index}
                style={[
                  styles.pinDot,
                  index < pin.length && styles.pinDotFilled,
                ]}
              />
            ))}
          </View>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>

        <View style={styles.keypad}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'delete'].map((digit, index) => (
            <TouchableOpacity
              key={index}
              style={styles.keypadButton}
              onPress={() => {
                if (digit === 'delete') {
                  handleDelete();
                } else if (digit !== '') {
                  handlePinPress(digit.toString());
                }
              }}
            >
              {digit === 'delete' ? (
                <Text style={styles.deleteText}>Delete</Text>
              ) : digit === '' ? (
                <View style={styles.emptyButton} />
              ) : (
                <Text style={styles.keypadText}>{digit}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity 
          style={styles.forgotPinButton}
          onPress={() => Alert.alert('Forgot PIN', 'Please contact customer support to reset your PIN.')}
        >
          <Text style={styles.forgotPinText}>Forgot PIN?</Text>
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
  content: {
    flex: 1,
    padding: 16,
  },
  transactionInfo: {
    alignItems: 'center',
    marginBottom: 32,
  },
  transactionTitle: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 8,
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  recipient: {
    fontSize: 16,
    color: '#374151',
  },
  pinContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  pinDots: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  pinDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#e5e7eb',
    marginHorizontal: 8,
  },
  pinDotFilled: {
    backgroundColor: '#000',
  },
  errorText: {
    color: '#ef4444',
    fontSize: 14,
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 32,
  },
  keypadButton: {
    width: '30%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1.5%',
  },
  keypadText: {
    fontSize: 24,
    color: '#111827',
  },
  deleteText: {
    fontSize: 16,
    color: '#6b7280',
  },
  emptyButton: {
    width: '100%',
    height: '100%',
  },
  forgotPinButton: {
    alignItems: 'center',
  },
  forgotPinText: {
    fontSize: 14,
    color: '#6b7280',
  },
}); 