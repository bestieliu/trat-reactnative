import React from 'react';
import {View, Text , SafeAreaView, TouchableOpacity,Animated,Image, StyleSheet} from 'react-native';
import {icons,FONTS,COLORS,SIZES} from '../constants';


const Hoteltwo=({route,navigation})=>{


  const scrollX = new Animated.Value(0); // Dots  
  const [restaurant, setRestaurant] = React.useState(null);

  React.useEffect(()=>{
    let {item } = route.params;

    setRestaurant(item)

  })

    function renderHeader(){
      return(
        
        <View style={{flexDirection:'row'}}> 
     
          <TouchableOpacity
            style={{
              width:50,
              paddingLeft:SIZES.padding *2,
              justifyContent:'center'
            }}
            onPress={()=>navigation.goBack()}
          >
            <Image 
            source={icons.back}
            resizeMode="contain"
              style={{
                width:25,
                height:25
              }}
            />

          </TouchableOpacity>
        

          {/*Restaurant Name Section*/}
          
            <View style={{
              flex:1,
              alignItems:'center',
              justifyContent:'center'
            }}> 
              <View style={{
                height:50,
                alignItems:'center',
                justifyContent:'center',
                paddingHorizontal:SIZES.padding*3,
                borderRadius:SIZES.radius,
                backgroundColor:COLORS.lightGray3,
              }}
              >
                <Text style={{...FONTS.h2}}>{restaurant?.name}</Text>
              </View>
            </View>

           
              <TouchableOpacity
                style={{
                  width:50,
                  paddingRight:SIZES.padding*2,
                  justifyContent:'center',
                }}>
                  {/*
                   <Image source={icons.list}
                   resizeMode="contain"
                    style={{
                        width:30,
                        height:30
                    }}
                />
                  */}
              </TouchableOpacity>
               
        </View>
      )
    }

    function renderFoodInfo(){
      return(
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
                      <View style={{
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
                        
                      </View>

                      {/*Name and Desription */}
                      <View
                        style={{
                          width:SIZES.width,
                          alignItems:'center',
                          marginTop:15,
                          paddingHorizontal:SIZES.padding*2
                        }}>
                          <Text style={{marginVertical:10,textAlign:'center',...FONTS.h2}}>
                            {item.name} - {item.price.toFixed(2)}
                          </Text>
                          <Text style={{...FONTS.body3}}>{item.description}</Text>
                      </View>

                      {/*Calories*/}

                      <View
                        style={{
                          flexDirection:'row',
                          marginTop:10
                        }}>
                          <Image source={icons.fire}
                            style={{
                              width:20,
                              height:20,
                              marginRight:10
                            }}
                          />
                              <Text style={{...FONTS.body3,color:COLORS.darkgray}}>{item.calories.toFixed(2)} call</Text>
                      </View>

                  </View>
                ))
              }
        </Animated.ScrollView>
      )
    }

    function renderDots(){

        const dotPosition = Animated.divide(scrollX, SIZES.width)

        return(
            <View style={{ height:30}}> 
                <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'center',
                        height:SIZES.padding                    
                    }}>

                    {restaurant?.menu.map((item, index)=> {

                        const opacity = dotPosition.interpolate({
                            inputRange: [index - 1, index, index +1 ],
                            outputRange: [0.3,1,0.3],
                            extrapolate:'clamp'
                        })

                        const dotSize = dotPosition.interpolate({
                            inputRange:[index - 1 ,index,index + 1 ],
                            outputRange: [SIZES.base * 1.5,11,SIZES.base * 1.5],
                            extrapolate:'clamp',
                        })

                        const dotColor = dotPosition.interpolate({
                            inputRange:[index -1 , index, index +1],
                            outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
                            extrapolate:'clamp'
                        })

                        return(
                            <Animated.View
                            key={`dot-${index}`}
                            opacity={opacity}
                            style={{
                                borderRadius:SIZES.radius,
                                marginHorizontal:6,
                                width:dotSize,
                                height:dotSize,
                                backgroundColor:dotColor
                            }}
                            >

                            </Animated.View>
                        )
                     })}
                </View>
            </View>
        )
    }

    function renderOrder(){
        return(
            <View>
                {
                    renderDots()
                }
            </View>
        )
    }


  return(
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderFoodInfo()}
      {renderOrder()}
    </SafeAreaView>
  )

}
export default Hoteltwo;
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.lightGray2
  }
})