import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons'
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
          <AntDesign name="yuque" size={100} color="#f7f7f7" />
          <Text style={{fontSize: 32, color:"#f7f7f7"}}>IA Sabores</Text>
        </View>
        
        <TouchableOpacity style={[styles.registerButton, {marginTop: 32}]} onPress={() => {router.replace('/login')}}>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.registerButton, {marginTop: 8}]} onPress={() => {router.replace('/register')}}>
          <Text>Sign in</Text>
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
    borderRadius: 15,
    width: 175,},
})
export default welcome