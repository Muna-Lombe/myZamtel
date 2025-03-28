import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList, NavigationProp } from '../../../types/navigation';

type Language = {
  code: string;
  name: string;
  nativeName: string;
  isSelected: boolean;
};

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', isSelected: true },
  { code: 'bem', name: 'Bemba', nativeName: 'Ichibemba', isSelected: false },
  { code: 'nyj', name: 'Nyanja', nativeName: 'Chinyanja', isSelected: false },
  { code: 'toi', name: 'Tonga', nativeName: 'Chitonga', isSelected: false },
  { code: 'lun', name: 'Lunda', nativeName: 'Chilunda', isSelected: false },
  { code: 'lue', name: 'Luvale', nativeName: 'Chiluvale', isSelected: false },
  { code: 'kaa', name: 'Kaonde', nativeName: 'Chikaonde', isSelected: false },
];

export default function LanguageSettingsScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [selectedLanguage, setSelectedLanguage] = React.useState('en');

  const handleLanguageSelect = (code: string) => {
    setSelectedLanguage(code);
    // Here you would typically also update the app's language setting
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
        <Text style={styles.headerTitle}>Language Settings</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Language</Text>
          <Text style={styles.sectionDescription}>
            Choose your preferred language for the app
          </Text>
        </View>

        <View style={styles.languageList}>
          {languages.map((language) => (
            <TouchableOpacity
              key={language.code}
              style={[
                styles.languageItem,
                selectedLanguage === language.code && styles.languageItemSelected,
              ]}
              onPress={() => handleLanguageSelect(language.code)}
            >
              <View style={styles.languageInfo}>
                <Text style={styles.languageName}>{language.name}</Text>
                <Text style={styles.languageNativeName}>{language.nativeName}</Text>
              </View>
              {selectedLanguage === language.code && (
                <Ionicons name="checkmark-circle" size={24} color="#60a5fa" />
              )}
            </TouchableOpacity>
          ))}
        </View>
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
  languageList: {
    padding: 16,
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    marginBottom: 12,
  },
  languageItemSelected: {
    backgroundColor: '#eff6ff',
  },
  languageInfo: {
    flex: 1,
  },
  languageName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 2,
  },
  languageNativeName: {
    fontSize: 14,
    color: '#6b7280',
  },
}); 