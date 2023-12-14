import firestore from '@react-native-firebase/firestore';

class FirebaseService {
    _firestore = firestore();

    async addUser(correo, password){
        try{
            await this._firestore.collection('Usuarios').doc(correo).set({
                'Correo': correo,
                'Password': password,
            });
            console.log('Usuario agregado correctamente.');
        }catch(error){
            console.error('Error al agregar usuario: ', error);
        }
    }
}

export default FirebaseService;