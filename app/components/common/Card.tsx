import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Colors, BorderRadius, Shadow } from '../../theme';

type CardProps = {
  children: ReactNode;
  style?: ViewStyle;
  variant?: 'default' | 'flat' | 'elevated';
  padding?: boolean;
};

export default function Card({
  children,
  style,
  variant = 'default',
  padding = true,
}: CardProps) {
  return (
    <View
      style={[
        styles.card,
        padding && styles.padding,
        styles[`${variant}Card`],
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
  },
  padding: {
    padding: 16,
  },
  defaultCard: {
    borderWidth: 1,
    borderColor: Colors.border,
  },
  flatCard: {
    backgroundColor: Colors.secondary,
  },
  elevatedCard: {
    ...Shadow.medium,
  },
}); 