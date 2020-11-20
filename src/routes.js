import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons'

import First from './pages/First'
import Second from './pages/Second'
import Third from './pages/Third'

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator()

function Menu() {

  return(
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#35ff3d',
        inactiveTintColor: 'rgb(40,40,40)',
        style: {
          backgroundColor: '#eee',
          borderTopWidth: 0,
          height: 60,
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontSize: 13,
          margin: 3
        }
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'First') {
            iconName = focused ? 'circle' : 'circle';
          } else if (route.name === 'Second') {
            iconName = focused ? 'square' : 'square';
          } else if (route.name === 'Third') {
            iconName = focused ? 'hexagon' : 'hexagon';
          }

          return <Feather name={iconName} size={size} color={color} />
        }, 
      })}
    >
      <Tab.Screen name="First" component={First} />
      <Tab.Screen name="Second" component={Second} />
      <Tab.Screen name="Third" component={Third} />
    </Tab.Navigator>
  )
  
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
