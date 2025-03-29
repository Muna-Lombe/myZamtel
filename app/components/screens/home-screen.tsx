import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Home, User, LayoutDashboard, Settings } from 'lucide-react-native';
import { ScreenProps } from '../../../types/props';//'@/types/props';
import { RootStackParamList } from '@/types/navigation';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>My Zamtel</Text>
        </View>

        <View style={styles.grid}>
          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('Dashboard' as keyof RootStackParamList['Dashboard'] )}
          >
            <LayoutDashboard size={24} color="#000" />
            <Text style={styles.cardText}>Dashboard</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('Services' as keyof RootStackParamList['Services'])}
          >
            <Home size={24} color="#000" />
            <Text style={styles.cardText}>Services</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('Profile' as keyof RootStackParamList['Profile'])}
          >
            <User size={24} color="#000" />
            <Text style={styles.cardText}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Settings size={24} color="#000" />
            <Text style={styles.cardText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    gap: 16,
  },
  card: {
    width: '47%',
    aspectRatio: 1,
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '500',
  },
}); 