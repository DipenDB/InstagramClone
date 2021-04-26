import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../Components/Landing';
import Register from '../Screens/Register';
import Login from '../Screens/Login';
import InstaProvider from '../Store/InstaProvider';
const Stack = createStackNavigator();

const RootNavigation=()=>{
    return(
        <InstaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Landing' component={Landing} options={{headerShown:false}}/>
                    <Stack.Screen name='Register' component={Register}/>
                    <Stack.Screen name='Login' component={Login} />
                </Stack.Navigator>
            </NavigationContainer>

        </InstaProvider>
    )
}
export default RootNavigation;
