import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';

export default class BookingConfirm extends React.Component {
  
  constructor(){
    super();
    this.state = {
      lesson:"Piano Lesson",
      date:"Oct 16 Tues",
      startingTime:"5:00pm",
      finishingTime:"6:00pm",
      teacher:"Scott Thomson"
    }
  }

  render() {
    return (
      <View style={styles.container}>

         <Image 
          style={{width: 120, height: 120}}
          source={require ('./../../assets/icons/MusicPondlogo.png')}
        /> 

        <Text>Would you like to book this lesson?</Text>

        <View style={styles.confirm}>
          <Text>{this.state.lesson}</Text>
          <Text>{this.state.date}</Text>
          <Text>From {this.state.startingTime} To {this.state.lesson.finishingTime}</Text>
          <Text>With {this.state.teacher}</Text>
        </View>
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
  confirm: {
    width:500,
    backgroundColor:'#EAEAEA',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:"column",
  }
});