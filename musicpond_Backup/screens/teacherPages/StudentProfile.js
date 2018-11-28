import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

//Teacher Profile
export default class StudentProfile extends React.Component {
  
  static navigationOptions = {
    title: 'Profile',
  };
  
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.header}>  
          <Text style={{fontSize: 30, color:"#fff"}}>Student Profile</Text>
        </View>
        
        <Image 
              style={{width: 100, height: 100, margin: 25}}
              source={require("./../../assets/icons/Profile.png")} 
        />
    
        
        <View style={{margin: 100}}>
          <Button 
            title="back"
            />
        </View>  
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rgb(242, 244, 244)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: 350,
    paddingTop: 30,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: "rgb(147, 195, 105)"
  },
  buttonBox: {
    marginTop: 40,
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  but: {
    margin:8,
  }
});