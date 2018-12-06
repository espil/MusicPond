import React from 'react';
import { StyleSheet, Text, View, CheckBox, TouchableHighlight, Image } from 'react-native';

export default class SBookingSuccess extends React.Component {

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
          style={styles.success}
          >
            SUCCESS
          </Text>
          <Text style={styles.setup}>
            You have booked a Guitar lesson with Lorenzo!
          </Text>
          <Text style={styles.confirmation}>
            Please check your email for additional information.
            Contact us if you have any questions.
          </Text>
      </View>

        <TouchableHighlight 
          onPress={() => this.props.navigation.navigate('StudentHome')}
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
            }}>Back to Home</Text>
        </TouchableHighlight>

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
  success: {
    color:'#332c32',
    fontSize:27,
    fontWeight:'bold',
    flex:2,
    paddingTop:20
  },
  setup: {
    flex:2,
    fontSize:17,
    color:'black'
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
