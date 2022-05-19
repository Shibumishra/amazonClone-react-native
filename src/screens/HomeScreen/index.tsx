import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import ProductItem from '../../components/ProductItem';
import products from '../../data/product1';

const HomeScreen = ({ searchValue }: { searchValue: string }) => {
    const [loading, setLoading] = useState(true);
    console.log(searchValue);


    useEffect(() => {
        if (products.length) {
            return setLoading(false)
        }
    }, [])

    
    if (loading) {
        return <ActivityIndicator />;
    }

    return (
        <View style={styles.page}>
            {products && (
                <FlatList
                    data={products}
                    renderItem={({ item }) => <ProductItem item={item} />}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 10,
    }
});
export default HomeScreen;