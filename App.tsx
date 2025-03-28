import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

// Import screens
import HomeScreen from './app/components/screens/home-screen';
import DashboardScreen from './app/components/screens/dashboard-screen';
import ProfileScreen from './app/components/screens/profile-screen';
import ServicesScreen from './app/components/screens/services-screen';
import SendMoneyScreen from './app/components/screens/send-money-screen';
import BankTransferScreen from './app/components/screens/bank-transfer-screen';
import TransactionHistoryScreen from './app/components/screens/transaction-history-screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Services" component={ServicesScreen} />
            <Stack.Screen name="SendMoney" component={SendMoneyScreen} />
            <Stack.Screen name="BankTransfer" component={BankTransferScreen} />
            <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 