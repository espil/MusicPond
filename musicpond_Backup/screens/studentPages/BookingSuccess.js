import React from 'react';
import { StyleSheet, Text, View,Image, Button} from 'react-native';

export default class BookingSuccess extends React.Component {

  render() {
    return (
      <View style={styles.container}>

        <Image 
          style={{width: 120, height: 120}}
          source={require ('./../../assets/icons/MusicPondlogo.png')}
        /> 

        <Text style={styles.heading}>SUCCESS</Text>
        <Text style={styles.notify}>You are now available to teach!</Text>
        <Text style={styles.body}>Please check your email for additional information.
          Contact us if you have any questions.
        </Text>

        <Button 
          title="Back to Home"
          color="#ABD8A2"
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color:'#ABD8A2',
    fontWeight:'bold',
  },
  notify: {
    color:'#EAEAEA',
    fontSize:10
  },
  body: {
    color:'#333',
  }
});