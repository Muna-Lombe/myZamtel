import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList, NavigationProp } from '../../../types/navigation';

type StorageItem = {
  name: string;
  size: string;
  type: 'cache' | 'data' | 'media';
};

const storageItems: StorageItem[] = [
  { name: 'App Cache', size: '45.2 MB', type: 'cache' },
  { name: 'User Data', size: '128.5 MB', type: 'data' },
  { name: 'Media Files', size: '256.8 MB', type: 'media' },
];

export default function DataUsageScreen() {
  const navigation = useNavigation<NavigationProp>();

  const handleClearCache = () => {
    // Implement cache clearing logic
    console.log('Clearing cache...');
  };

  const handleClearData = () => {
    // Implement data clearing logic
    console.log('Clearing data...');
  };

  const getStorageIcon = (type: StorageItem['type']) => {
    switch (type) {
      case 'cache':
        return 'trash-outline';
      case 'data':
        return 'server-outline';
      case 'media':
        return 'images-outline';
      default:
        return 'folder-outline';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Data Usage</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Storage Usage</Text>
          <Text style={styles.sectionDescription}>
            Manage your app storage and data usage
          </Text>
        </View>

        <View style={styles.storageList}>
          {storageItems.map((item) => (
            <View key={item.name} style={styles.storageItem}>
              <View style={styles.storageItemLeft}>
                <View style={styles.iconContainer}>
                  <Ionicons
                    name={getStorageIcon(item.type)}
                    size={24}
                    color="#4b5563"
                  />
                </View>
                <View style={styles.storageItemInfo}>
                  <Text style={styles.storageItemName}>{item.name}</Text>
                  <Text style={styles.storageItemSize}>{item.size}</Text>
                </View>
              </View>
              {item.type === 'cache' && (
                <TouchableOpacity
                  style={styles.clearButton}
                  onPress={handleClearCache}
                >
                  <Text style={styles.clearButtonText}>Clear</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Network Usage</Text>
          <Text style={styles.sectionDescription}>
            Monitor your data consumption
          </Text>
        </View>

        <View style={styles.networkStats}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Data Used This Month</Text>
            <Text style={styles.statValue}>1.2 GB</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Data Limit</Text>
            <Text style={styles.statValue}>5 GB</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Remaining</Text>
            <Text style={styles.statValue}>3.8 GB</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.resetButton}
          onPress={handleClearData}
        >
          <Text style={styles.resetButtonText}>Reset All Data</Text>
        </TouchableOpacity>
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
  content: {
    flex: 1,
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#6b7280',
  },
  storageList: {
    padding: 16,
  },
  storageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    marginBottom: 12,
  },
  storageItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  storageItemInfo: {
    flex: 1,
  },
  storageItemName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 2,
  },
  storageItemSize: {
    fontSize: 14,
    color: '#6b7280',
  },
  clearButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#f3f4f6',
    borderRadius: 6,
  },
  clearButtonText: {
    fontSize: 14,
    color: '#ef4444',
    fontWeight: '500',
  },
  networkStats: {
    padding: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  statLabel: {
    fontSize: 16,
    color: '#374151',
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  resetButton: {
    margin: 16,
    padding: 16,
    backgroundColor: '#fee2e2',
    borderRadius: 12,
    alignItems: 'center',
  },
  resetButtonText: {
    fontSize: 16,
    color: '#ef4444',
    fontWeight: '500',
  },
}); 