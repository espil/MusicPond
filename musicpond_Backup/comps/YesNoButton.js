import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

export default class YesNoButton extends React.Component {
  render() {
    return (
      <View style={{flex:1, flexDirection:'row'}}>
        
        <Button 
        title="Yes"
        color="#ABD8A2"
        />

        <Button title="No"
        color="#ABD8A2"
        />
        
      </View>
    );
  }
}

