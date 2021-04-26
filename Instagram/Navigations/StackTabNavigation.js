import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const Stack=createStackNavigator()

const HomeNavigation=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen}/>
        </Stack.Navigator>
    )
}

const ProfileNavigation=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='Profile' component={ProfileScreen}/>
        </Stack.Navigator>
    )
}


export {HomeNavigation,ProfileNavigation}
