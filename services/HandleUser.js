import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import { View, Text } from 'react-native';
import { useColorSchemeContext } from '../colorSchemeContext';

const HandleUser = () => {
    const [user, setUser] = useState(null);
    const {globalStyles} = useColorSchemeContext();

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((authUser)=>{
            setUser(authUser);
        });
        return () => unsubscribe();
    }, []);

    const getUsernameWithoutDomain = (email) => {
        if(!email){
            return '';
        }

        const atIndex = email.indexOf('@');
        return atIndex !== -1 ? email.substring(0, atIndex) : email;
    };

    return (
        <View style={globalStyles.background}>
            <Text style={[globalStyles.text, {alignSelf: 'center', fontSize:25}]}>Welcome {getUsernameWithoutDomain(user?.email)}</Text>
        </View>
    );
};

export default HandleUser;