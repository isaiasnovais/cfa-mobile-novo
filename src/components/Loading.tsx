import { View, ActivityIndicator } from 'react-native';
import { StatusBar } from 'native-base';

import colors from 'tailwindcss/colors';

export function Loading() {
  return (
    <View className='flex-1 items-center justify-center bg-blue-900' >
      <ActivityIndicator color={colors.white} />
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    </View>
  );
}