import { ThemeContextType } from '@/types/colorScheme.types'
import { createContext } from 'react'

export const ThemeContext = createContext<undefined | ThemeContextType>(
  undefined
)
