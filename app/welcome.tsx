import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { useRouter } from 'expo-router'

const welcome = () => {
  const router = useRouter()

  return (
    <LinearGradient colors={['#591e03', '#d70b26', '#a83204']}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      
      <View style={styles.formContainer}>
      

        <View style={{alignItems: 'center'}}>
          <Image 
              source={require('../assets/images/pizza.png')}
              style={styles.image}
            />
          <Text style={{fontSize: 32, color:"#f7f7f7"}}>IA Sabores</Text>
        </View>
        
        <TouchableOpacity style={[styles.registerButton, {marginTop: 32}]} onPress={() => {router.replace('/login')}}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.registerButton, {marginTop: 8}]} onPress={() => {router.replace('/register')}}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop: 10}} onPress={() => {router.replace('/(tabs)/home')}}>
          <Text style={{color:"#f7f7f7"}}>Fast Login</Text>
        </TouchableOpacity>

      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  registerButton: {
    backgroundColor: '#f7f7f7',
    padding: 10,
    borderRadius: 10,
    width: 175,
    },

  buttonText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 16,
  },
  image: {
    width: 150, 
    height: 150, 
  },
})
export default welcome