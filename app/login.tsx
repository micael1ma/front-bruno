import React from 'react';
import api from "../services/api"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = React.useState({ value: '', dirty: false });
  const [password, setPassword] = React.useState({ value: '', dirty: false });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleLogin = async () => {
    const credentials = {
      email: email.value,
      password: password.value
    };
  
    try {
      const response = await api.post('/api/login', credentials);
      alert(response.data);
      router.replace('/(tabs)/home');
      
     
    } catch (error) {
      alert('Email ou senha incorretos.');
    }
  };
  
  
  

  const handleErrorEmail = () => {
    if (!email.value && email.dirty) {
      return <Text style={styles.error}>Required field</Text>;
    } else if (!emailRegex.test(email.value) && email.dirty) {
      return <Text style={styles.error}>Invalid E-mail</Text>;
    }
    return null;
  };

  const handleErrorPassword = () => {
    if (!password.value && password.dirty) {
      return <Text style={styles.error}>Required field</Text>;
    }
    return null;
  };

  const handleErrorForm = () => {
    let hasError = false;

    if (!emailRegex.test(email.value) || !email.value) {
      setEmail({ value: email.value, dirty: true });
      hasError = true;
    }

    if (!password.value) {
      setPassword({ value: password.value, dirty: true });
      hasError = true;
    }

    if (!hasError) {
      router.replace('/(tabs)/home');
    }
  };

  return (
    <LinearGradient colors={['#591e03', '#d70b26', '#a83204']} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="account-circle" size={100} color="#f7f7f7" />
        </View>

        <TextInput
          onChangeText={(text) => setEmail({ value: text, dirty: true })}
          style={styles.input}
          placeholder="E-mail"
        />
        {handleErrorEmail()}

        <TextInput
          onChangeText={(text) => setPassword({ value: text, dirty: true })}
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        {handleErrorPassword()}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.replace('/welcome')}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#f7f7f7',
    padding: 10,
    borderRadius: 10,
    width: 175,
    marginTop: 8,
  },
  button: {
    backgroundColor: '#f7f7f7',
    padding: 10,
    borderRadius: 10,
    width: 175,
    marginTop: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
  },
  error: {
    color: '#f7f7f7',
    padding: 5,
  },
});

export default Login;