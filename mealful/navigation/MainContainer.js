import * as React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

//Screens
import Home from '../screens/Home';
import Filters from '../screens/Filters';
import Search from '../screens/Search';
import Settings from '../screens/Settings';
import Recipe from '../screens/Recipe';

//Screen names
const homeName = 'Home';
const listName = 'Filters';
const settingsName = 'Settings';
const searchName = 'Search';
const recipeName = 'Recipe';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={homeName} component={Home} />
      <HomeStack.Screen name={recipeName} component={Recipe} />
    </HomeStack.Navigator>
  );
}

export default function MainContainer() {
  return(
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) =>{
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === listName) {
              iconName = focused ? 'list' : 'list-outline';
            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (rn === searchName) {
              iconName = focused ? 'search' : 'search-outline';
            }

            return <Ionicons name={iconName} size={size} color={color}/>
          },
        })}
        tabBarOptions={{
          activeTintColor: 'lightgreen',
          inactiveTintColor: 'grey',
        }}
      >
        <Tab.Screen name={homeName} component={HomeStackScreen}/>
        <Tab.Screen name={searchName} component={Search}/>
        <Tab.Screen name={listName} component={Filters}/>
        <Tab.Screen name={settingsName} component={Settings}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}