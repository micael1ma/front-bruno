import React from 'react'
import { Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { router } from 'expo-router'


const register = () => {
  return (
    <LinearGradient colors={['#591e03', '#d70b26', '#a83204']}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      
      <View style={styles.formContainer}>

        <View style={{alignItems: 'center'}}>
            <MaterialCommunityIcons name="account-circle" size={100} color="#f7f7f7" />
        </View>

        <TextInput style={[styles.registerButton, {marginTop: 24}]} placeholder='Full Name'/>
        <TextInput style={[styles.registerButton, {marginTop: 8}]} placeholder='E-mail'/>
        <TextInput style={[styles.registerButton, {marginTop: 8}]}placeholder='Password' secureTextEntry/>
        <TextInput style={[styles.registerButton, {marginTop: 8}]}placeholder='Confirm Password' secureTextEntry/>

        <TouchableOpacity style={[styles.registerButton, {marginTop: 24}]} onPress={() => {router.replace('/login')}}>
        <Text style={styles.buttonText}>Sign in</Text>
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
})
export default register