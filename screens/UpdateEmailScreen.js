import React, {useState} from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import handleUpdateEmail from '../services/Update/HandleUpdateEmail';
import { useColorSchemeContext } from '../colorSchemeContext';

function UpdateEmailScreen({navigation}){
    const [newEmail, setNewEmail] = useState('');
    const {globalStyles} = useColorSchemeContext();

    const onPressUpdateEmail = () => {
        handleUpdateEmail(newEmail, navigation);
    }

    return (
        <View style={globalStyles.background}>
            <Text style={[globalStyles.text, {alignSelf:'center', fontSize:25}]}>Actualizar Correo Electrónico</Text>
            <Text style={globalStyles.text}>Introduce tu correo electrónico:</Text>
            <TextInput style={globalStyles.placeholderTextColor}/>
            <Text style={globalStyles.text}>Introduce tu nuevo correo electrónico:</Text>
            <TextInput style={globalStyles.placeholderTextColor} onChangeText={setNewEmail} value={newEmail}/>
            <Button title='Actualizar correo' onPress={onPressUpdateEmail} style={alignItems='center'}/>
        </View>
    );
};

export default UpdateEmailScreen;