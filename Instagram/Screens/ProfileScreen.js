

import React, {useContext} from 'react';
import {View,Text,StyleSheet,Button,Image} from 'react-native';
import InstaContext from '../Store/InstaContext';

const ProfileScreen=()=>{
    const instaContext=useContext(InstaContext)


    return(
        <View style={styles.container}>
            {/*<Button onPress={()=>authContext.logOut()} style={{backgroundColor: 'red',color:'white'}} title='Log Out'/>*/}

            {/*<Text>Profile Screen</Text>*/}

            <View style={{alignItems:'center',marginTop:40,}}>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
                    }}
                />
            </View>



            <View style={{margin:20,alignItems:'center',}}>
                <Text style={{fontSize:25,textTransform: 'capitalize'}}>{instaContext.authUser.name}</Text>
                <Text style={{fontSize:15,marginTop:10,color:'black',opacity:0.7}}>{instaContext.authUser.email}</Text>
            </View>

            <View style={{flexDirection:'row',marginHorizontal:120,justifyContent:'space-between'}}>
                <Button onPress={()=>props.navigation.navigate('Edit')}  color="green" style={{color:'white'}} title='Edit Detail'/>
                <Button onPress={()=>instaContext.logOut()} color="red" style={{backgroundColor: 'green',color:'white'}} title='Log Out'/>
            </View>


        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image:{
        height:90,
        width:90,
        borderRadius:45,

    },
});


export default ProfileScreen;



