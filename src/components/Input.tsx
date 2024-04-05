import { Input as NativeBaseInput, IInputProps, FormControl } from 'native-base';

type Props = IInputProps & {
  errorMessage?: string | null;
}

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} mb={2}>
      <NativeBaseInput
        bg="blue.800"
        h={14}
        px={4}
        borderColor="blue.850"
        borderRadius="lg"
        fontSize="md"
        fontFamily="body"
        color="white"
        placeholderTextColor="white"
        isInvalid={invalid}
        _invalid={{
          borderWidth: 2,
          borderColor: "red.500"
        }}
        _focus={{
          bg: "blue.850",
          borderColor: "blue.800",
          borderWidth: 1
        }}
        {...rest}
      />

      <FormControl.ErrorMessage _text={{ color: 'red.500' }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}