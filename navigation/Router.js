import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';

//Screens
import SignIn from "./../screens/SignIn";
import TeacherorStudent from "./../screens/TeacherorStudent";
import LogOut from './../screens/Logout';

//Teacher Sign Up Screens
import TRegistration from './../screens/TRegistration';
import CreateProfile from './../screens/teacherPages/CreateProfile';
import TeacherSuccess from './../screens/TeacherSuccess';

//Teacher Screens
import TeacherProfile from "./../screens/teacherPages/TeacherProfile";
import TeacherHome from "./../screens/teacherPages/TeacherHome";
import StudentProfile from './../screens/teacherPages/StudentProfile';
import Availability from './../screens/teacherPages/Availability';
import ConfirmAvailability from './../screens/teacherPages/ConfirmAvailability';
import AvailSuccess from './../screens/teacherPages/AvailSuccess';

//Student Sign Up Screens
import SRegistration from './../screens/SRegistration';
import SCreateProfile from './../screens/studentPages/SCreateProfile';
import StudentSuccess from './../screens/StudentSuccess';

//Student Screens
import BookingConfirm from "./../screens/studentPages/BookingConfirm";
import BookingSuccess from "./../screens/studentPages/BookingSuccess";
import FindATeacher from "./../screens/studentPages/FindATeacher";
import Bookings from "./../screens/studentPages/Bookings";
import StudentHome from "./../screens/studentPages/StudentHome";
import SProfile from "./../screens/studentPages/SProfile";
import STeacherProfile from "./../screens/studentPages/STeacherProfile";
import SCalendar from "./../screens/studentPages/SCalendar";
import SBookingConfirmation from "./../screens/studentPages/SBookingConfirmation";
import SBookingSuccess from "./../screens/studentPages/SBookingSuccess";

import STeachPro1 from "./../screens/studentPages/comps/STeachPro1";
import STeachPro2 from "./../screens/studentPages/comps/STeachPro2";
import STeachPro3 from "./../screens/studentPages/comps/STeachPro3";
import TeachPro1 from "./../screens/teacherPages/comps/TeachPro1";
import TeachPro2 from "./../screens/teacherPages/comps/TeachPro2";
import TeachPro3 from "./../screens/teacherPages/comps/TeachPro3";
import TeachPro4 from "./../screens/teacherPages/comps/TeachPro4";


export const RootStack = createStackNavigator(
  {
    Home: {
      screen: SignIn,
    },
    
    StudentTeacher: {
      screen: TeacherorStudent,
    },
    
    //Teacher Sign Up
    TeacherSignUp: {
      screen: TRegistration,
    },
    TeacherCreateProfile: {
      screen: CreateProfile,
    },
    TeacherSuccess: {
      screen: TeacherSuccess,
    },
    
    //Student Sign Up
    StudentSignUp: {
      screen: SRegistration,
    },
    StudentCreateProfile: {
      screen: SCreateProfile,
    },
    StudentSuccess: {
      screen: StudentSuccess,
    },
    
    
  },
  {
    initialRouteName: 'Home',
  }
);

export const TeacherStack = createDrawerNavigator(
  {
    //Teacher Home
    TeacherHome: {
      screen: TeacherHome,
    },
    
    //Teacher Menu
    TeacherProfile: {
      screen: TeacherProfile,
    },
    Availability: {
      screen: Availability,
    },
    LogOut: {
      screen: LogOut,
    },
    
    
  },
  {
    initialRouteName: 'TeacherHome',
  }
);

export const TeacherPages = createSwitchNavigator(
  {
    ConfirmAvailability: {
      screen: ConfirmAvailability,
    },
    AvailSuccess: {
      screen: AvailSuccess,
    },
    
    
    TeachPro1: {
      screen: TeachPro1,
    },
    TeachPro2: {
      screen: TeachPro2,
    },
    TeachPro3: {
      screen: TeachPro3,
    },
    TeachPro4: {
      screen: TeachPro4,
    },
    
  },
  {
    initialRouteName: 'ConfirmAvailability',
  }
);

export const StudentPages = createSwitchNavigator(
  {
    STeacherProfile: {
      screen: STeacherProfile,
    },
    SCalendar: {
      screen: SCalendar,
    },
    SBookingConfirmation: {
      screen: SBookingConfirmation,
    },
    SBookingSuccess: {
      screen: SBookingSuccess,
    },
    
    STeachPro1: {
      screen: STeachPro1,
    },
    STeachPro2: {
      screen: STeachPro2,
    },
    STeachPro3: {
      screen: STeachPro3,
    },
    
    
  },
  {
    initialRouteName: 'STeacherProfile',
  }
);

export const StudentStack = createDrawerNavigator(
  {
    //Student Home
    StudentHome: {
      screen: StudentHome,
    },
    
    //Student Menu
    StudentProfile: {
      screen: SProfile,
    },
    FindATeacher: {
      screen: FindATeacher,
    },
    Bookings: {
      screen: Bookings,
    },
    LogOut: {
      screen: LogOut,
    },
    
    
  },
  {
    initialRouteName: 'StudentHome',
  }
);

export const Root = createSwitchNavigator(
  {
    RootStack: {
      screen: RootStack,
    },
    StudentStack: {
      screen: StudentStack,
    },
    TeacherStack: {
      screen: TeacherStack,
    },
    TeacherPages: {
      screen: TeacherPages,
    },
    StudentPages: {
      screen: StudentPages,
    },
  }, {
    mode: 'modal',
    headerMode: 'none',
  }
);