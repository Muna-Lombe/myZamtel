import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  User, 
  Settings, 
  Bell, 
  Lock, 
  HelpCircle, 
  LogOut, 
  ChevronRight,
  CreditCard,
  History,
  Heart,
  Shield,
} from 'lucide-react-native';
import { NavigationProp, RootStackParamList } from '../../../types/navigation';
import { Ionicons } from '@expo/vector-icons';
import { ScreenProps } from '../../../types/props';

type MenuItem = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  screen: keyof RootStackParamList;
  params?: any;
};

export default function ProfileScreen() {
  const navigation = useNavigation<NavigationProp>();

  const menuItems: MenuItem[] = [
    { icon: 'person-outline', title: 'Edit Profile', screen: 'EditProfile' },
    { icon: 'notifications-outline', title: 'Notifications', screen: 'Notifications' },
    { icon: 'shield-checkmark-outline', title: 'Security Settings', screen: 'SecuritySettings' },
    { icon: 'card-outline', title: 'Payment Methods', screen: 'PaymentMethods' },
    { icon: 'time-outline', title: 'Transaction History', screen: 'TransactionHistory' },
    { icon: 'heart-outline', title: 'Saved Items', screen: 'SavedItems' },
    { icon: 'shield-outline', title: 'Privacy Policy', screen: 'PrivacyPolicy' },
    { icon: 'help-circle-outline', title: 'Help & Support', screen: 'Help' },
  ];

  const handleMenuItemPress = (item: MenuItem) => {
    if (item.screen) {
      navigation.navigate(item.screen as never); //, item.params);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity 
          style={styles.settingsButton}
          onPress={() => navigation.navigate('Settings')}
        >
          <Settings size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://picsum.photos/100/100' }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.phone}>+260 97X XXX XXX</Text>
            <Text style={styles.email}>john.doe@example.com</Text>
          </View>
        </View>

        <View style={styles.balanceSection}>
          <Text style={styles.balanceLabel}>Available Balance</Text>
          <Text style={styles.balance}>K1,234.56</Text>
        </View>

        <View style={styles.menuSection}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.title}
              style={styles.menuItem}
              onPress={() => handleMenuItemPress(item)}
            >
              <View style={styles.menuItemLeft}>
                <Ionicons name={item.icon} size={24} color="#6b7280" />
                <Text style={styles.menuItemText}>{item.title}</Text>
              </View>
              <ChevronRight size={24} color="#6b7280" />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={() => {
            // Handle logout
          }}
        >
          <LogOut size={24} color="#ef4444" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
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
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  settingsButton: {
    padding: 8,
  },
  content: {
    flex: 1,
  },
  profileSection: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  phone: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#6b7280',
  },
  balanceSection: {
    padding: 16,
    backgroundColor: '#f3f4f6',
  },
  balanceLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  balance: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  menuSection: {
    padding: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    color: '#374151',
    marginLeft: 12,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    margin: 16,
    borderWidth: 1,
    borderColor: '#ef4444',
    borderRadius: 8,
  },
  logoutText: {
    fontSize: 16,
    color: '#ef4444',
    marginLeft: 8,
  },
}); 