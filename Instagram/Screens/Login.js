
import React, {useContext} from 'react';
import {View,Text,StyleSheet} from 'react-native'
import { TextInput,Button } from 'react-native-paper';

import auth from '@react-native-firebase/auth';
import InstaContext from '../Store/InstaContext';

const Login=(props)=>{
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const instaContext = useContext(InstaContext)

    const handleLogin= ()=>{
        const auth = instaContext.loginWithFirestore({email, password})
    }

    return(
        <View>
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
            <Button mode="contained" onPress={handleLogin}>
                Login
            </Button>
        </View>
    )
}

export default Login;
