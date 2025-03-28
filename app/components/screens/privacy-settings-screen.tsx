import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList, NavigationProp } from '../../../types/navigation';
import { ScreenProps } from '@/types/props';

type PrivacySetting = {
  id: string;
  title: string;
  description: string;
  type: 'toggle' | 'navigation';
  screen?: keyof RootStackParamList;
  value?: boolean;
};

const privacySettings: PrivacySetting[] = [
  {
    id: '1',
    title: 'Profile Visibility',
    description: 'Control who can see your profile information',
    type: 'navigation',
    screen: 'ProfileVisibility',
  },
  {
    id: '2',
    title: 'Transaction History',
    description: 'Manage who can view your transaction history',
    type: 'navigation',
    screen: 'TransactionPrivacy',
  },
  {
    id: '3',
    title: 'Location Services',
    description: 'Allow app to access your location',
    type: 'toggle',
    value: true,
  },
  {
    id: '4',
    title: 'Biometric Authentication',
    description: 'Use fingerprint or face ID to unlock app',
    type: 'toggle',
    value: false,
  },
  {
    id: '5',
    title: 'Marketing Communications',
    description: 'Receive promotional emails and notifications',
    type: 'toggle',
    value: true,
  },
  {
    id: '6',
    title: 'Data Collection',
    description: 'Allow app to collect usage data',
    type: 'toggle',
    value: true,
  },
];

export default function PrivacySettingsScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [settings, setSettings] = React.useState<Record<string, boolean>>({
    locationServices: true,
    biometricAuth: false,
    marketingComms: true,
    dataCollection: true,
  });

  const handleToggle = (id: string, value: boolean) => {
    setSettings((prev) => ({ ...prev, [id]: value }));
  };

  const handleNavigation = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen as never);
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
        <Text style={styles.headerTitle}>Privacy Settings</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Privacy Controls</Text>
          <Text style={styles.sectionDescription}>
            Manage your privacy preferences and data sharing settings
          </Text>
        </View>

        <View style={styles.settingsList}>
          {privacySettings.map((setting) => (
            <TouchableOpacity
              key={setting.id}
              style={styles.settingItem}
              onPress={() => setting.type === 'navigation' && setting.screen && handleNavigation(setting.screen)}
            >
              <View style={styles.settingItemLeft}>
                <View style={styles.settingItemInfo}>
                  <Text style={styles.settingItemTitle}>{setting.title}</Text>
                  <Text style={styles.settingItemDescription}>
                    {setting.description}
                  </Text>
                </View>
              </View>
              {setting.type === 'toggle' && (
                <Switch
                  value={settings[setting.id] || false}
                  onValueChange={(value) => handleToggle(setting.id, value)}
                  trackColor={{ false: '#e5e7eb', true: '#60a5fa' }}
                  thumbColor="#fff"
                />
              )}
              {setting.type === 'navigation' && (
                <Ionicons name="chevron-forward" size={24} color="#6b7280" />
              )}
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => {
            // Handle account deletion
          }}
        >
          <Text style={styles.deleteButtonText}>Delete Account</Text>
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
  settingsList: {
    padding: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    marginBottom: 12,
  },
  settingItemLeft: {
    flex: 1,
  },
  settingItemInfo: {
    flex: 1,
  },
  settingItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 2,
  },
  settingItemDescription: {
    fontSize: 14,
    color: '#6b7280',
  },
  deleteButton: {
    margin: 16,
    padding: 16,
    backgroundColor: '#fee2e2',
    borderRadius: 12,
    alignItems: 'center',
  },
  deleteButtonText: {
    fontSize: 16,
    color: '#ef4444',
    fontWeight: '500',
  },
}); 