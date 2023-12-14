import { View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useColorSchemeContext } from '../colorSchemeContext';
import HandleUser from '../services/HandleUser';
import Icon from 'react-native-vector-icons/Ionicons';

function HomeScreen(){
  const navigation = useNavigation();
  const {globalStyles} = useColorSchemeContext();

  const handleUserPress = () => {
    navigation.navigate('User');
  };

  const handleOptionPress = () => {
    navigation.navigate('OptionAdmin');
  };

  return(
      <View style={globalStyles.background}>
          <HandleUser/>
          <View style={[globalStyles.botBox, { flexDirection: 'row', justifyContent: 'center' }]}>
            <TouchableOpacity onPress={handleUserPress}>
              <Icon name='person' style={globalStyles.buttonBox}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleOptionPress}>
              <Icon name="menu" style={globalStyles.buttonBox}/>
            </TouchableOpacity>
          </View>
      </View>
  );
};
  
export default HomeScreen;