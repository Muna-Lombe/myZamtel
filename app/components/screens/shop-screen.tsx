import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../../types/navigation';
import { ScreenProps } from '@/types/props';

type Category = {
  id: string;
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
};

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  seller: string;
  category: string;
};

const categories: Category[] = [
  { id: '1', name: 'Electronics', icon: 'phone-portrait' },
  { id: '2', name: 'Fashion', icon: 'shirt' },
  { id: '3', name: 'Home', icon: 'home' },
  { id: '4', name: 'Beauty', icon: 'sparkles' },
  { id: '5', name: 'Sports', icon: 'football' },
];

const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Earbuds',
    price: 299.99,
    description: 'High-quality wireless earbuds with noise cancellation',
    image: 'https://example.com/earbuds.jpg',
    rating: 4.5,
    reviews: 128,
    seller: 'TechGear',
    category: 'Electronics',
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 499.99,
    description: 'Feature-rich smartwatch with health monitoring',
    image: 'https://example.com/smartwatch.jpg',
    rating: 4.8,
    reviews: 256,
    seller: 'WearTech',
    category: 'Electronics',
  },
  // Add more sample products as needed
];

export default function ShopScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [searchQuery, setSearchQuery] = useState('');

  const renderProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate('ProductDetail', { product: {
        ...item,
        images: [item.image],
        specifications: {},
      }})}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.productImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={styles.productPrice}>K {item.price.toFixed(2)}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={14} color="#FFB800" />
          <Text style={styles.ratingText}>
            {item.rating} ({item.reviews})
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Shop</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SavedItems')}>
          <Ionicons name="heart-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.categoriesRow}>
              {categories.map((category) => (
                <TouchableOpacity
                  key={category.id}
                  style={styles.categoryItem}
                >
                  <View style={styles.categoryIcon}>
                    <Ionicons name={category.icon} size={24} color="#10B981" />
                  </View>
                  <Text style={styles.categoryName}>{category.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        <View style={styles.productsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Products</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={sampleProducts}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id}
            numColumns={2}
            scrollEnabled={false}
          />
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
  searchContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    marginLeft: 8,
    fontSize: 16,
  },
  content: {
    flex: 1,
  },
  categoriesSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  categoriesRow: {
    flexDirection: 'row',
    paddingRight: 16,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 24,
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
  categoryName: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  productsSection: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  viewAllText: {
    color: '#10B981',
    fontWeight: '500',
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
  imageContainer: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#10B981',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
}); 