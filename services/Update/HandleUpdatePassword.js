import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

const handleUpdatePassword = async (newPassword, navigation) => {
    try{
        const user = auth().currentUser;
        if(newPassword !== ''){
            await user.updatePassword(newPassword);
            Alert.alert('Contraseña actualizada exitosamente');
            navigation.navigate('User');
        }else{
            throw new Error('Rellena el campo Contraseña');
        }
    }catch(error){
        console.error('Error al actualizar la contrasela', error);
        Alert.alert('Error al actualizar la contraseña: '+error.message);
    }
};

export default handleUpdatePassword;