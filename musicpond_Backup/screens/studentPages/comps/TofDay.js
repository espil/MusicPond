import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
//Upcoming Lessons

export default class TofDay extends React.Component {
  
  render() {

    var bio = "There is currently no Teacher registered.";
    
    return (
      <View style={styles.container}>
        
        <View style={styles.studentBox}>
          
          <View style={styles.innerBox}>
           <Text style={{fontSize: 16}}>{bio}</Text>
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
  header: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  studentBox: {
    flexDirection:"row",
    backgroundColor: 'rgb(255, 255, 255)',
    width: 350,
    padding: 10,
    borderRadius: 20
  },
  innerBox: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});