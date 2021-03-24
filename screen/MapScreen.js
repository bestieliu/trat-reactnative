import React, { useState, useEffect } from 'react';
import { ActivityIndicator, 
        StyleSheet ,
        Image, 
        View,
        Text, 
        PermissionsAndroid, 
        SafeAreaView,
        Button,
        TextInput,
        ScrollView,
        Animated,
        TouchableOpacity,
        Dimensions,
        Platform
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout ,Map} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

const initialState = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

const MapScreen = () => {

  const [curentPosition, setCurentPosition] = useState(initialState);
  
  useEffect(() => {
    if (Platform.OS === 'android') {
      RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
      
    }
    
    Geolocation.getCurrentPosition(position => {
      //alert(JSON.stringify(position))
      const { longitude, latitude } = position.coords;
      setCurentPosition({
        ...curentPosition,
        latitude,
        longitude,
      })
    },
    
      error => alert(error.message),
      { timeout: 20000, maximumAge: 1000, enableHighAccuracy:true, }
    )
  }, [])

  return curentPosition.latitude ? (
    
    <MapView 
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={{ flex: 1}}
      followsUserLocation={true}
      showsUserLocation={true}
      initialRegion={curentPosition}
    >
    </MapView>
    
    
  ) : <ActivityIndicator style={{ flex: 1, }} animating size="large" />
};



const styles = StyleSheet.create({
  map:{
    height:'100%'
  },
  bubble:{
    flexDirection:'column',
    alignSelf:'flex-start',
    backgroundColor:'#fff',
    borderRadius:6,
    borderColor:'#ccc',
    borderColor:'#ccc',
    padding:11,
    width:110,
  },
  arrow:{
    backgroundColor:'transparent',
    borderColor:'transparent',
    borderTopColor:'#fff',
    borderWidth:16,
    alignSelf:'center',
    marginTop:-32,
  },
  arrowBorder:{
    backgroundColor:'transparent',
    borderTopColor:'#007a87',
    borderWidth:16,
    alignSelf:'center',
    marginTop:-0.5,
    borderColor:'transparent'
  },
  name:{
    fontSize:16,
    marginBottom:5
  },
  image:{
    width:80,
    height:80,
    
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  loading:{
    position:'absolute',
    width:'100%',
    height:'100%'
  },
});
export default MapScreen;






/*

import RNAndroidLocationEnabler from 'react-native-android-location-enabler';


const onLocationEnablePressed = () => {
    if (Platform.OS === 'android') {
      RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
      .then(data => {
        alert(data);
      }).catch(err => {
        // The user has not accepted to enable the location services or something went wrong during the process
        // "err" : { "code" : "ERR00|ERR01|ERR02", "message" : "message"}
        // codes : 
        //  - ERR00 : The user has clicked on Cancel button in the popup
        //  - ERR01 : If the Settings change are unavailable
        //  - ERR02 : If the popup has failed to open
        alert("Error " + err.message + ", Code : " + err.code);
      });
    }
  }

*/