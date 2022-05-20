import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  title: {},
  description: {
    marginVertical: 10,
    lineHeight: 20,
  },
});

export default styles;