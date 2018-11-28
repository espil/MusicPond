import React from 'react';
import { StyleSheet, Text, View,CheckBox,TouchableHighlight,Image } from 'react-native';

export default class ConfirmAvailability extends React.Component {

  state = {
    checked:null
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image 
            source={require('../../assets/icons/MusicPondlogo.png')}
            style={{width: 265.5, height: 298.5}}
            />
        </View>
      <View style={styles.messageContainer}>
          <Text 
          style={styles.lesson}
          >
            Piano Lesson
          </Text>
          <Text style={styles.info}>
            Nov, 29 from 5:00 pm to 10:00 pm
          </Text>
        </View>
        <View style={styles.buttons}>

        <TouchableHighlight 
           onPress={() => this.props.navigation.navigate('Availability')}
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
      </View>
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
    backgroundColor:'#f2f4f4',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  lesson: {
    color:'#332c32',
    fontSize:27,
    fontWeight:'bold',
    flex:2,
    paddingTop:20
  },
    info: {
    flex:2,
    fontSize:17,
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
      justifyContent:'space-between',
      margin:10,
  }

});