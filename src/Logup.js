import React, {useState} from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import axios from 'axios';



const Logup = () => {
    let var1 = 'email'
    let var2 = 'password'
    const api = axios.create({baseURL: 'https://626a8ada53916a0fbdfd70d1.mockapi.io/'})
    
    const [mail, setMail] = useState();
    const [pass, setPass] = useState();

    const handleS = () => {
      console.log("hhh", mail);
      api.post('/User', {
        var1: mail,
        var2: pass
    })
    .then(res => {
        console.log(res)
    })
    .catch(error => {
        console.log(error)
    })
    }
    return (
        <View>
            <Text>Logup</Text>
            <TextInput
            name='mail'
            placeholder='email'
            onChangeText={e=> setMail(e)}
            >  
            </TextInput>
            
            <TextInput
            name='password'
            placeholder='password'
            onChangeText={e=> setPass(e)}
            secureTextEntry={true}
            >  
            </TextInput>

            <TouchableOpacity onPress={handleS}>
                <Text>Sign</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Logup;