import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet,
  TextInput,
  FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { NavigationProp } from '../../../types/navigation';
import { ScreenProps } from '@/types/props';
import { Colors, Typography, Spacing, BorderRadius } from '../../theme';
import Header from '../common/Header';

type Service = {
  id: string;
  name: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  screen?: string;
};

export default function ServicesScreen({ onNavigate }: ScreenProps) {
  const navigation = useNavigation<NavigationProp>();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', name: 'All' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'internet', name: 'Internet' },
    { id: 'home', name: 'Home' },
    { id: 'business', name: 'Business' },
  ];

  const services: Service[] = [
    {
      id: '1',
      name: '4G LTE',
      description: 'Wireless broadband',
      icon: 'wifi-outline',
      screen: 'ServiceShow',
    },
    {
      id: '2',
      name: 'Home WiFi',
      description: 'Connect your entire home',
      icon: 'home-outline',
      screen: 'ServiceShow',
    },
    {
      id: '3',
      name: 'TV Bundles',
      description: 'Entertainment packages',
      icon: 'tv-outline',
      screen: 'ServiceShow',
    },
    {
      id: '4',
      name: 'Business Internet',
      description: 'Enterprise connectivity',
      icon: 'business-outline',
      screen: 'ServiceShow',
    },
    {
      id: '5',
      name: 'Cloud Services',
      description: 'Secure business solutions',
      icon: 'cloud-outline',
      screen: 'ServiceShow',
    },
    {
      id: '6',
      name: 'Customer Support',
      description: 'Get help with your services',
      icon: 'headset-outline',
      screen: 'Support',
    },
  ];

  const renderServiceItem = ({ item }: { item: Service }) => (
    <TouchableOpacity 
      style={styles.serviceItem}
      onPress={() => {
        if (item.screen) {
          onNavigate(item.screen, item.id);
        }
      }}
    >
      <View style={styles.serviceIcon}>
        <Ionicons name={item.icon} size={24} color={Colors.primary} />
      </View>
      <View style={styles.serviceInfo}>
        <Text style={styles.serviceName}>{item.name}</Text>
        <Text style={styles.serviceDescription}>{item.description}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color={Colors.textSecondary} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        title="Services" 
        showBackButton 
        transparent={false}
      />

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={20} color={Colors.textSecondary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for services..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsContainer}
      >
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab.id}
            style={[
              styles.tab,
              activeTab === tab.id && styles.activeTab,
            ]}
            onPress={() => setActiveTab(tab.id)}
          >
            <Text 
              style={[
                styles.tabText,
                activeTab === tab.id && styles.activeTabText,
              ]}
            >
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.featuredContainer}>
        <Text style={styles.sectionTitle}>Featured Services</Text>
        <View style={styles.featuredServices}>
          <View style={styles.featuredService}>
            <View style={styles.featuredIconContainer}>
              <Ionicons name="phone-portrait-outline" size={24} color={Colors.textPrimary} />
            </View>
            <Text style={styles.featuredName}>Mobile Data</Text>
            <Text style={styles.featuredDescription}>Browse, stream, and download</Text>
            <View style={styles.featuredBadge}>
              <Text style={styles.featuredBadgeText}>Featured</Text>
            </View>
          </View>

          <View style={styles.featuredService}>
            <View style={styles.featuredIconContainer}>
              <Ionicons name="wifi-outline" size={24} color={Colors.textPrimary} />
            </View>
            <Text style={styles.featuredName}>Fiber Internet</Text>
            <Text style={styles.featuredDescription}>High-speed home internet</Text>
            <View style={styles.featuredBadge}>
              <Text style={styles.featuredBadgeText}>Featured</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.allServicesContainer}>
        <Text style={styles.sectionTitle}>All Services</Text>
        <FlatList
          data={services}
          renderItem={renderServiceItem}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  searchContainer: {
    padding: Spacing.base,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.md,
    height: 40,
  },
  searchInput: {
    flex: 1,
    marginLeft: Spacing.sm,
    fontSize: Typography.fontSizes.md,
  },
  tabsContainer: {
    paddingHorizontal: Spacing.md,
  },
  tab: {
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.base,
    marginRight: Spacing.sm,
    borderRadius: BorderRadius.pill,
    backgroundColor: Colors.secondary,
  },
  activeTab: {
    backgroundColor: Colors.primary,
  },
  tabText: {
    fontSize: Typography.fontSizes.md,
    color: Colors.textSecondary,
  },
  activeTabText: {
    color: Colors.white,
    fontWeight: '500',
  },
  featuredContainer: {
    padding: Spacing.base,
  },
  sectionTitle: {
    fontSize: Typography.fontSizes.lg,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
  },
  featuredServices: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  featuredService: {
    width: '48%',
    backgroundColor: Colors.secondary,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    position: 'relative',
  },
  featuredIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.sm,
  },
  featuredName: {
    fontSize: Typography.fontSizes.base,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  featuredDescription: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.textSecondary,
  },
  featuredBadge: {
    position: 'absolute',
    bottom: Spacing.md,
    right: Spacing.md,
    backgroundColor: '#E8FFF5',
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.md,
  },
  featuredBadgeText: {
    fontSize: Typography.fontSizes.xs,
    color: Colors.primary,
    fontWeight: '500',
  },
  allServicesContainer: {
    padding: Spacing.base,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
  },
  serviceIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceName: {
    fontSize: Typography.fontSizes.base,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  serviceDescription: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.textSecondary,
  },
}); 