import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Button, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
//add ImagePicker for ImagePicking//
import { ImagePicker } from 'expo';

export default class CreateProfile extends React.Component {
    state = {
      image: null,
    };

    constructor(props){
      super(props);
  
      this.state = {
      }
    }

    onChanged = (text) => {
      let newText = '';
      let numbers = '0123456789- ';
  
      for (var i=0; i < text.length; i++) {
        if(numbers.indexOf(text[i]) > -1){
          newText = newText + text[i];
        } else {
          alert('please enter numbers only');
        }
      }
      this.setState({
        myNumber:newText
      })
    }

    //ImagePicking Function
    _pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
    
      console.log(result);
    
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
    };
  
  render() {
    
    //Render Image state
    let { image } = this.state;

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

      <ImageBackground
      source={require('../../assets/Stu_Reg.png')}
      style={{width: '100%', height: '100%',alignItems: 'center', justifyContent: 'center' }}
      >
        <View style={{height:15+"%"}}>
          {image &&
          <Image source={{ uri: image }} style={styles.profile} />}
        </View>
        <TouchableHighlight>
             <Text
              title="Upload"
              style={styles.upload}
              onPress={this._pickImage}>
                Photo Upload
              </Text>
          </TouchableHighlight>
           <TextInput
            underlineColorAndroid='rgb(147, 195, 105)'  
            style={styles.input}
            placeholder="Age"
            onChangeText={(text)=>this.age=text}
           />
           <TextInput
            underlineColorAndroid='rgb(147, 195, 105)'  
            style={styles.input}
            placeholder="Instrument wish to learn"
            onChangeText={(text)=>this.instrument=text}

           />
           <TextInput
            underlineColorAndroid='rgb(147, 195, 105)'  
            style={styles.input}
            placeholder="Genre"
            onChangeText={(text)=>this.genre=text}

           />
           <View style={styles.introContainer}>
              <TextInput
                style={styles.intro}
                underlineColorAndroid='transparent'
                placeholder="Tell us about yourself"
                multiline={true}
                numberOfLines={10}
                onChangeText={(text)=>this.bio=text}

              />
          </View>
      <TouchableHighlight onPress={() => this.props.navigation.navigate('StudentSuccess')}>
            <Image
            source={require('../../assets/icons/submit.png')}
            style={{width:100, height:50, marginTop:80}}
            resizeMode="contain"
            /> 
        </TouchableHighlight>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignSelf:'stretch',
    backgroundColor: '#fff',
    alignItems:'center'
  },
  profile: {
    width:100,
    height:100,
    backgroundColor:'#fff',
    borderRadius:50,
    borderColor:'rgba(147, 195, 105,0.5)',
    borderWidth:3,
    position:'relative',
    marginTop:20
  },
  upload: {
    width:100,
    padding:5,
    backgroundColor:'rgb(147, 195, 105)',
    borderRadius:30,
    fontSize:10,
    fontWeight:'bold',
    alignItems:'center',
    textAlign:'center',
    marginTop:10,
  },
  input: {
    margin:10,
    width:250,
    paddingBottom:5,
    paddingLeft:5,
  },
  introContainer: {
    borderColor:'rgb(147, 195, 105)',
    padding:5
  },
  intro: {
    width:230,
    height:100,
    paddingBottom:70,
    justifyContent:'flex-start',
  }
});
