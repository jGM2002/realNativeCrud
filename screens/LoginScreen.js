import React, { useState } from 'react';
import { Text, TextInput, Button, View, TouchableOpacity, Alert } from 'react-native';
import handleLogin from '../services/HandleLogin';
import { useColorSchemeContext } from '../colorSchemeContext';
import Icon from 'react-native-vector-icons/Ionicons';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const {globalStyles} = useColorSchemeContext();

  const onPressLogin = () => {
    if (!email || !password) {
      Alert.alert('Rellene los campos');
      return;
    }
    handleLogin(email, password, navigation);
  }

  return (
    <View style={globalStyles.background}>
      <Icon name='person-circle' style={globalStyles.icon}/>
      <Text style={globalStyles.text}>Correo electrónico:</Text>
      <TextInput style={globalStyles.placeholderTextColor} onChangeText={setEmail} value={email} />
      <Text style={globalStyles.text}>Contraseña:</Text>
      <View style={[globalStyles.placeholderTextColor, {flexDirection: 'row', alignItems: 'center'}]}>
        <TextInput onChangeText={setPassword} value={password} secureTextEntry={!showPassword} style={{flex: 1}}/>
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <Icon name="eye" size={20}/>
          ) : (
            <Icon name='eye-off' size={20}/>
          )}
        </TouchableOpacity>
      </View>
      <Button title='Iniciar sesión' onPress={onPressLogin} style={globalStyles.button}>
        <Text style={globalStyles.text}>Iniciar sesión</Text>
      </Button>
      <Text onPress={() => navigation.navigate('Register')} style={globalStyles.linkText}>
        Crear una nueva cuenta
      </Text>
    </View>
  );
};

export default LoginScreen;