import auth from '@react-native-firebase/auth';
import FirebaseService from '../database/FirebaseService';
import { Alert } from 'react-native';

const handleRegister = async (email, password, navigation) => {
    try{
        const userCredential = await auth().createUserWithEmailAndPassword(email, password);
        if (userCredential.user){
            await userCredential.user.sendEmailVerification();
            const firebaseService = new FirebaseService();
            await firebaseService.addUser(email, password);
            Alert.alert('Registro exitoso');
            navigation.navigate('Login');
        }
    }catch(error){
        console.error('Error en el registro', error);
        Alert.alert('Error en el registro');
    }
};

export default handleRegister;