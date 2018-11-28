import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Button title="Sign In"/>
        <Button title="Sign Up"/>
        <Text></Text>
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
});
