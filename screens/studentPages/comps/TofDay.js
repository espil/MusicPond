import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
//Upcoming Lessons

export default class TofDay extends React.Component {
  
  render() {

    var bio = "My name is Lorenzo, and I have been teaching guitar for over 10 years. I have experience playing and touring with many bands. I also post video game covers on YouTube.";
    
    return (
      <View style={styles.container}>
        
        <View style={styles.studentBox}>
          
          <View style={styles.innerBox}>
           <Text style={{fontSize: 16, textAlign:'center'}}>{bio}</Text>
          </View> 
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  studentBox: {
    flexDirection:"row",
    width: 300,
    padding: 10,
  },
  innerBox: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});