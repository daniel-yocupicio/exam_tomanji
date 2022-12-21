import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HistoryEvents from '../views/historyEventsScreen';
import HistoryPlayers from '../views/historyPlayersScreen';
import Players from '../views/playersScreen';
import ResumeEventScreen from '../views/resumeEventScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="players" component={Players} />
        <Stack.Screen name="history1" component={HistoryEvents} />
        <Stack.Screen name="history2" component={HistoryPlayers} />
        <Stack.Screen name="resume" component={ResumeEventScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
