import { darkColors, lightColors } from '@constants/Colors'
import { ThemeContext } from '@contexts/themeContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ReactNode, useEffect, useState } from 'react'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // get the user's choice
    AsyncStorage.getItem('darkMode').then((value) => {
      if (value) setIsDarkMode(JSON.parse(value))
    })
  }, [])

  const toggleDarkMode = async () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    await AsyncStorage.setItem('darkMode', JSON.stringify(newMode))
  }

  const colors = isDarkMode ? darkColors : lightColors

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, colors }}>
      {children}
    </ThemeContext.Provider>
  )
}
