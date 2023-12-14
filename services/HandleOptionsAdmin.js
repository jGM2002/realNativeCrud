import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, SafeAreaView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import { useColorSchemeContext } from '../colorSchemeContext';

const HandleOptionsAdmin = () => {
    const [users, setUsers] = useState([]);
    const {globalStyles} = useColorSchemeContext();
    const navigation = useNavigation();

    useEffect(() => {
        const fetchUsers = async () => {
            try{
                const usersSnapshot = await firestore().collection('Usuarios').get();
                const usersData = usersSnapshot.docs.map((doc) => {
                    const data = doc.data();
                    return {
                        email: data.email || data.Correo || '',
                        password: data.password || data.Password || '',
                    };
                });
                console.log('Users Data:', usersData);
                setUsers(usersData);
            }catch(error){
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleUpdate = (email) => {
        navigation.navigate('User', {email})
    };

    const handleDelete = async (email) => {
        try{
            await firestore().collection('Usuarios').doc(email).delete();
            const updateUsers = users.filter((user) => user.email !== email);
            setUsers(updateUsers);
        }catch(error){
            console.error('Error deleting user', error);
        }
    };

    const renderItem = ({item}) => (
        <View style={{ flexDirection: 'row', justifyContent:'space-between', padding: 10}}>
            <Text style={globalStyles.text}>{item.email}</Text>
            <TouchableOpacity onPress={() => handleUpdate(item.email)}>
                <Text style={[globalStyles.linkText, {borderRadius: 15}]}>Actualizar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(item.email)}>
                <Text style={globalStyles.linkText}>Eliminar</Text>
            </TouchableOpacity>
        </View>
    );

    return(
        <View>
            <FlatList
                data={users}
                keyExtractor={(item) => item.email}
                renderItem={renderItem}
            />
            <TouchableOpacity onPress={() => navigation.navigate('register')}>
                <Text style={[globalStyles.linkText, {alignSelf: 'flex-end'}]}>Crear</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HandleOptionsAdmin;