import React, {useState} from 'react';
import { Text, TextInput, View, TouchableOpacity,StyleSheet } from 'react-native';
import axios from 'axios';

const Login = ({navigation}) => {

    const [mail, setMail] = useState();
    const [pass, setPass] = useState();
    const [user, setUser] = useState();

    axios.get('http://626a8ada53916a0fbdfd70d1.mockapi.io/User').then(res => {
            if(res.status ===200){
                setUser(res.data);
                return res.data
            }
        }).catch();

    const handleS = () => {
        for(let i=0; i< user.length; i++){
            if(user[i].email == mail && user[i].password == pass){
                navigation.navigate('Profile', {name: user[i].username, email: user[i].email})
            }
        }
        // if(user.some(u => u.email === mail && u.password === pass)){
        //     alert('Sign in successful')
        //     navigation.navigate('Profile', {})
        // }
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

            <TouchableOpacity style={styles.button} onPress={handleS}>
                <Text style={styles.signin}>SignIn</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Logup')} style={styles.button} >
                <Text style={styles.signup} >SignUp</Text>
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

export default Login;