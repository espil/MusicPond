import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';
import TeachPro1 from "./comps/TeachPro1";
import TeachPro2 from "./comps/TeachPro2";
import TeachPro3 from "./comps/TeachPro3";
import TeachPro4 from "./comps/TeachPro4";

//Teacher Profile
export default class TeacherProfile extends React.Component {
  
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
      comp = <TeachPro1 />
    }
    
    if(this.state.page === 2){
      //show Lesson Info & Availability
      comp = <TeachPro2 />
    }
    
    if(this.state.page === 3){
      //show Map
      comp = <TeachPro3 />
    }
    
    if(this.state.page === 4){
      //show Video
      comp = <TeachPro4 />
    }
    
    return (
      <View>
        
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
                <Text style={{fontSize:24, fontWeight:'bold', color:'#fff'}}>Teacher Profile</Text>
            </View>
          </View>
        {/* Header Ending */}
        
        <Image 
              style={{width: 100, height: 100, margin: 25}}
              source={require("./../../assets/icons/Profile.png")} 
        />
    
        {comp}
        
        <View style={styles.buttonBox}>
          
          <View style={styles.but}> 
          <Button
                color="#abd8a2"
                title="1"
                onPress={this.HandlePage.bind(this, 1)}
          />
          </View>
          <View style={styles.but}> 
          <Button
                color="#abd8a2"
                title="2"
                onPress={this.HandlePage.bind(this, 2)}
          />
          </View>
          <View style={styles.but}> 
          <Button
                color="#abd8a2"
                title="3"
                onPress={this.HandlePage.bind(this, 3)}
          />
          </View>
          <View style={styles.but}> 
          <Button
                color="#abd8a2"
                title="4"
                onPress={this.HandlePage.bind(this, 4)}
          />
          </View>
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
  }
});
