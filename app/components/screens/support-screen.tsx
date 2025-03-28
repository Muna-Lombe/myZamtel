import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp, RootStackParamList } from '../../../types/navigation';
import { ScreenProps } from '@/types/props';

type SupportCategory = {
  id: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  screen: 'Help' | 'Chat';
};

const supportCategories: SupportCategory[] = [
  {
    id: '1',
    title: 'Payment Issues',
    icon: 'card-outline',
    screen: 'Help',
  },
  {
    id: '2',
    title: 'Network & Coverage',
    icon: 'wifi-outline',
    screen: 'Help',
  },
  {
    id: '3',
    title: 'Account Security',
    icon: 'shield-checkmark-outline',
    screen: 'Help',
  },
  {
    id: '4',
    title: 'Account Settings',
    icon: 'settings-outline',
    screen: 'Help',
  },
  {
    id: '5',
    title: 'General Help',
    icon: 'help-circle-outline',
    screen: 'Help',
  },
];

type ContactOption = {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  screen?: 'Help' | 'Chat';
  action?: string;
};

const contactOptions: ContactOption[] = [
  {
    id: '1',
    title: 'Live Chat',
    description: 'Chat with our support team',
    icon: 'chatbubbles',
    screen: 'Chat',
  },
  {
    id: '2',
    title: 'Call Center',
    description: 'Call us at 111',
    icon: 'call',
    action: 'tel:111',
  },
  {
    id: '3',
    title: 'WhatsApp',
    description: 'Message us on WhatsApp',
    icon: 'logo-whatsapp',
    action: 'whatsapp://send?phone=260111222333',
  },
];

export default function SupportScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Support</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.searchContainer}>
          <TouchableOpacity 
            style={styles.searchButton}
            onPress={() => navigation.navigate('Help')}
          >
            <Ionicons name="search" size={20} color="#666" />
            <Text style={styles.searchText}>Search help articles</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How can we help you?</Text>
          <View style={styles.categoriesGrid}>
            {supportCategories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={styles.categoryItem}
                onPress={() => navigation.navigate(category.screen)}
              >
                <View style={styles.categoryIcon}>
                  <Ionicons name={category.icon} size={24} color="#10B981" />
                </View>
                <Text style={styles.categoryTitle}>{category.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          {contactOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={styles.contactItem}
              onPress={() => {
                if (option.screen) {
                  navigation.navigate(option.screen);
                } else if (option.action) {
                  // Handle external actions (tel:, whatsapp:, etc.)
                  console.log('External action:', option.action);
                }
              }}
            >
              <View style={styles.contactIcon}>
                <Ionicons name={option.icon} size={24} color="#10B981" />
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactTitle}>{option.title}</Text>
                <Text style={styles.contactDescription}>{option.description}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
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
    padding: 16,
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    padding: 12,
    borderRadius: 8,
  },
  searchText: {
    marginLeft: 8,
    color: '#666',
    fontSize: 16,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: -8,
  },
  categoryItem: {
    width: '33.33%',
    padding: 8,
    alignItems: 'center',
  },
  categoryIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E8FFF5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  contactIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8FFF5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  contactInfo: {
    flex: 1,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  contactDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
}); 