import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import components from 'theme/components';

// example theme object
export default extendTheme({
  breakpoints: createBreakpoints({
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  }),
  components,
  colors: {
    text: '#333',
    background: '#fff',
    primary: '#00395d',
    secondary: '#0076b6',
    muted: '#e7e7e7',
  },
  fonts: {
    body: 'Expert Sans, sans-serif',
    heading: 'Expert Sans, serif',
    mono: 'Menlo, monospace',
  },
  shadows: {
    default: '0 4px 12px -4px rgba(0, 0, 0, 0.1)',
  },
});
