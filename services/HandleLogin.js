import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

const handleLogin = async(email, password, navigation) => {
    try{
        await auth().signInWithEmailAndPassword(email, password);
        Alert.alert('Inicio de sesión correcto');
        navigation.navigate('Home');
    }catch(error){
        console.error('Error en el inicio de sesión', error);
        Alert.alert('Credenciales incorrectas o error en el inicio de sesión');
    }
};

export default handleLogin;