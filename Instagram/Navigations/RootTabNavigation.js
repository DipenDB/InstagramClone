import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import InstaProvider from '../Store/InstaProvider';
import BottomTabNavigation from './BottomTabNavigation';

const RootTabNavigation=()=>{
    return(
        <InstaProvider>
            <NavigationContainer>
                <BottomTabNavigation/>
            </NavigationContainer>
        </InstaProvider>
    )
}

export default RootTabNavigation
