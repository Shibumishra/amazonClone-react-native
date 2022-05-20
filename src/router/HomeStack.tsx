import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import { Text } from 'react-native';
import Header from '../components/Header';
import ShoopingCartStack from './ShoopingCartStack';
import products from '../data/product1';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    const [searchValue, setSearchValue] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(products);
    const [masterDataSource, setMasterDataSource] = useState(products);


    console.log("filteredDataSource", filteredDataSource)

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource and update FilteredDataSource
            const newData = masterDataSource.filter(function (item) {
                // Applying filter for the inserted text in search bar
                const itemData = item.title
                    ? item.title.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearchValue(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearchValue(text);
        }
    };

    
    return (
        <Stack.Navigator
            screenOptions={{
                header: () => (
                    <Header
                        searchValue={searchValue}
                        searchFilterFunction={searchFilterFunction}
                    />
                ),
            }}>
            <Stack.Screen name="HomeStack" options={{ title: 'Home' }} >
                {() => <HomeScreen filteredDataSource={filteredDataSource} />}
            </Stack.Screen>
            <Stack.Screen name="ProductDetails" component={ProductScreen} />
            <Stack.Screen name="ShoopingCartStack" >
                {() => <ShoopingCartStack />}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default HomeStack;