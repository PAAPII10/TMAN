import React, {useState} from 'react';
import {View, Text, FlatList,TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

function SearchScreen({navigation}) {
    const [value, setValue] = useState('');
  return (
    <View>
        <View
        style={{
          padding: 10,
          backgroundColor: '#4dffb8',
          height: 50,
          flexDirection: 'row',
          justifyContent: "center",
          
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
        </View>
      <View style={{padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor:"#99ffce",
        elevation:5,
        }}>
        <MaterialIcons name="search" size={32} color="black"
        // onPress={()=>navigation.goBack()} 
        />

        <TextInput
          style={{width: '80%',
          padding: -8,
        //   fontWeight:"bold",
          color:"black", fontSize:22}}
          value={value}
          onChangeText={text => setValue(text)}
        />
        <MaterialIcons name="send" size={32} color="black"/>
      </View>
      
    </View>
  );
}


export default SearchScreen;