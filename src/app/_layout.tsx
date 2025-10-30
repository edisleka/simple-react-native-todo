import { ThemeProvider } from '@providers/useThemeProvider'
import '@root/global.css'
import { ConvexProvider, ConvexReactClient } from 'convex/react'
import { Stack } from 'expo-router'

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
})

const InitialLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
    </Stack>
  )
}

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <ThemeProvider>
        <InitialLayout />
      </ThemeProvider>
    </ConvexProvider>
  )
}
