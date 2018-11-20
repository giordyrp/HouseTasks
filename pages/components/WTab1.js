import React, {Component} from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TextInput} from 'react-native';
import {Content, Container, Button, Icon, Item, Input, IconNB} from 'native-base';
import avatar from '../assets/profilepic.jpg';

import {getValueFromKey} from '../../Auth'
import {removeKey} from '../../Auth'


export default class WTab1 extends Component {

  constructor(props) {
    super(props);
  }



  
 
  render() {
    return (

      <Container style={{ backgroundColor:'black'}}>
      <ScrollView style={{flex:1}}>
      <View>
        <View style={{alignItems:'center', backgroundColor:'black', justifyContent:'center'}}>
        <Image source={avatar} style={styles.im}/>
            <Text style={styles.textInput}>Worker</Text>

           <Text style={styles.textInput}>user@user.com</Text>

          <Text style={styles.textInput}>Trabaja en : Redes Eléctricas </Text>
      </View>
        
                     
        
        

</View>

</ScrollView>

<View style={{backgroundColor:'black', alignContent:'center', alignItems:'center'}}>
            <Button iconLeft rounded info style={{paddingRight:'10%', alignSelf:'center', alignItems:'center', marginBottom:10, marginTop:25 }}> 
            <Icon name='mail' />
            <Text style={{alignItems: 'center',justifyContent: 'center', marginLeft:'5%'}} >Contactar trabajador</Text>
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


