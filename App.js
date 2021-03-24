import React, { useEffect } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';    //native
import { createDrawerNavigator } from '@react-navigation/drawer';  //drawer
import { createStackNavigator } from '@react-navigation/stack';    //stack


import LoginScreen from './screen/LoginScreen';            // login screens.js
import OnboardingScreen from './screen/OnboardingScreen';  // onboard screens.js
import { DrawerNavigators } from './routs/MainTabScreen';  // drawer  screens.js

import AsyncStorage from '@react-native-community/async-storage';   //tool lockscreens
import LottieView from 'lottie-react-native';   // module animaion screens


const Drawer = createDrawerNavigator();  //drawer 
const AppStack = createStackNavigator(); //stack

const App = () => {  // function app

  {/******* source code Login  ********/}

  const loginReducer = (prevState, action) => { 
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

    {/******* source code Login  ********/}


  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  {/******* source code Lockscreen  ********/}

  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  useEffect(()=>{
    AsyncStorage.getItem('alreadyLaunched').then(value=>{
      if(value == null){
        AsyncStorage.setItem('alreadyLaunched','true');
        setIsFirstLaunch(true);
      }else{
        setIsFirstLaunch(false);
      }
    },)
  },[]);

   {/******* source code Lockscreen  ********/}


  {/******* source code Timeout animalion LottieView  ********/}

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 3000);
  }, []);

   {/******* source code Timeout animalion LottieView  ********/}

  if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <LottieView source={require('./assets/40990-anabenzan')} autoPlay loop /> 
      </View>
    );
  }
  if( isFirstLaunch === null){
    return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <LottieView source={require('./assets/40990-anabenzan')} autoPlay loop />
    </View>
    )
  }else if (isFirstLaunch === true){
    return (
      <NavigationContainer>   
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen name="Onboarding" component={OnboardingScreen}/>
            <AppStack.Screen name="HomeMain"   component={DrawerNavigators}/>
          </AppStack.Navigator>
      </NavigationContainer>
     )
    }else {
      return(
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="HomeMain" component={DrawerNavigators}/>
          </Drawer.Navigator>
        </NavigationContainer>
   )
  }
}
export default App;