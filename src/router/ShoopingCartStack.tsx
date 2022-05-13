import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShoopingCartScreen from '../screens/ShoopingCartScreen';
import AddressScreen from '../screens/AddressScreen';

const Stack = createNativeStackNavigator();

const ShoopingCartStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ShoopingCart"
                component={ShoopingCartScreen}
                options={{ title: 'Shooping Cart' }}
            />
            <Stack.Screen
                name="Address"
                component={AddressScreen}
                options={{ title: 'Address' }}
            />
        </Stack.Navigator>
    )
}

export default ShoopingCartStack;