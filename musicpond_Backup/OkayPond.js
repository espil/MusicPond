import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import LocalImage from './screens/LocalImage'
export default class App extends React.Component {

    render() {
    return (
      <View style={styles.container}>
        <View style={styles.note}>
        <LocalImage 
            style={styles.noteLogo}
            source={require('./assets/icons/Note.png')}
            originalWidth={542}
            originalHeight={790}
            />
        </View>

        <View style={styles.message}>
          <Text style={styles.okayText}>Okay Pond</Text>
          <Text style={styles.almostText}>You are almost there!</Text>
          <Text style={styles.messageText}>Let's create your profile to start teaching!</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
          style={styles.button}
          >
          <Text style={styles.buttonText}>Create Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  note: {
    justifyContent:'center',
    alignItems:'center',
    marginTop:150,
    marginLeft:50,
    marginBottom:30,
    transform:[{ rotate: '10deg'}]
  },
    message: {
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
  },
  okayText: {
    fontSize:50,
    fontWeight:'bold',
    color:'#96C35C',
    marginBottom:10
  },
  almostText: {
    fontSize:20,
    color:"rgba(128,128,128,0.7)",
    marginBottom:10
  },
  buttonContainer: {
    flex:1,
  },
  button: {
    backgroundColor:'#96C35C',
    width:200,
    height:50,
    padding:10,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText: {
    fontSize:17,
    fontWeight:'bold',
    color:"#fff",
    letterSpacing:1
  }
});
