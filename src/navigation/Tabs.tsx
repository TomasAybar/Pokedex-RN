import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigation } from './StackNavigation';
import { TabSearch } from './TabSearch';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: '#fff',
      }}
      screenOptions={{
        tabBarActiveTintColor: '#5856d6',
        tabBarLabelStyle: {
          marginBottom: 10,
        },
        tabBarStyle: {
          borderWidth: 0,
          elevation: 0,
          height: 60,
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.92)',
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="StackNavigation"
        component={StackNavigation}
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} size={25} name="list-outline" />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={TabSearch}
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} size={25} name="search-outline" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
