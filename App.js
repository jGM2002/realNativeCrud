import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { initializeApp } from '@react-native-firebase/app';
import HomeScreen from './screens/HomeScreen';
import firebaseConfig from './database/FirebaseConfig';
import UserScreen from './screens/UserScreen';
import DeleteScreen from './screens/DeleteScreen';
import { ColorSchemeProvider } from './colorSchemeContext';
import UpdateEmailScreen from './screens/UpdateEmailScreen';
import UpdatePasswordScreen from './screens/UpdatePasswordScreen';
import OptionsScreen from './screens/OptionsScreen';

initializeApp(firebaseConfig);

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <ColorSchemeProvider>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name='User' component={UserScreen}/>
          <Stack.Screen name='Delete' component={DeleteScreen}/>
          <Stack.Screen name='UpdateEmail' component={UpdateEmailScreen}/>
          <Stack.Screen name='UpdatePass' component={UpdatePasswordScreen}/>
          <Stack.Screen name='OptionAdmin' component={OptionsScreen}/>
        </Stack.Navigator>
      </ColorSchemeProvider>
    </NavigationContainer>
  );
}

export default App;