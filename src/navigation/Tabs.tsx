import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { StackNavigation } from './StackNavigation';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: '#fff'
        }}
        screenOptions={{
            tabBarActiveTintColor: '#5856d6',
            tabBarLabelStyle: {
                marginBottom: 10
            },
            tabBarStyle: {
                // backgroundColor: 'red',
                borderWidth: 0,
                elevation: 0,
                height: 60,
                position: 'absolute',
                backgroundColor: 'rgba(255,255,255,0.92)'
            }
        }}
    >
      <Tab.Screen 
      name='StackNavigation' 
      component={StackNavigation}
      options={{
        tabBarLabel: 'Listado',
        tabBarIcon: ({ color }) => (
            <Ionicons 
                color={ color } 
                size={ 25 }  
                name='list-outline'
            />
        )
      }} 
      />
      <Tab.Screen 
      name='SearchScreen' 
      component={SearchScreen} 
      options={{
        tabBarLabel: 'Listado',
        tabBarIcon: ({ color }) => (
            <Ionicons 
                color={ color } 
                size={ 25 }  
                name='search-outline'
            />
        )
      }} 
      />
    </Tab.Navigator>
  );
}