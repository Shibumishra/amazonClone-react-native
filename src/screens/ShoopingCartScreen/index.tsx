import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import CartProductItem from '../../components/CartProductItem';
import cart from '../../data/cart';
import Button from '../../components/Button';
import { AddToCartProduct } from '../../services';
import firestore from '@react-native-firebase/firestore';

const ShoopingCartScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const totalPrice = cart.reduce((summedPrice, product) => (
        summedPrice + product.item.price * product.quantity
    ), 0);

    const onCheckout = () => {
        navigation.navigate('Address');
    }


    useEffect(() => {
        AddToCartProduct.getProduct()
            .then(prod => {
                setProducts(prod)
                setLoading(false)
            })
            .catch(err => Alert.alert(err.code, err.message))
    }, []);


    if (loading) {
        return <ActivityIndicator />;
    }

    return (
        <View style={styles.page}>
            <FlatList
                data={products}
                renderItem={({ item }) => <CartProductItem cartItem={item} />}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <View>
                        <Text style={{ fontSize: 18 }}>Subtotal: ({products.length} item):
                            {' '}
                            <Text style={{ color: '#e47911', fontWeight: 'bold' }}>${totalPrice.toFixed(2)}</Text>
                        </Text>
                        <Button
                            text="Proceed to checkout"
                            onPress={onCheckout}
                            containerStyles={{
                                backgroundColor: '#f7e300',
                                borderColor: '#c7b702',
                            }}
                        />
                    </View>
                )}
            />
        </View>


    )
};

const styles = StyleSheet.create({
    page: {
        padding: 10,
    }
});

export default ShoopingCartScreen;