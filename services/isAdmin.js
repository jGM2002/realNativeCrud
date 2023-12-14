import auth from '@react-native-firebase/auth';

export const checkIsAdmin = async () => {
    const currentUser = auth().currentUser;
    if(currentUser && currentUser.email === 'estebanjosuematta@gmail.com'){
        return true;
    }else{
        return false;
    }
};