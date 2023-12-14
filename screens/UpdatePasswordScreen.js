import React, {useState} from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import handleUpdatePassword from '../services/Update/HandleUpdatePassword';
import { useColorSchemeContext } from '../colorSchemeContext';

function UpdatePasswordScreen({navigation}){
    const [newPassword, setNewPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const {globalStyles} = useColorSchemeContext();

    const onPressUpdatePassword = () => {
        handleUpdatePassword(newPassword, navigation);
    }

    return(
        <View style={globalStyles.background}>
            <Text style={[globalStyles.text, {alignSelf:'center', fontSize:25}]}>Actualizar Contraseña</Text>
            <Text style={globalStyles.text}>Introduce tu contraseña:</Text>
            <View style={[globalStyles.placeholderTextColor, {flexDirection: 'row', alignItems:'center'}]}>
                <TextInput secureTextEntry={!showPassword} style={{flex: 1}}/>
                <Button title={showPassword ? 'Ocultar' : 'Mostrar'} onPress={() => setShowPassword(!showPassword)}>
                    <Text style={globalStyles.text}>{showPassword ? 'Ocultar' : 'Mostrar'}</Text>
                </Button>
            </View>
            <Text style={globalStyles.text}>Introduce tu nueva contraseña:</Text>
            <View style={[globalStyles.placeholderTextColor, {flexDirection: 'row', alignItems:'center'}]}>
                <TextInput onChangeText={setNewPassword} value={newPassword} secureTextEntry={!showPassword} style={{flex: 1}}/>
                <Button title={showPassword ? 'Ocultar' : 'Mostrar'} onPress={() => setShowPassword(!showPassword)}>
                    <Text style={globalStyles.text}>{showPassword ? 'Ocultar' : 'Mostrar'}</Text>
                </Button>
            </View>
            <Button title='Actualizar contraseña' onPress={onPressUpdatePassword} style={globalStyles.button}>
                <Text style={globalStyles.text}>Actualizar contraseña</Text>
            </Button>
        </View>
    );
};

export default UpdatePasswordScreen;