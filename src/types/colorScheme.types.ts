export type StatusBarStyle = 'light-content' | 'dark-content'

export type Gradient = [string, string]

export interface Gradients {
  background: Gradient
  surface: Gradient
  primary: Gradient
  success: Gradient
  warning: Gradient
  danger: Gradient
  muted: Gradient
  empty: Gradient
}

export interface Backgrounds {
  input: string
  editInput: string
}

export interface ColorScheme {
  bg: string
  surface: string
  text: string
  textMuted: string
  border: string
  primary: string
  success: string
  warning: string
  danger: string
  shadow: string
  gradients: Gradients
  backgrounds: Backgrounds
  statusBarStyle: StatusBarStyle
}
