import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View, Image, ImageBackground, AppRegistry} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Picker, Right ,Left} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import {setValueOnKey} from '../Auth';
import {getValueFromKey} from '../Auth';

export default class Signup extends Component {

  constructor(props){
    super(props);
    this.state={
      name:'',
      email:'',
      password:'',
      direccion:'',
      telefono:'',
      documento:'',
      selected: "key0"
    }
    this.onSignUp=this.onSignUp.bind(this);
    
  }
 
  onSignUp(){
    if (this.state.selected == "key0") {
        alert("Debe seleccionar un tipo de usuario");
    }else {
    var user = {name:this.state.name, password:this.state.password, direccion : this.state.direccion,telefono:this.state.telefono, documento:this.state.documento };
    setValueOnKey(this.state.email,user)
    .then(() => {
      alert('Usuario creado exitosamente , ya puede Ingresar')
    })
    .catch(err => alert('Error al crear el usuario'));

    getValueFromKey(this.state.email)
    .then(value => {
      console.log(value)
  })
    .catch(err => alert('error'));
  }
}

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  render() {
    const background= require('../images/login1_bg.png');
    return (
      <Container style={{flex: 1}}>
        <Content >
          <ImageBackground source={background} style={styles.background} resizeMode="cover">
          
          <Image style={styles.image} source={require('../images/logo.png')}/>
          <Form>
            <Item rounded style={{marginBottom:5}} >
              <Input 
              style={{color:'white'}}
               placeholder="Nombre" 
               
               onChangeText={(name) => this.setState({name:name})} 
                 
               
               />
            </Item>
            <Item rounded style={{marginBottom:5}}>
              <Input  
              style={{color:'white'}} 
              placeholder="E-mail" 
              
              onChangeText={(email) => this.setState({email:email})}
                
              
              />
            </Item>
            <Item rounded style={{marginBottom:5, backgroundColor:'transparent'}}>
              <Input  
              style={{color:'white'}} 
              placeholder="Contraseña"               
              secureTextEntry={true} 
              
              onChangeText={(password) => this.setState({password:password})}
                
              
              />
            </Item>
            <Item rounded style={{marginBottom:5}}>
              <Input 
              style={{color:'white'}} 
              placeholder="Dirección" 
              
              onChangeText={(direccion) => this.setState({direccion:direccion})}
              
              />
            </Item>
            <Item rounded style={{marginBottom:5}}>
              <Input 
              style={{color:'white'}} 
              keyboardType='numeric' 
              placeholder="Teléfono" 
              onChangeText={(telefono) => this.setState({telefono:telefono})}
               
              
              />
            </Item >
            <Item rounded style={{marginBottom:5}}>
              <Input 
              style={{color:'white'}} 
              keyboardType='numeric' 
              
              placeholder="Documento de identidad (Cédula de Ciudadanía)" 
              onChangeText={(documento) => this.setState({documento:documento})}
           
          
              
              />
            </Item>
          </Form>


          <Picker
              note
              mode="dropdown"
              
              style={{ width: 300, marginLeft:20 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Seleccione tipo de usuario" value="key0" />
              <Picker.Item label="Cliente" value="key1" />
            </Picker>
          
            <Button block style={styles.loginBtn} onPress={this.onSignUp}>
              <Text style={{color:'white', fontSize:18}}>Registrarse</Text>
            </Button>
          <Right/>

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
  },
  image:{
    aspectRatio: 1,
    height:100,
    width :100,
    margin:20,
    alignSelf:'center'
  },
  loginBtn:{
    marginTop:10,
    padding:20,
    alignSelf:'center',
    backgroundColor:'#b12b2a',
    marginBottom:15
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
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  background:{
    width: '100%',
        height: '100%',
        flex: 1 
  }
});
AppRegistry.registerComponent('NextInput', () => Signup);