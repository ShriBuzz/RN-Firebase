import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import firebase from 'firebase';
import Button from '../components/Button';

export default class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '', password: '', errorMessage: null,
      };
    }
      handleLogin = (email, password) => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            //this.props.navigation.navigate('Home')
          })
          .catch(error => this.setState({ errorMessage: error.message }))
      }
     

    render() {
      return (
        <View style={styles.container}>
          <Image style={{height: 150, width: 150, marginTop: "-30%", marginBottom: 20,}}  source={require("../assets/images/logo.png")}/>
          <Text style={{color:'#e93766', fontSize: 40}}>Login</Text>
          {this.state.errorMessage &&
            <Text style={{ color: 'red' }}>
              {this.state.errorMessage}
            </Text>}
          <TextInput style={styles.textInput}
            autoCapitalize="none"
            placeholder="Email"
            onChangeText = {email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Password"
            onChangeText = {password => this.setState({ password })}
            value={this.state.password}
          />
          <View style={{margin: 10,}}>
          <Button onPress= {() => this.handleLogin(this.state.email, this.state.password)}>LOGIN</Button>
          </View>
          <View>
          <Text> Don't have an account? <Text onPress = {() => this.props.navigation.navigate('SignUp')} style={{color:'#e93766', fontSize: 18}}> Sign Up </Text></Text>
          </View>
        </View>
      )
    }
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})