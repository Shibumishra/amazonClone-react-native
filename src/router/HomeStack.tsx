import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import { Text } from 'react-native';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <Stack.Navigator
            screenOptions={{
                header: () => (
                    <Header
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />
                ),
            }}>
            <Stack.Screen name="HomeStack" options={{ title: 'Home' }} >
                {() => <HomeScreen searchValue={searchValue} />}
            </Stack.Screen>
            <Stack.Screen name="ProductDetails" component={ProductScreen} />
        </Stack.Navigator>
    )
}

export default HomeStack;