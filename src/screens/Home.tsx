import { View, Text } from 'react-native'
import { StatusBar } from 'native-base'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View className='flex-1 px-4 bg-blue-900'>
      <View className='pt-12 justify-center items-center'>
        <Text className='text-white-100 font-bold'>Home</Text>
      </View>

      <View className='pt-12 justify-center items-center'>
        <Button
          title='Voltar para SignIn'
          onPress={handleGoBack}
        />
      </View>
    </View>
  )
}