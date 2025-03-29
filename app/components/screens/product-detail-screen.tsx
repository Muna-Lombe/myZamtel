import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, ShoppingCart, Star, Heart } from 'lucide-react-native';
import { NavigationProp } from '../../../types/navigation';
import { ScreenProps } from '../../../types/props';//'@/types/props';

type RouteParams = {
  product: {
    id: string;
    name: string;
    price: number;
    description: string;
    images: string[];
    rating: number;
    reviews: number;
    seller: string;
    category: string;
    specifications: {
      key: string;
      value: string;
    }[];
  };
};

const { width } = Dimensions.get('window');


type Props = {
  productId: string | null;

}
export default function ProductDetailScreen({ route }: { route: any }) {
  const navigation = useNavigation<NavigationProp>();
  const { product } = route.params as RouteParams;
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.cartButton}
          onPress={() => navigation.navigate('Cart' as never)}
        >
          <ShoppingCart size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product.images[selectedImage] }}
            style={styles.mainImage}
          />
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.thumbnailContainer}
          >
            {product.images.map((image, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.thumbnail,
                  selectedImage === index && styles.selectedThumbnail,
                ]}
                onPress={() => setSelectedImage(index)}
              >
                <Image
                  source={{ uri: image }}
                  style={styles.thumbnailImage}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.productInfo}>
          <View style={styles.titleRow}>
            <Text style={styles.productName}>{product.name}</Text>
            <TouchableOpacity
              onPress={() => setIsFavorite(!isFavorite)}
              style={styles.favoriteButton}
            >
              <Heart
                size={24}
                color={isFavorite ? '#ef4444' : '#6b7280'}
                fill={isFavorite ? '#ef4444' : 'none'}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.ratingContainer}>
            <Star size={16} color="#fbbf24" fill="#fbbf24" />
            <Text style={styles.rating}>{product.rating}</Text>
            <Text style={styles.reviews}>({product.reviews} reviews)</Text>
          </View>

          <Text style={styles.price}>K{product.price.toFixed(2)}</Text>

          <View style={styles.sellerInfo}>
            <Text style={styles.sellerLabel}>Sold by:</Text>
            <Text style={styles.sellerName}>{product.seller}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Specifications</Text>
            {product.specifications.map((spec, index) => (
              <View key={index} style={styles.specificationRow}>
                <Text style={styles.specKey}>{spec.key}</Text>
                <Text style={styles.specValue}>{spec.value}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.addToCartButton}
          onPress={() => navigation.navigate('Cart' as never)}
        >
          <ShoppingCart size={20} color="#fff" />
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buyNowText}>Buy Now</Text>
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
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  backButton: {
    marginRight: 16,
  },
  cartButton: {
    padding: 8,
  },
  content: {
    flex: 1,
  },
  imageContainer: {
    marginBottom: 16,
  },
  mainImage: {
    width: width,
    height: width,
  },
  thumbnailContainer: {
    flexDirection: 'row',
    padding: 16,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 8,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedThumbnail: {
    borderColor: '#000',
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
  productInfo: {
    padding: 16,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    flex: 1,
  },
  favoriteButton: {
    padding: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginLeft: 4,
  },
  reviews: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 4,
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  sellerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  sellerLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginRight: 8,
  },
  sellerName: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '500',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
  specificationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  specKey: {
    fontSize: 14,
    color: '#6b7280',
  },
  specValue: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  addToCartButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: '#ef4444',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buyNowText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
}); 