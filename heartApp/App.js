/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
 
import React, {Component} from 'react';
// Step 1
import {Platform, StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
 
const heartIcon = require('./images/heart.png');
 
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
 
type Props = {};
export default class App extends Component<Props> {
  // Step 2
  state = {
    liked:false
  };
  //Handler onClick
  handleButtonPress = () => {
    this.setState({liked: !this.state.liked});
  }
 
  render() {
    // Step 4
    const likedStyles = this.state.liked ? styles.liked: undefined;
    // Step 3
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.handleButtonPress} style={styles.button} underlayColor="#fefefe">
           <Image source={heartIcon} style={[styles.icon,likedStyles]}/>
        </TouchableHighlight>
        <Text style={styles.text}>Do you like this app?</Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
  button: {
    borderRadius: 5,
    padding: 10,
  },
  icon: {
    width: 180,
    height: 180,
    tintColor: '#f1f1f1',
  },
  liked: {
    tintColor: '#e74c3c',
  },
  text: {
    marginTop: 20,
  },
});