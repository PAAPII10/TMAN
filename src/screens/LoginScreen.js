import React, {useState} from 'react';
import {
    View,Text,TextInput,Button,
    StyleSheet,Image,KeyboardAvoidingView,Keyboard,TouchableOpacity, Linking
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const fill =()=>{
    const navigation = useNavigation()
    const[userEmail,setUserEmail]=useState(' ');
    const[userPassword,setUserPassword]=useState(' ');
    const[errorText,setErrorText]=useState(' ');

    const onClick=()=>{
      setErrorText();
      if(!userEmail){
        alert("Please fill Email");
        return;
      }
      if(!userPassword){
        alert("Please fill Password");
        return;
      }

    }
    return(
        <View style={styles.mainBody}>
          <KeyboardAvoidingView enabled>
             {/* //for Image       */}
              <View style={{alignItems:'center'}}>
                  <Image source={require('../component/logo.jpeg')}
                     style={{width: '200%',
                      height: 120,
                     resizeMode: 'contain',
                     margin: 20}}
                     />
              </View>
              <View style={{marginLeft:10}}>
                <Text style={{fontSize:30, fontWeight:"bold"}}>Welcome Back,</Text>
                <Text style={{marginBottom:6}}>Sign in to continue</Text>
              </View>
            <View style={{backgroundColor:"white",  borderRadius:20,
                height:450,padding:8}}>  
                {/* // For TextInput */}
                <View>
                    {/* // Email */}
                  <TextInput 
                    style={styles.SectionStyle}
                    onChangeText={(UserEmail)=>setUserEmail(UserEmail)}
                    placeholder="Enter Email"
                    placeholderTextColor="black"
                    autoCapitalize='none'
                    returnKeyType='next'
                    keyboardType='email-address'
                  />     
                </View>
                <View>
                  <TextInput
                    style={styles.SectionStyle}
                    onChangeText={(UserPassword)=>setUserPassword(UserPassword)}
                    placeholder='Enter Password'
                    placeholderTextColor='black'
                    autoCapitalize='none'
                    returnKeyType='next'
                    keyboardType='default'
                    secureTextEntry={true}
                    onSubmitEditing={Keyboard.dismiss}
                  />
                  <Text style={{marginLeft:250,color:"#ff0000",fontWeight:"800"}}>Forget Password?</Text>
                </View>
                {/* <View><Text style={{color:'red'}}>             Forget Password?</Text> </View> */}

                <View>
                  <TouchableOpacity
                      style={styles.buttonStyle}
                     activeOpacity={0.7}
                      onPress={()=>navigation.navigate("sign-in")}
                      >
                      <Text style={{color:"black",marginTop:8, fontSize:18, fontWeight:"500"}}>LOGIN</Text>
                  </TouchableOpacity> 
                </View>
                <View style={{marginLeft:150}}>
                  <Text style={{color:"black", fontWeight:"800"}}>New User?
                  <Text style={{color:"#2eb82e"}}
                  onPress={() => navigation.navigate("register")}>Register</Text>
                  </Text>
                  {/* onPress={()=>navigation.navigate('')} */}
                </View>
            </View>        
          </KeyboardAvoidingView>
       </View>
    );  

};

export default fill;

const styles = StyleSheet.create({
    mainBody: {
      flex:1,
      // justifyContent: 'center',
      backgroundColor: "#ccffcc",
      // alignContent: 'center',
    },
    SectionStyle: {
      flexDirection: 'row',
      height: 40,
      marginTop: 20,
      marginLeft: 35,
      marginRight: 35,
      margin: 10,
      borderWidth:2,
      borderRadius: 10,
      color:"black",
      fontWeight:"500"
    },
    buttonStyle: {
      backgroundColor: '#2eb82e',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#7DE24E',
      height: 40,
      alignItems: 'center',
      borderRadius: 30,
      marginLeft: 35,
      marginRight: 35,
      marginTop: 10,
      marginBottom: 25,
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 16,
    },
    inputStyle: {
      flex: 1,
      color: 'black',
      paddingLeft: 15,
      paddingRight: 15,
      borderWidth: 1,
      borderRadius: 30,
      borderColor: '#dadae8',
    },
    registerTextStyle: {
      color: '#FFFFFF',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 14,
      alignSelf: 'center',
      padding: 10,
    },
    errorTextStyle: {
      color: 'red',
      textAlign: 'center',
      fontSize: 14,
    },
  });

