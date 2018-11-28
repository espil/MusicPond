import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';
//Upcoming Lessons

export default class TeachPro1 extends React.Component {
  
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
           <Text style={{fontSize: 16}}>Your biography is currently empty.</Text>
            
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
            }}>Update</Text>
            
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
    justifyContent:'center',
    alignItems:'center',
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