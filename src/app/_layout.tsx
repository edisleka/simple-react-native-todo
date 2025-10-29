import { ThemeProvider } from '@providers/useThemeProvider'
import '@root/global.css'
import { Stack } from 'expo-router'

const InitialLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
    </Stack>
  )
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <InitialLayout />
    </ThemeProvider>
  )
}
