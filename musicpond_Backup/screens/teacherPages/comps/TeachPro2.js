import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';
//Lesson Info and Availability

export default class TeachPro2 extends React.Component {
  
  render() {
    
    var instrument = "N/A";
    var genre = "N/A";
    var cost = "N/A";
    var yearstaught = "N/A";
    var avail = "N/A";
    
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
            <Text style={{fontSize: 14}}>Dates: {avail}</Text>
            
            <View style={styles.butBox}>
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
    backgroundColor: 'rgb(255, 255, 255)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    padding: 10,
    borderRadius: 20
  },
  innerBox: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  butBox: {
    flexDirection:"row",
    justifyContent:'center',
    alignItems:'center'
  },
  but: {
    margin:8,
  }
});