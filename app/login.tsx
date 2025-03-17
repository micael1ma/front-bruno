import React from 'react'
import { Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { router, useRouter } from 'expo-router'


const login = () => {
  const router = useRouter()

  const [email, setEmail] = React.useState({value: '', dirty: false})
  const emailRegex = /^[^\s@]+@+[^\s@]+\.[^\s@]+$/;
  const handleErrorEmail = () => {
    if(!email.value && email.dirty){
      return (<Text style={styles.error}>Required field</Text>)
    }else if(!emailRegex.test(email.value) && email.dirty){
      return (<Text style={styles.error}>Invalid E-mail</Text>)
    }else{
      return (<Text></Text>)
    }
  }

  const [password, setPassword] = React.useState({value: '', dirty: false})
  const handleErrorPassword = () => {
    if(!password.value && password.dirty){
      return (<Text style={styles.error}>Required field</Text>)
    }else{
      return (<Text></Text>)
    }
  }

  const handleErrorForm = () => {
    let hasError = false
    if(!emailRegex.test(email.value)){
      setEmail({value: email.value, dirty: true})
      hasError = true
    }
    if(!email.value){
      setEmail({value: email.value, dirty: true})
      hasError = true
    }
    if(!password.value){
      setPassword({value: password.value, dirty: true})
      hasError = true
    }
    if(!hasError){
      router.replace('/(tabs)/home')
    }
  }
  
  return (
    <LinearGradient colors={['#591e03', '#d70b26', '#a83204']}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      
      <View>

        <View style={{alignItems: 'center'}}>
            <MaterialCommunityIcons name="account-circle" size={100} color="#f7f7f7" />
        </View>

        <TextInput onChangeText={(text) => setEmail({value: text, dirty: true})} style={[styles.registerButton, {marginTop: 24}]} placeholder='E-mail'/>
        {handleErrorEmail()}
        <TextInput onChangeText={(text) => setPassword({value: text, dirty: true})} style={[styles.registerButton, {marginTop: 8}]}placeholder='Password' secureTextEntry/>
        {handleErrorPassword()}
        <TouchableOpacity style={[styles.registerButton, {marginTop: 16}]} onPress={() => {handleErrorForm()}}>
        <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.registerButton, {marginTop: 8}]} onPress={() => {router.replace('/welcome')}}>
        <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
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
  error:{
    color: '#f7f7f7',
    padding: 5,
  }
})
export default login