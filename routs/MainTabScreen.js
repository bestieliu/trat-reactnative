import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text , Image ,TouchableOpacity} from 'react-native';
import {createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';
import Svg,{Path} from 'react-native-svg';
import {COLORS , icons} from '../constants';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screen/HomeScreen';
import AboutScreen from '../screen/AboutScreen';
import MapScreen from '../screen/MapScreen';
import RestarantScreen from '../screen/RestarantScreen';
import {DrawerContent} from '../screen/DrawerContent';
import ExploerScreen from '../screen/ExploerScreen';
import DetailScreen from '../screen/DetailScreen';
import ScannerQR from '../component/ScannerQR';
import Hotelone from '../routsStack/Hotelone';
import Hoteltwo from '../routsStack/Hoteltwo';
import OrderFood from '../screen/OrderFood';
import Share from 'react-native-share';
import files from '../assets/Share/sharebase64';
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();
const RestaurantStack = createStackNavigator();

const TabBarCustomButton = ({accessibilityState, children, onPress}) =>{

  var isSelected = accessibilityState.selected
  if(isSelected){
      return(
          <View style={{ flex: 1, alignItems: "center" }}>
          <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
              <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
              <Svg
                  width={75}
                  height={61}
                  viewBox="0 0 75 61"
              >
                  <Path
                      d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                      fill={COLORS.white}
                  />
              </Svg>
              <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
          </View>

          <TouchableOpacity
              style={{
                  top: -22.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  borderColor:COLORS.black,
                  borderWidth:0.1,
                  backgroundColor: COLORS.white
              }}
              onPress={onPress}
          >
              {children}
          </TouchableOpacity>
      </View>
      )

  }else{
      return(
          <TouchableOpacity
          style={{
              flex: 1,
              height: 60,
              backgroundColor: COLORS.white
          }}
          activeOpacity={1}
          onPress={onPress}
      >
          {children}
      </TouchableOpacity>
      )

  }
}

const HomeStackScreen=({navigation})=>{
  return(
    <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#E5B25D',
        
      },
        headerTintColor:'#fff',
        headerTitleAlign:'center',
        title:'Home'
    }}
    initialRouteName={'HomeStack'} 
    >
      <HomeStack.Screen name="HomeStack" component={HomeScreen} options={{
        title:'',
        headerLeft: () => (
          <Icon.Button name="md-menu" size={25} color={'black'} backgroundColor="#E5B25D" onPress={()=>navigation.openDrawer()}/>
        ),
        headerRight: () => (
          <TouchableOpacity style={{
            width:50,
            justifyContent:'center',
        }}
        onPress={()=>navigation.navigate('ScannerQRStack')}>
          <Image source={icons.qrcodes} resizeMode="contain" style={{
            width:25,
            height:25,
        }} backgroundColor="#E5B25D"/>
        </TouchableOpacity>
        )
      }}/>
      <HomeStack.Screen name="ScannerQRStack" component={ScannerQR} options={{
        title:'QR Code',
        headerShown:false

      }}/>
    </HomeStack.Navigator>
  )
}


const AboutStackScreen=({navigation})=>{
  const myCustomShare = async() => {
    const shareOptions = {
      message: 'เขียนอธิบายความรู้สึก',
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
  return(
   <AboutStack.Navigator  screenOptions={{
    headerStyle:{
      backgroundColor:'#E5B25D',
      
    },
      headerTintColor:'#fff',
      headerTitleAlign:'center',
      title:'About'
  }}>
     <AboutStack.Screen name="AboutStack" component={AboutScreen} options={{
       title:'',
        headerLeft: () => (
          <Icon.Button name="md-menu" size={25} color={'black'} backgroundColor="#E5B25D" onPress={() => navigation.openDrawer()}/>
      ),
      headerRight: () => (
        <TouchableOpacity style={{
          width:50,
          justifyContent:'center',
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
      )
      }}/>
    <AboutStack.Screen name="OrderFoodStack" component={OrderFood}/>
   </AboutStack.Navigator>
  )
}

const RestarantStackScreen=({navigation})=>{
    return(
     <RestaurantStack.Navigator  screenOptions={{
      headerShown:false,
      headerStyle:{
        backgroundColor:'#E5B25D',
        
      },
        headerTintColor:'#fff',
        headerTitleAlign:'center',
        title:''
    }}>
       <RestaurantStack.Screen name="RestaurantStack" component={RestarantScreen} options={{
         title:'',
          headerLeft: () => (
            <Icon.Button name="md-menu" size={25} color={'black'} backgroundColor="#E5B25D" onPress={() => navigation.openDrawer()}/>
        )
        }}/>
        <RestaurantStack.Screen name="HoteloneStack" component={Hotelone}/>
        <RestaurantStack.Screen name="HoteltwoStack" component={Hoteltwo}/>
     </RestaurantStack.Navigator>
    )
  }


const MainTabScreen = ()=>{  
    return(
        <Tab.Navigator
        tabBarOptions={{
            showLabel:false,
            style:{
                borderTopWidth:0,
                backgroundColor:'transparent',
                elevation:0    
             }
        }}
        initialRouteName={'Home'} 
        >
            <Tab.Screen name="Home" component={HomeStackScreen} options={{
                tabBarIcon: ({focused}) =>(
                    <Image
                    source={icons.camera}
                    resizeMode="contain"
                    style={{
                        width:25,
                        height:25,
                        tintColor: focused ? COLORS.primary : COLORS.secondary
                    }}
                  />
                ),
                tabBarButton: (props) => (
                    <TabBarCustomButton
                        {...props}
                    />
                )
            }}/>
   

          <Tab.Screen name="About" component={AboutStackScreen} options={{
                tabBarIcon: ({focused}) =>(
                    <Image
                    source={icons.cutlery}
                    resizeMode="contain"
                    style={{
                        width:25,
                        height:25,
                        tintColor: focused ? COLORS.primary : COLORS.secondary
                    }}
                  />
                ),
                tabBarButton:(props) => (
                    <TabBarCustomButton
                        {...props}
                    />
                )
            }}/>



          <Tab.Screen name="Map" component={ExploerScreen} options={{
                tabBarIcon: ({focused}) =>(
                    <Image
                    source={icons.mapdark}
                    resizeMode="contain"
                    style={{
                        width:25,
                        height:25,
                        tintColor: focused ? COLORS.primary : COLORS.secondary
                    }}
                  />
                ),
                tabBarButton:(props) => (
                    <TabBarCustomButton
                        {...props}
                    />
                )
            }}/>
        
        <Tab.Screen name="Restarants" component={RestarantStackScreen} options={{
                tabBarIcon: ({focused}) =>(
                    <Image
                    source={icons.hotel}
                    resizeMode="contain"
                    style={{
                        width:25,
                        height:25,
                        tintColor: focused ? COLORS.primary : COLORS.secondary
                    }}
                  />
                ),
                tabBarButton:(props) => (
                    <TabBarCustomButton
                        {...props}
                    />
                ),
            }}/>
        </Tab.Navigator>
  )

}
export default MainTabScreen;

export const DrawerNavigators=()=>{
    return(
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
           <Drawer.Screen name="HomeMain" component={MainTabScreen}/>
        </Drawer.Navigator>
    )
}