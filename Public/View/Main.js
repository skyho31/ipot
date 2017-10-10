import React, {Component} from 'react';
import {View, ImageBackground, StatusBar, Text, Button} from 'react-native';


export default class Main extends Component {
  render() {
    return (
      <View style={Style.container}>
        <StatusBar barStyle="light-content"/>
        <ImageBackground
          source={require('../Static/Img/main.jpg')}
          style={Style.background}>
          <Text Style={{backgroundColor:"transparent", color: "white"}}>Grow your WillPower</Text>
          <Button title="Login" onPress={() => console.log('touch')}/>
        </ImageBackground>
      </View>
    )
  }
}

const Style = {
  container : {
    flex:1
  },
  background: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

