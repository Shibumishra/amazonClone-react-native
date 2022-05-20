import React, { useState } from 'react';
import { Alert, ScrollView, Text, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
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
    const isDarkMode = useColorScheme() === 'dark';
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
        <ScrollView alwaysBounceVertical={true} style={styles.root}>
            <Text style={[styles.title,
            {
                color: isDarkMode ? Colors.white : Colors.black,
            },
            ]}>{title}</Text>

            {/* Image Carousel */}
            <ImageCarousel images={images} />

            {/* Option Selector */}
            <Text style={{ color: isDarkMode ? Colors.white : Colors.black }}>Colour:</Text>
            <Picker
                selectedValue={selectedOption}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedOption(itemValue)
                }
                style={{ color: isDarkMode ? Colors.white : Colors.black }}
                dropdownIconColor={isDarkMode ? Colors.white : Colors.black}
            >
                {data?.options?.map(options => (
                    <Picker.Item key={options} label={options} value={options} />
                ))}
            </Picker>

            {/* Price */}
            <Text style={[styles.price,
            {
                color: isDarkMode ? Colors.white : Colors.black,
            },
            ]}>
                from Rs. {price.toFixed(2)}
                {oldPrice && (
                    <Text style={styles.oldPrice}> ${oldPrice.toFixed(2)}</Text>
                )}
            </Text>

            {/* Description */}
            <Text style={[styles.description,
            {
                color: isDarkMode ? Colors.white : Colors.black,
            },
            ]}>{description}</Text>

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