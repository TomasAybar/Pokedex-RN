import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigation } from './src/navigation/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './src/navigation/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigation /> */}
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
