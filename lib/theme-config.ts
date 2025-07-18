export interface ThemeConfig {
  name: string;
  colors: {
    primary: string;
    primaryGradient: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    success: string;
    warning: string;
    error: string;
  };
}

export const themes: Record<string, ThemeConfig> = {
  orange: {
    name: 'Orange',
    colors: {
      primary: '#FF6B35',
      primaryGradient: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
      secondary: '#4A90E2',
      accent: '#F97316',
      background: '#F8F9FA',
      surface: '#FFFFFF',
      text: '#1F2937',
      textSecondary: '#6B7280',
      border: '#E5E7EB',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
    },
  },
  red: {
    name: 'Red',
    colors: {
      primary: '#DC2626',
      primaryGradient: 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)',
      secondary: '#4A90E2',
      accent: '#F87171',
      background: '#F8F9FA',
      surface: '#FFFFFF',
      text: '#1F2937',
      textSecondary: '#6B7280',
      border: '#E5E7EB',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
    },
  },
  blue: {
    name: 'Blue',
    colors: {
      primary: '#2563EB',
      primaryGradient: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
      secondary: '#1E40AF',
      accent: '#60A5FA',
      background: '#F8F9FA',
      surface: '#FFFFFF',
      text: '#1F2937',
      textSecondary: '#6B7280',
      border: '#E5E7EB',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
    },
  },
  green: {
    name: 'Green',
    colors: {
      primary: '#059669',
      primaryGradient: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
      secondary: '#4A90E2',
      accent: '#34D399',
      background: '#F8F9FA',
      surface: '#FFFFFF',
      text: '#1F2937',
      textSecondary: '#6B7280',
      border: '#E5E7EB',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
    },
  },
  yellow: {
    name: 'Yellow',
    colors: {
      primary: '#D97706',
      primaryGradient: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
      secondary: '#4A90E2',
      accent: '#FCD34D',
      background: '#F8F9FA',
      surface: '#FFFFFF',
      text: '#1F2937',
      textSecondary: '#6B7280',
      border: '#E5E7EB',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
    },
  },
  dark: {
    name: 'Dark',
    colors: {
      primary: '#FF6B35',
      primaryGradient: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
      secondary: '#4A90E2',
      accent: '#F97316',
      background: '#111827',
      surface: '#1F2937',
      text: '#F9FAFB',
      textSecondary: '#9CA3AF',
      border: '#374151',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
    },
  },
};

export const defaultTheme = 'orange';