import { Todo, TodoId } from '@/types/todo.type'
import EmptyState from '@components/EmptyState'
import Header from '@components/Header'
import LoadingSpinner from '@components/LoadingSpinner'
import TodoInput from '@components/TodoInput'
import Ionicons from '@expo/vector-icons/Ionicons'
import useTheme from '@hooks/useTheme'
import { api } from '@root/convex/_generated/api'
import { useMutation, useQuery } from 'convex/react'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createHomeStyles } from './home.styles'

export default function HomeScreen() {
  const { colors } = useTheme()

  const [editingId, setEditingId] = useState<TodoId | null>(null)
  const [editedText, setEditedText] = useState('')

  const homeStyles = createHomeStyles(colors)

  const todos = useQuery(api.todos.getTodos)
  const toggleTodo = useMutation(api.todos.toggleTodo)
  const deleteTodo = useMutation(api.todos.deleteTodo)
  const updateTodo = useMutation(api.todos.updateTodo)

  const isLoading = todos === undefined

  if (isLoading) return <LoadingSpinner />

  const handleToggleTodo = async (id: TodoId) => {
    try {
      await toggleTodo({ id })
    } catch (error) {
      console.error('Error toggling todo:', error)
      Alert.alert('Error', 'Failed to toggle todo')
    }
  }

  const handleDeleteTodo = async (id: TodoId) => {
    Alert.alert('Delete Todo', 'Are you sure you want to delete this todo?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: async () => deleteTodo({ id }),
      },
    ])
  }

  const handleEditTodo = (todo: Todo) => {
    setEditedText(todo.text)
    setEditingId(todo._id)
  }

  const handleSaveEdit = async () => {
    if (editingId) {
      try {
        await updateTodo({ id: editingId, text: editedText.trim() })
        setEditingId(null)
        setEditedText('')
      } catch (error) {
        console.error('Error updating todo:', error)
        Alert.alert('Error', 'Failed to update todo')
      }
    }
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setEditedText('')
  }

  const renderTodoItem = ({ item }: { item: Todo }) => {
    const isEditing = editingId === item._id

    return (
      <View style={homeStyles.todoItemWrapper}>
        <LinearGradient
          colors={colors.gradients.surface}
          style={homeStyles.todoItem}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={homeStyles.checkbox}
            onPress={() => handleToggleTodo(item._id)}
          >
            <LinearGradient
              colors={
                item.isCompleted
                  ? colors.gradients.success
                  : colors.gradients.muted
              }
              style={[
                homeStyles.checkboxInner,
                {
                  borderColor: item.isCompleted ? 'transparent' : colors.border,
                },
              ]}
            >
              {item.isCompleted && (
                <Ionicons name='checkmark' size={18} color='#fff' />
              )}
            </LinearGradient>
          </TouchableOpacity>

          {isEditing ? (
            <View style={homeStyles.editContainer}>
              <TextInput
                style={homeStyles.editInput}
                value={editedText}
                onChangeText={setEditedText}
                autoFocus
                multiline
                placeholder='Edit your todo...'
                placeholderTextColor={colors.textMuted}
              />
              <View style={homeStyles.editButtons}>
                <TouchableOpacity activeOpacity={0.8} onPress={handleSaveEdit}>
                  <LinearGradient
                    colors={colors.gradients.success}
                    style={homeStyles.editButton}
                  >
                    <Ionicons name='checkmark' size={16} color='#fff' />
                    <Text style={homeStyles.editButtonText}>Save</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={handleCancelEdit}
                >
                  <LinearGradient
                    colors={colors.gradients.muted}
                    style={homeStyles.editButton}
                  >
                    <Ionicons name='close' size={16} color='#fff' />
                    <Text style={homeStyles.editButtonText}>Cancel</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={homeStyles.todoTextContainer}>
              <Text
                style={[
                  homeStyles.todoText,
                  item.isCompleted && {
                    textDecorationLine: 'line-through',
                    color: colors.textMuted,
                    opacity: 0.6,
                  },
                ]}
              >
                {item.text}
              </Text>

              <View style={homeStyles.todoActions}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => handleEditTodo(item)}
                >
                  <LinearGradient
                    colors={colors.gradients.warning}
                    style={homeStyles.actionButton}
                  >
                    <Ionicons name='pencil' size={14} color='#fff' />
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => handleDeleteTodo(item._id)}
                >
                  <LinearGradient
                    colors={colors.gradients.danger}
                    style={homeStyles.actionButton}
                  >
                    <Ionicons name='trash' size={14} color='#fff' />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </LinearGradient>
      </View>
    )
  }

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar style={colors.statusBarStyle} />
      <SafeAreaView style={homeStyles.safeArea}>
        <Header />
        <TodoInput />

        <FlatList
          data={todos}
          renderItem={renderTodoItem}
          keyExtractor={(item) => item._id.toString()}
          style={homeStyles.todoList}
          contentContainerStyle={homeStyles.todoListContent}
          ListEmptyComponent={<EmptyState />}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </LinearGradient>
  )
}
