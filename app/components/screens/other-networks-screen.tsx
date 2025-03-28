import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Wifi, Phone, ChevronRight } from 'lucide-react-native';
import { NavigationProp } from '../../../types/navigation';

type Network = {
  id: string;
  name: string;
  logo: string;
  services: {
    id: string;
    name: string;
    description: string;
    icon: 'wifi' | 'phone';
  }[];
};

export default function OtherNetworksScreen() {
  const navigation = useNavigation<NavigationProp>();

  const networks: Network[] = [
    {
      id: '1',
      name: 'MTN',
      logo: 'https://picsum.photos/50/50',
      services: [
        {
          id: '1',
          name: 'Data Bundles',
          description: 'Purchase data bundles for internet access',
          icon: 'wifi',
        },
        {
          id: '2',
          name: 'Airtime',
          description: 'Buy airtime for calls and SMS',
          icon: 'phone',
        },
      ],
    },
    {
      id: '2',
      name: 'Airtel',
      logo: 'https://picsum.photos/50/50',
      services: [
        {
          id: '3',
          name: 'Data Bundles',
          description: 'Purchase data bundles for internet access',
          icon: 'wifi',
        },
        {
          id: '4',
          name: 'Airtime',
          description: 'Buy airtime for calls and SMS',
          icon: 'phone',
        },
      ],
    },
    {
      id: '3',
      name: 'Zamtel',
      logo: 'https://picsum.photos/50/50',
      services: [
        {
          id: '5',
          name: 'Data Bundles',
          description: 'Purchase data bundles for internet access',
          icon: 'wifi',
        },
        {
          id: '6',
          name: 'Airtime',
          description: 'Buy airtime for calls and SMS',
          icon: 'phone',
        },
      ],
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
        <Text style={styles.title}>Other Networks</Text>
      </View>

      <ScrollView style={styles.content}>
        {networks.map((network) => (
          <View key={network.id} style={styles.networkSection}>
            <View style={styles.networkHeader}>
              <Image
                source={{ uri: network.logo }}
                style={styles.networkLogo}
              />
              <Text style={styles.networkName}>{network.name}</Text>
            </View>

            {network.services.map((service) => (
              <TouchableOpacity
                key={service.id}
                style={styles.serviceCard}
                onPress={() => navigation.navigate('Airtime', {
                  network: network.name,
                  service: service.name,
                })}
              >
                <View style={styles.serviceIcon}>
                  {service.icon === 'wifi' ? (
                    <Wifi size={24} color="#000" />
                  ) : (
                    <Phone size={24} color="#000" />
                  )}
                </View>
                <View style={styles.serviceInfo}>
                  <Text style={styles.serviceName}>{service.name}</Text>
                  <Text style={styles.serviceDescription}>{service.description}</Text>
                </View>
                <ChevronRight size={24} color="#6b7280" />
              </TouchableOpacity>
            ))}
          </View>
        ))}
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
  content: {
    flex: 1,
    padding: 16,
  },
  networkSection: {
    marginBottom: 24,
  },
  networkHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  networkLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  networkName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#6b7280',
  },
}); 