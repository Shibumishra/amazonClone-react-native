import React from 'react';
import { StyleSheet, View, FlatList, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CartProductItem from '../../components/CartProductItem';
import cart from '../../data/cart';
import Button from '../../components/Button';

const ShoopingCartScreen = () => {
    const navigation = useNavigation();

    const totalPrice = cart.reduce((summedPrice, product) => (
        summedPrice + product.item.price * product.quantity
    ), 0);

    const onCheckout = () => {
        navigation.navigate('Address');
    }

    return (
        <View style={styles.page}>
            <FlatList
                data={cart}
                renderItem={({ item }) => <CartProductItem cartItem={item} />}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <View>
                        <Text style={{ fontSize: 18 }}>Subtotal: ({cart.length} item):
                            {' '}
                            <Text style={{ color: '#e47911', fontWeight: 'bold' }}>${totalPrice.toFixed(2)}</Text>
                        </Text>
                        <Button
                            text="Proceed to checkout"
                            onPress={onCheckout}
                            containerStyles={{ backgroundColor: '#e3b009', }}
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