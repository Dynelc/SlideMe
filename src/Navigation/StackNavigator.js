import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Level1 from '../Features/Level1/Level1';
import Level2 from '../Features/Level2/Level2';
import Level3 from '../Features/Level3/Level3';
import StartScreen from '../StartScreen/StartScreen';
import FailedScreen from '../FailedScreen/FailedScreen';
import SuccessScreen from '../SuccessScreen/SuccessScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="Level1"
          component={Level1}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="Level2"
          component={Level2}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="Level3"
          component={Level3}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="FailedScreen"
          component={FailedScreen}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="SuccessScreen"
          component={SuccessScreen}
          options={{gestureEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
