/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react';
import MainThemeProvider from './src/components/mainThemeProvider.tsx';
import './src/global.css';
import SidebarProvider from './src/components/sidebar/sidebarProvider.tsx';

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => (
  <MainThemeProvider>
    <SidebarProvider>
      {element}
    </SidebarProvider>
  </MainThemeProvider>
);
