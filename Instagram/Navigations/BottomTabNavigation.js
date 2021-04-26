import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RootNavigation from './RootNavigation';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import {HomeNavigation, ProfileNavigation} from './StackTabNavigation';

const Tab=createBottomTabNavigator()

const BottomTabNavigation=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeNavigation}/>
            <Tab.Screen name='Profile' component={ProfileNavigation}/>
        </Tab.Navigator>

    )

}

export default BottomTabNavigation
