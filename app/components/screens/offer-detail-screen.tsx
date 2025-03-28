import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Tag, Calendar, MapPin, Phone, Globe } from 'lucide-react-native';
import { NavigationProp } from '../../../types/navigation';
import { ScreenProps } from '@/types/props';

type RouteParams = {
  offer: {
    id: string;
    title: string;
    description: string;
    image: string;
    validUntil: string;
    category: string;
    discount: string;
    terms: string[];
    locations: string[];
    contact: string;
    website: string;
  };
};

export default function OfferDetailScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute();
  const { offer } = route.params as RouteParams;

  const handleCall = () => {
    Linking.openURL(`tel:${offer.contact}`);
  };

  const handleWebsite = () => {
    Linking.openURL(offer.website);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Offer Details</Text>
      </View>

      <ScrollView style={styles.content}>
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

          <View style={styles.infoSection}>
            <View style={styles.infoItem}>
              <Calendar size={20} color="#6b7280" />
              <Text style={styles.infoText}>Valid until {offer.validUntil}</Text>
            </View>
            <View style={styles.infoItem}>
              <MapPin size={20} color="#6b7280" />
              <Text style={styles.infoText}>{offer.locations.length} locations</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Terms & Conditions</Text>
            {offer.terms.map((term, index) => (
              <View key={index} style={styles.termItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.termText}>{term}</Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Available Locations</Text>
            {offer.locations.map((location, index) => (
              <Text key={index} style={styles.locationText}>{location}</Text>
            ))}
          </View>

          <View style={styles.contactSection}>
            <TouchableOpacity 
              style={styles.contactButton}
              onPress={handleCall}
            >
              <Phone size={20} color="#fff" />
              <Text style={styles.contactButtonText}>Call Now</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.contactButton}
              onPress={handleWebsite}
            >
              <Globe size={20} color="#fff" />
              <Text style={styles.contactButtonText}>Visit Website</Text>
            </TouchableOpacity>
          </View>
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
  content: {
    flex: 1,
  },
  offerImage: {
    width: '100%',
    height: 250,
  },
  offerContent: {
    padding: 16,
  },
  offerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  offerTitle: {
    fontSize: 24,
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
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    marginBottom: 16,
  },
  infoSection: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  infoText: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 8,
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
  termItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 16,
    color: '#6b7280',
    marginRight: 8,
  },
  termText: {
    fontSize: 14,
    color: '#374151',
    flex: 1,
  },
  locationText: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 8,
  },
  contactSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  contactButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
}); 