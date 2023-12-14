import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import handleDelete from '../services/HandleDelete';
import { useColorSchemeContext } from '../colorSchemeContext';

function DeleteScreen({navigation}){
    const {globalStyles} = useColorSchemeContext();

    const onPressDelete = () => {
        handleDelete(navigation);
    }

    return (
        <View style={globalStyles.background}>
            <Text style={globalStyles.text}>¿Estas seguro que deseas eliminar tu cuenta?</Text>
            <Button title='Eliminar cuenta' onPress={onPressDelete} style={globalStyles.button}/>
        </View>
    );
};

export default DeleteScreen;