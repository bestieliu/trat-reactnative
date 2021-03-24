import React from 'react';
import {View, Text ,Image,TouchableOpacity,StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import SwiperComponent from '../component/Swiper';
import Stars from 'react-native-stars';
import {icons2} from '../constants';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {COLORS, icons,images,SIZES,FONTS} from '../constants';
import {useNavigation} from '@react-navigation/native';

const DetailScreen=()=>{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
               <View style={{flexDirection:'row',height:50}}>
                <TouchableOpacity style={{
                    width:50,
                    paddingLeft:SIZES.padding *2,
                    justifyContent:'center'
                }}
                onPress={()=>navigation.goBack()}>
                    <Image 
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width:25,
                            height:25
                        }}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.swiperContent}>
                <SwiperComponent/>
            </View>

            <View style={styles.headerContent}>
                <View style={{width:'65%'}}>
                    <Text style={styles.house}>Casa de praia</Text>
                </View>

                <View style={{width:'35%'}}>
                    <Text stlye={styles.rating}>Casa de praia</Text>
                    <View style={{alignItems:'center',flexDirection:'row'}}>
                        <Stars
                            default={4}
                            count={5}
                            half={true}
                            starSize={20}
                            fullStar={ <Ionicons name="md-star" size={24} style={styles.myStarStyle} /> }
                            emptyStar={ <Ionicons name="md-star-outline" size={24} style={styles.myStarStyle} /> }
                            halfStar={  <Ionicons name="md-star-half" size={24} style={styles.myStarStyle} /> }
                        />
                    </View>
                </View>
            </View>
            <Text style={styles.price}>
                $1.200,20
            </Text>
            <Text style={styles.desciption}>
                Casa no va 24Hr
            </Text>
            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{paddingHorizontal:15, marginTop:35}}>
                    <View style={styles.slide}>
                        <Image source={icons2.hotel5}
                            style={{
                                width:90,
                                height:90,
                                borderRadius:8
                            }}/>
                        
                    </View>

                    <View style={styles.slide}>
                        <Image source={icons2.hotel6}
                            style={{
                                width:90,
                                height:90,
                                borderRadius:8
                            }}/>
                        
                    </View>

                    <View style={styles.slide}>
                        <Image source={icons2.hotel2}
                            style={{
                                width:90,
                                height:90,
                                borderRadius:8
                            }}/>
                        
                    </View>
            </ScrollView>
        </View>
    )
}
export default DetailScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF'
    },
    swiperContent:{
        flexDirection:'row',
        height:340,
        width:'100%'
    },
    headerContent:{
        paddingHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        marginTop:20
    },
    house:{
        fontSize:18,
        color:'#4f4a4a'
    },
    rating:{
        fontSize:9,
        color:'#4f4a4a'
    },
    myStarStyle:{
        color:'#E7A74e',
        backgroundColor:'transparent',
        textShadowColor:'#000',
        textShadowOffset:{width:1 , height: 1},
        textShadowRadius:1,
    },
    price:{
        paddingHorizontal:20,
        fontSize:16,
        color:'#4f4a4a',
        fontWeight:'bold'
    },
    desciption:{
        paddingHorizontal:20,
        color:'#4f4a4a',
        fontSize:14,
        lineHeight:20,
        marginTop:20
    },
    slide:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFF',
        height:90,
        width:90,
        borderRadius:8,
        marginRight:20,
    }
})  