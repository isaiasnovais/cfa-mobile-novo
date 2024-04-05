import { Text, HStack, Box } from 'native-base';

import { CaretLeft, Export } from 'phosphor-react-native';

import { ButtonIcon } from './ButtonIcon';

interface Props {
  title: string;
  showBackButton?: boolean;
  showShareButton?: boolean;
  onShare?: () => void;
}

export function Header({ title, showBackButton = false, showShareButton = false, onShare }: Props) {

  const EmptyBoxSpace = () => (<Box w={6} h={6} />);

  return (
    <HStack
      className='w-full h-22 bg-blue-800 items-end px-4 pb-5 
      rounded-b-sm border-b border-blue-200 border-r-0'
    >
      <HStack
        className='w-full items-center justify-between'
      >
        {
          showBackButton
            ? <ButtonIcon icon={CaretLeft} />
            : <EmptyBoxSpace />
        }

        <Text
          className='text-white-100 font-medium text-xl'
        >
          {title}
        </Text>

        {
          showShareButton
            ?
            <ButtonIcon icon={Export} onPress={onShare} />
            :
            <EmptyBoxSpace />
        }
      </HStack>
    </HStack>
  );
}