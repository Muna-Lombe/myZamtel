import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Bell, CreditCard, Gift, AlertCircle, ChevronRight } from 'lucide-react-native';
import { NavigationProp } from '../../../types/navigation';
import { ScreenProps } from '@/types/props';

export default function NotificationsScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [selectedFilter, setSelectedFilter] = React.useState('all');

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'transactions', name: 'Transactions' },
    { id: 'offers', name: 'Offers' },
    { id: 'alerts', name: 'Alerts' },
  ];

  const notifications = [
    {
      id: 1,
      type: 'transaction',
      title: 'Payment Successful',
      message: 'Your payment of K 150.00 for Electricity Bill was successful',
      time: '2 hours ago',
      icon: CreditCard,
      color: '#2563eb',
      read: false,
    },
    {
      id: 2,
      type: 'offer',
      title: 'Special Offer',
      message: 'Get 10% cashback on your next bill payment',
      time: '5 hours ago',
      icon: Gift,
      color: '#34d399',
      read: true,
    },
    {
      id: 3,
      type: 'alert',
      title: 'Security Alert',
      message: 'New device login detected on your account',
      time: '1 day ago',
      icon: AlertCircle,
      color: '#f59e0b',
      read: false,
    },
    {
      id: 4,
      type: 'transaction',
      title: 'Money Received',
      message: 'You received K 500.00 from John Doe',
      time: '2 days ago',
      icon: CreditCard,
      color: '#2563eb',
      read: true,
    },
  ];

  const filteredNotifications = notifications.filter(
    notification => selectedFilter === 'all' || notification.type === selectedFilter
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Notifications</Text>
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.filtersScroll}
      >
        <View style={styles.filtersContainer}>
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter.id}
              style={[
                styles.filterButton,
                selectedFilter === filter.id && styles.selectedFilterButton,
              ]}
              onPress={() => setSelectedFilter(filter.id)}
            >
              <Text style={[
                styles.filterText,
                selectedFilter === filter.id && styles.selectedFilterText,
              ]}>
                {filter.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          {filteredNotifications.map((notification) => (
            <TouchableOpacity
              key={notification.id}
              style={[
                styles.notificationCard,
                !notification.read && styles.unreadNotification,
              ]}
            >
              <View style={[styles.notificationIcon, { backgroundColor: notification.color }]}>
                <notification.icon size={24} color="#fff" />
              </View>
              <View style={styles.notificationContent}>
                <View style={styles.notificationHeader}>
                  <Text style={styles.notificationTitle}>{notification.title}</Text>
                  <Text style={styles.notificationTime}>{notification.time}</Text>
                </View>
                <Text style={styles.notificationMessage}>{notification.message}</Text>
              </View>
              <ChevronRight size={24} color="#6b7280" />
            </TouchableOpacity>
          ))}
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
  filtersScroll: {
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  filtersContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
  },
  selectedFilterButton: {
    backgroundColor: '#000',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
  },
  selectedFilterText: {
    color: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    marginBottom: 12,
  },
  unreadNotification: {
    backgroundColor: '#eff6ff',
  },
  notificationIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  notificationContent: {
    flex: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  notificationTime: {
    fontSize: 14,
    color: '#6b7280',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#6b7280',
  },
}); 