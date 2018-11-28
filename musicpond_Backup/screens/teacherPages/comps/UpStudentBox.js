import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
//Upcoming Lessons

export default class UpStudentBox extends React.Component {
  
  render() {

    var fullname = "Firstname Lastname";
    var date = "October 10th, 2018";
    var time = "5:30PM - 6:00PM";
    var instrument = "Piano";
    
    return (
      <View style={styles.container}>
        
        <View style={styles.studentBox}>
        
          <View style={styles.innerLeft}>
            <Image 
              style={{width: 80, height: 80}}
              source={require("./../../../assets/icons/Profile.png")} 
             />
          </View> 
          
          <View style={styles.innerRight}>
            <View style={{marginBottom: 10, borderBottomColor: '#abd8a2', borderBottomWidth: 1}}><Text style={{fontSize: 18, paddingBottom: 4}}>{fullname}</Text></View>  
            <Text>Date: {date}</Text>  
            <Text>Time: {time}</Text>  
            <Text>Instrument: {instrument}</Text>
            
            <View style={styles.butContainer}>
              
            <Button
              color="#abd8a2"
              title="Profile"
             />
              
            </View>
            
          </View> 
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(255, 255, 255)',
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
    width: 350,
    padding: 10,
  },
  innerLeft: {
    flex: 1,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerRight: {
    flex: 2,
    margin: 10,
    alignItems: 'flex-start',
  },
  butContainer: {
    marginTop: 20,
    marginLeft: 100,
    width: 100,
  },
  pageButton: {
    backgroundColor: '#abd8a2',
  }
});