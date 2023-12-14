import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const handleUpdate = async (newEmail, newPassword, navigation) => {
    try{
        const user = auth().currentUser;
        if(newEmail !== ''){
            await user.updateEmail(newEmail);
        }else{
            Alert.alert('Rellena el campo Correo');
        }
        if(newPassword !== ''){
            await user.updatePassword(newPassword);
        }else{
            Alert.alert('Rellena los campos Password');
        }

        Alert.alert('Usuario actualizado exitosamente');
        navigation.navigate('User');
    }catch(error){
        console.error('Error al actualizar el usuario', error);
        Alert.alert('Error al actualizar el usuario');
    }
};

export default handleUpdate;