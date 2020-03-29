import React from 'react';

import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <>
      <StatusBar backgroundColor="#5960c1" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="main"
          screenOptions={{
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#5960c1',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
            },
          }}>
          <Stack.Screen
            name="main"
            component={Main}
            options={{title: 'Usuários'}}
          />
          <Stack.Screen
            name="user"
            component={User}
            options={{title: 'Usuário'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
