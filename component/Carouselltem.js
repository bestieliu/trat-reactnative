import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';


const {width, height} = Dimensions.get('window')


const Carouselltem=({item})=>{
    return(
        <View style={styles.cardView}>
           <Image style={styles.image} source={item.url}/>
              <View style={styles.textView}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDescrption}>{item.descrption}</Text>
              </View>
        </View>
    )
}
const styles = StyleSheet.create({
     cardView:{
        flex:1,
        width: width - 20,
        height: height / 3,
        backgroundColor:'white',
        margin:10,
        borderRadius:10,
        shadowColor: '#000',
        shadowOpacity:0.5,
        shadowRadius:3,
        elevation:5,
        shadowOffset: {width: 0.5, height:0.5},
     },
     textView:{
         position:'absolute',
         bottom:10,
         margin:10,
         left:5,
     },
     image:{
         width:width -20,
         height: height /3,
         borderRadius:3,
         resizeMode:'cover'
     },
     itemTitle:{
         color:'white',
         fontSize:22,
         shadowColor:'#000',
         shadowOffset: {width: 0.8,height: 0.8},
         shadowOpacity:1,
         shadowRadius:3,
         marginBottom:5,
         fontWeight:'bold',
         elevation:5
     },itemDescrption:{
         color:'white',
         fontSize:12,
         shadowColor:'#000',
         shadowOffset:{width:0.8,height:0.8},
         shadowOpacity:1,
         shadowRadius:3,
         elevation:5
     }
       
})
export default Carouselltem;