import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../../types/navigation';
import { ScreenProps } from '../../../types/props';//'@/types/props';

type ServiceOption = {
  id: string;
  name: string;
  icon: 'send' | 'receipt' | 'wallet' | 'phone-portrait' | 'business';
  screen: 'SendMoney' | 'PayBills' | 'MobileMoney' | 'MakePayment';
  description: string;
};

const serviceOptions: ServiceOption[] = [
  {
    id: '1',
    name: 'Send Money',
    icon: 'send',
    screen: 'SendMoney',
    description: 'Transfer money to other Zamtel users',
  },
  {
    id: '2',
    name: 'Pay Bills',
    icon: 'receipt',
    screen: 'PayBills',
    description: 'Pay your utility bills and subscriptions',
  },
  {
    id: '3',
    name: 'Mobile Money',
    icon: 'wallet',
    screen: 'MobileMoney',
    description: 'Access your mobile money account',
  },
  {
    id: '4',
    name: 'Buy Airtime',
    icon: 'phone-portrait',
    screen: 'MakePayment',
    description: 'Purchase airtime for any network',
  },
  {
    id: '5',
    name: 'Bank Transfer',
    icon: 'business',
    screen: 'MakePayment',
    description: 'Transfer to and from your bank account',
  },
];

type Props = {
  visible?: boolean;
  onClose: () => void;
};

export default function ServiceOptionsModal({ visible, onClose }: Props ) {
  const navigation = useNavigation<NavigationProp>();

  const handleOptionPress = (option: ServiceOption) => {
    onClose();
    navigation.navigate(option.screen);
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Services</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.optionsList}>
            {serviceOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={styles.optionItem}
                onPress={() => handleOptionPress(option)}
              >
                <View style={styles.optionIcon}>
                  <Ionicons name={option.icon} size={24} color="#10B981" />
                </View>
                <View style={styles.optionInfo}>
                  <Text style={styles.optionName}>{option.name}</Text>
                  <Text style={styles.optionDescription}>
                    {option.description}
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#999" />
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.footer}>
            <TouchableOpacity 
              style={styles.allServicesButton}
              onPress={() => {
                onClose();
                navigation.navigate('Services');
              }}
            >
              <Text style={styles.allServicesText}>View All Services</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
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
  closeButton: {
    padding: 4,
  },
  optionsList: {
    padding: 16,
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
  optionName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  allServicesButton: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  allServicesText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  },
}); 