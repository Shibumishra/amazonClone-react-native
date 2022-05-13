import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ShoopingCartStack from './ShoopingCartStack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeStack from './HomeStack';
import Signin from '../screens/SigninScreen';
import SigninStack from './SigninStack';

interface nameInterface {
    namr: string;
}

const Tab = createBottomTabNavigator();

const BottomTabsNav = () => {
    return (
       
            <Tab.Navigator
             screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  let MaterialIconsName;
      
                  if (route.name === 'Home') {
                    MaterialIconsName = focused
                      ? 'home'
                      : 'home';
                  } else if (route.name === 'Profile') {
                    MaterialIconsName = focused ? 'supervised-user-circle' : 'supervised-user-circle';
                  }
                  else if (route.name === 'ShoopingCart') {
                    MaterialIconsName = focused ? 'add-shopping-cart' : 'add-shopping-cart';
                  }
                  else if (route.name === 'More') {
                    MaterialIconsName = focused ? 'more' : 'more';
                  }
                  // You can return any component that you like here!
                  return  <MaterialIcons  name={MaterialIconsName} size={size} color={color}/>;
                },
                tabBarActiveTintColor: '#02b8eb',
                tabBarInactiveTintColor: '#2f3a3d',
                tabBarShowLabel: false,
                headerShown: false,
              })}
            >
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Profile" component={SigninStack} />
                <Tab.Screen name="ShoopingCart" component={ShoopingCartStack} />
                <Tab.Screen name="More" component={HomeScreen} />
            </Tab.Navigator>
       
    );
}

export default BottomTabsNav;
