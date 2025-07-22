import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const AccountScreen = () =>{
const navigation = useNavigation();
  
return(
    <View style ={styles.container}>
       <TouchableOpacity onPress={() => navigation.goBack()}>
       <Ionicons name='arrow-back' size={30} color="#000" bottom ={ -10}/>
       </TouchableOpacity>


       <Text style={styles.title}> What kind of account would you like to open?</Text>
      
      <TouchableOpacity style={styles.option} 
       onPress={() => navigation.navigate('CountryScreen')}
      >
      <FontAwesome5 name="user" size={40} color="#69DDF1" bottom ={10} style={styles.icon}/>
      <View style={styles.textBox}>
        <Text style={styles.optionTitle}> Personal Account</Text>
        <Text style={styles.optionDesc}>Send,spend and receive money around the world for less. </Text>
      </View>
      <Ionicons name='chevron-forward' size={20} color="#000"/>
      </TouchableOpacity>

     <TouchableOpacity style={styles.option}>
      <FontAwesome5 name="briefcase" size={40} color="#69DDF1"  bottom ={10} style={styles.icon}/>
      <View style={styles.textBox}>
        <Text style={styles.optionTitle}> Business Account</Text>
        <Text style={styles.optionDesc}>Do business or freelance work internationally </Text>
      </View>
      <Ionicons name='chevron-forward' size={20} color="#000"/>
      </TouchableOpacity>

    </View>
);
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    backgroundColor: 'white',
    bottom: 0,
    
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    bottom: -30,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    marginTop: 8,
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    bottom:-50
  },
  icon: {
    marginRight: 12,
  },
  textBox: {
    flex: 1,
    bottom: -10
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  optionDesc: {
    fontSize: 13,
    color: 'gray',
  },
});