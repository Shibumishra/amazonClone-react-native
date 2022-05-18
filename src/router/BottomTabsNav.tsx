import React, { useState, useEffect } from 'react';
import { Text, View, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ShoopingCartStack from './ShoopingCartStack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeStack from './HomeStack';
import { AuthProvider } from './AuthProvider';
import Signin from '../screens/SigninScreen';
import SigninStack from './SigninStack';
import { AddToCartProduct } from '../services';

interface nameInterface {
  namr: string;
}

const Tab = createBottomTabNavigator();

const BottomTabsNav = () => {
  const [products, setProducts] = useState([]);
  const totalCart = products ? products?.length : 0;

  useEffect(() => {
      AddToCartProduct.getProduct()
          .then(prod => {
              setProducts(prod)
          })
          .catch(err => Alert.alert(err.code, err.message))
  }, []);

  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: '#02b8eb',
        tabBarInactiveTintColor: '#2f3a3d',
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AuthProvider}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ShoopingCart"
        component={ShoopingCartStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-shopping-cart" color={color} size={size} />
          ),
          tabBarBadge: totalCart,
        }}
      />
      <Tab.Screen
        name="More"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Foundation name="indent-more" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>

  );
}

export default BottomTabsNav;
