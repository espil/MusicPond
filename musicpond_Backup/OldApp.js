import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

//Screens
import SignIn from "./screens/SignIn";
import TeacherorStudent from "./screens/TeacherorStudent";
import LogOut from './screens/Logout';
import Success from './screens/Success';

//Teacher Screens
import TeacherProfile from "./screens/teacherPages/TeacherProfile";
import TeacherHome from "./screens/teacherPages/TeacherHome";
import TRegistration from './screens/TRegistration';
import StudentProfile from './screens/teacherPages/StudentProfile';
import CreateProfile from './screens/teacherPages/CreateProfile';

//Student Screens
import BookingConfirm from "./screens/studentPages/BookingConfirm";
import BookingSuccess from "./screens/studentPages/BookingSuccess";
import FindATeacher from "./screens/studentPages/FindATeacher";
import StudentHome from "./screens/studentPages/StudentHome";

import SCreateProfile from './screens/studentPages/SCreateProfile';

import SRegistration from './screens/SRegistration';

//Sign In Page
class HomeScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'rgb(147, 195, 105)'
    },
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <SignIn />
        <TouchableHighlight onPress={() => this.props.navigation.navigate('StudentTeacher')}>
        <Image
          style={{width: 100, height: 100}}
          source={require('./assets/icons/SignUp_Button.png')}
          resizeMode="contain"
        />
      </TouchableHighlight>
      </View>
    );
  }
}


//Student or Teacher
class StudentTeacher extends React.Component {
  static navigationOptions = {
    title: 'Student or Teacher',
  };
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableHighlight 
          onPress={() => this.props.navigation.navigate('StudentSignUp')}
          >
          <Image
            style={{width: 270, height: 200}}
            source={require('./assets/icons/IamStudent_Button.png')}
            resizeMode="contain"
          />
        </TouchableHighlight> 
        
        <TouchableHighlight 
          onPress={() => this.props.navigation.navigate('TeacherSignUp')}>
          <Image
            style={{width: 270, height: 200}}
            source={require('./assets/icons/IamTeacher_Button.png')}
            resizeMode="contain"
          />
        </TouchableHighlight>
      </View>
    );
  }
}

//Teacher Sign Up Process
class TeacherSignUp extends React.Component {
  static navigationOptions = {
    title: 'Teacher Sign Up',
    headerStyle: {
      backgroundColor: 'rgb(147, 195, 105)'
    },
    headerTitleStyle: {
      fontWeight: 'bold'
    },
  };
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'  }}>
        <TRegistration />
        <TouchableHighlight onPress={() => this.props.navigation.navigate('TeacherCreateProfile')}>
          <Image
            style={{width: 100, margin: 100}}
            source={require('./assets/icons/submit.png')}
            resizeMode="contain"
          />
        </TouchableHighlight>
      </View>
    );
  }
}

class TeacherCreateProfile extends React.Component {
  static navigationOptions = {
    title: 'Teacher Create Profile',
    headerStyle: {
      backgroundColor: 'rgb(147, 195, 105)'
    },
  };
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <CreateProfile />
        <TouchableHighlight onPress={() => this.props.navigation.navigate('TeacherSuccess')}>
          <Image
            style={{width: 100, margin: 100}}
            source={require('./assets/icons/submit.png')}
            resizeMode="contain"
          />
        </TouchableHighlight>
      </View>
    );
  }
}

class TeacherSuccess extends React.Component {
  static navigationOptions = {
    headerLeft: null,
    headerStyle: {
      backgroundColor: 'rgb(147, 195, 105)'
    },
  };
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Success />
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('TeacherHomes')}
          >
            <Image
            style={{width: 100, margin: 100}}
            source={require('./assets/icons/submit.png')}
            resizeMode="contain"
            />
        </TouchableHighlight>
      </View>
    );
  }
}

class TeacherHomes extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerLeft: null,
    headerStyle: {
      backgroundColor: 'rgb(147, 195, 105)'
    },
  };
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TeacherHome />
      </View>
    );
  }
}

//Student Sign Up Process
class StudentSignUp extends React.Component {
  static navigationOptions = {
    title: 'Student Sign Up',
    headerStyle: {
      backgroundColor: 'rgb(173, 222, 227)'
    },
  };
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <SRegistration />
        <TouchableHighlight onPress={() => this.props.navigation.navigate('StudentCreateProfile')}>
          <Image
            style={{width: 100, margin: 100}}
            source={require('./assets/icons/submit.png')}
            resizeMode="contain"
          />
        </TouchableHighlight>
      </View>
    );
  }
}

class StudentCreateProfile extends React.Component {
  static navigationOptions = {
    title: 'Student Create Profile',
    headerStyle: {
      backgroundColor: 'rgb(173, 222, 227)'
    },
  };
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <SCreateProfile />
        <TouchableHighlight onPress={() => this.props.navigation.navigate('StudentSuccess')}>
          <Image
            style={{width: 100, margin: 100}}
            source={require('./assets/icons/submit.png')}
            resizeMode="contain"
          />
        </TouchableHighlight>
      </View>
    );
  }
}

class StudentSuccess extends React.Component {
  static navigationOptions = {
    headerLeft: null,
    headerStyle: {
      backgroundColor: 'rgb(173, 222, 227)'
    },
  };
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Success />
        <TouchableHighlight 
          onPress={() => this.props.navigation.navigate('StudentHomes')}
          >
            <Image
            style={{width: 100, margin: 100}}
            source={require('./assets/icons/submit.png')}
            resizeMode="contain"
          />
        </TouchableHighlight>
      </View>
    );
  }
}

class StudentHomes extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerLeft: null,
    headerStyle: {
      backgroundColor: 'rgb(173, 222, 227)'
    },
  };
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StudentHome />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    
    StudentTeacher: {
      screen: StudentTeacher,
    },
    
    //Teacher Sign Up
    TeacherSignUp: {
      screen: TeacherSignUp,
    },
    TeacherCreateProfile: {
      screen: TeacherCreateProfile,
    },
    TeacherSuccess: {
      screen: TeacherSuccess,
    },
    
    //Teacher Home
    TeacherHomes: {
      screen: TeacherHomes,
    },
    
    //Student Sign Up
    StudentSignUp: {
      screen: StudentSignUp,
    },
    StudentCreateProfile: {
      screen: StudentCreateProfile,
    },
    StudentSuccess: {
      screen: StudentSuccess,
    },
    
    //Student Home
    StudentHomes: {
      screen: StudentHomes,
    },
    
    
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}