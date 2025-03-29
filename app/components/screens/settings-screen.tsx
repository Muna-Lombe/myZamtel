import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList, NavigationProp } from '../../../types/navigation';
import { ScreenProps } from '../../../types/props';//'@/types/props';

type SettingItem = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description?: string;
  type: 'toggle' | 'navigation';
  screen?: keyof RootStackParamList;
  value?: boolean;
  onToggle?: (value: boolean) => void;
};

const settingsItems: SettingItem[] = [
  {
    icon: 'notifications-outline',
    title: 'Push Notifications',
    description: 'Receive notifications about your account activity',
    type: 'toggle',
    value: true,
    onToggle: (value) => console.log('Push notifications:', value),
  },
  {
    icon: 'language-outline',
    title: 'Language',
    description: 'Change app language',
    type: 'navigation',
    screen: 'LanguageSettings',
  },
  {
    icon: 'moon-outline',
    title: 'Dark Mode',
    description: 'Switch between light and dark theme',
    type: 'toggle',
    value: false,
    onToggle: (value) => console.log('Dark mode:', value),
  },
  {
    icon: 'cloud-download-outline',
    title: 'Data Usage',
    description: 'Manage app data and storage',
    type: 'navigation',
    screen: 'DataUsage',
  },
  {
    icon: 'shield-checkmark-outline',
    title: 'Privacy Settings',
    description: 'Manage your privacy preferences',
    type: 'navigation',
    screen: 'PrivacySettings',
  },
  {
    icon: 'information-circle-outline',
    title: 'About',
    description: 'App version and information',
    type: 'navigation',
    screen: 'About',
  },
];

export default function SettingsScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [settings, setSettings] = React.useState<Record<string, boolean>>({
    pushNotifications: true,
    darkMode: false,
  });

  const handleToggle = (title: string, value: boolean) => {
    setSettings((prev) => ({ ...prev, [title]: value }));
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
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView style={styles.content}>
        {settingsItems.map((item) => (
          <TouchableOpacity
            key={item.title}
            style={styles.settingItem}
            onPress={() => item.type === 'navigation' && item.screen && handleNavigation(item.screen)}
          >
            <View style={styles.settingItemLeft}>
              <Ionicons name={item.icon} size={24} color="#6b7280" />
              <View style={styles.settingItemText}>
                <Text style={styles.settingItemTitle}>{item.title}</Text>
                {item.description && (
                  <Text style={styles.settingItemDescription}>{item.description}</Text>
                )}
              </View>
            </View>
            {item.type === 'toggle' && (
              <Switch
                value={settings[item.title] || false}
                onValueChange={(value) => handleToggle(item.title, value)}
                trackColor={{ false: '#e5e7eb', true: '#60a5fa' }}
                thumbColor="#fff"
              />
            )}
            {item.type === 'navigation' && (
              <Ionicons name="chevron-forward" size={24} color="#6b7280" />
            )}
          </TouchableOpacity>
        ))}
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
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingItemText: {
    marginLeft: 12,
    flex: 1,
  },
  settingItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  settingItemDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
}); 