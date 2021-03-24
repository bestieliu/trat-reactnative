import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {Platform} from 'react-native';     // Permision Android


{/******* Permision adnroid and ios   ********/}

const PLATFORM_MICROPHONE_PERMISSIONS = {
    ios: PERMISSIONS.IOS.MICROPHONE,
    android: PERMISSIONS.ANDROID.RECORD_AUDIO
}

const PLATFORM_PHOTO_PERMISSIONS = {
    ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
    android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
}

const PLATFORM_SEND_SMS_PERMISSIONS = {
    ios: null,                          //You cat put null if don't need permission
    android: PERMISSIONS.ANDROID.SEND_SMS
}

{/******* Permision adnroid and ios   ********/}


{/******* How you add permision but add in   ********/}

const REQUEST_PERMISSION_TYPE ={
    microphone: PLATFORM_MICROPHONE_PERMISSIONS,
    photo: PLATFORM_PHOTO_PERMISSIONS,
    send_sms: PLATFORM_SEND_SMS_PERMISSIONS,
}

const PERMISSIONS_TYPE ={
    microphone: 'microphone',
    photo:'photo',
    send_sms:'send_sms',
}

{/******* How you add permision but add in   ********/}

    class AppPermission{
        
        checkPermission = async (type):Promise<boolean>=>{
            console.log("AppPermission checkPermission type:", type)
            const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS]
            console.log("AppPermission checkPermission permissions:", permissions)
            if (!permissions){
                return true
            }
            try{
                const result = await check(permissions)
                console.log("AppPermission checkPermission result:", result)
                if (result === RESULTS.GRANTED) return true
                return this.requestPermission(permissions)
            }catch (error){
                console.log("AppPermission checkPermission error:", error)
                return false

            }
        }

        requestPermission = async (permissions):Promise<boolean>=>{
            console.log("AppPermission requestPermission permissions:", permissions)
            try{
                const result = await request(permissions)
                console.log("AppPermission requestPermission result:", result)
                return result === RESULTS.GRANTED
            } catch (error){
                console.log("AppPermission requestPermission error:", error)
                return false
            }
        }

        requestMultiple = async (types): Promise<boolean> =>{ //Handle request muliple
            console.log("AppPermission requestPermission error:", types)
            const results = []
            for (const type of types){
                const permission = REQUEST_PERMISSION_TYPE [type][Platform.OS]
                if(permission){
                    const result = await this.requestPermission(permission)
                    results.push(result)
                }
            }
            for (const result of results){
                if(!result){
                    return false
                }
            }
            return true
        }
}

const Permission = new AppPermission()
export {Permission, PERMISSIONS_TYPE}



{/*

import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Permission, PERMISSIONS_TYPE} from '../src/AppPermission';

class AboutScreen extends Component{
  componentDidMount(){
    Permission.requestMultiple([PERMISSIONS_TYPE.microphone,PERMISSIONS_TYPE.photo,PERMISSIONS_TYPE.send_sms])
}
  render(){
  return(
    <View style={styles.container}>
      <Text>AboutScreen</Text>
    </View>
  )
}
}
export default AboutScreen;
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  
})


*/}