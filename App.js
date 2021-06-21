import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import Create from './components/Create';
import Details from './components/Details';
import Constant from 'expo-constants';
import Edit from './components/Edit';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

function App() {


  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Create" component={Create} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Edit" component={Edit} />
        

      </Stack.Navigator>

    </View>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eddfdf',
    mearginTop: Constant.statusBarHHeight
  },
});

