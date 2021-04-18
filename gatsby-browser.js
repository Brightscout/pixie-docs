/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react';
import MainThemeProvider from './src/components/mainThemeProvider.tsx';
import './src/global.css';
import SidebarProvider from './src/components/sidebar/sidebarProvider.tsx';
import SearchProvider from './src/components/search-context.tsx';
import { processClientEntry, runZoom } from './src/components/image-zoom-modal.plugin.ts';
import TabSwitcherProvider from './src/components/tabSwitcherProvider.tsx';

export const onClientEntry = () => {
  processClientEntry();
};

export const onRouteUpdate = () => {
  if (typeof window === 'undefined') return;
  window.locations = window.locations || [document.referrer];
  if (!sessionStorage.getItem('referrer')) {
    sessionStorage.setItem('referrer', window.locations[0]);
  }
  runZoom();
};

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => (
  <TabSwitcherProvider>
    <MainThemeProvider>
      <SidebarProvider>
        <SearchProvider>
          {element}
        </SearchProvider>
      </SidebarProvider>
    </MainThemeProvider>
  </TabSwitcherProvider>
);
