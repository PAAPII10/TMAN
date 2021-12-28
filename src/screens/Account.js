import React from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../component/Header'
import LoginScreen from './LoginScreen'

function Account(){
    const navigation = useNavigation()
    return(
        <View>
            <View>
            <Header/>
            </View>
            <View>
                <Text>Sign-in</Text>
                <Button title="Sign-in" color="blue" 
                onPress={()=>navigation.navigate("login")}/>

            </View>
            
        </View>
    )
}

export default Account;