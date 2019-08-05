import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Switch} from 'react-native';
import firebase from 'firebase';
import Button from '../components/Button';

export default class Worker extends React.Component {
  constructor(props) {
    super(props);
    this.onBookPress = this.onBookPress.bind(this);
  }

    state = { currentUser: null }
    componentDidMount() {
      const { currentUser } = firebase.auth()
      this.setState({ currentUser })
  }

  onBookPress() {
    this.props.navigation.navigate('Calc')
  }

  onPressLogOut() {
    firebase.auth().signOut()
      .then(() => {
        this.setState({
          email: '',
          password: '',
          authenticating: false,
          user: null,
        })
      }, error => {
        console.error('Sign Out Error', error);
      });
  }
 
  render() {
    const { currentUser } = this.state
    state={
      switchValue: false
       
    }
  return (
      <View style={styles.container}>
          
        <View style={styles.headerContent}>
            <Image style={styles.avatar}
              source={require('../assets/images/prof.png')}/>

            <Text style={styles.name}>Worker</Text>
            
        </View>
        <View style={styles.body}>
          <View>
              <Text style={styles.userInfo}>Email</Text>
              <Text style={{color:'black', fontSize: 16, marginBottom: 20,}}> 
                {currentUser && currentUser.email}
              </Text>
              <Text >{this.state.switchValue ? "on" : "off"}</Text>
              <Switch value={this.state.switchValue} onValueChange={(switchValue) => this.setState({switchValue})}/>
              <Button
                onPress={() => this.onBookPress()}
              >
                Booking
              </Button>
          </View>

          <Button                   
          onPress={() => this.onPressLogOut()}
          style={{marginTop: 20,}}
          >
            Log Out
          </Button>
        </View>            
      </View>        
    )
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor: "#DCDCDC",
  },
  headerContent:{
    padding:30,
    paddingBottom: 20,
    alignItems: 'center',
    
  },
  body:{
    alignItems: 'flex-start',
    marginLeft: 30,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
    marginBottom: 10,
  },
  
})