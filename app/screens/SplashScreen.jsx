import React,{useEffect} from "react";
import { View,Image,StyleSheet,StatusBar }  from "react-native";
import ScreenWrapper from '../components/ScreenWrapper';
const SplashScreen =({navigation}) =>{
    useEffect(() =>{
        const timer = setTimeout(() =>{
            navigation.replace('OnBoarding');
        }, 3000);
        return() => clearTimeout(timer);
    }, [navigation]
);
return(
    <View style ={styles.container}>
        <StatusBar hidden={true}/>
        <Image source={require('../assets/hello.png')} style={styles.image}/>
    </View>
);
};

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#3E3167',
    justifyContent:'center',
    alignItems:'center',
    resizeMode:'cover',
},
image:{
    width: '100%',
    height:'100%',
    resizeMode:'cover'
},

});

export default SplashScreen;