import useTheme from '@/hooks/useTheme'
import { createSettingsStyles } from '@/screens/settings/settings.styles'
import Ionicons from '@expo/vector-icons/Ionicons'
import { api } from '@root/convex/_generated/api'
import { useQuery } from 'convex/react'
import { LinearGradient } from 'expo-linear-gradient'
import { Text, View } from 'react-native'

export default function ProgressStats() {
  const { colors } = useTheme()
  const settingsStyles = createSettingsStyles(colors)

  const todos = useQuery(api.todos.getTodos)
  const totalTodos = todos ? todos.length : 0
  const completedTodos = todos
    ? todos.filter((todo) => todo.isCompleted).length
    : 0
  const activeTodos = totalTodos - completedTodos

  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingsStyles.section}
    >
      <Text style={settingsStyles.sectionTitle}>Progress Stats</Text>

      <View style={settingsStyles.statsContainer}>
        {/* Total Todos */}
        <LinearGradient
          colors={colors.gradients.background}
          style={[settingsStyles.statCard, { borderLeftColor: colors.primary }]}
        >
          <View style={settingsStyles.statIconContainer}>
            <LinearGradient
              colors={colors.gradients.primary}
              style={settingsStyles.statIcon}
            >
              <Ionicons name='list' size={20} color='#fff' />
            </LinearGradient>
          </View>

          <View>
            <Text style={settingsStyles.statNumber}>{totalTodos}</Text>
            <Text style={settingsStyles.statLabel}>Total Todos</Text>
          </View>
        </LinearGradient>

        {/* Completed Todos */}
        <LinearGradient
          colors={colors.gradients.background}
          style={[settingsStyles.statCard, { borderLeftColor: colors.success }]}
        >
          <View style={settingsStyles.statIconContainer}>
            <LinearGradient
              colors={colors.gradients.success}
              style={settingsStyles.statIcon}
            >
              <Ionicons name='checkmark-circle' size={20} color='#fff' />
            </LinearGradient>
          </View>

          <View>
            <Text style={settingsStyles.statNumber}>{completedTodos}</Text>
            <Text style={settingsStyles.statLabel}>Completed Todos</Text>
          </View>
        </LinearGradient>

        {/* Active Todos */}
        <LinearGradient
          colors={colors.gradients.background}
          style={[settingsStyles.statCard, { borderLeftColor: colors.warning }]}
        >
          <View style={settingsStyles.statIconContainer}>
            <LinearGradient
              colors={colors.gradients.warning}
              style={settingsStyles.statIcon}
            >
              <Ionicons name='time' size={20} color='#fff' />
            </LinearGradient>
          </View>

          <View>
            <Text style={settingsStyles.statNumber}>{activeTodos}</Text>
            <Text style={settingsStyles.statLabel}>Active Todos</Text>
          </View>
        </LinearGradient>
      </View>
    </LinearGradient>
  )
}
