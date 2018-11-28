import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,CheckBox,TouchableHighlight } from 'react-native';
import LocalImage from './LocalImage'

export default class Logout extends React.Component {
  
  static navigationOptions = {
    title: 'Log Out',
  };

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
          <Text style={styles.message}>
            Log out of Music Pond?
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight 
            style={styles.yesnoButton}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.yesNo}>Yes</Text>
          </TouchableHighlight>
          <TouchableHighlight 
            style={styles.yesnoButton}
            onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.yesNo}>No</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.checkBox}>
          <CheckBox 
            value={this.state.checked}
            onValueChange={() => this.setState({ checked: !this.state.checked })}
          />
          <Text style={styles.checkMessage}>Remember e-mail and password</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    flex:1,
    alignSelf:'stretch',
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    paddingBottom:30
  },
  messageContainer: {
    margin:10,
    padding:5
  },
  message: {
    fontSize:15,
    fontWeight:'bold',
    color:'#332C32'
  },
  buttonContainer: {
    flexDirection:'row'
  },
  yesnoButton: {
    backgroundColor:'#96C35C',
    alignItems:'center',
    justifyContent:'center',
    width:85,
    borderRadius:30,
    padding:5,
    marginVertical:10,
    marginHorizontal:20
  },
  yesNo: {
    color:'#f2f4f4',
    fontWeight:'bold',
    fontSize:17
  },
  checkBox: {
    flexDirection:'row',
    alignItems:'center',
    marginVertical:10
  },
  checkMessage: {
    color:'#333'
  }
});
