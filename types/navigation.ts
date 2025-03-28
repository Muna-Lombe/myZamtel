import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
  SecuritySettings: undefined;
  ProductDetail: {
    product: {
      id: string;
      name: string;
      price: number;
      description: string;
      images: string[];
      rating: number;
      reviews: number;
      seller: string;
      category: string;
      specifications: Record<string, string>;
    };
  };
  PrivacyPolicy: undefined;
  LanguageSettings: undefined;
  DataUsage: undefined;
  PrivacySettings: undefined;
  PaymentMethods: undefined;
  SavedItems: undefined;
  TransactionHistory: undefined;
  Dashboard: undefined;
  Services: undefined;
  Shop: undefined;
  Help: undefined;
  Support: undefined;
  PayBills: undefined;
  MobileMoney: undefined;
  Offers: undefined;
  MakePayment: undefined;
  Notifications: undefined;
  ProfileVisibility: undefined;
  TransactionPrivacy: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>; 