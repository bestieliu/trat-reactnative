import React,{useState,useEffect} from 'react';
import {Dimensions, 
        Text, 
        View , 
        Image,
        ScrollView,
        StyleSheet,
        TouchableOpacity,
        StatusBar 
      } 
from 'react-native';

import { useTheme } from '@react-navigation/native';   // color top status phone
import Caraousel from '../component/Caraousel';        // screens Caraousel.js
import { dummyData } from '../data/Data';              // api image in file Data.js
import StartRating from '../component/StartRating'; // icons star

import Ionicons from 'react-native-vector-icons/Ionicons';    // icons 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // icons 
import Fontisto from 'react-native-vector-icons/Fontisto';    // icons 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' // icons 

import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)

const window = Dimensions.get('window');

const HomeScreen=({navigation})=>{

  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 2000);
    }, []);

  const { colors } = useTheme();

  const theme = useTheme();
  return(

    
    <View style={{flex:1,backgroundColor:'#EEEEEE'}}> 
      <StatusBar barStyle= { theme.dark ? "light-content" : "light-content" }/>
      <ScrollView>
      <Caraousel data = {dummyData}/>   
      {/* ----------------------------------- Slide Ads -----------------------------------*/}
      
      {/* ----------------------------------- Slide Ads -----------------------------------*/}
      {/*
        <View style={{
            marginTop:0,
        }}>
        <Image style={{
          borderBottomLeftRadius:50,
          borderBottomRightRadius:50,
          width: window.width,
          height: window.height / 2.5,
          resizeMode: 'cover'
        }}        
        source={require('../assets/blackpink.jpg')}
        />
        </View>
      */}
        
        
        {/* ----------------------------------- Menu -----------------------------------*/}
        {/*
        <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
          <View style={styles.categoryIcon}>
              <Ionicons name="ios-restaurant" size={35} color="#FF6347"/>             
          </View>
          <Text style={styles.categoryBtnTxt}>Restaurant</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
          <View style={styles.categoryIcon}>
              <MaterialCommunityIcons name="food-fork-drink" size={35} color="#FF6347"/>
          </View>
          <Text style={styles.categoryBtnTxt}>Fastfood Center</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
          <View style={styles.categoryIcon}>
              <MaterialCommunityIcons name="food" size={35} color="#FF6347"/>
          </View>
          <Text style={styles.categoryBtnTxt}>Sbacks Corner</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.categoryContainer, {marginTop: 10}]}>
        <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
          <View style={styles.categoryIcon}>
              <Fontisto name="hotel" size={35} color="#FF6347"/>
          </View>
          <Text style={styles.categoryBtnTxt}>Hotel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
          <View style={styles.categoryIcon}>
              <Ionicons name="md-restaurant" size={35} color="#FF6347"/>
          </View>
          <Text style={styles.categoryBtnTxt}>Dineouts</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
          <View style={styles.categoryIcon}>
              <MaterialIcons name="expand-more" size={35} color="#FF6347"/>
          </View>
          <Text style={styles.categoryBtnTxt}>Show More</Text>
          </TouchableOpacity>
        </View>
        */}

        {/* ----------------------------------- Menu -----------------------------------*/}

        {/* ----------------------------------- Card -----------------------------------*/}
          <View style={styles.cardsWrapper}>
                <Text style={{
                  fontSize:15,
                  fontWeight:'bold',
                  color:'#333'
                }}>กิจกรรมน่าสนใจ</Text>
                 <ShimmerPlaceHolder
                    style={{height:110,width:'100%'}}
                    autoRun={true}
                    visible={isVisible}>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                      <Image
                        source={require('../assets/viewimg/img1.jpg')}
                        resizeMode="cover"
                        style={styles.cardImg}
                        />
                    
                  </View>
                        <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>อำเภอเกาะช้าง</Text>
                          <StartRating ratings={4.5} reviews={150} point={"รีวิว"}/>
                        <Text style={styles.cardDetails}>เกาะขนาดใหญ่ที่มีพื้นที่่คุ้มครอง</Text>
                      </View>
                  </View>
                  </ShimmerPlaceHolder>
            </View>
        
        <View style={styles.cardsWrapper}>
          <ShimmerPlaceHolder
                    style={{height:110,width:'100%'}}
                    autoRun={true}
                    visible={isVisible}>
                <View style={styles.card}>
                  <View style={styles.cardImgWrapper}>
                    <Image
                      source={require('../assets/viewimg/img2.jpg')}
                      resizeMode="cover"
                      style={styles.cardImg}
                      />
                   
          </View>
          <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>เกาะรัง</Text>
              <StartRating ratings={4.6} reviews={85} point={"รีวิว"}/>
              <Text style={styles.cardDetails}>เกาะสวยงามซึ่งเป็นที่นิยมสำหรับดำน้ำตื้น</Text>
            </View>
          </View>
          </ShimmerPlaceHolder>
        </View>

        {/* ----------------------------------- Card -----------------------------------*/}


        {/* ----------------------------------- Logo and Title box 2 -----------------------------------*/}

        <View style={{borderBottomColor:'black',borderBottomWidth:1,marginHorizontal:16,paddingTop:10}}/>
        
        {/*
        <View style={{height:30,width:150,marginLeft: '30%',marginBottom:10,marginTop:20}}>
              <Image source={require('../assets/viewlogo/cass.png')}
                    style={{height:undefined,width:undefined,resizeMode:'cover',flex:1}}/>
        </View>
        */}
            <View>
              
                    <View style={{flexDirection:'row',marginBottom:0,paddingHorizontal:16,marginTop:10}}>                              
                        <Text style={styles.badge}>Hot</Text>   
                        <Text style={{fontSize:18,fontWeight:'bold',color: colors.text,marginLeft:2}}>เกาะขาม</Text>   
                             
                      {/* <Text style={{fontSize:15,fontWeight:'bold',color:'green'}}>See All</Text> */}
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10,paddingHorizontal:16,marginTop:0}}>
                        <Text style={{fontSize:12,color:'#4f4a4a'}}>ในจังหวัดตราด เกาะช้าง, ตราด</Text>
                        
                      {/* <Text style={{fontSize:15,fontWeight:'bold',color:'green'}}>See All</Text> */}
                    </View>
            </View>

           
            
           
          {/* ----------------------------------- Logo and Title box 2 -----------------------------------*/}

            {/* -----------------------------------ScrollView Album ----------------------------------*/}          
            <View>
            <ScrollView horizontal style={{flexDirection:'row',paddingLeft:16}}>             
                <TouchableOpacity onPress={()=>navigation.navigate('Ice')}>
                  <View style={{marginRight:16}}>
                      <View style={{width:100,height:100,borderRadius:4,backgroundColor:'pink',borderRadius:8}}>
                          <Image source={require('../assets/scroimg/img01.jpg')}
                              style={{height:undefined,width:undefined,resizeMode:'cover',flex:1,borderRadius:8}}/>
                      </View>
                       {/*       <Text style={{fontSize:15,fontWeight:'bold',marginTop:10,color: colors.text}}>Lisa</Text> */}
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Kill')}>
                    <View style={{marginRight:16}}>
                        <View style={{width:100,height:100,borderRadius:4,backgroundColor:'pink',borderRadius:8}}>
                            <Image source={require('../assets/scroimg/img02.jpg')}
                                style={{height:undefined,width:undefined,resizeMode:'cover',flex:1,borderRadius:8}}/>
                        </View>
                         {/*       <Text style={{fontSize:15,fontWeight:'bold',marginTop:10,color: colors.text}}>Lisa</Text> */}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Like')}>
                    <View style={{marginRight:16}}>
                        <View style={{width:100,height:100,borderRadius:4,backgroundColor:'pink',borderRadius:8}}>
                              <Image source={require('../assets/scroimg/img03.jpg')}
                                  style={{height:undefined,width:undefined,resizeMode:'cover',flex:1,borderRadius:8}}/>
                        </View>
                               {/*     <Text style={{fontSize:15,fontWeight:'bold',marginTop:10,color: colors.text}}>Lisa</Text> */}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Love')}>
                <View style={{marginRight:16}}>

                    <View style={{width:100,height:100,borderRadius:4,backgroundColor:'pink',borderRadius:8}}>
                    <Image source={require('../assets/scroimg/img04.jpg')}
                    style={{height:undefined,width:undefined,resizeMode:'cover',flex:1,borderRadius:8}}/>
                    </View>
                 {/*   <Text style={{fontSize:15,fontWeight:'bold',marginTop:10,color: colors.text}}>Lisa</Text> */}
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Solo')}>
                <View style={{marginRight:16}}>
                    <View style={{width:100,height:100,borderRadius:4,backgroundColor:'pink',borderRadius:8}}>
                    <Image source={require('../assets/scroimg/img05.jpg')}
                    style={{height:undefined,width:undefined,resizeMode:'cover',flex:1,borderRadius:8}}/>
                    </View>
                   {/* <Text style={{fontSize:15,fontWeight:'bold',marginTop:10,color: colors.text}}>Lisa</Text> */}
                </View>
                </TouchableOpacity>
            </ScrollView>
            </View>






            <View>
              
              <View style={{flexDirection:'row',marginBottom:0,paddingHorizontal:16,marginTop:10}}>                              
                  <Text style={styles.badge}>Hot</Text>   
                  <Text style={{fontSize:18,fontWeight:'bold',color: colors.text,marginLeft:2}}>อ่าวตาลคู่</Text>   
                       
                {/* <Text style={{fontSize:15,fontWeight:'bold',color:'green'}}>See All</Text> */}
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10,paddingHorizontal:16,marginTop:0}}>
                  <Text style={{fontSize:12,color:'#4f4a4a'}}>ในจังหวัดตราด ตำบล.บางปิด อำเภอ.แหลมงอบ ตราด </Text>
                  
                {/* <Text style={{fontSize:15,fontWeight:'bold',color:'green'}}>See All</Text> */}
              </View>
      </View>


            <View>
            <ScrollView horizontal style={{flexDirection:'row',paddingLeft:16}}>             
                <TouchableOpacity onPress={()=>navigation.navigate('Ice')}>
                  <View style={{marginRight:16}}>
                      <View style={{width:100,height:100,borderRadius:4,backgroundColor:'pink',borderRadius:8}}>
                          <Image source={require('../assets/scroimg/arowtant01.jpg')}
                              style={{height:undefined,width:undefined,resizeMode:'cover',flex:1,borderRadius:8}}/>
                      </View>
                       {/*       <Text style={{fontSize:15,fontWeight:'bold',marginTop:10,color: colors.text}}>Lisa</Text> */}
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Kill')}>
                    <View style={{marginRight:16}}>
                        <View style={{width:100,height:100,borderRadius:4,backgroundColor:'pink',borderRadius:8}}>
                            <Image source={require('../assets/scroimg/arowtant02.jpg')}
                                style={{height:undefined,width:undefined,resizeMode:'cover',flex:1,borderRadius:8}}/>
                        </View>
                         {/*       <Text style={{fontSize:15,fontWeight:'bold',marginTop:10,color: colors.text}}>Lisa</Text> */}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Like')}>
                    <View style={{marginRight:16}}>
                        <View style={{width:100,height:100,borderRadius:4,backgroundColor:'pink',borderRadius:8}}>
                              <Image source={require('../assets/scroimg/arowtant0033.jpg')}
                                  style={{height:undefined,width:undefined,resizeMode:'cover',flex:1,borderRadius:8}}/>
                        </View>
                               {/*     <Text style={{fontSize:15,fontWeight:'bold',marginTop:10,color: colors.text}}>Lisa</Text> */}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Love')}>
                <View style={{marginRight:16}}>

                    <View style={{width:100,height:100,borderRadius:4,backgroundColor:'pink',borderRadius:8}}>
                    <Image source={require('../assets/scroimg/arowtant0004.jpg')}
                    style={{height:undefined,width:undefined,resizeMode:'cover',flex:1,borderRadius:8}}/>
                    </View>
                 {/*   <Text style={{fontSize:15,fontWeight:'bold',marginTop:10,color: colors.text}}>Lisa</Text> */}
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Solo')}>
                <View style={{marginRight:16}}>
                    <View style={{width:100,height:100,borderRadius:4,backgroundColor:'pink',borderRadius:8}}>
                    <Image source={require('../assets/scroimg/arowtant05.jpg')}
                    style={{height:undefined,width:undefined,resizeMode:'cover',flex:1,borderRadius:8}}/>
                    </View>
                   {/* <Text style={{fontSize:15,fontWeight:'bold',marginTop:10,color: colors.text}}>Lisa</Text> */}
                </View>
                </TouchableOpacity>
            </ScrollView>
            </View>
            {/* -----------------------------------ScrollView Album ----------------------------------*/}

            <View style={{borderBottomColor:'black',borderBottomWidth:1,marginTop:10,marginBottom:20,marginHorizontal:16}}/>

            {/*
            <View style={styles.cardsWrapper}>
                <View style={styles.card1}>
                    <View style={styles.cardImgWrapper}>
                      <Image
                        source={require('../assets/imgfill/iu301.jpg')}
                        resizeMode="cover"
                        style={styles.cardImg}
                      />
              </View>       
              <View style={styles.cardInfo2}>
                <Text style={styles.cardTitle}>Background information</Text>
                <Text style={styles.cardDetails}>Origin :  Seoul,South Korea</Text>
                <Text style={styles.cardDetails}>Genres : K-pop , EDM , hiphop</Text>
                <Text style={styles.cardDetails}>Years active : 2016-present</Text>
                <Text style={styles.cardDetails}>Lables : YG , interscope</Text>
                <Text style={styles.cardDetails}>Associated acts : YG Family</Text>
              </View>
            </View>
          </View>
            */}

          </ScrollView>
    </View>
  )

}
const styles = StyleSheet.create({
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
    categoryBtn: {
      flex: 1,
      width: '30%',
      marginHorizontal: 0,
      alignSelf: 'center',
    },
    categoryIcon: {
      borderWidth: 0,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: 70,
      height: 70,
      backgroundColor: '#fdeae7' /* '#FF6347' */,
      borderRadius: 50,
    },
    cardsWrapper:{
      marginTop:20,
      width:'90%',
      alignSelf:'center',
    },
    card:{
      height:100,
      marginVertical:10,
      flexDirection:'row',
      shadowColor:'#999',
      shadowOffset: {width:0, height:1},
      shadowOpacity:0.8,
      shadowRadius:2,
      elevation:5,
    },
    card1:{
      height:300,
      marginVertical:10,
      flexDirection:'column',
      shadowColor:'#999',
      shadowOffset: {width:0, height:1},
      shadowOpacity:0.8,
      shadowRadius:2,
      elevation:5,
    },
    cardImgWrapper:{
      flex:1,
    },
    cardImg:{
      height:'100%',
      width:'100%',
      alignSelf:'center',
      borderRadius:8,
      borderBottomRightRadius:0,
      borderTopRightRadius:0
    },
    cardInfo:{
      flex:2,
      padding:10,
      borderColor:"#ccc",
      borderWidth:1,
      borderLeftWidth:0,
      borderBottomRightRadius:8,
      borderTopRightRadius:8,
      backgroundColor:'#fff',
    },
    cardInfo2:{
   
      padding:10,
      borderColor:"#ccc",
      borderWidth:1,
      borderLeftWidth:0,
      borderBottomRightRadius:8,
      borderTopRightRadius:8,
      backgroundColor:'#fff',
    },
    cardTitle:{
      fontWeight:'bold',
      color:'black'
    },
    cardDetails:{
      fontSize:12,
      color:'#444'
    },
    dot:{
      width:4,
      height:4,
      borderRadius:4,
      backgroundColor:'red',
      marginHorizontal:4,
  },
  badge:{
      color:'red',
      fontSize:9,
  },

})
export default HomeScreen;