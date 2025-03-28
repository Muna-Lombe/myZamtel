export const Colors = {
  primary: '#10B981', // Green primary color from screenshots
  primaryLight: '#E8FFF5',
  secondary: '#f3f4f6', // Light gray for cards/buttons
  textPrimary: '#111827',
  textSecondary: '#6b7280',
  textLight: '#9ca3af',
  white: '#FFFFFF',
  background: '#F9FAFB',
  border: '#e5e7eb',
  success: '#34d399',
  error: '#ef4444',
  warning: '#f59e0b',
  info: '#60a5fa',
  accent: '#FFB800', // Yellow accent seen in ratings
};

export const Typography = {
  fontSizes: {
    xs: 10,
    sm: 12,
    md: 14,
    base: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  fontWeights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const BorderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  pill: 100, // For circular/pill shaped elements
};

export const Shadow = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
};

export default {
  Colors,
  Typography,
  Spacing,
  BorderRadius,
  Shadow,
}; 