import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight,ScrollView,Dimensions,Image} from 'react-native';

const {height} = Dimensions.get('window');

export default class FindATeacher extends React.Component {
  static navigationOptions = {
    title: 'Find a Teacher',
  };

  state = {
    screenHeight:0,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({screenHeight:contentHeight});
  };
  
  render() {
    let name = 'Firstname Lastname';
    let age = 19;
    let speciality = 'piano';
    let availability = 'Monday, Tuesday';
    let YearsOfteaching = 5
    let cost = '$30 / 30 minutes'

    const scrollEnabled = this.state.screenHeight > height;

    return (
      <View style={styles.container}>
      {/* Header Beginning */}
          <View style={{paddingTop:20, paddingLeft:10, height:80, flexDirection:'row', backgroundColor:'rgb(117, 195, 218)'}}>
            <TouchableHighlight 
          onPress={() => this.props.navigation.openDrawer()}
          >
              <View style={{flex:1, justifyContent:'space-between', padding:12,}}>
                <Text style={{width:45, flexDirection:'column', borderWidth:3, backgroundColor:"#fff", height:1, borderColor:"#fff", borderRadius:10}}></Text>
                <Text style={{width:45, flexDirection:'column', borderWidth:3, backgroundColor:"#fff", height:1, borderColor:"#fff", borderRadius:10}}></Text>
                <Text style={{width:45, flexDirection:'column', borderWidth:3, backgroundColor:"#fff", height:1, borderColor:"#fff", borderRadius:10}}></Text>
              </View>
            </TouchableHighlight> 
            
            <View style={{marginTop:12, marginLeft:100}}>
                <Text style={{fontSize:24, fontWeight:'bold', color:'#fff'}}>Find a Teacher</Text>
            </View>
          </View>
        {/* Header Ending */} 

        <View style={styles.lessons}>
            <View style={styles.lessonOne}>
              <View style={styles.picContainer}>
                <Image
                  style={styles.profilePic}
                  source={require("./../../assets/icons/Profile.png")} 
                />
              </View>
              <View style={styles.infoContainer}>
              
                <Text style={styles.name}></Text>
                <View style={styles.info}>
                  <Text>There are no teachers available.</Text>
                  
                  <Text>Please check back later!</Text>
                </View>
              </View>

          </View>
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
  ScrollView: {
    alignSelf:'stretch',
  },
  container: {
    flex:1,
    height:1080,
  },
  lessons: {
    marginTop:14,
    justifyContent:'center',
    alignItems:'center'
  },

  lessonOne: {
    backgroundColor:'rgba(255,255,255,0.3)',
    width:380,
    height:200,
    flexDirection:'row',
    borderRadius:10,
    elevation:3,
    marginTop: 10
  },

  picContainer: {
    flexDirection:'row',
    padding:20,
  },

  profilePic: {
    width:100,
    height:100,
  },

  name: {
    fontSize:16,
    fontWeight:'bold',
    width:200,
    borderBottomWidth:2,
    borderColor:'#96C35C',
    marginTop:20,
    paddingBottom:10,
    marginBottom:10,
  },

  infoContainer: {
    marginBottom:10
  },

  infoText: {
    marginBottom:5,
    fontWeight:'bold'
  },

  ButtonContainer: {
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'flex-end',
  },

  profile: {
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#96C35C',
    width:77,
    height:30,
    borderRadius:20,
    marginRight:30,
    marginBottom:10
  },

  profileText: {
    color:'#fff',
    fontSize:14,
    fontWeight:'bold',
    letterSpacing:1,
    padding:10,
  },
});
