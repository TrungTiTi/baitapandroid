import React, {useState,useEffect} from 'react';
import { Text, TextInput, View, TouchableOpacity,StyleSheet } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';



const Logup = ({navigation}) => {
    
    //const api = axios.create({baseURL: 'https://626a8ada53916a0fbdfd70d1.mockapi.io'})
    
    const [mail, setMail] = useState();
    const [pass, setPass] = useState();
    const [user, setUser] = useState();
    const [username, setUsername] = useState();
    
        axios.get('http://626a8ada53916a0fbdfd70d1.mockapi.io/User').then(res => {
            if(res.status ===200){
                setUser(res.data);
                return res.data
            }
        }).catch();
    
    let arr= [];

    const handleS = () => {
      if(user.length>0){
          for(let i=0; i < user.length; i++){
            arr.push(user[i].email)
          }
          if(!arr.includes(mail)){
            axios.post('http://626a8ada53916a0fbdfd70d1.mockapi.io/User', {
                email: mail,
                password: pass,
                username: username
            }).then(res => {
                console.log(res)
            }).catch(error => {
                console.log(error)
            })
            alert('Logup successful');
            navigation.navigate('Login');
          }else{
              alert('Account already exists')
          }
        
      }
    //   console.log(arr);
    //   console.log(user);
    }
    return (
        <View>
            <Text style={styles.h1}>Logup</Text>
            <TextInput
            name='mail'
            placeholder='email'
            onChangeText={e=> setMail(e)}
            style={styles.textInput}
            >  
            </TextInput>
            
            <TextInput
            name='password'
            placeholder='password'
            onChangeText={e=> setPass(e)}
            secureTextEntry={true}
            style={styles.textInput}
            >  
            </TextInput>

            <TextInput
            name='username'
            placeholder='username'
            onChangeText={e=> setUsername(e)}
            style={styles.textInput}
            >  
            </TextInput>

            <TouchableOpacity onPress={handleS} style={styles.button} >
                <Text style={styles.signup}>SignUp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.signin}>SignIn</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    h1: {
      color: 'red',
      fontSize: 30,
      textAlign: 'center',
      fontFamily: 'roboto',
      backgroundColor: 'grey'
    },
    signup: {
        fontSize: 15,
        borderRadius: 50,
        backgroundColor: 'orange',
        width: 60,
        height: 30,
        paddingLeft: 6,
        paddingTop: 2
    },
    button: {
        alignItems: 'center',
        marginBottom: 10
    },
    signin: {
        backgroundColor: 'green',
        fontSize: 15,
        borderRadius: 50,
        width: 60,
        height: 30,
        paddingLeft: 6,
        paddingTop: 2
    }
  });
export default Logup;