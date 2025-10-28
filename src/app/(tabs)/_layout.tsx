import Ionicons from '@expo/vector-icons/Ionicons'
import {
  Icon,
  Label,
  NativeTabs,
  VectorIcon,
} from 'expo-router/unstable-native-tabs'
import { Platform } from 'react-native'

export default function TabsLayout() {
  return (
    <NativeTabs>
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
              src={{
                default: (
                  <VectorIcon family={Ionicons} name='settings-outline' />
                ),
                selected: <VectorIcon family={Ionicons} name='settings' />,
              }}
            />
          ),
        })}
      </NativeTabs.Trigger>
    </NativeTabs>
  )
}
