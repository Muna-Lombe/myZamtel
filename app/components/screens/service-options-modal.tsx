import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../../types/navigation';

type ServiceOption = {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  screen: string;
};

type ServiceCategory = {
  id: string;
  title: string;
  options: ServiceOption[];
};

const serviceCategories: ServiceCategory[] = [
  {
    id: 'financial',
    title: 'Financial Services',
    options: [
      {
        id: 'banking',
        title: 'Banking Services',
        description: 'Access banking services and transfers',
        icon: 'business',
        screen: 'ServiceShow',
      },
      {
        id: 'loans',
        title: 'Loans & Credit',
        description: 'Apply for loans and credit services',
        icon: 'cash',
        screen: 'ServiceShow',
      },
      {
        id: 'insurance',
        title: 'Insurance',
        description: 'Purchase and manage insurance policies',
        icon: 'shield-checkmark',
        screen: 'ServiceShow',
      },
    ],
  },
  {
    id: 'utility',
    title: 'Bill Payments',
    options: [
      {
        id: 'electricity',
        title: 'Electricity',
        description: 'Pay for ZESCO electricity',
        icon: 'flash',
        screen: 'ServiceShow',
      },
      {
        id: 'water',
        title: 'Water',
        description: 'Pay water bills',
        icon: 'water',
        screen: 'ServiceShow',
      },
      {
        id: 'tv',
        title: 'TV & Internet',
        description: 'Pay for TV and internet services',
        icon: 'tv',
        screen: 'ServiceShow',
      },
    ],
  },
  {
    id: 'telecom',
    title: 'Telecom Services',
    options: [
      {
        id: 'airtime',
        title: 'Airtime & Data',
        description: 'Purchase airtime and data bundles',
        icon: 'phone-portrait',
        screen: 'ServiceShow',
      },
      {
        id: 'voicebundles',
        title: 'Voice Bundles',
        description: 'Buy voice bundles for local and international calls',
        icon: 'call',
        screen: 'ServiceShow',
      },
      {
        id: 'devices',
        title: 'Device Plans',
        description: 'Purchase phones and devices on installment',
        icon: 'hardware-chip',
        screen: 'ServiceShow',
      },
    ],
  },
];

type ServiceOptionsModalProps = {
  visible: boolean;
  onClose: () => void;
};

export default function ServiceOptionsModal({ visible, onClose }: ServiceOptionsModalProps) {
  const navigation = useNavigation<NavigationProp>();

  const handleServiceSelect = (service: ServiceOption) => {
    onClose();
    navigation.navigate('ServiceShow', {
      serviceId: service.id,
      serviceName: service.title,
      serviceDescription: service.description,
    });
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Services</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.content}>
            {serviceCategories.map((category) => (
              <View key={category.id} style={styles.categorySection}>
                <Text style={styles.categoryTitle}>{category.title}</Text>
                {category.options.map((option) => (
                  <TouchableOpacity
                    key={option.id}
                    style={styles.serviceItem}
                    onPress={() => handleServiceSelect(option)}
                  >
                    <View style={styles.serviceIcon}>
                      <Ionicons name={option.icon} size={24} color="#10B981" />
                    </View>
                    <View style={styles.serviceInfo}>
                      <Text style={styles.serviceTitle}>{option.title}</Text>
                      <Text style={styles.serviceDescription}>{option.description}</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="#999" />
                  </TouchableOpacity>
                ))}
              </View>
            ))}

            <View style={styles.promoSection}>
              <Text style={styles.promoTitle}>Special Offers</Text>
              <View style={styles.promoCard}>
                <Text style={styles.promoCardTitle}>50% off on first transaction</Text>
                <Text style={styles.promoCardDescription}>
                  Get 50% off on your first bill payment (up to K50)
                </Text>
                <TouchableOpacity style={styles.promoButton}>
                  <Text style={styles.promoButtonText}>View Offer</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
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
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: '90%',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
  },
  categorySection: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  serviceIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8FFF5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  promoSection: {
    padding: 16,
    marginBottom: 24,
  },
  promoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  promoCard: {
    backgroundColor: '#E8FFF5',
    borderRadius: 12,
    padding: 16,
  },
  promoCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#10B981',
    marginBottom: 8,
  },
  promoCardDescription: {
    fontSize: 14,
    color: '#333',
    marginBottom: 12,
  },
  promoButton: {
    backgroundColor: '#10B981',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  promoButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
}); 