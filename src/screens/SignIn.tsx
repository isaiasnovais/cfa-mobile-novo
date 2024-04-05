import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { useState } from 'react';

import { Button } from '@components/Button';

export function SignIn() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  function handleNewAccount() {
    navigation.navigate('home' as never);
  }

  return (
    <View className='flex-1 px-4 bg-blue-900'>
      <View className='pt-12 justify-center items-center'>
        <Text className='text-white-100 font-bold'>SignIn</Text>
      </View>

      <View className='pt-12 justify-center items-center'>
        <Button
          title='Ir para Home'
          onPress={handleNewAccount}
          isLoading={isLoading} />
      </View>
    </View>
  );
}