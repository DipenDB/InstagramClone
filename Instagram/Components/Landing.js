

import React from 'react';
import {View,Text,StyleSheet,StatusBar,Button} from 'react-native';

const Landing=({navigation})=>{
    // console.log(navigation)
  return (
        <View style={styles.container}>
            <Button title='Register' onPress={()=>navigation.navigate('Register')}/>
            <Button title='Login' onPress={()=>navigation.navigate('Login')}/>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:'center',
    },
});


export default Landing;



