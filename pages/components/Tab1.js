import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TextInput} from 'react-native';
import {Content, Container, Button, Icon, Item, Input, IconNB} from 'native-base';
import avatar from '../assets/profilepic.jpg';

import {getValueFromKey} from '../../Auth'
import {removeKey} from '../../Auth'


export default class Tab1 extends Component {

  constructor(props) {
    super(props);
    this.state={
      user:{},
      
      email:""
    }
  }

  componentDidMount(){
    //this.props.navigation.setParams({onPress:this.onLogOut});

     getValueFromKey('user')
    .then(value => {
      this.setState({email : value.email})
        getValueFromKey(value.email)
        .then(value => {
          this.setState({user : value})
        })
        .catch(err => alert('error'));
    })
    .catch(err => alert('error'));
    


   }

   

 
  render() {
    return (

      <Container style={{ backgroundColor:'black'}}>
      <ScrollView style={{flex:1}}>
      <View>
        <View style={{alignItems:'center', backgroundColor:'black', justifyContent:'center'}}>
        <Image source={avatar} style={styles.im}/>
        </View>



       <View style={{backgroundColor:'black', flexDirection:'row'}}>
            <Text style={styles.textInput}>Nombre: </Text>
            <Item disabled style={styles.textInputRow}>
            <TextInput editable={this.props.editable} style={styles.textInputEnd} disabled placeholder={this.state.user.name} />
              <IconNB name="ios-information-circle" />
            </Item>
       </View>
      <View style={{backgroundColor:'black', flexDirection:'row'}}>
           <Text style={styles.textInput}>E-mail</Text>
           <Item disabled style={styles.textInputRow}>
            <TextInput editable={this.props.editable} style={styles.textInputEnd} disabled placeholder={this.state.email} />
              <IconNB name="ios-information-circle" />
            </Item>
      </View>

      <View style={{backgroundColor:'black', flexDirection:'row'}}>
          <Text style={styles.textInput}>Direccion: </Text>
          <Item disabled style={styles.textInputRow}>
          <TextInput editable={this.props.editable} style={styles.textInputEnd} disabled placeholder={this.state.user.direccion} />
                 <IconNB name="ios-information-circle" />
          </Item>
      </View>
          



    <View style={{backgroundColor:'black', flexDirection:'row'}}>
          <Text style={styles.textInput}>Telefono: </Text>
          <Item disabled style={styles.textInputRow}>
          <TextInput editable={this.props.editable} style={styles.textInputEnd} disabled placeholder={this.state.user.telefono} />
                 <IconNB name="ios-information-circle" />
          </Item>
    </View>

    
    <View style={{backgroundColor:'black', flexDirection:'row'}}>
          <Text style={styles.textInput}>Documento de identidad No.: </Text>
          <Item disabled style={styles.textInputRow}>
          <TextInput style={styles.textInputEnd} disabled placeholder={this.state.user.documento} />
                 <IconNB name="ios-information-circle" />
          </Item>
    </View>

    
              
        
        
        

</View>

</ScrollView>
<View style={{backgroundColor:'black',bottom:0}}>
          <Button full danger style={{marginBottom:30, alignContent:'center'}} onPress={this.props.onLogOut}>
            <Icon name='close' />
            <Text style={{color:'white'}}>CERRAR SESIÓN</Text>
          </Button>
        </View>
      

        </Container>
        

    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    color:'white', 
    alignItems:'center', 
    justifyContent: "center",
    flex: 1
  },
   textInputEnd: {
    color:'white', 
    flex: 1, 
    alignItems: 'center'
  },
  textInputRow: {
    flex:1,
    alignItems: 'flex-end'
  },
  im:{
    marginTop:'2%', 
    justifyContent: 'center', 
    width: 130,  
    height: 130, 
    borderRadius: 63,  
    borderWidth: 4,  
    borderColor: "white",
    marginBottom:10

  }
 
  });


