import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TextInput, Picker, KeyboardAvoidingView } from 'react-native';

import DatePicker from 'react-native-datepicker';
import firebase from '../comps/firebase';


export default class SRegistration extends React.Component {

      email= '';
        password='';
        name='';
        province='';
        phone='';
        email='';
        dob='';
        userType=1;
  
    
    constructor(props){
    super(props);
    this.state = {date:"1993-11-25"}
    this.state = {
      province:''
    }
  }

    handleSignUp=()=> {
   
        userObj = {'name': this.name,
                   'province': this.province,
                   'phone':this.phone,
                   'userType':this.userType};

        firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then((user)=>{
         //this.props.navigation.navigate('StudentCreateProfile');
            
       console.log('uid', user.user.uid);
            myid = user.user.uid;
        firebase.database().ref('usersInfo/'+myid).set({
            uid:myid, 
            name:this.name,
            email:this.email,
            password:this.password,
          province:this.province,
          phone:this.phone,
        dob:this.dob,
          userType:this.userType

            
        }).then(()=>{
            console.log('inserted2');
            this.props.navigation.navigate('StudentCreateProfile',{
                myid: myid,
                samplepara:'anything',
            });

         
        }).catch((error)=>{
            
            console.log(error);

        })
        
        })
    }
        

  onChanged = (text) => {
    let newText = '';
    let numbers = '0123456789 ';

    for (var i=0; i < text.length; i++) {
      if(numbers.indexOf(text[i]) > -1 ){
        newText = newText + text[i];
      } else {
        alert('please enter numbers only');
      }
    }
    this.setState({
      myNumber:newText
    })
  }

  render() {

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        {/* Header */}
      {/* <View style={styles.image_container}>
        <Image 
            style={styles.image}
            source={require("./../assets/icons/student_Regi.png")}
            resizeMode="contain"
        />
      </View> */}
      {/* Information */}
      <View style={styles.input_container}>
        <TextInput 
            style={styles.input}
            placeholder= "Name"
            underlineColorAndroid='rgb(147, 195, 105)'
             onChangeText={(text)=>this.name=text}

        />
        <TextInput 
            style={styles.input}
            placeholder= "Email"
            underlineColorAndroid='rgb(147, 195, 105)' 
            onChangeText={(text)=>this.email=text}

        />
        <TextInput 
            style={styles.input}
            placeholder= "Password"
            underlineColorAndroid='rgb(147, 195, 105)' 
            onChangeText={(text)=>this.password=text}
        />
      {/* Province Picker */}
        <Text style={styles.title}>Province</Text>
        <Picker
            style={styles.provinces}
            selectedValue={this.state.province}
            onValueChange={(itemValue, itemIndex) => this.setState({province: itemValue})}>
              <Picker.Item label="Alberta" value="al" />
              <Picker.Item label="British Columbia" value="BC" />
              <Picker.Item label="Ontario" value="on" />
              <Picker.Item label="Quebec" value="qb" />
              <Picker.Item label="Nova Scotia" value="ns" />
              <Picker.Item label="Manitoba" value="ma" />
              <Picker.Item label="P.E.I" value="pe" />
              <Picker.Item label="Saskatchewan" value="sa" />
              <Picker.Item label="Newfoundland" value="ne" />
          </Picker>
        {/* Phone Number */}
        <TextInput
            underlineColorAndroid='rgb(147, 195, 105)'  
            style={styles.input}
            keyboardType='numeric'
             onChangeText={(text)=>this.phone=text}
            value={this.state.myNumber}
            maxLength={15}
            placeholder= "Phone"
        />
        <Text style={styles.title}>Date of Birth</Text>
          <DatePicker 
            style={styles.dob}
            placeholder="Select Date"
            date={this.state.date}
            mode="date"
            minDate="1910-01-01"
            maxDate="2005-01-01"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            onChangeValue={(value)=>this.dob=value}
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                display:'none'
              },
              dateInput: {
                marginLeft:15,
                borderColor:'rgb(147, 195, 105)',
              }
            }}
            onDateChange = {(date) => {this.setState({date:date})}}
          />
        </View> 
        <TouchableHighlight  
        onPress={this.handleSignUp.bind(this)}
        underlayColor='#679D30'>
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
              marginBottom:30
            }}>Submit</Text>
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
  },
  image_container: {
    flex:1,
    justifyContent:"flex-start",
    marginTop:20
  },
  image: {
    width:500,
    height:60
  },
  input_container: {
    flex:1,
    marginTop:50,
  },
  input: {
    margin:10,
    width:250,
    paddingBottom:10,
    paddingLeft:5,
    fontSize:16
  },
  title: {
    flexDirection:'row',
    color:'rgba(128,128,128,0.5)',
    paddingLeft:15,
    fontSize:16,
    paddingBottom:5
  },
  provinces: {
    width:250,
    marginLeft:10,
    color:"#333"
  },
  dob: {
    width:270,
  }
});
