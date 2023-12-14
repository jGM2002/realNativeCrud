import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import handleRegister from '../services/HandleRegister';
import { useColorSchemeContext } from '../colorSchemeContext';
import Icon from 'react-native-vector-icons/Ionicons';

function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const {globalStyles} = useColorSchemeContext();

  const onPressRegister = () => {
    if (!email || !password) {
      Alert.alert('Rellene los campos');
      return;
    }
    handleRegister(email, password, navigation);
  };

  return (
    <View style={globalStyles.background}>
      <Icon name='person-circle' style={globalStyles.icon}/>
      <Text style={globalStyles.text}>Correo electrónico:</Text>
      <TextInput onChangeText={setEmail} value={email} style={globalStyles.placeholderTextColor}/>
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
      <Button title="Registrarse" onPress={onPressRegister} style={globalStyles.button}>
        <Text style={globalStyles.text}>Registrarse</Text>
      </Button>
    </View>
  );
};

export default RegisterScreen;