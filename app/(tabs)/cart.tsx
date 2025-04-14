import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useCart } from '../context/CartContext';
import { AntDesign } from '@expo/vector-icons'; // Importando ícones

const Cart = () => {
  const { cart, removeFromCart, addToCart } = useCart();

  return (
    <ScrollView style={styles.container}>
      {cart.length === 0 ? (
        <Text style={styles.emptyCartText}>Carrinho vazio</Text>
      ) : (
        cart.map((item) => { 
          const totalPrice = item.price * item.quantity; // Calculando preço total

          return (
            <View key={item._id} style={styles.productContainer}>
              <Image source={require('../../assets/images/pizza-home.png')} style={styles.image} />
              <View style={styles.infoContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={[styles.price, { color: "gray", marginTop: 8 }]}>Unit price: ${item.price}</Text>
                <View style={styles.bottomContainer}>
                  <Text style={styles.price}>Total: $ {totalPrice.toFixed(2)}</Text>
                  <View style={styles.quantityContainer}>
                    <Pressable onPress={() => removeFromCart(item._id)} style={styles.iconButton}>
                      <AntDesign name="minus" size={18} color="black" />
                    </Pressable>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <Pressable onPress={() => addToCart(item)} style={styles.iconButton}>
                      <AntDesign name="plus" size={18} color="black" />
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          );
        })
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  emptyCartText: { textAlign: 'center', fontSize: 18, marginTop: 20 },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
  },
  image: { resizeMode: 'contain', width: 100, height: 100, marginRight: 10 },
  infoContainer: { flex: 1 },
  name: { fontSize: 18, fontWeight: 'bold' },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Alinha preço e quantidade horizontalmente
    alignItems: 'center',
    marginTop: 10,
  },
  price: { fontSize: 16, color: 'green' },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  iconButton: { padding: 5 },
  quantity: { fontSize: 16, fontWeight: 'bold', marginHorizontal: 10 },
});

export default Cart;
