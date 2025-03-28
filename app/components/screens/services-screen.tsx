import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Wallet, CreditCard, Phone, ShoppingCart, Building2 } from 'lucide-react-native';
import { NavigationProp } from '../../../types/navigation';
import { ScreenProps } from '@/types/props';

export default function ServicesScreen({ onNavigate }: ScreenProps) {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Services</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.grid}>
          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('SendMoney')}
          >
            <Wallet size={24} color="#000" />
            <Text style={styles.cardText}>Send Money</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <CreditCard size={24} color="#000" />
            <Text style={styles.cardText}>Pay Bills</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Phone size={24} color="#000" />
            <Text style={styles.cardText}>Airtime</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <ShoppingCart size={24} color="#000" />
            <Text style={styles.cardText}>Shopping</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('BankTransfer')}
          >
            <Building2 size={24} color="#000" />
            <Text style={styles.cardText}>Bank Transfer</Text>
          </TouchableOpacity>
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    gap: 16,
  },
  card: {
    width: '47%',
    aspectRatio: 1,
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '500',
  },
}); 