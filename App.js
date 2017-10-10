import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StatusBar
} from 'react-native';
import { Font } from 'expo';

export default class App extends React.Component {
  render() {
    return <MyApp/>;
  }
}

class MyApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: "",
      pw: "",
    }
  }

  // componentDidMount() {
  //   Font.loadAsync({
  //     'rale-way': require('./Public/Static/Font/raleway.ttf'),
  //   });
  // }

  login() {}

  register() {}

  password() {}

  render() {
    return (
      <ImageBackground
        style={Style.container}
        source={require('./Public/Static/Img/main2.jpg')}>
        <StatusBar barStyle="light-content"/>
        <View style={Style.titleBox}>
          {/* <Image source={require('./Public/Static/Img/tree.png')} style={{height:50, width:50}}/> */}
          <Text style={Style.titleText}>iPot</Text>
          <Text style={Style.titleSubText}>Grow your flower with talking
          </Text>
        </View>
        <View style={Style.loginBox}>
          <TextInput 
            style={Style.textInputBox}
            onChangeText={(id) => this.setState({id})}
            placeholder="Email Address"
            placeholderTextColor="white"/>
          <TextInput 
            style={Style.textInputBox}
            onChangeText={(pw) => this.setState({pw})}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={true}/>
          <TouchableOpacity style={Style.loginButton} onPress={this.login}>
            <Text style={Style.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={Style.SubmitButtonBox}>
          {/* <Button title="Register" color="white" onPress={this.register}/>
          <Button title="Password" color="white" onPress={this.password}/> */}
            <TouchableOpacity style={[Style.normalButton, {borderRightColor: 'white', borderRightWidth: 1}]} onPress={this.password}>
              <Text style={[Style.buttonText, {textAlign: 'right'}]}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.normalButton} onPress={this.register}>
              <Text style={[Style.buttonText, {textAlign: 'left'}]}>Password</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}

const Style = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'transparent'
  },
  titleText: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
    // fontFamily: 'rale-way'
  },
  titleSubText: {
    color: 'white',
    paddingLeft:'10%',
    paddingRight:'10%',
    lineHeight: 20,
    textAlign: 'center'
  },
  loginBox: {
    alignContent: 'center',
    justifyContent: 'center',
    marginTop:10,
    marginBottom:10
  },
  textInputBox: {
    borderRadius: 100,
    // borderColor: 'rgba(255,255,255,0.5)',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color:'white',
    textAlign:'center',
    borderWidth: 1,
    height: 50,
    marginLeft:'10%',
    marginRight:'10%',
    marginTop: 10,
  },
  loginButton : {
    borderRadius: 100,
    height: 50,
    marginLeft:'10%',
    marginRight:'10%',
    marginTop: 10,
    backgroundColor: '#2ecc71',
    justifyContent: 'center',
  },
  SubmitButtonBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height:50,
    // marginTop:20,
  },
  normalButton: {
    justifyContent:'center',
    flex:1,
    backgroundColor:'transparent'
  },
  buttonText: {
    color: 'white', textAlign: 'center', fontSize: 18, backgroundColor: 'transparent',
    marginLeft: 20,
    marginRight: 20,
  }
})