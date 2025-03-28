import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Tag } from 'lucide-react-native';
import { NavigationProp, RootStackParamList } from '../../../types/navigation';
import { ScreenProps } from '@/types/props';

type Offer = {
  id: string;
  title: string;
  description: string;
  image: string;
  validUntil: string;
  category: string;
  discount: string;
};

export default function OffersScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const categories = ['All', 'Shopping', 'Food', 'Entertainment', 'Travel'];

  const offers: Offer[] = [
    {
      id: '1',
      title: '20% Off on Electronics',
      description: 'Get 20% off on all electronics at selected stores',
      image: 'https://picsum.photos/200/300',
      validUntil: '2024-12-31',
      category: 'Shopping',
      discount: '20% OFF',
    },
    {
      id: '2',
      title: 'Free Movie Tickets',
      description: 'Buy 2 tickets and get 1 free at Cineplex',
      image: 'https://picsum.photos/200/300',
      validUntil: '2024-12-31',
      category: 'Entertainment',
      discount: '33% OFF',
    },
    {
      id: '3',
      title: 'Restaurant Discount',
      description: '15% off on all food items at partner restaurants',
      image: 'https://picsum.photos/200/300',
      validUntil: '2024-12-31',
      category: 'Food',
      discount: '15% OFF',
    },
  ];

  const filteredOffers = selectedCategory === 'All'
    ? offers
    : offers.filter(offer => offer.category === selectedCategory);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Offers & Promotions</Text>
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={[
              styles.categoryText,
              selectedCategory === category && styles.selectedCategoryText,
            ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.content}>
        {filteredOffers.map((offer) => (
          <TouchableOpacity
            key={offer.id}
            style={styles.offerCard}
            onPress={() => navigation.navigate('OfferDetail' , {offer})}
          >
            <Image
              source={{ uri: offer.image }}
              style={styles.offerImage}
            />
            <View style={styles.offerContent}>
              <View style={styles.offerHeader}>
                <Text style={styles.offerTitle}>{offer.title}</Text>
                <View style={styles.discountTag}>
                  <Tag size={16} color="#fff" />
                  <Text style={styles.discountText}>{offer.discount}</Text>
                </View>
              </View>
              <Text style={styles.offerDescription}>{offer.description}</Text>
              <View style={styles.offerFooter}>
                <Text style={styles.validUntil}>Valid until {offer.validUntil}</Text>
                <Text style={styles.category}>{offer.category}</Text>
              </View>
            </View>
          </TouchableOpacity>
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
  categoriesContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    marginRight: 8,
  },
  selectedCategory: {
    backgroundColor: '#000',
  },
  categoryText: {
    fontSize: 14,
    color: '#374151',
  },
  selectedCategoryText: {
    color: '#fff',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  offerCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  offerImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  offerContent: {
    padding: 16,
  },
  offerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    flex: 1,
  },
  discountTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  discountText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 4,
  },
  offerDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
  },
  offerFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  validUntil: {
    fontSize: 12,
    color: '#6b7280',
  },
  category: {
    fontSize: 12,
    color: '#6b7280',
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
}); 