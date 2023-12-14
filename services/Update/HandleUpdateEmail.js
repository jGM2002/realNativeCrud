import { Alert } from "react-native";
import auth from '@react-native-firebase/auth';

const handleUpdateEmail = async (newEmail, navigation) => {
    try{
        const user = auth().currentUser;
        if(newEmail !== ''){
            await user.updateEmail(newEmail);
            Alert.alert('Correo actualizado exitosamente');
            navigation.navigate('User');
        }else{
            throw new Error('Rellena el campo Correo');
        }
    }catch(error){
        console.error('Error al actualizar el correo electrónico', error);
        Alert.alert('Error al actualizar el correo electrónico: '+ error.message);
    }
};

export default handleUpdateEmail;