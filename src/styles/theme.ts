import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    blue: {
      900: '#071333',
      850: '#0C1E4F',
      800: '#162140',
      600: '#5F73DC',
      500: '#5F77F5',
      450: '#254868',
      400: '#426086',
      300: '#2490A9',
      200: '#79B0DD',
      100: '#A8C9E4',
    },
    gray: {
      300: '#C9C9C9C9',
      200: '#C9C9C9'
    },
    white: '#FFFFFF',
  },
  fonts: {
    heading: 'Roboto_900Black',
    subtitle: 'Roboto_500Medium',
    body: 'Roboto_400Regular',
    bold: 'Roboto_700Bold',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
  sizes: {
    14: 56,
    22: 87
  }
});