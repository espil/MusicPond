import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, ImageBackground} from 'react-native';

export default class SProfile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  
  render() {
    return (
      <View>
      
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
                <Text style={{fontSize:24, fontWeight:'bold', color:'#fff'}}>Profile</Text>
            </View>
          </View>
        {/* Header Ending */} 
        <ImageBackground
        source={require('../../assets/Stu_Reg.png')}
        style={{width: '100%', height: '100%',alignItems: 'center', justifyContent: 'center' }}
        > 
        <View style={styles.studentBox}>
          
          <View style={styles.innerBox}>
           <Text style={{fontSize: 22, fontWeight: 'bold', paddingBottom: 4}}>Biography</Text>
           <Text style={{fontSize: 16}}>Your profile is currently empty.</Text>
            
            <Text 
            style={{
              width:130,
              padding:10,
              backgroundColor:'#679D30',
              borderRadius:30,
              color:"#fff", 
              fontSize:20,
              letterSpacing:1,
              fontWeight:'bold',
              alignItems:'center',
              textAlign:'center',
              marginTop:30
            }}>Update</Text>
            
          </View> 
          
        </View>

        </ImageBackground>
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
  header: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  studentBox: {
    flexDirection:"column",
    width: 350,
    padding: 10,
    borderRadius: 20,
    justifyContent:'flex-start',
    alignItems:'center',
    marginTop: -450
  },
  innerBox: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});