import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';
//Lesson Info and Availability

export default class STeachPro2 extends React.Component {
  
  render() {
    
    var instrument = "Guitar";
    var genre = "Rock, Metal, and Blues";
    var cost = "$40 per 60 minute lesson";
    var yearstaught = "10";
    var avail = "Every Friday";
    
    return (
      <View style={styles.container}>
        
        <View style={styles.studentBox}>
          
          <View style={styles.innerBox}>
            
           <Text style={{fontSize: 22, fontWeight: 'bold', paddingBottom: 4}}>Lesson Info</Text>
           <Text style={{fontSize: 14}}>Instrument: {instrument}</Text>
           <Text style={{fontSize: 14}}>Genre: {genre}</Text>  
           <Text style={{fontSize: 14}}>Cost: {cost}</Text>  
           <Text style={{fontSize: 14}}>Years of Teaching: {yearstaught}</Text>
            
            <Text style={{fontSize: 22, fontWeight: 'bold', paddingBottom: 4, marginTop: 12}}>Availability</Text>
            
            <View style={styles.butBox}>
              
              <Text style={{fontSize: 14}}>Dates: {avail}</Text>
              
            
              
            </View>
            
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
    marginTop:10,
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center',
    width: 330,
    borderRadius: 20
  },
  innerBox: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  butBox: {
    flexDirection:"row",
  },
  but: {
    margin:8,
  }
});