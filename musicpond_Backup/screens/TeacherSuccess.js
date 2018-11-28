import React from 'react';
import { StyleSheet, Text, View,CheckBox, TouchableHighlight } from 'react-native';
import LocalImage from './LocalImage'

export default class Success extends React.Component {

  state = {
    checked:null
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <LocalImage 
            source={require('./../assets/icons/MusicPondlogo.png')}
            originalWidth={531}
            originalHeight={597}
            />
        </View>
      <View style={styles.messageContainer}>
          <Text 
          style={styles.success}
          >
            SUCCESS
          </Text>
          <Text style={styles.setup}>
            Your profile has been set up!
          </Text>
          <View style={styles.checkBoxContainer}>
            <CheckBox 
              value={this.state.checked}
              onValueChange={() => this.setState({ checked: !this.state.checked })}
            />
            <Text style={styles.checkMessage}>Remember e-mail and password</Text>
          </View>
        </View>

        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('TeacherHome')}
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
            }}>Submit</Text>
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
    fontWeight:'700'
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
