
import React, {useContext} from 'react';
import {View,Text,StyleSheet} from 'react-native'
import { TextInput,Button } from 'react-native-paper';

import auth from '@react-native-firebase/auth';
import InstaContext from '../Store/InstaContext';

const Register=(props)=>{
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const instaContext = useContext(InstaContext)

    const handleSignup= ()=>{
        const auth = instaContext.signUpUserWithFirestore({name,email, password})
        props.navigation.navigate('Login')
    }




        return(
            <View>
                <TextInput
                    label="Name"
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                {/*<Button mode="contained" onPress={onSignUp()}>*/}
                <Button mode="contained" onPress={handleSignup}>
                    Register
                </Button>
            </View>
        )
}

export default Register;
