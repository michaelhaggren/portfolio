import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
//!TODO Skapa globala återanvända bakgrunds/text färger som man bara kan hämta vid behov
const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('#f0e7db', 'red')(props),
    },
  }),
};

const colors = {
  grassTeal: '#88ccca',
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, colors });
export default theme;
