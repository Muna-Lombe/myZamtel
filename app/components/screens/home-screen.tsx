import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet, 
  TextInput,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { ScreenProps } from '../../../types/props';
import { RootStackParamList } from '@/types/navigation';
import { Colors, Typography, Spacing, BorderRadius, Shadow } from '../../theme';
import Card from '../common/Card';

export default function HomeScreen({ onNavigate }: ScreenProps) {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.locationSelector}>
          <Text style={styles.locationText}>You are in </Text>
          <TouchableOpacity style={styles.locationButton}>
            <Text style={styles.locationCity}>Lusaka</Text>
            <Ionicons name="chevron-down" size={16} color={Colors.textPrimary} />
          </TouchableOpacity>
          <View style={styles.spacer} />
          <TouchableOpacity>
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Ionicons name="person" size={24} color={Colors.white} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications" size={24} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
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

        <Card style={styles.verificationCard}>
          <View style={styles.verificationContent}>
            <Ionicons name="alert-circle" size={24} color="#F59E0B" />
            <View style={styles.verificationText}>
              <Text style={styles.verificationTitle}>Verify your account</Text>
              <Text style={styles.verificationDescription}>
                Please confirm your personal data to access all features
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color={Colors.textSecondary} />
        </Card>

        <View style={styles.userInfoSection}>
          <View style={styles.userNameRow}>
            <View style={styles.userAvatar}>
              <Ionicons name="person" size={20} color={Colors.primary} />
            </View>
            <View>
              <Text style={styles.userName}>Lombe</Text>
              <Text style={styles.userPhone}>260952768272</Text>
            </View>
          </View>
          <TouchableOpacity 
            style={styles.moneyButton}
            onPress={() => onNavigate('TransferOptions')}
          >
            <Text style={styles.moneyButtonText}>Mobile Money</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.balanceSection}>
          <View style={styles.balanceCard}>
            <Ionicons name="document-text-outline" size={24} color={Colors.textPrimary} />
            <View>
              <Text style={styles.balanceLabel}>ZMW 0.01</Text>
              <Text style={styles.balanceDescription}>Main Balance</Text>
            </View>
          </View>

          <View style={styles.balanceCard}>
            <Ionicons name="time-outline" size={24} color={Colors.textPrimary} />
            <View>
              <Text style={styles.balanceLabel}>0 Mins</Text>
              <Text style={styles.balanceDescription}>Voice Balance</Text>
            </View>
          </View>
        </View>

        <View style={styles.servicesSection}>
          <Text style={styles.sectionTitle}>Services</Text>
          <View style={styles.serviceGrid}>
            <TouchableOpacity 
              style={styles.serviceCard}
              onPress={() => onNavigate('Services')}
            >
              <Ionicons name="grid-outline" size={24} color={Colors.primary} />
              <Text style={styles.serviceText}>Services</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.serviceCard}
              onPress={() => onNavigate('Dashboard')}
            >
              <Ionicons name="stats-chart-outline" size={24} color={Colors.primary} />
              <Text style={styles.serviceText}>Dashboard</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.serviceCard}
              onPress={() => onNavigate('Shop')}
            >
              <Ionicons name="cart-outline" size={24} color={Colors.primary} />
              <Text style={styles.serviceText}>Shop</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.serviceCard}
              onPress={() => onNavigate('Help')}
            >
              <Ionicons name="help-circle-outline" size={24} color={Colors.primary} />
              <Text style={styles.serviceText}>Help</Text>
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
    backgroundColor: Colors.white,
  },
  header: {
    backgroundColor: Colors.primary,
    padding: Spacing.base,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationSelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: Colors.white,
    fontSize: Typography.fontSizes.md,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Spacing.xs,
  },
  locationCity: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: Typography.fontSizes.md,
  },
  spacer: {
    flex: 1,
  },
  changeText: {
    color: Colors.white,
    fontSize: Typography.fontSizes.md,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  scrollView: {
    flex: 1,
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
  verificationCard: {
    margin: Spacing.base,
    padding: Spacing.md,
    backgroundColor: '#FEF9C3',
    borderRadius: BorderRadius.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  verificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  verificationText: {
    marginLeft: Spacing.sm,
    flex: 1,
  },
  verificationTitle: {
    fontWeight: '600',
    fontSize: Typography.fontSizes.md,
    color: Colors.textPrimary,
  },
  verificationDescription: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.textSecondary,
  },
  userInfoSection: {
    padding: Spacing.base,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.sm,
  },
  userName: {
    fontSize: Typography.fontSizes.base,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  userPhone: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.textSecondary,
  },
  moneyButton: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.md,
  },
  moneyButtonText: {
    color: Colors.white,
    fontWeight: '500',
    fontSize: Typography.fontSizes.sm,
  },
  balanceSection: {
    padding: Spacing.base,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    width: '48%',
  },
  balanceLabel: {
    fontSize: Typography.fontSizes.md,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginLeft: Spacing.sm,
  },
  balanceDescription: {
    fontSize: Typography.fontSizes.sm,
    color: Colors.textSecondary,
    marginLeft: Spacing.sm,
  },
  servicesSection: {
    padding: Spacing.base,
  },
  sectionTitle: {
    fontSize: Typography.fontSizes.lg,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
  },
  serviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: '48%',
    aspectRatio: 1,
    backgroundColor: Colors.secondary,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  serviceText: {
    fontSize: Typography.fontSizes.base,
    color: Colors.textPrimary,
    marginTop: Spacing.sm,
  },
}); 