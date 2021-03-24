import React,{useEffect} from 'react';
import {View, Text ,SafeAreaView,Image,TouchableOpacity,StyleSheet,FlatList} from 'react-native';
import {COLORS, icons,images,SIZES,FONTS} from '../constants';
import OneSignal from 'react-native-onesignal';
import files from '../assets/Share/sharebase64';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/Ionicons';


//6eb5e9a4-7129-43b5-b2ba-a7aded6f3fc9

const AboutScreen=({navigation})=>{
    const myCustomShare = async() => {
        const shareOptions = {
          message: 'Hello World',
          url: files.image1,
          // urls: [files.image1, files.image2]
        }
    
        try {
          const ShareResponse = await Share.open(shareOptions);
          console.log(JSON.stringify(ShareResponse));
        } catch(error) {
          console.log('Error => ', error);
        }
      };


    useEffect(()=>{
        OneSignal.init('6eb5e9a4-7129-43b5-b2ba-a7aded6f3fc9');
    
        OneSignal.addEventListener('opened',onOpened);
      },[])
    
      function onOpened(result){
        console.log('Mensagem:',result.notification.payload.body);
        console.log('Result',result);
    
        return () => OneSignal.removeEventListener('opened',onOpened);
      }


    const initialCurrentLocation = {
        streetName: "Trat Provide",
        gps: {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "เรือนไทยซีฟู้ด",
            icon: images.avatar_3,
        },
        {
            id: 2,
            name: "ทิวธารา",
            icon: images.avatar_4,
        },
        {
            id: 3,
            name: "เจ๊อิ๋ว ซีฟู้ด",
            icon: images.avatar_1,
        },
        {
            id: 4,
            name: "หนองบัวซีฟู้ด",
            icon: images.avatar_2,
        },
        {
            id: 5,
            name: "ภัตตาคารเเสงฟ้า",
            icon: images.avatar_5,
        },
        {
            id: 6,
            name: "หาดพลอยเเดงซีฟู้ด",
            icon: images.avatar_1,
        },

    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "หอยเชลล์อบเนย",
            categories: [1],
            priceRating: affordable,
            photo: images.thai01,

            
        },
        {
            id: 2,
            name: "ปูนึ่ง",
            categories: [2],
            priceRating: expensive,
            photo: images.tew001,

           
        },
        {
            id: 3,
            name: "ต้มยำทะเลน้ำข้น",
            categories: [3],
            priceRating: expensive,
            photo: images.jaaew001,

            
        },
        {
            id: 4,
            name: "ปลากระพงทอดน้ำปลา",
            categories: [4],
            priceRating: expensive,
            photo: images.nong001,
            
        },
        {
            id: 5,
            name: "น้ำพริกปูไข่",
            categories: [5],
            priceRating: affordable,
            photo: images.sunfa001,
           
        },
        {
            id: 6,
            name: "กุ้งลายเสือเผา",
            categories: [6],
            priceRating: affordable,
            photo: images.ploy001,
           
        },
        {
            id: 7,
            name: "ต้มยำกุ้ง",
            categories: [1],
            priceRating: affordable,
            photo: images.thai02,
           
        },
        {
            id: 8,
            name: "หมึกผัดไข่เค็ม",
            categories: [1],
            priceRating: affordable,
            photo: images.thai03,
           
        },
        {
            id: 9,
            name: "ปูนิ่มทอดกระเทียม",
            categories: [2],
            priceRating: affordable,
            photo: images.tew002,
           
        },
        {
            id: 10,
            name: "ข้าวผัดปู",
            categories: [2],
            priceRating: affordable,
            photo: images.tew003,
           
        },
        {
            id: 11,
            name: "หอยเชลล์ผัดฉ่า",
            categories: [3],
            priceRating: affordable,
            photo: images.jaaew002,
           
        },
        {
            id: 12,
            name: "กรรเชียงปูนึ่ง",
            categories: [3],
            priceRating: affordable,
            photo: images.jaaew003,
           
        },
        {
            id: 13,
            name: "ปลาหมึกผัดไข่เค็ม",
            categories: [4],
            priceRating: affordable,
            photo: images.nong002,
           
        },
        {
            id: 14,
            name: "ปูนิ่มทอดกระเทียม",
            categories: [4],
            priceRating: affordable,
            photo: images.nong003,
           
        },
        {
            id: 15,
            name: "หอยจ้อปู",
            categories: [5],
            priceRating: affordable,
            photo: images.sunfa002,
           
        },
        {
            id: 16,
            name: "กระหล่ำผัดน้ำปลา",
            categories: [5],
            priceRating: affordable,
            photo: images.sunfa003,
           
        },
        {
            id: 17,
            name: "ข้าวผัดปู",
            categories: [6],
            priceRating: affordable,
            photo: images.ploy002,
           
        },
        {
            id: 18,
            name: "ส้มตำปูม้า",
            categories: [6],
            priceRating: affordable,
            photo: images.ploy003,
           
        },

    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)

    function onSelectCategory(category){
        // filter restaurant

        let restaurantList = restaurantData.filter(a=> a.categories.includes
        (category.id))

        setRestaurants(restaurantList)
        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }


    {/*
    function renderHeader(){
        return(
            <View style={{flexDirection:'row',height:57,backgroundColor:'#E5B25D'}}>
               
                <TouchableOpacity style={{
                    width:50,
                    paddingLeft:SIZES.padding *2,
                    justifyContent:'center'
                }}
                onPress={()=>navigation.openDrawer()}>
                    <Icon
                        name="md-menu" size={25} color={'black'}
                   
                    />
                </TouchableOpacity>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <View style={{
                    width:'70%',
                    height:'100%',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:SIZES.radius
                }}>
                
                </View>
            </View>

            <TouchableOpacity style={{
                width:50,
                paddingRight:SIZES.padding*2,
                justifyContent:'center'
            }}
            onPress={myCustomShare}>
                <Image source={icons.shares}
                    resizeMode="contain"
                    style={{
                        width:30,
                        height:30
                    }}>

                </Image>
            </TouchableOpacity>
            </View>
        )
    }
*/}

    function renderMainCategories(){

        const renderItem = ({item}) =>{
            return(
                <TouchableOpacity
                    style={{
                        padding:SIZES.padding,
                        paddingBottom:SIZES.padding*2,
                        backgroundColor:(selectedCategory?.id == item.id) ? COLORS.primary: COLORS.orangeinal,
                        borderRadius:SIZES.radius,
                        alignItems:'center',
                        justifyContent:'center',
                        marginRight:SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={()=>onSelectCategory(item)}
                    >
                        <View style={{
                            width:50,
                            height:50,
                            borderRadius:25,
                            alignItems:'center',
                            justifyContent:'center',
                            backgroundColor:(selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}>
                            <Image
                                source={item.icon}
                                resizeMode="contain"
                                style={{
                                    width:30,
                                    height:30            
                                }}>

                            </Image>
                        </View>
                        <Text style={{
                            marginTop:SIZES.padding,
                            color:(selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}>
                            {item.name}
                        </Text>
                </TouchableOpacity>
            )
        }

        return(
            <View style={{padding:SIZES.padding*2}}>
                <Text style={{...FONTS.h1,color:COLORS.primary,fontWeight:'bold',fontSize:25}}>ร้านอาหารยอดนิยม</Text>
            
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{paddingVertical: SIZES.padding*2}}>

                </FlatList>
            </View>
            
        )
    }
    
    function renderRestaurantList(){
        const renderItem=({item}) =>(
            <TouchableOpacity
                style={{marginBottom:SIZES.padding * 2}}
                //onPress -> navigate to restaurant screen 
                >
                <View
                    style={{
                        marginBottom:SIZES.padding
                    }}>
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                                width:"100%",
                                height:200,
                                borderRadius:SIZES.radius
                               }}
                    />
                   
                </View>
                {/*Restaurant Info*/}

                    <Text style={{...FONTS.body2}}>{item.name}</Text>

                    <View
                        style={{
                            marginTop:SIZES.padding,
                            flexDirection:'row'
                        }}>
                            {/*Rating*/}
                        <Image
                            source={icons.star}
                                style={{
                                    height:20,
                                    width:20,
                                    tintColor:COLORS.primary,
                                    marginRight:10
                                }}
                        />
                        <Text style={{...FONTS.body3}}>{item.rating}</Text>

                        {/*Categories*/}
                        <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                    </View>
                                )
                            })
                        }
                            {/*Price*/}
                            
                        </View>
                    </View>
            </TouchableOpacity>
        )

        return(
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal:SIZES.padding*2,
                    paddingBottom:30
                }}>

            </FlatList>
        )
    }


    return(
       <SafeAreaView style={styles.container}>
           {renderMainCategories()}
           {renderRestaurantList()}
       </SafeAreaView>
    )
}
export default AboutScreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.lightGray4
    },
    shadow:{
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:3,
        },
        shadowOpacity:0.1,
        shadowRadius:3,
        elevation:1,
    }
})