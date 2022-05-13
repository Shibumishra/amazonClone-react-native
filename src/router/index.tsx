import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import BottomTabsNav from './BottomTabsNav';

const Stack = createNativeStackNavigator();

const Router = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeTabs" component={BottomTabsNav} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;