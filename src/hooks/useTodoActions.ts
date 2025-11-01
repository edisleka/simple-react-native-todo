import { Todo, TodoId } from '@/types/todo.type'
import { api } from '@root/convex/_generated/api'
import { useMutation } from 'convex/react'
import { useState } from 'react'
import { Alert } from 'react-native'

export function useTodoActions() {
  const [editingId, setEditingId] = useState<TodoId | null>(null)
  const [editedText, setEditedText] = useState('')

  const toggleTodo = useMutation(api.todos.toggleTodo)
  const deleteTodo = useMutation(api.todos.deleteTodo)
  const updateTodo = useMutation(api.todos.updateTodo)

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

  return {
    // state
    editingId,
    editedText,
    setEditedText,
    // actions
    handleToggleTodo,
    handleDeleteTodo,
    handleEditTodo,
    handleSaveEdit,
    handleCancelEdit,
  }
}
