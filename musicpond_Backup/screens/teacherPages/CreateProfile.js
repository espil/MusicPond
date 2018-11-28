import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
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
        <View style={{height:25+"%"}}>
          {image &&
          <Image source={{ uri: image }} style={styles.profile} />}
        </View>
        <TouchableHighlight>
             <Text
              title="Upload"
              style={styles.upload}
              onPress={this._pickImage}>
                Upload
              </Text>
          </TouchableHighlight>
           <TextInput
            underlineColorAndroid='rgb(147, 195, 105)'  
            style={styles.input}
            placeholder="Profile Name"
           />
           <TextInput
            underlineColorAndroid='rgb(147, 195, 105)'  
            style={styles.input}
            placeholder="Genre"
           />
           <TextInput
            underlineColorAndroid='rgb(147, 195, 105)'  
            style={styles.input}
            placeholder="Instrument wish to teach"
           />
           <TextInput
            underlineColorAndroid='rgb(147, 195, 105)'  
            style={styles.input}
            placeholder="Years of teaching"
            keyboardType='numeric'
            onChangeText={(text)=> this.onChanged(text)}
            value={this.state.myNumber}
           />
           <TextInput
            underlineColorAndroid='rgb(147, 195, 105)'  
            style={styles.input}
            placeholder="Demo Music"
           />
           <View style={styles.introContainer}>
              <TextInput
                style={styles.intro}
                underlineColorAndroid='transparent'
                placeholder="Tell us about yourself"
                multiline={true}
                numberOfLines={10}
              />
          </View>
      <TouchableHighlight onPress={() => this.props.navigation.navigate('TeacherSuccess')}>
            <Text 
            style={{
              width:120,
              padding:10,
              backgroundColor:'#679D30',
              borderRadius:30,
              color:"#fff", 
              fontSize:20,
              letterSpacing:1,
              fontWeight:'bold',
              alignItems:'center',
              textAlign:'center',
              margin:10
            }}>Submit</Text>  
        </TouchableHighlight>
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
    color:"#fff",
    fontSize:10,
    letterSpacing:1,
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
    borderWidth:1,
    padding:5
  },
  intro: {
    width:250,
    height:100,
    paddingBottom:70,
    justifyContent:'flex-start',
  }
});
