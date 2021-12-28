import React from 'react';
import {View, Text, FlatList, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation,useTheme } from '@react-navigation/native';

function Header() {
  const navigation = useNavigation()
  return (
    <View>
      <View
        style={{
          padding: 10,
          backgroundColor: '#2eb82e',
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          
        }}>
          <View
          style={{
            justifyContent: 'flex-start',
            flexDirection: 'row',
            marginLeft: -4,
          }}>
             <Feather name="coffee" size={32} color="black" />
              <Text
                style={{
                flexDirection: 'row',
                fontWeight: 'bold',
                fontSize: 22,
                marginLeft: 5,
                }}>
                    TMAN
              </Text>
            </View>

          <View
          style={{
            flexDirection: 'row',
            width:70,
            justifyContent:"space-around",
            margin: 1,
          }}>
              <MaterialIcons name="shopping-cart" size={28} color="black" />
          <MaterialIcons name="notifications" size={28} color="black" />
          </View>
      </View>
      <View style={{backgroundColor:'#2eb82e', height:38,elevation: 5,}}>
          <View style={{marginLeft:10,backgroundColor:"#ccffe6", width:390, marginTop:1}}>
            
           <MaterialIcons name="search" size={28} color="black"
           onPress={()=>navigation.navigate("search")}
           />
           

          </View>
        </View>
    </View>
  );
}


export default Header;
