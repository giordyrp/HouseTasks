import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View, Image, Dimensions, ImageBackground} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import {setValueOnKey} from '../Auth';
import {getValueFromKey} from '../Auth';

export default class Login extends Component {

  constructor(props){
    super(props)
    this.state={
      user : '',
      email : '',
      password : '',
    }
    this.onSignIn =this.onSignIn.bind(this);
  }

  onSignIn () {
    getValueFromKey(this.state.email)
    .then (value => {
      if (value == 'empty'){
        alert('Usuario Invalido');
      }else if (this.state.password != value.password){
        alert('Contraseña Incorrecta');
      }else{
        this.setState({user:this.state.email});
        var loggedUser = {email:this.state.email}
        setValueOnKey('user',loggedUser);
        this.props.navigation.navigate('Home');

      }
    });
  }
  render() {
    const {height: screenHeight} = Dimensions.get('window');
    const background = require('../images/login1_bg.png')
    return (
      <Container>
        <Content>
        <ImageBackground source={background} style={styles.background} resizeMode="cover">
        <View style={{flex: 1, height: screenHeight, justifyContent: 'center'}}>
          <View style={styles.ViewOut}>
            <Image style={styles.image} source={require('../images/logo.png')}/>
          </View>
          <Form>
          <View style={styles.ViewOut}></View>
            <Item>
              <Input style={{color:'white'}} placeholder="Email" onChangeText={(email) => this.setState({email:email})}/>
            </Item>
            <View style={styles.ViewOut}></View>
            <Item >
            <Input last style={{color:'white'}} placeholder="Contraseña" secureTextEntry={true} onChangeText={(password) => this.setState({password:password})} />
            </Item>
          </Form>
          <View style={styles.ViewOut}> 
            <Button block style={styles.loginBtn} onPress={this.onSignIn}>
              <Text style={{color:'white', fontSize:18}}>Ingresar</Text>
            </Button>
          </View>
          
          <Text style={{textAlign:"center"}}>--o--</Text>
          <Button block style={styles.emailBtn} onPress={() => {this.props.navigation.navigate('Signup')}}>
            <Text style={{fontSize:18}}>Registrate con tu correo</Text>
          </Button>
          </View>
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f3fbff',
    padding:20
  },
  image:{
    aspectRatio: 1,
    height:100,
    width :100,
    margin:20,
  },
  loginBtn:{
    marginTop:10,
    padding:20,
    backgroundColor:'#b12b2a',
  },
  facebookBtn:{
    marginTop:10,
    padding:20,
    backgroundColor:'#3b5998',
  },
  emailBtn:{
    marginTop:10,
    padding:20,
    backgroundColor:'white',
  },
  ViewOut:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  background:{
    width: '100%',
        height: '100%',
        flex: 1 
  }

});
