import useTheme from '@hooks/useTheme'
import { Pressable, Text, View } from 'react-native'

export default function HomeScreen() {
  const { toggleDarkMode } = useTheme()

  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-2xl font-bold'>Home Screen</Text>
      <Pressable
        onPress={() => toggleDarkMode()}
        className='bg-blue-500 p-2 rounded-md'
      >
        <Text className='text-white'>Toggle Dark Mode</Text>
      </Pressable>
    </View>
  )
}
