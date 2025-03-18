import React from 'react';
import { ScrollView, View, Text, Image, Button, StyleSheet } from 'react-native';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <ScrollView style={styles.container}>
      {cart.length === 0 ? (
        <Text>Carrinho vazio</Text>
      ) : (
        cart.map((item) => (
          <View key={item.id} style={styles.productContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <Text>Quantidade: {item.quantity}</Text>
              <Button title="Remover 1" onPress={() => removeFromCart(item.id)} />
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  productContainer: { flexDirection: 'row', alignItems: 'center', padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginBottom: 10 },
  image: { resizeMode: 'contain', width: 100, height: 100, marginRight: 10 },
  infoContainer: { flex: 1 },
  name: { fontSize: 18, fontWeight: 'bold' },
  price: { fontSize: 16, color: 'green', marginVertical: 5 },
  description: { fontSize: 14, color: '#555', marginBottom: 10 },
});

export default Cart;
