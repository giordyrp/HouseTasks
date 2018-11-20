import React, { Component } from 'react';
import {StyleSheet,ScrollView} from 'react-native';
import {removeKey} from '../Auth';
import {getValueFromKey} from '../Auth';

import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

import SearchHome from './SearchHome'
import Profile from './Profile'


export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      name : 'User',
      index : 0
    }
   
  }

 onLogOut = () =>{
  getValueFromKey('user')
  .then(value => {
    if (value == 'empty'){
      this.props.navigation.navigate('SignedOut')
    }

  })
  .catch(error => alert("Error"));
 }

 componentDidMount(){
  this.props.navigation.setParams({onPress:this.onLogOut});
   getValueFromKey('user')
  .then(value => this.setState({name : value.email}))
  .catch(err => alert('error'));
 }

 componentDidUpdate(){
  this.onLogOut
 }

 getUser(){
   //alert('pressed');

 }

 

 /*static navigationOptions = ({navigation}) => {
        return{
          headerRight:(
            <Button title='Logout' onPress={navigation.getParam('onPress',()=> console.log('No item'))}/>
          )
        };
        };*/

  hola=()=>{
    console.log('<---------------------------HOLA------------------------------>')
  }

  onLogOut=()=>{
    console.log('<--------------------------------------------Entro LOGOUT--------------------------------------------------------------->')
    removeKey('user')
    .then(()=>{
      this.props.navigation.navigate('SignedOut')
   })
    .catch();
  }

  addWork=()=>{
    this.props.navigation.navigate('AddWork')
  }

  profileWorker=()=>{
    console.log('Card PRESSED')
    this.props.navigation.navigate('ProfileWorker')
  }

  onSearch=(item)=>{
    this.props.navigation.navigate('Search',{item})
  }

  render() {

      let AppComponent = null;

      if (this.state.index == 0) {
         AppComponent = SearchHome
      } else if(this.state.index == 1){
         
      }else{
        AppComponent = Profile
      }

      
    return (
      <Container style={{flex:1}}>
        <AppComponent onLogOut={this.onLogOut} addWork={this.addWork} onSearch={this.onSearch} profileWorker={this.profileWorker} style={{flex:1}}/>
        <Footer>
          <FooterTab>
            <Button active vertical onPress={() => this.setState({index:0})}>
              <Icon  name="search"/>
              <Text>Busqueda</Text>
            </Button>
            <Button vertical>
              <Icon name="ios-chatboxes" />
              <Text>Chats</Text>
            </Button>
            <Button vertical onPress={() => this.setState({index:2})}>
              <Icon name="md-person" />
              <Text>Perfil</Text>
            </Button>
          </FooterTab>
        </Footer>
        
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    height:'30%',
    alignItems: 'center',
    backgroundColor:'white',
    fontSize:16,
    fontWeight:'bold',
    marginLeft:10,
    marginRight:10,
    marginTop:30,
  },
  text:{
    padding: '10%',
    fontSize:16,
    fontWeight:'bold',
  }

});
