import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const welcome = () => {
  return (
    <LinearGradient 
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
    <View style={styles.formContainer}>
      <View style={{alignItems: 'center'}}>
        <AntDesign name="bank" size={100} color="#f7f7f7" />
        <Text style={{fontSize: 32, color:"#f7f7f7"}}>Ecommerce IA</Text>
        <Text style={{fontSize: 18, color:"#f7f7f7"}}>Seja be vindo!</Text>
      </View>
      <TouchableOpacity style={{marginTop: 32, backgroundColor: '#f7f7f7', padding: 10 , borderRadius: 5}}>
        <Text style={{color: '#3b5998'}}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{marginTop: 8, backgroundColor: '#f7f7f7', padding: 10, borderRadius: 5}}>
        <Text style={{color: '#3b5998'}}>Sing in</Text>
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
})
export default welcome