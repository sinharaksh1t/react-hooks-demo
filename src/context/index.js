import { createContext } from 'react';

export const ThemeContext = createContext({
  theme: {
    dark: 'dark-theme',
    light: 'light-theme',
  },
});

export const LocaleContext = createContext({
  locale: {
    local: '🇺🇸',
    foreign: '🇯🇵',
  },
});
