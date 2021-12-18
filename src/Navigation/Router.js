// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsFeed from '../NewsFeed'
import NewsDetail from '../NewsDetail'


const Stack = createNativeStackNavigator();

function Router(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="NewsFeed" component={NewsFeed}
        options={{headerShown: false}} />
        <Stack.Screen name="NewsDetail" component={NewsDetail}
        options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;