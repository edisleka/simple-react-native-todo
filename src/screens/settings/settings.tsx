import DangerZone from '@components/DangerZone'
import Preferences from '@components/Preferences'
import ProgressStats from '@components/ProgressStats'
import Ionicons from '@expo/vector-icons/Ionicons'
import useTheme from '@hooks/useTheme'
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createSettingsStyles } from './settings.styles'

export default function SettingsScreen() {
  const { colors } = useTheme()
  const settingsStyles = createSettingsStyles(colors)

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={settingsStyles.container}
    >
      <SafeAreaView style={settingsStyles.safeArea}>
        {/* Header */}
        <View style={settingsStyles.header}>
          <View style={settingsStyles.titleContainer}>
            <LinearGradient
              colors={colors.gradients.primary}
              style={settingsStyles.iconContainer}
            >
              <Ionicons name='settings' size={24} color='#fff' />
            </LinearGradient>
            <Text style={settingsStyles.title}>Settings</Text>
          </View>
        </View>

        {/* Content */}
        <ScrollView
          style={settingsStyles.scrollView}
          contentContainerStyle={settingsStyles.content}
          showsVerticalScrollIndicator={false}
        >
          <ProgressStats />
          <Preferences />
          <DangerZone />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}
