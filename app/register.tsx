import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Register = () => {
  const router = useRouter();

  const [fullName, setFullName] = React.useState({ value: '', dirty: false });
  const fullNameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,}(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]{2,})+$/;

  const [email, setEmail] = React.useState({ value: '', dirty: false });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [cpf, setCPF] = React.useState({ value: '', dirty: false });
  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

  const [password, setPassword] = React.useState({ value: '', dirty: false });
  const [passwordConfirm, setPasswordConfirm] = React.useState({ value: '', dirty: false });

  const handleErrorFullName = () => {
    if (!fullName.value && fullName.dirty) {
      return <Text style={styles.error}>Required field</Text>;
    } else if (!fullNameRegex.test(fullName.value) && fullName.dirty) {
      return <Text style={styles.error}>Invalid Name</Text>;
    } else {
      return <Text></Text>;
    }
  };

  const handleErrorEmail = () => {
    if (!email.value && email.dirty) {
      return <Text style={styles.error}>Required field</Text>;
    } else if (!emailRegex.test(email.value) && email.dirty) {
      return <Text style={styles.error}>Invalid E-mail</Text>;
    } else {
      return <Text></Text>;
    }
  };

  const handleErrorCPF = () => {
    if (!cpf.value && cpf.dirty) {
      return <Text style={styles.error}>Required field</Text>;
    } else if (!cpfRegex.test(cpf.value) && cpf.dirty) {
      return <Text style={styles.error}>Invalid CPF</Text>;
    } else {
      return <Text></Text>;
    }
  };

  const handleErrorPassword = () => {
    if (!password.value && password.dirty) {
      return <Text style={styles.error}>Required field</Text>;
    } else if (password.value.length < 6 && password.dirty) {
      return <Text style={styles.error}>Password too short</Text>;
    } else {
      return <Text></Text>;
    }
  };

  const handleErrorPasswordConfirm = () => {
    if (!passwordConfirm.value && passwordConfirm.dirty) {
      return <Text style={styles.error}>Required field</Text>;
    } else if (password.value !== passwordConfirm.value && passwordConfirm.dirty) {
      return <Text style={styles.error}>Passwords do not match</Text>;
    } else {
      return <Text></Text>;
    }
  };

  const handleErrorForm = () => {
    let hasError = false;

    if (!fullNameRegex.test(fullName.value)) {
      setFullName({ value: fullName.value, dirty: true });
      hasError = true;
    }
    if (!fullName.value) {
      setFullName({ value: fullName.value, dirty: true });
      hasError = true;
    }
    if (!cpfRegex.test(cpf.value)) {
      setCPF({ value: cpf.value, dirty: true });
      hasError = true;
    }
    if (!cpf.value) {
      setCPF({ value: cpf.value, dirty: true });
      hasError = true;
    }
    if (!emailRegex.test(email.value)) {
      setEmail({ value: email.value, dirty: true });
      hasError = true;
    }
    if (!email.value) {
      setEmail({ value: email.value, dirty: true });
      hasError = true;
    }
    if (!password.value || password.value.length < 6) {
      setPassword({ value: password.value, dirty: true });
      hasError = true;
    }
    if (!passwordConfirm.value || password.value !== passwordConfirm.value) {
      setPasswordConfirm({ value: passwordConfirm.value, dirty: true });
      hasError = true;
    }

    if (!hasError) {
      router.replace('/(tabs)/home');
    }
  };

  return (
    <LinearGradient colors={['#591e03', '#d70b26', '#a83204']} style={styles.container}>
      <View>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="account-circle" size={100} color="#f7f7f7" />
        </View>

        <TextInput
          onChangeText={(text) => setFullName({ value: text, dirty: true })}
          style={[styles.input, { marginTop: 24 }]}
          placeholder="Full Name"
        />
        {handleErrorFullName()}

        <TextInput
          onChangeText={(text) => setEmail({ value: text, dirty: true })}
          style={[styles.input, { marginTop: 8 }]}
          placeholder="E-mail"
        />
        {handleErrorEmail()}

        <TextInput
          onChangeText={(text) => setCPF({ value: text, dirty: true })}
          style={[styles.input, { marginTop: 8 }]}
          placeholder="CPF"
        />
        {handleErrorCPF()}

        <TextInput
          onChangeText={(text) => setPassword({ value: text, dirty: true })}
          style={[styles.input, { marginTop: 8 }]}
          placeholder="Password"
          secureTextEntry
        />
        {handleErrorPassword()}

        <TextInput
          onChangeText={(text) => setPasswordConfirm({ value: text, dirty: true })}
          style={[styles.input, { marginTop: 8 }]}
          placeholder="Confirm Password"
          secureTextEntry
        />
        {handleErrorPasswordConfirm()}

        <TouchableOpacity style={[styles.button, { marginTop: 16 }]} onPress={handleErrorForm}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { marginTop: 8 }]} onPress={() => router.replace('/welcome')}>
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
  iconContainer: {
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#f7f7f7',
    padding: 10,
    borderRadius: 10,
    width: 175,
  },
  button: {
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
  error: {
    color: '#f7f7f7',
    padding: 5,
  },
});

export default Register;