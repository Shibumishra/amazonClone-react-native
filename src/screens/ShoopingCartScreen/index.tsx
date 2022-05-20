import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text, Alert, ActivityIndicator, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import CartProductItem from '../../components/CartProductItem';
import cart from '../../data/cart';
import Button from '../../components/Button';
import { AddToCartProduct } from '../../services';
import firestore from '@react-native-firebase/firestore';



const ShoopingCartScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const navigation = useNavigation();
    const route = useRoute();
    const [products, setProducts] = useState([]);
    const [productId, setProductId] = useState(null);
    const [loading, setLoading] = useState(true);


    const loadData = async () => {
        await AddToCartProduct.getProduct()
            .then(prod => {
                setProducts(prod)
                setLoading(false)

                prod.forEach(snpa => {
                    setProductId(snpa.id);
                });
            })
            .catch(err => Alert.alert(err.code, err.message))

    }
    useEffect(() => {
        loadData()
    }, [])

    const totalPrice = products && products.reduce((acc, item) => acc + item?.data?.price, 0);


    const onCheckout = () => {
        navigation.navigate('Address',
            {
                productId: productId,
                totalPrice: totalPrice,
                products: products,
            });
    }


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
                        <Text style={{color: isDarkMode ? Colors.white : Colors.black, fontSize: 18}}>Subtotal: ({products.length} item):
                            {' '}
                            <Text style={{ color: '#e47911', fontWeight: 'bold' }}>Rs. {totalPrice?.toFixed(2)}</Text>
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
        paddingHorizontal: 10,
    }
});

export default ShoopingCartScreen;