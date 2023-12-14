import React from "react";
import { Text, View, Button } from "react-native";
import { useColorSchemeContext } from "../colorSchemeContext";

function UserScreen({navigation}){
    const {globalStyles} = useColorSchemeContext();
    return(
        <View style={globalStyles.background}>
            <Text onPress={() => navigation.navigate('UpdateEmail')} style={[globalStyles.linkText, {fontSize:20}]}>
                Cambiar Correo Electrónico
            </Text>
            <Text onPress={() => navigation.navigate('UpdatePass')} style={[globalStyles.linkText, {fontSize: 20}]}>
                Cambiar Contraseña
            </Text>
            <Button title="Eliminar cuenta" onPress={() => navigation.navigate('Delete')} style={globalStyles.button}/>
        </View>
    );
};

export default UserScreen;