import React from 'react'
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import firebase from 'firebase';
import Button from '../components/Button';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '', password: '', errorMessage: null, type: 'patient',
        };
      }

    writeUserData(){
                      
      const user = firebase.auth().currentUser;
      const uid = user.uid;
      const type = this.state.type
      firebase.database().ref('UsersList/').push({
        uid,
        type
        }).then((data)=>{
            //success callback
            console.log('data ' , data)
        }).catch((error)=>{
            //error callback
            console.log('error ' , error)
        })
    }
      
    handleSignUp = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() =>{
        this.writeUserData();
        this.props.navigation.navigate('Main')})
        .catch(error => this.setState({ errorMessage: error.message }))
        
    }

    render() {
        return (
          <View style={styles.container}>
            <Image style={{height: 150, width: 150, marginTop: "-30%", marginBottom: 20,}}  source={require("../assets/images/logo.png")}/>
            <Text style={{color:'#e93766', fontSize: 40}}>Sign Up</Text>
              {this.state.errorMessage &&
                <Text style={{ color: 'red' }}>
                  {this.state.errorMessage}
                </Text>}
              <TextInput
                placeholder="Email"
                autoCapitalize="none"
                style={styles.textInput}
                onChangeText  = {email => this.setState({ email })}
                value={this.state.email}
              />
              <TextInput
                secureTextEntry
                placeholder="Password"
                autoCapitalize="none"
                style={styles.textInput}
                onChangeText = {password => this.setState({ password })}
                value={this.state.password}
              />
              <View style={{margin: 10,}}>
                <Button onPress = {this.handleSignUp}>Sign Up</Button>
              </View>
              <View>
                <Text> Already have an account? <Text onPress = {() => this.props.navigation.navigate('Login')} style={{color:'#e93766', fontSize: 18}}> Login </Text></Text>
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