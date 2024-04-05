import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

interface Props extends IButtonProps {
  title: string;
  type?: 'PRIMARY' | 'SECONDARY';
}

export function Button({ title, type = 'PRIMARY', ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h={12}
      rounded="sm"
      fontSize="md"
      bg={type === 'SECONDARY' ? 'white' : 'blue.500'}
      borderColor='blue.200'
      borderWidth={'1'}
      _pressed={{ bg: type === 'SECONDARY' ? "gray.100" : "blue.600" }}
      _loading={{ _spinner: { color: 'blue.100' } }}
      {...rest}
    >
      <Text
        fontSize="md"
        fontFamily="subtitle"
        color={type === 'SECONDARY' ? 'black' : 'white'}
        className=''
      >
        {title}
      </Text>
    </ButtonNativeBase >
  );
}