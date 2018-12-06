import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

export default class SignInUpButton extends React.Component {
  render() {
    return (
      <View style={{flex:1, flexDirection:'column'}}>
        
        <Button title="Sign In"/>
        <Button title="Sign Up"/>
        
      </View>
    );
  }
}


