import React, { useState, useEffect } from 'react';
import {  Image, Text, View, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector';
import { useRoute } from '@react-navigation/native';
import styles from './styles';

interface CartProductItemProps {
  cartItem: {
    id: string,

    option?: string,
    data: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
      quantity: number,
    }
  }
};

const CartProductItem = ({ cartItem }: CartProductItemProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const route = useRoute()
  const { data } = cartItem;
  const [quantity, setQuantity] = useState(0);

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: data?.image }} />
        <View style={styles.rightContainer}>
          <Text style={[styles.title,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]} numberOfLines={3}>
            {data?.title}
          </Text>

          {/* Ratings */}

          <View style={styles.ratingsContainer}>
            {[0, 0, 0, 0, 0].map((el, i) => (
              <FontAwesome
                key={`${data?.id}-${i}`}
                style={styles.star}
                name={i < Math.floor(data?.avgRating) ? 'star' : 'star-o'}
                size={18}
                color={'#e47911'}
              />
            ))}
            <Text>{data?.ratings}</Text>
          </View>
          <Text style={[
            styles.price,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
            from Rs. {data?.price}
            {data?.oldPrice && (
              <Text style={styles.oldPrice}> ${data?.oldPrice}</Text>
            )}
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelector
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </View>
    </View>
  )
}

export default CartProductItem;