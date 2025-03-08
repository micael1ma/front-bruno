import React from 'react'
import { Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'


const login = () => {
  return (
    <View style={styles.container}>
        <TextInput secureTextEntry/>
        <TouchableOpacity><Text>Enviar</Text></TouchableOpacity>
    </View>
  )
} 

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default login