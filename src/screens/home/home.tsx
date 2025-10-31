import useTheme from '@hooks/useTheme'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import { Pressable, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createHomeStyles } from './home.styles'

export default function HomeScreen() {
  const { toggleDarkMode, colors } = useTheme()

  const homeStyles = createHomeStyles(colors)

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar style={colors.statusBarStyle} />
      <SafeAreaView style={homeStyles.safeArea}>
        <Text>Home Screen</Text>
        <Pressable onPress={() => toggleDarkMode()}>
          <Text>Toggle Dark Mode</Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  )
}
