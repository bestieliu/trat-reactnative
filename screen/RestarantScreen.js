import React,{useEffect} from 'react';
import {View, Text ,SafeAreaView,Image,TouchableOpacity,StyleSheet,FlatList,ScrollView} from 'react-native';
import {COLORS, icons,images,SIZES,FONTS,icons2} from '../constants';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto'
import StartRating from '../component/StartRating'; // icons star


const RestarantScreen=({navigation})=>{

    const categoryData = [
        {
            id: 1,
            name: "Rice",
            icon: icons2.hotel1,
        },
        {
            id: 2,
            name: "Noodles",
            icon: icons2.hotel2,
        },
        {
            id: 3,
            name: "Hot Dogs",
            icon: icons2.hotel3,
        },
        {
            id: 4,
            name: "Salads",
            icon: icons2.hotel4,
        },
        {
            id: 5,
            name: "Burgers",
            icon: icons2.hotel5,
        },
        {
            id: 6,
            name: "Pizza",
            icon: icons2.hotel6,
        },
        {
            id: 7,
            name: "Snacks",
            icon: icons2.hocityhotel01,
        },
        {
            id: 8,
            name: "Sushi",
            icon: icons2.avadahtotel,
        },
        {
            id: 9,
            name: "Desserts",
            icon: icons2.JRGrandHotel,
        },
    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "Trat City Hotel",
            ratings: 3,
            reviews:625,
            categories: [5, 7],
            description:"ใจกลางเมืองตราด, ตราด",
            point:"รีวิว",
            priceRating: affordable,
            photo: icons2.hocityhotel01,
            photo2:icons2.hotel1,
            duration: "30 - 45 min",
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Amy"
            },
            menu: [
                {
                    menuId: 1,
                    name: "ตราด ซิตี้ โฮเต็ล (TRAT CITY HOTEL)",
                    photo: images.crispy_chicken_burger,
                    photo2: icons2.hocity01,
                    descriptionz: "฿724 ต่อคืน",
                    calories: 200,
                    text:"เริ่มต้นที่",
                    locations:"411/17 หมู่ 2 ต.วังกระแจะ อ.เมือง จ.ตราด",
                    contentimg:icons2.hocity001,
                    contentimgtow:icons2.hocity002,
                    contentingthree:icons2.hocity003,
                    
        
                },
                {
                    menuId: 2,
                    name: "ห้องอาหาร",
                    photo: images.honey_mustard_chicken_burger,
                    photo2:icons2.hocity02,
                    description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
                    calories: 250,
                    price: 15,
                    contentimg:icons2.hocity010,
                    contentimgtow:icons2.hocity011,
                    contentingthree:icons2.hocity012
                },
                {
                    menuId: 3,
                    name: "ห้องนอน",
                    photo: images.baked_fries,
                    photo2:icons2.hocity03,
                    description: "Crispy Baked French Fries",
                    calories: 194,
                    price: 8,
                    contentimg:icons2.hocity021,
                    contentimgtow:icons2.hocity022,
                    contentingthree:icons2.hocity023
                },
                {
                    menuId: 4,
                    name: "กีฬาเเละกิจกรรมสันทนาการ",
                    photo: images.baked_fries,
                    photo2:icons2.hocity04,
                    description: "Crispy Baked French Fries",
                    calories: 194,
                    price: 8,
                    contentimg:icons2.hocity031,
                }
            ]
        },
        {
            id: 2,
            name: "Koh Chang Paradise Hill",
            ratings: 3,
            reviews:898,
            categories: [2, 4, 6],
            description:"หาดคลองพร้าว, เกาะช้าง",
            point:"รีวิว",
            priceRating: expensive,
            photo: icons2.kohchang,
            photo2:icons2.hotel2,
            duration: "15 - 20 min",
            location: {
                latitude: 1.556306570595712,
                longitude: 110.35504616746915,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Jackson"
            },
            menu: [
                {
                    menuId: 4,
                    name: "เกาะช้างพาราไดซ์ฮิลล์ (Koh Chang Paradise Hill)",
                    photo: images.hawaiian_pizza,
                    photo2: icons2.ch01,
                    descriptionz: "฿1,606 ต่อคืน",
                    calories: 250,
                    locations:"39/20 หมู่ 4, หาดคลองพร้าว, เกาะช้าง, ประเทศไทย",
                    text:"เริ่มต้นที่",
                    contentimg:icons2.chang001,
                    contentimgtow:icons2.chang002,
                    contentingthree:icons2.chang003,
                },
                {
                    menuId: 5,
                    name: "พื้นที่สาธารณะ",
                    photo: images.pizza,
                    photo2: icons2.ch02,
                    description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
                    calories: 250,
                    price: 20,
                    contentimg:icons2.chang010,
                    contentimgtow:icons2.chang011,
                    contentingthree:icons2.chang012
                },
                {
                    menuId: 6,
                    name: "ห้องนอน",
                    photo: images.tomato_pasta,
                    photo2: icons2.ch03,
                    description: "Pasta with fresh tomatoes",
                    calories: 100,
                    price: 10,
                    contentimg:icons2.chang021,
                    contentimgtow:icons2.chang022,
                    contentingthree:icons2.chang023
                },
                {
                    menuId: 7,
                    name: "สภาพเเวดล้อมโดยรอบ",
                    photo: images.salad,
                    photo2: icons2.ch04,
                    description: "Finely chopped lettuce, tomatoes, cucumbers",
                    calories: 100,
                    price: 10,
                    contentimg:icons2.chang031,
                    contentimgtow:icons2.chang032,
                    contentingthree:icons2.chang033
                }
            ]
        },
        {
            id: 3,
            name: "J.P.Grand Hotel",
            ratings: 4,
            reviews:119,
            categories: [3],
            description:"ใจกลางเมืองตราด,ตราด",
            point:"รีวิว",
            priceRating: expensive,
            photo: icons2.JRGrandHotel,
            photo2:icons2.hotel3,
            duration: "20 - 25 min",
            location: {
                latitude: 1.5238753474714375,
                longitude: 110.34261833833622,
            },
            courier: {
                avatar: images.avatar_3,
                name: "James"
            },
            menu: [
                {
                    menuId: 8,
                    name: "เจ.พี.เเกรนด์ โฮเต็ล (J.P.Grand Hotel)",
                    photo: images.chicago_hot_dog,
                    photo2: icons2.jp01,
                    descriptionz: "฿973 ต่อคืน",
                    calories: 100,
                    locations:"555 หมู่.3, อ.เมือง, จ.ตราด",
                    text:"เริ่มต้นที่",
                    contentimg:icons2.jp001,
                    contentimgtow:icons2.jp002,
                    contentingthree:icons2.jp003,
                },
                {
                    menuId: 9,
                    name: "ห้องอาหารเเละเครื่องดื่ม",
                    photo: images.sushi,
                    photo2: icons2.jp02,
                    description: "Fresh salmon, sushi rice, fresh juicy avocado",
                    calories: 100,
                    price: 50,
                    contentimg:icons2.jp011,
                    contentimgtow:icons2.jp012,
                    contentingthree:icons2.jp013
                },
                {
                    menuId: 10,
                    name: "ห้องนอน",
                    photo: images.sushi,
                    photo2: icons2.jp03,
                    description: "Fresh salmon, sushi rice, fresh juicy avocado",
                    calories: 100,
                    price: 50,
                    contentimg:icons2.jp021,
                    contentimgtow:icons2.jp022,
                    contentingthree:icons2.jp023
                },
                {
                    menuId: 11,
                    name: "ทัศนียภาพ",
                    photo: images.sushi,
                    photo2: icons2.jp04,
                    description: "Fresh salmon, sushi rice, fresh juicy avocado",
                    calories: 100,
                    price: 50,
                    contentimg:icons2.jp031,
                    contentimgtow:icons2.jp032,
                    contentingthree:icons2.jp033
                }
            ]
        },
        {
            id: 4,
            name: "Hotel Toscana Trad",
            ratings: 3,
            reviews:"1,278",
            categories: [8],
            description:"ใจกลางเมืองตราด, ตราด",
            point:"รีวิว",
            priceRating: expensive,
            photo: icons2.hoteltoscana,
            photo2:icons2.hoteltoscana,
            duration: "10 - 15 min",
            location: {
                latitude: 1.5578068150528928,
                longitude: 110.35482523764315,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Ahmad"
            },
            menu: [
                {
                    menuId: 12,
                    name: "โรงเเรมทอสคานา ตราด (Hotel Toscana Trad)",
                    photo: images.sushi,
                    photo2: icons2.hotelcana01,
                    descriptionz: "฿746 ต่อคืน",
                    calories: 100,
                    locations:"155/4 หมู่ 5 ต.หนองเสม็ด อ.เมือง , จ.ตราด",
                    text:"เริ่มต้นที่",
                    contentimg:icons2.cana001,
                    contentimgtow:icons2.cana002,
                    contentingthree:icons2.cana003,
                },
                {
                    menuId: 13,
                    name: "สระว่ายน้ำกลางเเจ้ง",
                    photo: images.sushi,
                    photo2: icons2.hotelcana02,
                    description: "Fresh salmon, sushi rice, fresh juicy avocado",
                    calories: 100,
                    price: 50,
                    contentimg:icons2.cana011,
                    contentimgtow:icons2.cana012,
                    contentingthree:icons2.cana013
                },
                {
                    menuId: 14,
                    name: "พื้นที่สาธารณะ",
                    photo: images.sushi,
                    photo2: icons2.hotelcana03,
                    description: "Fresh salmon, sushi rice, fresh juicy avocado",
                    calories: 100,
                    price: 50,
                    contentimg:icons2.cana021,
                    contentimgtow:icons2.cana022,
                    contentingthree:icons2.cana023,
                },
                {
                    menuId: 15,
                    name: "ห้องนอน",
                    photo: images.sushi,
                    photo2: icons2.hotelcana04,
                    description: "Fresh salmon, sushi rice, fresh juicy avocado",
                    calories: 100,
                    price: 50,
                    contentimg:icons2.cana031,
                    contentimgtow:icons2.cana032,
                    contentingthree:icons2.cana033
                }
            ]
        },
        {
            id: 5,
            name: "Canvas Family Home",
            ratings: 3,
            reviews:276,
            categories: [1, 2],
            description:"ใจกลางเมืองตราด, ตราด",
            point:"รีวิว",
            priceRating: affordable,
            photo: icons2.canvahotel,
            photo2:icons2.hotel5,
            duration: "15 - 20 min",
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 16,
                    name: "เเคนวาส เเฟมิลี่ โฮม (Canvas Family Home)",
                    photo: images.kolo_mee,
                    photo2: icons2.canva01,
                    descriptionz: "฿746 ต่อคืน",
                    calories: 200,
                    locations:"313/2-3 หมู่ 7 ตำบลหนองเสม็ด อำเภอเมืองตราด จังหวัดตราด",
                    text:"เริ่มต้นที่",
                    contentimg:icons2.cava001,
                    contentimgtow:icons2.cava002,
                    contentingthree:icons2.cava003,
                },
                {
                    menuId: 17,
                    name: "ห้องอาหาร เครื่องดื่ม ของว่าง",
                    photo: images.sarawak_laksa,
                    photo2: icons2.canva02,
                    description: "Vermicelli noodles, cooked prawns",
                    calories: 300,
                    price: 8,
                    contentimg:icons2.cava011,
                    contentimgtow:icons2.cava012,
                    contentingthree:icons2.cava013
                },
                {
                    menuId: 18,
                    name: "ห้องนอน",
                    photo: images.nasi_lemak,
                    photo2: icons2.canva03,
                    description: "A traditional Malay rice dish",
                    calories: 300,
                    price: 8,
                    contentimg:icons2.cava021,
                    contentimgtow:icons2.cava022,
                    contentingthree:icons2.cava023
                },
                {
                    menuId: 19,
                    name: "ทัศนียภาพ",
                    photo: images.nasi_briyani_mutton,
                    photo2: icons2.canva04,
                    description: "A traditional Indian rice dish with mutton",
                    calories: 300,
                    price: 8,
                    contentimg:icons2.cava031,
                    contentimgtow:icons2.cava032,
                    contentingthree:icons2.cava033
                },

            ]
        },
        {

            id: 6,
            name: "Avada Hotel",
            ratings: 3,
            reviews:625,
            categories: [9, 10],
            description:"ใจกลางเมืองตราด, ตราด",
            point:"รีวิว",
            priceRating: affordable,
            photo: icons2.avadahtotel,
            photo2:icons2.hotel6,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 20,
                    name: "เอวาด้า โฮเต็ล (Avada Hotel)",
                    photo: images.teh_c_peng,
                    photo2: icons2.avada01,
                    descriptionz: "฿905 ต่อคืน",
                    calories: 100,
                    locations:"ที่ตั้ง 1 หมู่ 5 ต.วังกระแจะ อ.เมือง จ.ตราด",
                    text:"เริ่มต้นที่",
                    contentimg:icons2.ava001,
                    contentimgtow:icons2.ava002,
                    contentingthree:icons2.ava003,
                },
                {
                    menuId: 21,
                    name: "ห้องอาหาร เครื่องดื่ม ของว่าง",
                    photo: images.ice_kacang,
                    photo2: icons2.avada02,
                    description: "Shaved Ice with red beans",
                    calories: 100,
                    price: 3,
                    contentimg:icons2.ava011,
                    contentimgtow:icons2.ava012,
                    contentingthree:icons2.ava013
                },
                {
                    menuId: 22,
                    name: "ห้องนอน",
                    photo: images.kek_lapis,
                    photo2: icons2.avada03,
                    description: "Layer cakes",
                    calories: 300,
                    price: 20,
                    contentimg:icons2.ava021,
                    contentimgtow:icons2.ava022,
                    contentingthree:icons2.ava023
                },
                {
                    menuId: 23,
                    name: "ทัศนียภาพ",
                    photo: images.sushi,
                    photo2: icons2.hotel4,
                    photo2: icons2.avada04,
                    description: "Fresh salmon, sushi rice, fresh juicy avocado",
                    calories: 100,
                    price: 50,
                    contentimg:icons2.ava031,
                    contentimgtow:icons2.ava032,
                    contentingthree:icons2.ava033
                }
            ]

        }

    ]



    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)

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



    function renderHeader(){
        return(
            <View style={styles.header}>
                <View style={styles.inputArea}>
                    <Icon
                        name="search1"
                        size={24}
                        color="black">
                    </Icon>
                        <TextInput 
                        placeholder="ค้นหา ที่พักในจังหวัดตราด"
                        style={styles.input}/>
                 </View>
            </View>
        )
    }

    function renderMainCategories(){
        // Hotel info
        const renderItem = ({item}) =>{
            return(          
                <TouchableOpacity
                    style={{
                        marginTop:20,
                        backgroundColor:'#FFF',
                        height:250,
                        width:200,
                        elevation:2,
                        borderRadius:10,
                        padding:15,
                        marginRight:30,
                        marginLeft:2,
                        ...styles.shadow
                    }}
                    onPress={()=>navigation.navigate('HoteloneStack',{
                        item,
                    })}
                    >
                            <Image
                                source={item.photo}
                                resizeMode="cover"
                                style={{
                                    width:170,
                                    height:110,
                                    borderRadius:10
                               }}
                            />
                            <View style={styles.content}>
                            <Text style={styles.title}>{item.name}</Text>

                            <View style={styles.dot}/>
                               <Text style={styles.badge}>เเนะนำ</Text>            
                            </View>
                            <View>                          
                            <Text style={styles.description}>
                                     <Fontisto
                                        name="map-marker-alt"
                                        size={16}
                                        color="red"
                                    >
                                     </Fontisto>
                                    {item.description}
                                </Text>
                            </View>
                            <StartRating ratings={item.ratings} reviews={item.reviews} point={item.point}/>
                </TouchableOpacity>
            )
        }

        return(
            <View style={{padding:SIZES.padding*2}}>
                <View style={styles.contentNew}>
                <Text style={styles.title1}>ที่พักเเนะนำ</Text>
            </View>

                <FlatList
                    data={restaurants}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{paddingVertical: SIZES.padding*2,}}>
                </FlatList>
            </View>         
        )
    }


    {/*
    function renderHouse(){
        // Hotel info
        const renderItem = ({item}) =>{
            return(          
                <TouchableOpacity
                    onPress={()=>navigation.navigate('HoteltwoStack',{
                        item,
                    })}
                    >
                            <View style={styles.container2}>
                                <View>
                                    <Image
                                        source={item.photo2}
                                        resizeMode="cover"
                                        style={{
                                            borderRadius:10,
                                            height:60,
                                            width:60
                                        }}/>
                            </View>
                                <View stlye={styles.content}>
                                    <Text style={styles.description}>Desricao sia</Text>
                                    <Text style={styles.price}>$ 954,60</Text>
                                </View>
                            </View>
                </TouchableOpacity>
            )
        }

        return(
            <View style={{padding:SIZES.padding*2}}>
                <FlatList
                    data={restaurants}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{paddingVertical: SIZES.padding*2,}}>
                </FlatList>
            </View>         
        )
    }

    */}

    

    return(
       <ScrollView style={styles.container}>
           {renderHeader()}
           {renderMainCategories()}
     
       </ScrollView>
    )
}
export default RestarantScreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.lightGray4
    },
    container2:{
        flexDirection:'row',
        width:260,
        height:70,
        backgroundColor:'#FFF',
        elevation:2,
        padding:6,
        marginVertical:5,
        marginRight:20,
        marginLeft:2,
        borderRadius:10
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
    },
    container1:{
        marginTop:20,
        backgroundColor:'#FFF',
        height:250,
        width:200,
        elevation:2,
        borderRadius:10,
        padding:15,
        marginRight:30,
        marginLeft:2,
        marginBottom:5,
    },
    cover:{
        width:170,
        height:110,
        borderRadius:10
    },
    content:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10
    },
    title:{
        fontSize:13,
        color:'#4f4a4a',
        fontWeight:'bold'
    },
    title1:{
        fontSize:20,
        color:'#4f4a4a',
        fontWeight:'bold'
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
        fontSize:9.3,
    },
    description:{
        fontSize:10,
        color:'#4f4a4a',
        
    },
    footer:{
        flexDirection:'row',
        marginTop:5,
        alignItems:'center',
        width:'100%'
    },
    price:{
        fontSize:15
    },
    header:{
        paddingHorizontal:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        marginVertical:20,
    },
    inputArea:{
        paddingHorizontal:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'98%',
        backgroundColor:'#FFF',
        elevation:2,
        paddingHorizontal:10,
        height:37,
        borderRadius:10,
    },
    input:{
        paddingHorizontal:10,
        fontSize:13,
        width:'90%'
    },

})




{/*     
     <View style={{padding:SIZES.padding*2}}>
                <Text style={{...FONTS.h1}}>ร้านอาหาร</Text>
                <Text style={{...FONTS.h3,}}></Text>

                <FlatList
                    data={restaurants}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{paddingVertical: SIZES.padding*2,}}>
                </FlatList>
            </View>
        */}