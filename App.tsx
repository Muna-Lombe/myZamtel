import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

// Import your screens here
import HomeScreen from './app/components/screens/home-screen';
import ProfileScreen from './app/components/screens/profile-screen';
import SettingsScreen from './app/components/screens/settings-screen';
import SecuritySettingsScreen from './app/components/screens/security-settings-screen';
import ProductDetailScreen from './app/components/screens/product-detail-screen';
import PrivacyPolicyScreen from './app/components/screens/privacy-policy-screen';
import LanguageSettingsScreen from './app/components/screens/language-settings-screen';
import DataUsageScreen from './app/components/screens/data-usage-screen';
import PrivacySettingsScreen from './app/components/screens/privacy-settings-screen';
import PaymentMethodsScreen from './app/components/screens/payment-methods-screen';
import SavedItemsScreen from './app/components/screens/saved-items-screen';
import TransactionHistoryScreen from './app/components/screens/transaction-history-screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="SecuritySettings" component={SecuritySettingsScreen} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
          <Stack.Screen name="LanguageSettings" component={LanguageSettingsScreen} />
          <Stack.Screen name="DataUsage" component={DataUsageScreen} />
          <Stack.Screen name="PrivacySettings" component={PrivacySettingsScreen} />
          <Stack.Screen name="PaymentMethods" component={PaymentMethodsScreen} />
          <Stack.Screen name="SavedItems" component={SavedItemsScreen} />
          <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
} 