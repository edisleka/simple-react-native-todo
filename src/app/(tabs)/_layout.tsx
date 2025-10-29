import Ionicons from '@expo/vector-icons/Ionicons'
import useTheme from '@hooks/useTheme'
import {
  Icon,
  Label,
  NativeTabs,
  VectorIcon,
} from 'expo-router/unstable-native-tabs'
import { Platform } from 'react-native'

export default function TabsLayout() {
  const { colors } = useTheme()

  return (
    <NativeTabs
      iconColor={colors.textMuted}
      tintColor={colors.primary}
      labelStyle={{ color: colors.textMuted }}
      backgroundColor={colors.surface}
      disableIndicator={true}
    >
      <NativeTabs.Trigger name='index'>
        <Label>Home</Label>
        {Platform.select({
          ios: <Icon sf={{ default: 'bolt', selected: 'bolt.fill' }} />,
          android: (
            <Icon
              src={{
                default: <VectorIcon family={Ionicons} name='flash-outline' />,
                selected: <VectorIcon family={Ionicons} name='flash' />,
              }}
            />
          ),
        })}
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name='settings'>
        <Label>Settings</Label>
        {Platform.select({
          ios: (
            <Icon sf={{ default: 'gearshape', selected: 'gearshape.fill' }} />
          ),
          android: (
            <Icon
              src={<VectorIcon family={Ionicons} name='settings-outline' />}
            />
          ),
        })}
      </NativeTabs.Trigger>
    </NativeTabs>
  )
}
