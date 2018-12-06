import React from 'react';
import { StyleSheet, Text, View,CheckBox,TouchableHighlight,Image, ImageBackground } from 'react-native';

export default class ConfirmAvailability extends React.Component {

  state = {
    checked:null
  }

  render() {
    return (
    
      <ImageBackground
      source={require('../../assets/Tea_Reg2.png')}
      style={{width: '100%', height: '100%',alignItems: 'center', justifyContent: 'center' }}
      >
        <View style={styles.logo}>
          <Image 
            source={require('../../assets/icons/MusicPondlogo.gif')}
            style={{width: 200, height: 200, resizeMode:"contain"}}
            />
        </View>
      <View style={styles.messageContainer}>
          <Text 
          style={styles.lesson}
          >
            Guitar Lesson
          </Text>
          <Text style={styles.info}>
            Dec, 8th from 11:00 am to 12:00 pm
          </Text>
        </View>
        <View style={styles.buttons}>

        <TouchableHighlight 
           onPress={() => this.props.navigation.navigate('Availability')}
           style={styles.no}
          >
        <Text
            style={{
              width:130,
              padding:10,
              backgroundColor:'#679D30',
              borderRadius:30,
              color:"#fff", 
              fontSize:20,
              letterSpacing:1,
              fontWeight:'bold',
              alignItems:'center',
              textAlign:'center',
              marginTop:30
            }}>No</Text>
            </TouchableHighlight>

        <TouchableHighlight 
          onPress={() => this.props.navigation.navigate('AvailSuccess')}
          style={styles.yes}
          >
            <Text 
            style={{
              width:130,
              padding:10,
              backgroundColor:'#679D30',
              borderRadius:30,
              color:"#fff", 
              fontSize:20,
              letterSpacing:1,
              fontWeight:'bold',
              alignItems:'center',
              textAlign:'center',
              marginTop:30
            }}>Yes</Text>
            </TouchableHighlight>
            </View>
        </ImageBackground>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf:'stretch',
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    paddingBottom:30
  },
  messageContainer: {
    width:300,
    minHeight:200,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  lesson: {
    color:'#332c32',
    fontSize:27,
    fontWeight:'bold',
    flex:1,
    paddingTop:20
  },
    info: {
    flex:1,
    fontSize:20,
  },
  signInContainer: {
    width:100,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#B0E0E7',
    padding:10,
    borderRadius:30,
    marginVertical:20
  },
  signIn: {
    fontSize:17,
    fontWeight:'bold',
    color:'#f2f4f4'
  },
  buttons: {
      flexDirection:'row',
  },
  no: {
    margin:10
  },
  yes: {
    margin:10
  }

});