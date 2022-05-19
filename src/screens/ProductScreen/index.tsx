import React, { useState } from 'react';
import { Alert, ScrollView, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import styles from './styles';
import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import { AddToCartProduct } from '../../services';

interface ProductItemProps {
    item: {
        id: string;
        title: string;
        image: string;
        avgRating: number;
        ratings: number;
        price: number;
        oldPrice?: number;
    }
};

const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined,);
    const [quantity, setQuantity] = useState(1);

    const route = useRoute();
    const navigation = useNavigation();
    const data = route.params

    const { title } = route?.params
    const { images } = route?.params
    const { price } = route?.params
    const { oldPrice } = route?.params
    const { description } = route?.params

    const addToCart = async () => {
        navigation.navigate('ShoopingCart');

        await AddToCartProduct.addProduct({ ...data })
            .then(() => {
                Alert.alert('Success', 'Product added')
            }
            )
            .catch(
                err => Alert.alert(err.code, err.message))

    }

    return (
        <ScrollView style={styles.root}>
            <Text style={styles.title}>{title}</Text>

            {/* Image Carousel */}
            <ImageCarousel images={images} />

            {/* Option Selector */}
            <Text>Colour:</Text>
            <Picker
                selectedValue={selectedOption}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedOption(itemValue)
                }
            >
                {data.options.map(options => (
                    <Picker.Item label={options} value={options} />
                ))}
            </Picker>

            {/* Price */}
            <Text style={styles.price}>
                from Rs. {price.toFixed(2)}
                {oldPrice && (
                    <Text style={styles.oldPrice}> ${oldPrice.toFixed(2)}</Text>
                )}
            </Text>

            {/* Description */}
            <Text style={styles.description}>{description}</Text>

            {/* Qunatiti Selector */}
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />


            {/* Button */}
            <Button
                text="Buy Now"
                onPress={() => { console.log("Buy Now") }}
                containerStyles={{ backgroundColor: '#e38914', }}
            />
            <Button
                text="Add To Cart"
                onPress={addToCart}
                containerStyles={{ backgroundColor: '#f2e03a', }}
            />

        </ScrollView>
    )
}


export default ProductScreen;