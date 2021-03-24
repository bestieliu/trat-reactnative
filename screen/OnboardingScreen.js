import React from 'react';
import {View, Text, Image,TouchableOpacity,Platform} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Dots=({selected})=>{
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return(
        <View style={{
            width:5,
            height:5,
            marginHorizontal:3,
            backgroundColor
        }}>
            
        </View>
    )
}


const Skip=({...props})=>(
    <TouchableOpacity
        title="Skip"
        color="#000000"
        {...props}>
            <Text style={{fontSize:15,fontWeight:'bold',margin:10}}>ข้าม</Text>
    </TouchableOpacity>
)


const Next=({...props})=>(
    <TouchableOpacity
        title="Next"
        color="#000000"
        {...props}>
            <Text style={{fontSize:15,fontWeight:'bold',margin:10}}>ถัดไป</Text>
    </TouchableOpacity>
)

const Done=({...props})=>(
    <TouchableOpacity
        title="Done"
        color="#000000"
        {...props}>
            <Text style={{fontSize:15,fontWeight:'bold',margin:10}}>ตกลง</Text>
    </TouchableOpacity>
)

const OnboardingScreen=({navigation})=>{
    return(
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={()=>navigation.replace("HomeMain")}
        onDone={()=>navigation.navigate("HomeMain")}
        
        pages={[
            {
                backgroundColor: '#B5FFBF',
                image:<Image source={require('../assets/sea01.png')} style={{width:250,height:250}} resizeMode="contain"/>,
                title: 'สถานที่เที่ยวสุดฮิต',
                subtitle: 'เมืองเกาะในฝัน ที่คุณต้องไป'
            },
            {
                backgroundColor: '#FEEBA3',
                image:<Image source={require('../assets/restarant01.png')} style={{width:250,height:250}} resizeMode="contain"/>,
                title: 'ร้านอาหารเเนะนำ',
                subtitle: 'รสชาติสุดฟิน มาเยือนเเล้วต้องลอง'
            },
            {
                backgroundColor: '#B5EEFF',
                image:<Image source={require('../assets/hotel01.png')} style={{width:250,height:250,alignItems:'center',marginLeft:20}} resizeMode="contain"/>,
                title: 'พักผ่อนสุดชิลล์',
                subtitle: "มาม๊ะ..เเวะที่พักตราด"
            },
        ]}
        >
        </Onboarding>
    )
}
export default OnboardingScreen;