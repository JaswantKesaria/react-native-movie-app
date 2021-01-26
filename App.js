/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistor, store} from './reducers/index';
import Home from './modules/Home'
import MyList from './modules/MyList'

const Stack = createStackNavigator();

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
      <PersistGate persistor={persistor}>
      <NavigationContainer>
         <Stack.Navigator initialRouteName="home" screenOptions={{
    headerShown: false
  }}>
          <Stack.Screen name="home" component={Home}  />
          <Stack.Screen name="mylist" component={MyList} />
         </Stack.Navigator>
      </NavigationContainer>
      </PersistGate>
      </Provider>
    );
  }
};

export default App;
