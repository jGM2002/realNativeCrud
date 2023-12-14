import { StyleSheet } from "react-native";

export const lightTheme = StyleSheet.create({
    background: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
    text: {
        color: '#000',
    },
    placeholderTextColor: {
        color: '#000',
    },
    icon: {
        width:100,
        height:100,
        alignSelf: 'center',
        fontSize: 100,
        color: 'black',
    },  
    linkText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'blue',
    },
    button: {
        backgroundColor: '#40ee81',
        padding: 10,
        borderRadius: 5,
    },  
    botBox: {
        flexDirection: 'column',
        position: 'absolute',
        bottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    buttonBox: {
        width: 50,
        height: 50,
        marginVertical: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        color: "black",
    },
});

export const darkTheme = StyleSheet.create({
    background: {
        backgroundColor: '#4a4848',
        flex: 1,
    },
    text: {
        color: '#fff',
    },
    placeholderTextColor: {
        color: '#fff'
    },
    icon: {
        width:100,
        height:100,
        alignSelf: 'center',
        fontSize: 100,
        color: 'white',
    },
    linkText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ba1a1a',
    },
    button: {
        backgroundColor: '#6135d8',
        padding: 10,
        borderRadius: 5,
    },  
    botBox: {
        flexDirection: 'column',
        position: 'absolute',
        fontSize: 100,
        bottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    buttonBox: {
        width: 50,
        height: 50,
        marginVertical: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        color: "white",
    },
});