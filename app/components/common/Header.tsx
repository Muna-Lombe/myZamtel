import React, { ReactNode } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ViewStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Colors, Typography, Spacing } from '../../theme';

type HeaderProps = {
  title?: string;
  showBackButton?: boolean;
  rightComponent?: ReactNode;
  style?: ViewStyle;
  transparent?: boolean;
  textColor?: string;
};

export default function Header({
  title,
  showBackButton = false,
  rightComponent,
  style,
  transparent = false,
  textColor = Colors.textPrimary,
}: HeaderProps) {
  const navigation = useNavigation();

  const backgroundColor = transparent ? 'transparent' : Colors.primary;

  return (
    <>
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle={transparent ? 'dark-content' : 'light-content'}
        translucent={transparent}
      />
      <View
        style={[
          styles.header,
          { backgroundColor },
          style,
        ]}
      >
        <View style={styles.leftContainer}>
          {showBackButton && (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Ionicons
                name="arrow-back"
                size={24}
                color={transparent ? Colors.textPrimary : Colors.white}
              />
            </TouchableOpacity>
          )}
        </View>
        
        {title && (
          <Text
            style={[styles.title, { color: transparent ? textColor : Colors.white }]}
            numberOfLines={1}
          >
            {title}
          </Text>
        )}
        
        <View style={styles.rightContainer}>
          {rightComponent || <View style={{ width: 24 }} />}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.base,
    height: 56,
    width: '100%',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 24,
  },
  backButton: {
    padding: Spacing.xs,
  },
  title: {
    fontSize: Typography.fontSizes.lg,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
  rightContainer: {
    alignItems: 'flex-end',
    minWidth: 24,
  },
}); 