import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Search, Check, ChevronRight } from 'lucide-react-native';
import { NavigationProp } from '../../../types/navigation';
import { ScreenProps } from '@/types/props';

export default function CreateCustomNumberScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedNumber, setSelectedNumber] = React.useState('');

  const numberCategories = [
    {
      id: 'lucky',
      name: 'Lucky Numbers',
      description: 'Numbers with special meaning',
      price: '50.00',
      examples: ['7777', '8888', '9999'],
    },
    {
      id: 'repeating',
      name: 'Repeating Numbers',
      description: 'Numbers with repeated digits',
      price: '30.00',
      examples: ['1111', '2222', '3333'],
    },
    {
      id: 'sequential',
      name: 'Sequential Numbers',
      description: 'Numbers in sequence',
      price: '40.00',
      examples: ['1234', '5678', '9012'],
    },
  ];

  const recentNumbers = [
    {
      id: 1,
      number: '7777-8888',
      category: 'Lucky Numbers',
      date: '2024-03-20',
      status: 'active',
    },
    {
      id: 2,
      number: '1111-2222',
      category: 'Repeating Numbers',
      date: '2024-03-18',
      status: 'active',
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
        <Text style={styles.title}>Create Custom Number</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.searchSection}>
            <View style={styles.searchInputContainer}>
              <Search size={20} color="#6b7280" style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search for a number..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                keyboardType="numeric"
              />
            </View>
          </View>

          <View style={styles.selectedNumberCard}>
            <Text style={styles.selectedNumberLabel}>Selected Number</Text>
            <Text style={styles.selectedNumberValue}>
              {selectedNumber || 'No number selected'}
            </Text>
          </View>

          <View style={styles.categoriesSection}>
            <Text style={styles.sectionTitle}>Number Categories</Text>
            <View style={styles.categoriesList}>
              {numberCategories.map((category) => (
                <TouchableOpacity
                  key={category.id}
                  style={styles.categoryCard}
                  onPress={() => setSelectedNumber(category.examples[0])}
                >
                  <View style={styles.categoryInfo}>
                    <Text style={styles.categoryName}>{category.name}</Text>
                    <Text style={styles.categoryDescription}>
                      {category.description}
                    </Text>
                    <View style={styles.examplesContainer}>
                      {category.examples.map((example, index) => (
                        <Text key={index} style={styles.exampleNumber}>
                          {example}
                        </Text>
                      ))}
                    </View>
                  </View>
                  <View style={styles.categoryPrice}>
                    <Text style={styles.priceText}>K {category.price}</Text>
                    <ChevronRight size={24} color="#6b7280" />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.recentSection}>
            <Text style={styles.sectionTitle}>Recent Numbers</Text>
            <View style={styles.recentList}>
              {recentNumbers.map((number) => (
                <View key={number.id} style={styles.recentItem}>
                  <View style={styles.recentInfo}>
                    <Text style={styles.recentNumber}>{number.number}</Text>
                    <Text style={styles.recentCategory}>{number.category}</Text>
                    <Text style={styles.recentDate}>{number.date}</Text>
                  </View>
                  <View style={styles.recentStatus}>
                    <Check size={20} color="#34d399" />
                    <Text style={styles.statusText}>{number.status}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={[
            styles.proceedButton,
            !selectedNumber && styles.proceedButtonDisabled
          ]}
          onPress={() => navigation.navigate('MakePayment')}
          disabled={!selectedNumber}
        >
          <Text style={styles.proceedButtonText}>Proceed to Payment</Text>
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
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  searchSection: {
    marginBottom: 24,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 48,
    fontSize: 16,
  },
  selectedNumberCard: {
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  selectedNumberLabel: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 8,
  },
  selectedNumberValue: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  categoriesSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  categoriesList: {
    gap: 16,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
  },
  categoryInfo: {
    flex: 1,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  categoryDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  examplesContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  exampleNumber: {
    fontSize: 14,
    color: '#2563eb',
    fontWeight: '500',
  },
  categoryPrice: {
    alignItems: 'flex-end',
  },
  priceText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
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
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
  },
  recentInfo: {
    flex: 1,
  },
  recentNumber: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  recentCategory: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  recentDate: {
    fontSize: 14,
    color: '#6b7280',
  },
  recentStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statusText: {
    fontSize: 14,
    color: '#34d399',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  proceedButton: {
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  proceedButtonDisabled: {
    backgroundColor: '#9ca3af',
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
}); 