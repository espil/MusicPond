import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight,Dimensions,ImageBackground } from 'react-native';
import UpStudentBox from "./comps/UpStudentBox";

const {height} = Dimensions.get('window');

//Teacher Home: Upcoming Lessons
export default class TeacherHome extends React.Component {
  
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: 'rgb(147, 195, 105)'
    },
  };

  state = {
    screenHeight:0,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({screenHeight:contentHeight});
  };
  
  render() {

    var fullname = "Firstname Lastname";
    var date = "October 10th, 2018";
    var time = "5:30PM - 6:00PM";
    var instrument = "Piano";
    const scrollEnabled = this.state.screenHeight > height;
    return (
        <View style={styles.container}>
          
          {/* Header Beginning */}
          <View style={{paddingTop:20, paddingLeft:10, height:80, flexDirection:'row', backgroundColor:'#96C35C'}}>
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
                <Text style={{fontSize:24, fontWeight:'bold', color:'#fff'}}>Home</Text>
            </View>
          </View>
        {/* Header Ending */}
        <ImageBackground
        source={require('../../assets/Tea_Reg2.png')}
        style={{width: '100%', height: '100%',alignItems: 'center', justifyContent: 'center' }}
        > 
        <View style={styles.fakeContainer}>      
          <View style={styles.title}>
            <Text style={styles.titleText}>Upcoming lessons</Text>
          </View>

          {/* Upcoming Lesson Card */}
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
                  <Text style={styles.infoText}>You currently have no lessons.</Text>
                  <Text style={styles.infoText}>Please check back later!</Text>
                </View>
              </View>
              </View>
            </View> 
             

          </View>
          </ImageBackground>
        </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex:1,
    alignSelf:'stretch',
  },

  header: {
    paddingTop:20,
    paddingLeft:10,
    height:80,
    flexDirection:'row',
    backgroundColor:'#96C35C'
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

  home: {
    marginLeft:100
  },

  homeText: {
    fontSize:30,
    fontWeight:'bold',
    color:'#fff'
  },

  title: {
    justifyContent:'center',
    alignItems:'center',
  },

  titleText: {
    fontSize:27,
    fontWeight:'300',
    marginTop:10,
  },

  lessons: {
    justifyContent:'flex-start',
    alignItems:'center',
  },

  lessonOne: {
    backgroundColor:'rgba(50,200,50,0.15)',
    width:330,
    height:150,
    flexDirection:'row',
    borderRadius:10,
    elevation:2,
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
    fontSize:17,
    width:200,
    borderBottomWidth:2,
    borderColor:'#96C35C',
    marginTop:20,
    paddingBottom:10,
    marginBottom:10,
  },

  infoText: {
    marginBottom:5,
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
    margin:10,

  },

  profileText: {
    color:'#fff',
    fontWeight:'bold',
    fontSize:13,
    letterSpacing:1,
    padding:10,
  },

  fakeContainer: {
    marginTop:-470
  }


});
