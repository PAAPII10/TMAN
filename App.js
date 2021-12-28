
import React from 'react';

import {
  View,
} from 'react-native';
import { NavigationContainer,DefaultTheme,DarkTheme,useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Provider,useSelector } from 'react-redux';


import LoginScreen from './src/screens/LoginScreen';
import Header from './src/component/Header';
import Search from './src/component/Search';
import Home from './src/screens/Home'
import Orders from './src/screens/Orders'
import Account from './src/screens/Account'
import Register from './src/screens/Register'

// function App(){
//   return(
//     <View >
//       <Header/>
//     </View>
//   );
// }


const Tabs = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const RootHome = ()=>{
  // const {colors} =useTheme()
  return(
    <Tabs.Navigator 
    screenOptions={({ route }) => ({
      tabBarStyle: { backgroundColor:"#2eb82e" },
      tabBarIcon: ({color}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Orders') {
          iconName = 'inventory';
        } else if (route.name === 'Account') {
          iconName='person';
        } 

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={32} color={color} />;
      },
      tabBarActiveTintColor: "black" ,
      tabBarInactiveTintColor: 'white',
    })}
    >
      <Tabs.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Tabs.Screen name="Orders" component={Orders} options={{headerShown: false}}/>
      <Tabs.Screen name="Account" component={Account} options={{headerShown: false}}/>
    </Tabs.Navigator>
  )
}


function Navigation(){
  return(
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="rootHome" component={RootHome} options={{headerShown: false}}/>
        <Stack.Screen name="search" component={Search} options={{headerShown: false}}/>
        <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="sign-in" component={RootHome} options={{headerShown: false}}/>
        <Stack.Screen name="register" component={Register} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;


