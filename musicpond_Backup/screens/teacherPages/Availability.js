import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableHighlight} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

//Teacher Home: Upcoming Lessons
export default class Availability extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
                <Text style={{fontSize:24, fontWeight:'bold', color:'#fff'}}>Availability</Text>
            </View>
          </View>
        {/* Header Ending */}
        
        
          <Calendar
           markingType={'custom'}
           markedDates={{
            '2018-11-01': {
              customStyles: {
                container: {
                  backgroundColor:'#96C35C'
                },
                text: {
                  color: '#000',
                  fontWeight: 'bold'
                },
              },
            },
            '2018-11-08': {
              customStyles: {
                container: {
                  backgroundColor:'#96C35C'
                },
                text: {
                  color: '#000',
                  fontWeight: 'bold'
                },
              },
            },
            '2018-11-15': {
              customStyles: {
                container: {
                  backgroundColor:'#96C35C'
                },
                text: {
                  color: '#000',
                  fontWeight: 'bold'
                },
              },
            },
             '2018-11-22': {
               customStyles: {
                 container: {
                   backgroundColor:'#96C35C'
                 },
                 text: {
                   color: '#000',
                   fontWeight: 'bold'
                 },
               },
             },
             '2018-11-29': {
               customStyles: {
                 container: {
                   backgroundColor: '#96C35C',
                  
                 },
                 text: {
                   color: '#fff',
                   fontWeight: 'bold',
                 },
               }
             }}}
          // Initially visible month. Default = Date()
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2018-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2019-05-30'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {console.log('selected day', day)}}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {console.log('selected day', day)}}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'MMMM yyyy'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {console.log('month changed', month)}}
          // Hide month navigation arrows. Default = false
          hideArrows={true}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          renderArrow={(direction) => (<Arrow />)}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Hide day names. Default = false
          hideDayNames={true}
          // Show week numbers to the left. Default = false
          showWeekNumbers={true}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={substractMonth => substractMonth()}
          // Handler which gets executed when press arrow icon left. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
        />
        <View style={styles.border}></View>
        <View style={styles.description}>
        <Image style={styles.pad}
              source={require("../../assets/icons/DaySelectionLily.png")}
        />
        <Text style={styles.borderText}>Choose your available time</Text>
        </View>

        <TouchableHighlight 
          onPress={() => this.props.navigation.navigate('ConfirmAvailability')}
          style={styles.button}
          >
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
            }}>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex:1,
    alignSelf:'stretch',
    backgroundColor: '#fff',
  },
  header: {
    paddingTop:20,
    paddingLeft:10,
    height:80,
    flexDirection:'row',
    backgroundColor:'#96C35C'
  },
  menu: {
    flex:1,
    justifyContent:'space-between',
    padding:12,
  },
  burger: {
    width:45,
    flexDirection:'column',
    borderWidth:3,
    backgroundColor:"#fff",
    height:1,
    borderColor:"#fff",
    borderRadius:10
  },
  availability: {
    marginLeft:100
  },
  availabilityText: {
    marginTop:10,
    fontSize:30,
    fontWeight:'bold',
    color:'#fff'
  },
  border: {
    width:85+'%',
    borderBottomWidth:3,
    borderBottomColor:'#96C35C',
    alignSelf:'center',
    paddingBottom:20,
  },
  description:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    paddingTop:20,
  },
  pad: {
    width:30,
    height:30
  },
  borderText: {
    fontSize:22,
    fontWeight:'bold',
    alignSelf:'center'
  },
  button: {
    justifyContent:'center',
    alignItems:'center'
  }
});
