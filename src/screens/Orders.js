import React,{useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import Header from '../component/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function Orders(){
    const [Teacount,setTeaCount]=useState(0)
    const [countCo,setCoCount]=useState(0)
    const [count,setCount]=useState(0)
    return(
        <View>
            <View>
            <Header/>
            </View>
            <View>
               <View style={{flexDirection:"row", marginTop:25,borderWidth: 1,
        borderColor:'black',margin:10, height:50}}>
                <Text style={{fontSize:28, width:150, marginLeft:60}}>Tea</Text>
                <View style={{flexDirection:"row",justifyContent: 'space-between'
              ,marginTop:3,backgroundColor:"#b3ffb3", height:35}}>
                <MaterialIcons name="add" size={32} color="green"
                onPress={()=>setTeaCount(Teacount+1)}/>
                <Text style={{fontSize:22}}>{Teacount}</Text>
                <MaterialIcons name="remove" size={32} color="green"
                onPress={()=>setTeaCount(Teacount-1)}/>
                </View>      
               </View>
            </View>
            <View>
               <View style={{flexDirection:"row", marginTop:25,borderWidth: 1,
        borderColor:'black',margin:10, height:50}}>
                <Text style={{fontSize:28, width:150, marginLeft:60}}>Coffee</Text>
                <View style={{flexDirection:"row",justifyContent: 'space-between'
              ,marginTop:3, backgroundColor:"#b3ffb3",height:35}}>
                <MaterialIcons name="add" size={32} color="green"
                onPress={()=>setCoCount(countCo+1)}/>
                <Text style={{fontSize:22}}>{countCo}</Text>
                <MaterialIcons name="remove" size={32} color="green"
                onPress={()=>setCoCount(countCo-1)}/>
                </View>      
               </View>
            </View>
            <View>
               <View style={{flexDirection:"row", marginTop:25,borderWidth: 1,
        borderColor:'black',margin:10, height:50}}>
                <Text style={{fontSize:28, width:150, marginLeft:60}}>Black Tea</Text>
                <View style={{flexDirection:"row",justifyContent: 'space-between'
              ,marginTop:3, backgroundColor:"#b3ffb3",height:35}}>
                <MaterialIcons name="add" size={32} color="green"
                onPress={()=>setCount(count+1)}/>
                <Text style={{fontSize:22}}>{count}</Text>
                <MaterialIcons name="remove" size={32} color="green"
                onPress={()=>setCount(count-1)}/>
                </View>      
               </View>
            </View>

            
        </View>
    )
}

export default Orders;