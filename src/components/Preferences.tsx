import { createSettingsStyles } from '@/screens/settings/settings.styles'
import Ionicons from '@expo/vector-icons/Ionicons'
import useTheme from '@hooks/useTheme'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { Switch, Text, View } from 'react-native'

export default function Preferences() {
  const [isAutoSync, setIsAutoSync] = useState(true)
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true)

  const { colors, isDarkMode, toggleDarkMode } = useTheme()
  const settingsStyles = createSettingsStyles(colors)

  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingsStyles.section}
    >
      <Text style={settingsStyles.sectionTitle}>Preferences</Text>

      {/* Dark Mode */}
      <View style={settingsStyles.settingItem}>
        <View style={settingsStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.primary}
            style={settingsStyles.settingIcon}
          >
            <Ionicons name='moon' size={18} color='#fff' />
          </LinearGradient>
          <Text style={settingsStyles.settingText}>Dark Mode</Text>
        </View>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ true: colors.primary, false: colors.border }}
          thumbColor='#fff'
          ios_backgroundColor={colors.border}
        />
      </View>

      {/* Notifications */}
      <View style={settingsStyles.settingItem}>
        <View style={settingsStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.warning}
            style={settingsStyles.settingIcon}
          >
            <Ionicons name='notifications' size={18} color='#fff' />
          </LinearGradient>
          <Text style={settingsStyles.settingText}>Notifications</Text>
        </View>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={() =>
            setIsNotificationsEnabled(!isNotificationsEnabled)
          }
          trackColor={{ true: colors.warning, false: colors.border }}
          thumbColor='#fff'
          ios_backgroundColor={colors.border}
        />
      </View>

      {/* Auto Sync */}
      <View style={settingsStyles.settingItem}>
        <View style={settingsStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.success}
            style={settingsStyles.settingIcon}
          >
            <Ionicons name='sync' size={18} color='#fff' />
          </LinearGradient>
          <Text style={settingsStyles.settingText}>Auto Sync</Text>
        </View>
        <Switch
          value={isAutoSync}
          onValueChange={() => setIsAutoSync(!isAutoSync)}
          trackColor={{ true: colors.success, false: colors.border }}
          thumbColor='#fff'
          ios_backgroundColor={colors.border}
        />
      </View>
    </LinearGradient>
  )
}
