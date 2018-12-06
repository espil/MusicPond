import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
//Upcoming Lessons

export default class STeachPro1 extends React.Component {
  
  render() {

    var fullname = "Firstname Lastname";
    var date = "October 10th, 2018";
    var time = "5:30PM - 6:00PM";
    var instrument = "Piano";
    
    return (
      <View style={styles.container}>
        
        <View style={styles.studentBox}>
          
          <View style={styles.innerBox}>
           <Text style={{fontSize: 22, fontWeight: 'bold', paddingBottom: 4}}>Biography</Text>
           <Text style={{fontSize: 16}}>My name is Lorenzo, and I have been teaching guitar for over 10 years. I have experience playing and touring with many bands. I also post video game covers on YouTube.</Text>
        
          </View> 
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  studentBox: {
    marginTop: 20,
    flexDirection:"row",
    width: 330,
    padding: 10,
    borderRadius: 20
  },
  innerBox: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});