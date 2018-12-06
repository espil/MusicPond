import React from 'react';
import { StyleSheet, Text, View, CheckBox, TouchableHighlight, Image, ImageBackground } from 'react-native';

export default class AvailSuccess extends React.Component {

  state = {
    checked:null
  }

  render() {
    return (<ImageBackground
      source={require('../../assets/Tea_Reg2.png')}
      style={{width: '100%', height: '100%',alignItems: 'center', justifyContent: 'center' }}
      >
        <View style={styles.logo}>
          <Image 
            source={require('../../assets/icons/MusicPondlogo1.gif')}
            style={{width: 200, height: 200, resizeMode:"contain"}}
            />
        </View>
      <View style={styles.messageContainer}>
          <Text 
          style={styles.success}
          >
            SUCCESS
          </Text>
          <Text style={styles.setup}>
            You are now available to teach Guitar on Dec 8th, from 11:00am to 12:00pm!
          </Text>
          <Text style={styles.confirmation}>
            Please check your email for additional information.
            Contact us if you have any questions.
          </Text>
      </View>

        <TouchableHighlight 
          onPress={() => this.props.navigation.navigate('TeacherHome')}
          >
        <Image
            source={require('../../assets/icons/bHome.png')}
            style={{width:200, height:100, marginTop:30}}
            resizeMode="contain"
            />
        </TouchableHighlight>

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
    borderRadius:10,
    marginBottom:30
  },
  success: {
    color:'#332c32',
    fontSize:33,
    fontWeight:'bold',
    flex:2,
    paddingTop:20
  },
  setup: {
    flex:2,
    fontSize:17,
    color:'#333',
    textAlign:'center',
  },
  checkBoxContainer: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    marginVertical:10
  },
  checkMessage: {
    color:'#333'
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
  }

});
