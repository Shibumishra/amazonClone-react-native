import React from 'react';
import { Image, Pressable, Text, View, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

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

const ProductItem = ({ item }: ProductItemProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();

  const onPress = () => {
    console.log("Items press")
    navigation.navigate('ProductDetails', item);
  }

  return (
    <Pressable
      onPress={onPress}
      style={styles.root}>
      <Image source={{ uri: item.image }} style={styles.images} />
      <View style={styles.rightContainer}>
        <Text style={[
          styles.title,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]} numberOfLines={3}>{item.title}</Text>
        {/* Ratings */}
        <View style={styles.ratingsContainer}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <FontAwesome
              key={`${item.id}-${i}`}
              style={styles.star}
              name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
              size={18}
              color={'#e47911'}
            />
          ))}
          <Text>{item.ratings}</Text>
        </View>
        <Text style={[
          styles.price,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
          from ${item.price.toFixed(2)}
          {item.oldPrice && (
            <Text style={styles.oldPrice}> ${item.oldPrice.toFixed(2)}</Text>
          )}
        </Text>
      </View>
    </Pressable>
  )
}

export default ProductItem;