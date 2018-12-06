import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
//Upcoming Lessons

export default class StuProf extends React.Component {
  
  render() {

    var fullname = "Firstname Lastname";
    var bio = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
    
    return (
      <View style={styles.container}>
        
        <View style={styles.studentBox}>
          
          <View style={styles.innerBox}>
           <Text style={{fontSize: 22, fontWeight: 'bold', paddingBottom: 4}}>{fullname}</Text>
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