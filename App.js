/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigation from './src/navigation';
import {UIProvider, PlayersProvider} from './src/context';

const App = () => {
  return (
    <PlayersProvider>
      <UIProvider>
        <Navigation />
      </UIProvider>
    </PlayersProvider>
  );
};

export default App;
