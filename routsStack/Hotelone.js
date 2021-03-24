import React from 'react';
import {View, Text ,Image,TouchableOpacity,StyleSheet,Animated} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import Stars from 'react-native-stars';
import {icons2} from '../constants';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {COLORS, icons,images,SIZES,FONTS} from '../constants';
import {useNavigation} from '@react-navigation/native';
import MapScreen from '../screen/MapScreen';
import Swiper from 'react-native-swiper';
import Fontisto from 'react-native-vector-icons/Fontisto'

const DetailScreen=({route,navigation})=>{

    
  const scrollX = new Animated.Value(0); // Dots  
  const [restaurant, setRestaurant] = React.useState(null);

  React.useEffect(()=>{
    let {item } = route.params;

    setRestaurant(item)

  })

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
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    {nativeEvent : {contentOffset: {x: scrollX}}}
                ],{useNativeDriver:false})}
                //onScroll
            > 
                {
                    restaurant?.menu.map((item, index) => (
                    <View                  
                        key={`menu-${index}`}
                        style={{alignItems:'center'}}>
                            <View 
                                style={{
                                    height:SIZES.height * 0.35
                            }}>
                                {/*Food image*/}
                                <Image
                                    source={item.photo2}                 // Food images
                                    resizeMode="cover"
                                    style={{
                                    width:SIZES.width,
                                    height:'100%'
                                    
                                    }}
                                />
                                {/* Quantity */} 
                                    <View style={{marginLeft:10,marginTop:10}}>
                                        <Text style={{fontWeight:'bold',fontSize:15}}>{item.name}</Text>                               
                                        <Text style={{fontSize:12.5,marginTop:4}}>{item.locations}</Text>
                                        <Text style={{fontSize:15,marginTop:10}}>{item.text}</Text>
                                        <Text style={{fontSize:15,marginTop:5,fontWeight:'bold',color:'red'}}>{item.descriptionz}</Text>
                                        </View>
                            </View>
                      {/* Hotel Info */}   
                       <View style={{flexDirection:'row',marginTop:130}}>
                       <View style={styles.slide}>
                        <Image source={item.contentimg}
                            style={{
                                width:90,
                                height:90,
                                borderRadius:8
                            }}/>
                        
                    </View>

                    <View style={styles.slide}>
                        <Image source={item.contentimgtow}
                            style={{
                                width:90,
                                height:90,
                                borderRadius:8
                            }}/>
                        
                    </View>

                    <View style={styles.slide}>
                        <Image source={item.contentingthree}
                            style={{
                                width:90,
                                height:90,
                                borderRadius:8
                            }}/>
                        
                    </View>
                       </View>
                    </View>        
                    ))
                 }
            </Animated.ScrollView>    
            {/*
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
                ราคาเริ่มต้น
            </Text>
            <Text style={styles.desciption}>
                $ 900
            </Text>
            */}
            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{paddingHorizontal:15, marginTop:35}}>
                   
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
    },
    wrapper:{

    },
})  