import React from 'react';
import { StyleSheet, Text, View, Image, Button, WebView } from 'react-native';
//Video

export default class TeachPro4 extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 22, fontWeight: 'bold', paddingBottom: 4}}>Video</Text>
    
      <View style={styles.youtubeContainer}>
            <WebView
            style={styles.video}
            javaScriptEnabled={true}
            source={{uri:'https://www.youtube.com/embed/Rb0UmrCXxVA'}}
            />
          </View>
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
    marginTop: 20,
    flexDirection:"row",
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    padding: 10,
  },
  innerBox: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  butBox: {
    flexDirection:"row",
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
});