import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native';

export default class TeacherorStudent extends React.Component {
  render() {
    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableHighlight 
          onPress={() => this.props.navigation.navigate('StudentSignUp')}
          >
          <Image
            style={{width: 270, height: 200}}
            source={require('./../assets/icons/IamStudent_Button.png')}
            resizeMode="contain"
          />
        </TouchableHighlight> 
        
        <TouchableHighlight 
          onPress={() => this.props.navigation.navigate('TeacherSignUp')}>
          <Image
            style={{width: 270, height: 200}}
            source={require('./../assets/icons/IamTeacher_Button.png')}
            resizeMode="contain"
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
