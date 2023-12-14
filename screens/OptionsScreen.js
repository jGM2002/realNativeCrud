import {View, Text} from 'react-native';
import { useColorSchemeContext } from '../colorSchemeContext';
import {useEffect, useState} from 'react';
import {checkIsAdmin} from '../services/isAdmin';
import HandleOptionsAdmin from '../services/HandleOptionsAdmin';

function OptionsScreen(){
    const {globalStyles} = useColorSchemeContext();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const fetchAdminStatus = async () => {
            const adminStatus = await checkIsAdmin();
            setIsAdmin(adminStatus);
        };

        fetchAdminStatus();
    }, []);

    return(
        <View style={globalStyles.background}>
            {isAdmin ? (
                <View>
                    <Text style={[globalStyles.text, {alignSelf: 'center', fontSize:25}]}>
                        Opciones de admin
                    </Text>
                    <HandleOptionsAdmin/>
                </View>
            ) : (
                <Text style={[globalStyles.text, { alignSelf: 'center', fontSize: 25, color: 'red' }]}>
                    Acceso no autorizado
                </Text>
            )}   
        </View>
    );
};

export default OptionsScreen;