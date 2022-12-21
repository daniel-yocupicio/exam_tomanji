/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Navigation from './src/navigation';
import {UIProvider, PlayersProvider, EventProvider} from './src/context';

const App = () => {
  return (
    <EventProvider>
      <PlayersProvider>
        <UIProvider>
          <Navigation />
        </UIProvider>
      </PlayersProvider>
    </EventProvider>
  );
};

export default App;
