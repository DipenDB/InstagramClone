

import React from 'react';
import InstaContext from './InstaContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
const BASE_URL='https://react-auth-d3815-default-rtdb.firebaseio.com';
import firestore from '@react-native-firebase/firestore';

class InstaProvider extends React.Component{

    ref =firestore().collection('users')

    state={
        authUser:{},
        isAuthenticated:false,
        isAuthenticating:false,
        error:false,
        errorMessage:"",
    }
    //-----------------------------Component Did Mount-------------------------------------------------
    componentDidMount=async ()=>{
        // await AsyncStorage.removeItem("authenticated")

        this.setAuthenticating(true)
        const auth=await AsyncStorage.getItem('authenticated')
        // console.log(auth)


        if (!auth){
            this.setAuthenticated(false)
        }
        else {
            this.setAuthenticated(true)
            this.setAuthUser(JSON.parse(auth))
        }
        this.setAuthenticating(false)
    }
    //------------------------------------------------------------------------------


    //-------------------------------------signUp User With Firestore-------------------------------------
    signUpUserWithFirestore = async (user)=>{
        // console.log(user)
        await this.ref.add({
            name:user.name,
            email:user.email,
            password:user.password,
        })

    }
    //--------------------------------------------------------------------------------------------




    //-------------------------------------login With Firestore-------------------------------------

    loginWithFirestore =async (user)=> {
        // console.log(user);
        let array = null

        try {
            const response = await firestore().collection('users').get();

            const users = [];
            response.forEach(doc => {
                const {name, email, password} = doc.data();
                users.push({
                    id: doc.id,
                    name: doc.data().name,
                    email: doc.data().email,
                    password: doc.data().password,
                });
            });

            // console.log(users)
            // [{..}{..}]

            const loginUser = users.find(u => u.email === user.email)
            // console.log(loginUser);
            var err = "";
            if (loginUser) {
                if (loginUser.password === user.password) {
                    await AsyncStorage.setItem('authenticated', JSON.stringify(loginUser));
                    await this.loadUser()     // To remove error of not loading user info after login on Profile
                    this.setAuthenticated(true);
                    this.setAuthError(false)
                    this.setState({
                        ...this.state,
                        errorMessage: "",
                    })
                } else {
                    this.setAuthenticated(false);
                    err = "Email and Password didn't match";
                }
            } else {
                err = "Email and Password did not match";
            }
            this.setState({
                ...this.state,
                errorMessage: err
            })


        } catch (e) {
            console.log(e);
            this.setAuthenticated(false)
            this.setState({
                ...this.state,
                errorMessage: "Internet Problem!"
            })
        } finally {
            this.setAuthenticating(false)
        }


    }

    loadUser = async ()=>{
        const user =JSON.parse(await  AsyncStorage.getItem('authenticated'))
        this.setAuthUser(user)
    }

    //----------------------------------------------------------------------------------



    //----------------------------------LOG OUT------------------------------------------------
    logOut=async ()=>{
        await AsyncStorage.removeItem('authenticated');
        this.setAuthenticated(false)
        this.setAuthUser({})
        this.setAuthError(false)
        this.setState({
            ...this.state,
            errorMessage:'',
        })
    }
    //----------------------------------------------------------------------------------


    //-------------------------------------set Value-----------------------------------------
    setAuthUser=(user) =>{
        this.setState({
            ...this.state,
            authUser: user
        })
    }

    setAuthenticated=(isAuthenticated) =>{
        this.setState({
            ...this.state,
            isAuthenticated
        })
    }

    setAuthenticating=(isAuthenticating) =>{
        this.setState({
            ...this.state,
            isAuthenticating
        })
    }
    setAuthError=(error) =>{
        this.setState({
            ...this.state,
            error
        })
    }
    //------------------------------------------------------------------------

    render(){
        return(
            <InstaContext.Provider value={{
                ...this.state,
                setAuthUser : this.setAuthUser,
                setAuthenticated:this.setAuthenticated,
                setAuthenticating:this.setAuthenticating,
                setAuthError:this.setAuthError,

                signUpUserWithFirestore:this.signUpUserWithFirestore,
                loginWithFirestore:this.loginWithFirestore,
                logOut:this.logOut,

            }}>
                {this.props.children}
            </InstaContext.Provider>

        )
    }
}

export default InstaProvider
