import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Swiper from 'react-native-swiper';

const slides = ({navigation}) => {
  return (
    <Swiper loop = {false} dotStyle={styles.dot} activeDotStyle={styles.activeDot}>
    <View 
    style={styles.container}>
      <Image source={require('../assets/background.jpg')} style={styles.image}/>
    </View>
    <View 
    style={styles.container}>
      <Image source={require('../assets/slide2.jpg.png')} style={styles.image}/>
    </View>
    <View 
    style={styles.container}>
      <Image source={require('../assets/slide3.jpg.png')} style={styles.image}/>
    </View>
    <View 
    style={styles.container}>
      <Image source={require('../assets/slide4.jpg.png')}style={styles.image}/>
    </View>
    <View 
    style={styles.container}>
      <Image source={require('../assets/slide5.jpg.png')}style={styles.image}/>
      <View style={styles.buttonContainer}>
        <Button title='Get Started' onPress={() => navigation.replace('Auth')}/>
      </View>
    </View>
    </Swiper>
  );
};

export default slides;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: '70%',
    resizeMode: 'contain',
  },
buttonContainer:{
    marginTop:30,
    width:'60%'
},
dot:{
    backgroundColor:'#ccc'
},
 activeDot:{
    backgroundColor:'#007aff'
 },
});

