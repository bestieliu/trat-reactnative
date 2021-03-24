import React, {Component} from 'react';
import {Linking, Text, TouchableOpacity, Alert,View, SafeAreaView} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class ScannerQR extends Component{
  ifScaned=e=>{
    Linking.openURL(e.data).catch(error=>
      Alert.alert("Invalid QRCode",e.data));
  }
  render(){
    return(
        <QRCodeScanner
        containerStyle={{backgroundColor:"#FFF"}}
        onRead={this.ifScaned}
        reactivate={true}
        permissionDialogMessage="Need Permission To Access Camera"
        reactivateTimeout={10}
        showMarker={true}
        markerStyle={{borderColor:'#FFF',borderRadius:10}}
        bottomContent={
          <TouchableOpacity>
            <Text style={{fontSize:21,color:'rgb(0,122,255)'}}>Scan QRCode</Text>
          </TouchableOpacity>
        }
        />  
    )
  }
}


{/*       bottomContent={
  <TouchableOpacity>
  <Text style={{fontSize:21,color:'rgb(0,122,255)'}}>Scan QRCode</Text>
</TouchableOpacity>

*/}