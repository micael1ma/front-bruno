import React from 'react';
import { Text, View, Button, Image, StyleSheet, ScrollView } from 'react-native';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'Pepperoni Pizza',
    price: '$ 20,00',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageUrl: require('../../assets/images/pizza-home.png'),
  },
  {
    id: 2,
    name: 'Margarita Pizza',
    price: '$ 15,00',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageUrl: require('../../assets/images/pizza-home.png'),
  },
  {
    id: 3,
    name: 'Vegetarian Pizza',
    price: '$ 18,00',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageUrl: require('../../assets/images/pizza-home.png'),
  },
  {
    id: 4,
    name: 'Vegan Pizza',
    price: '$ 22,00',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageUrl: require('../../assets/images/pizza-home.png'),
  },
  {
    id: 5,
    name: 'Cheese Pizza',
    price: '$ 12,00',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageUrl: require('../../assets/images/pizza-home.png'),
  },
  {
    id: 6,
    name: 'Hawaiian Pizza',
    price: '$ 25,00',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    imageUrl: require('../../assets/images/pizza-home.png'),
  },
];

const Home = () => {
  const { addToCart } = useCart();

  return (
    <ScrollView style={styles.container}>
      {products.map((product) => (
        <View key={product.id} style={styles.productContainer}>
          <Image source={product.imageUrl} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{product.price}</Text>
              <Button title="Add to Cart" onPress={() => addToCart(product)} />
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
  },
  image: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginRight: 10,
  },
});

export default Home;
