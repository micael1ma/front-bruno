import React from 'react';
import { Text, View, Button, Image, StyleSheet, ScrollView } from 'react-native';
import { useCart } from '../context/CartContext';
import { useEffect, useState } from 'react';
import api from "../../services/api"

const Home = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/api/pizza');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {products.map((product) => (
        <View key={product._id} style={styles.productContainer}>
          <Image source={require('../../assets/images/pizza-home.png')} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>$: {product.price}</Text>
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
