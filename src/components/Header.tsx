import Ionicons from '@expo/vector-icons/Ionicons'
import useTheme from '@hooks/useTheme'
import { api } from '@root/convex/_generated/api'
import { createHomeStyles } from '@screens/home/home.styles'
import { useQuery } from 'convex/react'
import { LinearGradient } from 'expo-linear-gradient'
import { Text, View } from 'react-native'

export default function Header() {
  const { colors } = useTheme()
  const homeStyles = createHomeStyles(colors)
  const todos = useQuery(api.todos.getTodos)

  const completedTodos = todos
    ? todos.filter((todo) => todo.isCompleted).length
    : 0

  const totalCount = todos ? todos.length : 0

  const progress = totalCount > 0 ? (completedTodos / totalCount) * 100 : 0

  return (
    <View style={homeStyles.header}>
      <View style={homeStyles.titleContainer}>
        <LinearGradient
          colors={colors.gradients.primary}
          style={homeStyles.iconContainer}
        >
          <Ionicons name='flash-outline' size={28} color={colors.text} />
        </LinearGradient>

        <View style={homeStyles.titleTextContainer}>
          <Text style={homeStyles.title}>Today&apos;s Tasks</Text>
          <Text style={homeStyles.subtitle}>
            {completedTodos} of {totalCount} tasks completed
          </Text>
        </View>
      </View>

      <View style={homeStyles.progressContainer}>
        <View style={homeStyles.progressBarContainer}>
          <View style={homeStyles.progressBar}>
            <LinearGradient
              colors={colors.gradients.success}
              style={[homeStyles.progressFill, { width: `${progress}%` }]}
            />
          </View>
          <Text style={homeStyles.progressText}>{Math.round(progress)}%</Text>
        </View>
      </View>
    </View>
  )
}
