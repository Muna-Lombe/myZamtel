import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList, NavigationProp } from '../../../types/navigation';
import { ScreenProps } from '@/types/props';


type SavedItem  = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  savedDate: string;
  
};

const savedItems: SavedItem[] = [
  {
    id: '1',
    name: 'iPhone 13 Pro',
    price: 999,
    image: 'https://example.com/iphone13.jpg',
    category: 'Electronics',
    savedDate: '2024-03-20',
  },
  {
    id: '2',
    name: 'Samsung Galaxy Watch',
    price: 299,
    image: 'https://example.com/galaxy-watch.jpg',
    category: 'Electronics',
    savedDate: '2024-03-19',
  },
  {
    id: '3',
    name: 'Nike Air Max',
    price: 129,
    image: 'https://example.com/nike-air.jpg',
    category: 'Fashion',
    savedDate: '2024-03-18',
  },
  {
    id: '4',
    name: 'MacBook Pro',
    price: 1299,
    image: 'https://example.com/macbook.jpg',
    category: 'Electronics',
    savedDate: '2024-03-17',
  },
];

const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Beauty'];

export default function SavedItemsScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = savedItems.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const renderItem = ({ item }: { item: SavedItem }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.productImage}
        resizeMode="cover"
      />
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={styles.productPrice}>K{item.price}</Text>
        <Text style={styles.savedDate}>Saved on {item.savedDate}</Text>
      </View>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => {
          // Handle remove item
        }}
      >
        <Ionicons name="heart" size={20} color="#ef4444" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Saved Items</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.filterButton,
              selectedCategory === category && styles.filterButtonActive,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.filterButtonText,
                selectedCategory === category && styles.filterButtonTextActive,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productGrid}
      />
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
  },
  filterContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    marginRight: 8,
  },
  filterButtonActive: {
    backgroundColor: '#60a5fa',
  },
  filterButtonText: {
    color: '#6b7280',
    fontWeight: '500',
  },
  filterButtonTextActive: {
    color: '#fff',
  },
  productGrid: {
    padding: 8,
  },
  productCard: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  savedDate: {
    fontSize: 12,
    color: '#6b7280',
  },
  removeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 4,
  },
}); 