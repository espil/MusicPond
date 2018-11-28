import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Image} from 'react-native';

export default class Bookings extends React.Component {
  static navigationOptions = {
    title: 'Bookings',
  };
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableHighlight 
          onPress={() => this.props.navigation.openDrawer()}
          >
            <View style={styles.menu}>
              <Text style={styles.burger}></Text>
              <Text style={styles.burger}></Text>
              <Text style={styles.burger}></Text>
            </View>
          </TouchableHighlight> 

            <View style={styles.availability}>
              <Text style={styles.availabilityText}>My Bookings</Text>
            </View>
          </View>

          <View style={styles.list}>
            <View style={styles.teacher}>
              <Image 
              style={styles.profile_pic} 
              source={require("./../../assets/icons/Profile.png")}
              />
              <View style={styles.details}>
                <Text style={styles.date}>You have no lessons booked.</Text>
                
              </View> 
            </View>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignSelf:'stretch',
    backgroundColor: '#fff',
  },
  header: {
    paddingTop:20,
    paddingLeft:10,
    height:80,
    flexDirection:'row',
    backgroundColor:'#76C5DD'
  },
  menu: {
    flex:1,
    justifyContent:'space-between',
    padding:12,
  },
  burger: {
    width:45,
    flexDirection:'column',
    borderWidth:3,
    backgroundColor:"#fff",
    height:1,
    borderColor:"#fff",
    borderRadius:10
  },
  availability: {
    marginLeft:100
  },
  availabilityText: {
    marginTop:10,
    fontSize:30,
    fontWeight:'bold',
    color:'#fff'
  },
  list: {
    justifyContent:'center',
    alignItems:'center',
    marginTop:50,
  },
  teacher: {
    flexDirection:'row',
    width:370,
    height:150,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#76C5DD',
    borderColor:'rgba(118,197,221,0.5)',
    borderRadius:10,
    margin:10
  },
  profile_pic: {
    width:100,
    height:100,
    borderRadius:50,
    borderWidth:3,
    marginRight:30,
    borderColor:'rgba(128,128,128,0.5)',
    paddingLeft:10,
  },
  name: {
    fontSize:20,
    color:'#fff',
    fontWeight:'bold',
  },
  time: {
    fontWeight:'bold',
    fontSize:25,
    color:'#fff'
  },
  date: {
    fontSize:15,
    color:'#fff'
  },
  instrument: {
    fontWeight:'bold',
  }
});