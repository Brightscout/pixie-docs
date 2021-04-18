/*
 * Copyright The Pixie Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from 'react';
import { useEffect, useRef } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, useMediaQuery } from '@material-ui/core';

import './styles.css';
import AppThemeOptions from './theme';

export const ThemeModeContext = React.createContext(
  {
    theme: null,
    toggleTheme: null,
  },
);
export default function MainThemeProvider({ children }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [theme, setTheme] = React.useState('dark');
  const firstRun = useRef(true);
  useEffect(
    () => {
      if (firstRun.current) {
        firstRun.current = false;
        return;
      }
      setTheme(prefersDarkMode ? 'dark' : 'light');
    }, [prefersDarkMode],
  );

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  const muiTheme = createMuiTheme(AppThemeOptions[theme]);

  return (
    <ThemeModeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={muiTheme}>
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
