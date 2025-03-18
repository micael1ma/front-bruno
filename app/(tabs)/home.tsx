import React from 'react';
import { Text, View, Button, Image, StyleSheet, ScrollView } from 'react-native';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'Produto 1',
    price: 'R$ 100,00',
    description: 'Descrição breve do Produto 1',
    imageUrl: 'https://example.com/product2.jpg',
  },
  {
    id: 2,
    name: 'Produto 2',
    price: 'R$ 150,00',
    description: 'Descrição breve do Produto 2',
    imageUrl: 'https://example.com/product2.jpg',
  },
  {
    id: 3,
    name: 'Produto 3',
    price: 'R$ 200,00',
    description: 'Descrição breve do Produto 3',
    imageUrl: 'https://example.com/product3.jpg',
  },
  {
    id: 4,
    name: 'Produto 4',
    price: 'R$ 200,00',
    description: 'Descrição breve do Produto 4',
    imageUrl: 'https://example.com/product3.jpg',
  },
  {
    id: 5,
    name: 'Produto 5',
    price: 'R$ 200,00',
    description: 'Descrição breve do Produto 5',
    imageUrl: 'https://example.com/product3.jpg',
  },
  {
    id: 6,
    name: 'Produto 6',
    price: 'R$ 200,00',
    description: 'Descrição breve do Produto 6',
    imageUrl: 'https://example.com/product3.jpg',
  },
];

const Home = () => {
  const { addToCart } = useCart();

  return (
    <ScrollView style={styles.container}>
      {products.map((product) => (
        <View key={product.id} style={styles.productContainer}>
          <Image source={{ uri: product.imageUrl }} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Button title="Comprar" onPress={() => addToCart(product)} />
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
  price: {
    fontSize: 16,
    color: 'green',
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
});

export default Home;
