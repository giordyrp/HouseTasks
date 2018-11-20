import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, ImageBackground} from 'react-native';
import {Content, Container, Button, Icon, Item, Input, IconNB, Picker} from 'native-base';
import {updateWorks} from '../src/redux/works'
import { connect } from 'react-redux';


class AddWork extends Component {
    constructor(props) {
        super(props);
        this.state = { id:1, descripcion : '',selected: "key0", titulo:''};
    }

    componentDidMount(){
        if(this.props.works.works.length>0){
            this.setState({id:this.props.works.works.length+1})
        }      
     }
 
     onValueChange(value){
        this.setState({
          selected: value
        })
      }


    handleSubmit = () => {
        const { goBack } = this.props.navigation;
        if (this.state.selected == "key0") {
            alert("Debe seleccionar el tipo de trabajo");
        }else {
        let works = [{id:this.state.id,titulo:this.state.titulo,descripcion:this.state.descripcion,tipo:this.state.selected},...this.props.works.works];
        this.props.dispatch(updateWorks(works));
        goBack()
        //this.props.navigation.navigate('Tab2')
        }
      };

    render() {
        this.loadCategories
        console.log(this.state.categories)
        const background = require('../images/background_register.jpg')
        return (
            <Container >    
                <ImageBackground source={background} style={styles.background} resizeMode="cover">
            <Content>
            
            <View style={{ flexDirection:'row', marginTop:30}}>
                <Text style={{color:'white'}} >Título: </Text>
                <Input style={{color:'white'}} placeholder="Título" onChangeText={(titulo) => this.setState({titulo:titulo})}/>             
            </View>
             <View style={{ flexDirection:'row', marginTop:30}}>
                <Text style={{color:'white'}} >Descripción: </Text>
                <Input style={{color:'white'}} placeholder="Descripcion del trabajo" onChangeText={(descripcion) => this.setState({descripcion:descripcion})}/>             
            </View>
       <View style={{ flexDirection:'row'}}>
        <Text style={{color:'white'}} >Tipo de trabajo : </Text>
        <Picker
              note
              mode="dropdown"
              style={{ width: 200, color:'white' }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Seleccione" value="key0" />
              <Picker.Item label="Pintura" value="Pintura" />
              <Picker.Item label="Redes Eléctricas" value="Redes Eléctricas" />
              <Picker.Item label="Componentes del Hogar" value="Componentes del Hogar" />
              <Picker.Item label="Equipos de Cómputo" value="Equipos de Cómputo" />
        </Picker>
           
      </View> 
       
       
         <Button onPress={this.handleSubmit} iconLeft rounded dark style={{paddingRight:'10%', alignSelf:'center', alignItems:'center', marginBottom:10, marginTop:25 }}> 
            <Icon name='md-add' />
            <Text style={{alignItems: 'center',justifyContent: 'center', marginLeft:'5%', color:'white'}} >Agregar Trabajo</Text>
          </Button>
          
       </Content>
       </ImageBackground>
       </Container>  
       
        );
    }

    
}

const mapStateToProps = state => ({
    works: state.works,
  });
  

  const styles = StyleSheet.create({
    background:{
        width: '100%',
            height: '100%',
            flex: 1 
      }
    
});

export default connect(mapStateToProps)(AddWork);
