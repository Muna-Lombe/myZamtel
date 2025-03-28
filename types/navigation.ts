import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  About:undefined;
  Airtime: {
    network?: string;
    service?: string;
  };
  BankTransfer: undefined;
  Chat: undefined;
  Dashboard: undefined;
  DataUsage: undefined;
  EditProfile:undefined;
  Help: undefined;
  Home: undefined;
  InternationalTransfer: undefined;
  LanguageSettings: undefined;
  MakePayment: undefined;
  MobileMoney: undefined;
  Notifications: undefined;
  Offers: undefined;
  OfferDetail: {
    offer: {
      id: string;
      title: string;
      description: string;
      image: string;
      validUntil: string;
      category: string;
      discount: string;
    }
  };
  PayBills: undefined;
  PaymentMethods: undefined;
  PinEntry: undefined;
  PrivacyPolicy: undefined;
  PrivacySettings: undefined;
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
      specifications: {
        [key: string]: string;
      };
    };
  };
  Profile: undefined;
  ProfileVisibility: undefined;
  RequestMoney: undefined;
  SavedItems: undefined;
  SecuritySettings: undefined;
  SendMoney: undefined;
  Services: undefined;
  ServiceShow: {
    serviceId: string;
    serviceName: string;
    serviceDescription: string;
  };
  Settings: undefined;
  Shop: undefined;
  Support: undefined;
  Shopping: undefined;
  TransactionHistory: undefined;
  TransactionPrivacy: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>; 