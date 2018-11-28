import React from 'react';
import { StyleSheet, Text, View, Image, WebView, ScrollView, Dimensions,TouchableOpacity,TouchableHighlight } from 'react-native';
import TofDay from "./comps/TofDay";

const {height} = Dimensions.get('window');

//Teacher Profile
export default class StudentHome extends React.Component {
  
  static navigationOptions = {
    title: 'Home',
  };
  
  state = {
    screenHeight:0,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({screenHeight:contentHeight});
  };


  render() {
    const scrollEnabled = this.state.screenHeight > height;
    return (
      <ScrollView
      style={styles.ScrollView}
      onContentSizeChange = {this.onContentSizeChange}
      >
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
                <Text style={{fontSize:24, fontWeight:'bold', color:'#fff'}}>Home</Text>
            </View>
          </View>
        {/* Header Ending */}    
      
      
        {/* Profile section */}
          <View style={styles.profile}>
            <Text style={styles.subhead}>Teacher of the Day</Text>   
            <Image
                  style={styles.profile_pic}
                  source={require("./../../assets/icons/Profile.png")} 
            />
            <Text style={styles.name}></Text>
          </View>

          {/* Demo Video */}
          <View style={styles.youtubeContainer}>
            <WebView
            style={styles.video}
            javaScriptEnabled={true}
            source={{uri:'https://www.youtube.com/embed/Rb0UmrCXxVA'}}
            />
          </View>

          <TofDay />

          <View style={styles.buttons}>

            <TouchableOpacity style={styles.ProfileButton}>
              <Text style={styles.ProfileButtonText} 
                title="View Profile"
                >View Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
              
              onPress={() => this.props.navigation.navigate('FindATeacher')}
              style={styles.ListButton}>
              <Text style={styles.ListButtonText} 
                title="Teacher List"
                >Teacher List</Text>
            </TouchableOpacity>

          </View>  
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  ScrollView: {
    alignSelf:'stretch'
  },

  container: {
    flex:1,
    backgroundColor: 'rgb(242, 244, 244)',
  },

  header: {
    paddingTop:20,
    paddingLeft:10,
    height:80,
    flexDirection:'row',
    backgroundColor: "rgb(175, 225, 230)"
  },

  menu_icon: {
    flexDirection:'row',
    width:40,
    height:40,
  },

  home: {
    marginLeft:120,
  },

  homeText: {
    fontSize:30,
    fontWeight:'bold',
  },

  profile: {
    justifyContent:'center',
    alignItems:'center'
  },

  subhead: {
    fontSize:20,
    fontWeight:'bold',
    marginTop:20,
  },

  profile_pic: {
    marginTop:20,
    width:100,
    height:100,
  },

  name: {
    fontSize:20,
    fontWeight:'bold',
    marginTop:10,
  },

  youtubeContainer: {
    marginTop:20,
    width:300,
    height:200,
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:10,
    borderColor:'rgba(128,120,100,0.1)',
    borderRadius:10,
    borderWidth:7,
  },  

  buttons: {
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:30
  },

  ProfileButton: {
    marginTop:10,
    width:150,
    height:40,
    backgroundColor:'#96C35C',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20
  },

  ProfileButtonText: {
    color:'#fff',
    fontWeight:'bold',
    fontSize:17,
  },

  ListButton: {
    marginTop:10,
    width:130,
    height:50,
    backgroundColor:'#AFE0E7',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:75,
  },

  ListButtonText: {
    color:'#332C32',
    fontWeight:'bold',
    fontSize:17,
  }

});