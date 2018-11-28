import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

import SRegistration from './SRegistration';
import TRegistration from './TRegistration';

export default class StuorTeac extends React.Component {

  state={
    page:0
  }

  handleStudent = () => {
    this.setState({
      page:1
    })
  }
  
   handleTeacher = () => {
    this.setState({
      page:2
    })
  }
   
  render() {
    let Comp = null;
    if (this.state.page === 1){
      Comp = <SRegistration />
    } else if (this.state.page === 2){
      Comp = <TRegistration />
    } else if (this.state.page === 0){
      Comp = <Registration 
      handleStudent = {this.handleStudent}
      handleTeacher = {this.handleTeacher}
      />
    }
    return (
      <View style={styles.container}>
        {Comp}
      </View>
    );
  }
}

function Registration (props){
    return (
      <View style={styles.container}>
        
      <View style={styles.logo}>
        <Image
          style={{width: 200, height: 200, margin: 25}}
          source={require("./../assets/icons/MusicPondlogo.png")}
          resizeMode="contain"
        />
      </View>
        <TouchableHighlight 
          onPress={props.handleStudent}
          >
          <Image
            style={{width: 270, height: 200}}
            source={require('./../assets/icons/IamStudent_Button.png')}
            resizeMode="contain"
          />
        </TouchableHighlight> 
        
        <TouchableHighlight 
          onPress={props.handleTeacher}>
          <Image
            style={{width: 270, height: 200}}
            source={require('./../assets/icons/IamTeacher_Button.png')}
            resizeMode="contain"
          />
        </TouchableHighlight> 
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
