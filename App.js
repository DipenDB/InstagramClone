/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useContext} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import RootNavigation from './Instagram/Navigations/RootNavigation';
import { Provider as PaperProvider } from 'react-native-paper';
import RootTabNavigation from './Instagram/Navigations/RootTabNavigation';
import InstaContext from './Instagram/Store/InstaContext';
import NavigationContainer from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const App =()=>{
  const instaContext=useContext(InstaContext);

  // const auth = instaContext.isAuthenticated;

  console.log(instaContext.isAuthenticated)

  const isAuthenticated =false;



  // componentDidMount =async ()=>{
  //   if (await AsyncStorage.getItem('authenticated')){
  //     this.setState({
  //       isAuthenticated: true
  //     })
  //   }
  // }

    return (
        <PaperProvider>

          {/*{*/}
          {/*  isAuthenticated ? <RootTabNavigation/>:<RootNavigation/>*/}
          {/*}*/}

        </PaperProvider>
    );

};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  }
});

export default App;
