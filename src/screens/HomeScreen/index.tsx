import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import ProductItem from '../../components/ProductItem';

const HomeScreen = ({ filteredDataSource }: { filteredDataSource: string }) => {



    return (
        <View style={styles.page}>
            {filteredDataSource && (
                <FlatList
                    data={filteredDataSource}
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
        paddingHorizontal: 10,
    }
});
export default HomeScreen;