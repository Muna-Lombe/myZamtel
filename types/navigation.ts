import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  // Dashboard: undefined;
  Services: undefined;
  SendMoney: undefined;
  BankTransfer: undefined;
  MakePayment: undefined;
  Airtime: {
    network?: string;
    service?: string;
  };
  Home: undefined;
  Notifications: undefined;
  PayBills: undefined;
  Shopping: undefined;
  Cart: undefined;
  CashOut: undefined;
  CreateCustomNumber: undefined;
  EditProfile: undefined;
  Help: undefined;
  InternationalTransfer: undefined;
  OfferDetail:{
    offer: {
      id: string,
      title: string,
      description: string,
      image: string,
      validUntil: string,
      category: string,
      discount: string,
    }
  }
  PinEntry: undefined;
  PrivacyPolicy: undefined;
  ProductDetail: {
    product: {
      id: string;
      name: string;
      price: number;
      description: string;
      images: string[];
      rating: number;
      reviews: number;
      seller: {
        name: string;
        rating: number;
      };
      category: string;
      specifications: {
        [key: string]: string;
      };
    };
  };
  Profile: undefined;
  SecuritySettings: undefined;
  Settings: undefined;
  LanguageSettings: undefined;
  DataUsage: undefined;
  PrivacySettings: undefined;
  About: undefined;
  Chat: undefined;
  FAQDetail: undefined;
  PaymentMethods: undefined;
  TransactionHistory: undefined;
  SavedItems: undefined;
  ProfileVisibility: undefined;
  TransactionPrivacy: undefined;
};

export type NavigationProp = {
  navigate: (screen: keyof RootStackParamList, params?: any) => void;
  goBack: () => void;
}; 