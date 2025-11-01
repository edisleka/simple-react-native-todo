import { ColorScheme } from '@/types/colorScheme.types'

export const lightColors: ColorScheme = {
  bg: '#fafafa',
  surface: '#ffffff',
  text: '#18181b',
  textMuted: '#71717a',
  border: '#e4e4e7',
  primary: '#7c3aed',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#f43f5e',
  shadow: '#000000',
  gradients: {
    background: ['#fafafa', '#f4f4f5'],
    surface: ['#ffffff', '#fafafa'],
    primary: ['#8b5cf6', '#6d28d9'],
    success: ['#10b981', '#047857'],
    warning: ['#f59e0b', '#b45309'],
    danger: ['#f43f5e', '#be123c'],
    muted: ['#a1a1aa', '#52525b'],
    empty: ['#f4f4f5', '#e4e4e7'],
  },
  backgrounds: {
    input: '#ffffff',
    editInput: '#ffffff',
  },
  statusBarStyle: 'dark' as const,
}

export const darkColors: ColorScheme = {
  bg: '#09090b',
  surface: '#18181b',
  text: '#f4f4f5',
  textMuted: '#a1a1aa',
  border: '#27272a',
  primary: '#a78bfa',
  success: '#34d399',
  warning: '#fbbf24',
  danger: '#fb7185',
  shadow: '#000000',
  gradients: {
    background: ['#09090b', '#18181b'],
    surface: ['#18181b', '#27272a'],
    primary: ['#8b5cf6', '#6d28d9'],
    success: ['#10b981', '#047857'],
    warning: ['#f59e0b', '#b45309'],
    danger: ['#f43f5e', '#be123c'],
    muted: ['#3f3f46', '#52525b'],
    empty: ['#27272a', '#3f3f46'],
  },
  backgrounds: {
    input: '#18181b',
    editInput: '#09090b',
  },
  statusBarStyle: 'light' as const,
}
