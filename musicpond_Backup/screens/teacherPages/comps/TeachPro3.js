import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
//Map

export default class TeachPro3 extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 22, fontWeight: 'bold', paddingBottom: 4}}>Map</Text>
    
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    padding: 10,
  },
  innerBox: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  butBox: {
    flexDirection:"row",
  }
});