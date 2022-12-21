/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigation from './src/navigation';
import {UIProvider} from './src/context';

const App = () => {
  return (
    <UIProvider>
      <Navigation />
    </UIProvider>
  );
};

export default App;
