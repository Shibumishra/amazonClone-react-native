import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';
import styles from './styles';
import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined,);
    const [quantity, setQuantity] = useState(1);

    const route = useRoute();


    return (
        <ScrollView style={styles.root}>
            <Text style={styles.title}>{route?.params?.title}</Text>

            {/* Image Carousel */}
            <ImageCarousel images={route?.params?.images} />

            {/* Option Selector */}
            <Text>Colour:</Text>
            <Picker
                selectedValue={selectedOption}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedOption(itemValue)
                }
            >
                {route?.params?.options.map(options => (
                    <Picker.Item label={options} value={options} />
                ))}
            </Picker>

            {/* Price */}
            <Text style={styles.price}>
                from ${route?.params?.price.toFixed(2)}
                {route?.params?.oldPrice && (
                    <Text style={styles.oldPrice}> ${route?.params?.oldPrice.toFixed(2)}</Text>
                )}
            </Text>

            {/* Description */}
            <Text style={styles.description}>{route?.params?.description}</Text>

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
                onPress={() => { console.log("Add TO Cart") }}
                containerStyles={{ backgroundColor: '#f2e03a', }}
            />

        </ScrollView>
    )
}


export default ProductScreen;