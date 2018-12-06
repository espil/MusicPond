import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, TouchableOpacity, ImageBackground } from 'react-native';
import STeachPro1 from "./comps/STeachPro1";
import STeachPro2 from "./comps/STeachPro2";
import STeachPro3 from "./comps/STeachPro3";

//Teacher Profile
export default class STeacherProfile extends React.Component {
  
  static navigationOptions = {
    title: 'Profile',
  };
    
  state={
    page:1
  }

  HandlePage=(page)=>{
    this.setState({
      page:page
    })
  }
  
  render() {
    
    var comp = null;
    if(this.state.page === 1){
      //show Biography
      comp = <STeachPro1 />
    }
    
    if(this.state.page === 2){
      //show Lesson Info & Availability
      comp = <STeachPro2 />
    }
    
    if(this.state.page === 3){
      //show Map
      comp = <STeachPro3 />
    }
    
    return (
      <View>
        
        {/* Header Beginning */}
          <View style={{paddingTop:20, paddingLeft:10, height:80, flexDirection:'row', backgroundColor:'rgb(117, 195, 218)'}}>
            <TouchableHighlight 
          onPress={() => this.props.navigation.navigate('FindATeacher')}
          >
              <View style={{flex:1, justifyContent:'space-between', padding:12,}}>
                <Text></Text>
              </View>
            </TouchableHighlight> 
            
            <View style={{marginTop:12, marginLeft:100}}>
                <Text style={{fontSize:24, fontWeight:'bold', color:'#fff'}}>Teacher Profile</Text>
            </View>
          </View>
        {/* Header Ending */}
        <ImageBackground
        source={require('../../assets/Stu_Reg.png')}
        style={{width: '100%', height: '100%',alignItems: 'center', justifyContent: 'center' }}
        > 
        <View style={styles.fakeContainer}>
          <Image 
                style={{width: 100, height: 100, margin: 25}}
                source={require("./../../assets/icons/Profile.png")} 
          />
                      
        <Text style={styles.name}>Lorenzo de Sequera</Text>
    
        {comp}
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SCalendar')}>
            <Text 
            style={{
              width:150,
              padding:10,
              backgroundColor:'rgb(117, 195, 218)',
              borderRadius:30,
              color:"#fff", 
              fontSize:20,
              letterSpacing:1,
              fontWeight:'bold',
              alignItems:'center',
              textAlign:'center',
              marginTop:30
            }}>Book a lesson</Text>
            </TouchableOpacity>
        <View style={styles.buttonBox}>
          
          <View style={styles.but}> 
          <Button
                color='rgb(117, 195, 218)'
                title="1"
                onPress={this.HandlePage.bind(this, 1)}
          />
          </View>
          <View style={styles.but}> 
          <Button
                color='rgb(117, 195, 218)'
                title="2"
                onPress={this.HandlePage.bind(this, 2)}
          />
          </View>
          <View style={styles.but}> 
          <Button
                color='rgb(117, 195, 218)'
                title="3"
                onPress={this.HandlePage.bind(this, 3)}
          />
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
    backgroundColor: 'rgba(120,202,222,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: 350,
    padding: 10,
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
  },
  name: {
    fontSize:20,
    fontWeight:'bold',
    marginTop:10,
  },
  fakeContainer: {
    marginTop:30,
    margin:'auto',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:250
  }
});
