import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Lock, Fingerprint, Bell, Shield, Key } from 'lucide-react-native';
import { NavigationProp } from '../../../types/navigation';
import { ScreenProps } from '../../../types/props';

type SecurityOption = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  type: 'toggle' | 'navigation';
  value?: boolean;
  onPress?: () => void;
  onToggle?: (value: boolean) => void;
};

export default function SecuritySettingsScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [biometricEnabled, setBiometricEnabled] = React.useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = React.useState(false);

  const securityOptions: SecurityOption[] = [
    {
      id: '1',
      title: 'Change PIN',
      description: 'Update your transaction PIN',
      icon: <Lock size={24} color="#6b7280" />,
      type: 'navigation',
      onPress: () => {
        // Navigate to PIN change screen
      },
    },
    {
      id: '2',
      title: 'Biometric Authentication',
      description: 'Use fingerprint or face recognition to log in',
      icon: <Fingerprint size={24} color="#6b7280" />,
      type: 'toggle',
      value: biometricEnabled,
      onToggle: setBiometricEnabled,
    },
    {
      id: '3',
      title: 'Security Notifications',
      description: 'Get notified about suspicious activities',
      icon: <Bell size={24} color="#6b7280" />,
      type: 'toggle',
      value: notificationsEnabled,
      onToggle: setNotificationsEnabled,
    },
    {
      id: '4',
      title: 'Two-Factor Authentication',
      description: 'Add an extra layer of security to your account',
      icon: <Shield size={24} color="#6b7280" />,
      type: 'toggle',
      value: twoFactorEnabled,
      onToggle: setTwoFactorEnabled,
    },
    {
      id: '5',
      title: 'Password',
      description: 'Change your account password',
      icon: <Key size={24} color="#6b7280" />,
      type: 'navigation',
      onPress: () => {
        // Navigate to password change screen
      },
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Security Settings</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Security</Text>
          {securityOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={styles.option}
              onPress={option.type === 'navigation' ? option.onPress : undefined}
            >
              <View style={styles.optionLeft}>
                {option.icon}
                <View style={styles.optionInfo}>
                  <Text style={styles.optionTitle}>{option.title}</Text>
                  <Text style={styles.optionDescription}>{option.description}</Text>
                </View>
              </View>
              {option.type === 'toggle' && (
                <Switch
                  value={option.value}
                  onValueChange={option.onToggle}
                  trackColor={{ false: '#e5e7eb', true: '#34d399' }}
                  thumbColor="#fff"
                />
              )}
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityItem}>
            <Text style={styles.activityText}>Last login: Today at 2:30 PM</Text>
            <Text style={styles.activityText}>Device: iPhone 13 Pro</Text>
            <Text style={styles.activityText}>Location: Lusaka, Zambia</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={() => {
            // Handle logout
          }}
        >
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
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  optionInfo: {
    marginLeft: 12,
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    color: '#111827',
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 14,
    color: '#6b7280',
  },
  activityItem: {
    backgroundColor: '#f3f4f6',
    padding: 16,
    borderRadius: 8,
  },
  activityText: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 4,
  },
  logoutButton: {
    margin: 16,
    padding: 16,
    backgroundColor: '#ef4444',
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
}); 