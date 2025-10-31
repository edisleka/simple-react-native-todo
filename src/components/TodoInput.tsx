import useTheme from '@/hooks/useTheme'
import { createHomeStyles } from '@/screens/home/home.styles'
import Ionicons from '@expo/vector-icons/Ionicons'
import { api } from '@root/convex/_generated/api'
import { useMutation } from 'convex/react'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { Alert, TextInput, TouchableOpacity, View } from 'react-native'

export default function TodoInput() {
  const { colors } = useTheme()
  const homeStyles = createHomeStyles(colors)

  const [newTodo, setNewTodo] = useState('')
  const addTodo = useMutation(api.todos.addTodo)

  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      try {
        await addTodo({ text: newTodo.trim() })
        setNewTodo('')
      } catch (error) {
        console.error('Error adding todo:', error)
        Alert.alert('Error', 'Failed to add todo')
      }
    }
  }

  return (
    <View style={homeStyles.inputSection}>
      <View style={homeStyles.inputWrapper}>
        <TextInput
          placeholder='What need to be done?'
          value={newTodo}
          onChangeText={setNewTodo}
          style={homeStyles.input}
          onSubmitEditing={handleAddTodo}
          multiline={true}
          placeholderTextColor={colors.textMuted}
        />
        <TouchableOpacity
          onPress={handleAddTodo}
          activeOpacity={0.8}
          disabled={!newTodo.trim()}
        >
          <LinearGradient
            colors={
              newTodo.trim() ? colors.gradients.primary : colors.gradients.muted
            }
            style={[
              homeStyles.addButton,
              !newTodo.trim() && homeStyles.addButtonDisabled,
            ]}
          >
            <Ionicons name='add' size={24} color='#fff' />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  )
}
