import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native';

import firebase from '../comps/firebase';

export default class SignIn extends React.Component {static navigationOptions = {
    headerStyle: {
      backgroundColor: 'rgb(147, 195, 105)'
    },
  };
  

 email="";
  password="";
    error ="";
    loading = false;

	handleSignIn=()=> {
    console.log(this.email)

          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user)=>{
              this.props.navigation.navigate('StudentHome')
              console.log(user)
              
          }).catch(()=> {
          
				alert("Wrong email or password")
         // console.log(error.toString())
      })
          
    }


  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }} behavior="padding" enabled>
         
			 <Image
        style={{width: 200, height: 200, margin: 25}}
        source={require("./../assets/icons/MusicPondlogo.png")}
        resizeMode="contain"
      />
			
      <TextInput
        underlineColorAndroid='rgb(147, 195, 105)'  
          style={{
            width:200,
            paddingBottom:5,
            marginBottom:20,
          }}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={(text)=>this.email=text}
      />

      <TextInput 
       underlineColorAndroid='rgb(147, 195, 105)'
          style={{
            width:200,
            paddingBottom:5,
          }}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={(text)=>this.password=text}
      />
      <TouchableHighlight onPress={this.handleSignIn.bind(this)}>
        <Image
        style={{width: 100, height: 50, marginTop:50}}
        source={require('./../assets/icons/SignInButton.png')}
        resizeMode="contain"
        />
      </TouchableHighlight> 
        <TouchableHighlight onPress={() => this.props.navigation.navigate('StudentTeacher')}>
        <Image
          style={{width: 100, height: 100}}
          source={require('./../assets/icons/SignUp_Button.png')}
          resizeMode="contain"
        />
      </TouchableHighlight>
      </KeyboardAvoidingView>
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
});
        
