import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const handleDelete = async(navigation) => {
    try{
        const user = auth().currentUser;
        await user.delete();
        Alert.alert('Usuario eliminado exitosamente');
        navigation.navigate('Login');
    }catch(error){
        console.error('Error al eliminar el usuario', error);
        Alert.alert('Error al eliminar el usuario');
    }
};

export default handleDelete;