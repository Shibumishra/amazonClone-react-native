import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native';
import ProductItem from '../../components/ProductItem';
import products from '../../data/product1';

const HomeScreen = ({ searchValue }: { searchValue: string }) => {

    console.log(searchValue);

    return (
        <View style={styles.page}>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductItem item={item} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 10,
    }
});
export default HomeScreen;