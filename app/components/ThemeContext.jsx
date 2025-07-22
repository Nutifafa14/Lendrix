import React, { createContext, useContext, useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('device'); // 'device', 'light', 'dark'
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    // Load theme from storage
    AsyncStorage.getItem('app_theme').then(savedTheme => {
      if (savedTheme) setTheme(savedTheme);
    });
    // Listen to device color scheme changes
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });
    return () => listener.remove();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('app_theme', theme);
  }, [theme]);

  // Determine which theme to use
  const effectiveTheme = theme === 'device' ? colorScheme : theme;

  return (
    <ThemeContext.Provider value={{ theme, setTheme, effectiveTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
} 