import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ListView ,FlatList, ActivityIndicator} from 'react-native'
import { Text,Container, Header, Item, Input, Button, Picker, Content, Accordion, View, Left, Right, Thumbnail, List, Separator, ListItem, CardItem , Card ,Body } from 'native-base';
//import Icon from 'react-native-vector-icons/MaterialIcons';
// You can import from local files
import categories from './categories.json';
import users from './users.json';
import users2 from './users2.json';




//const categories = require('categories.json');
export default class SearchHome extends Component {
  constructor(props) {
    super(props)
    
    this.state = {

      selected: undefined,
      idSelect: '',
      itemSelected: false,
      searchText:'g',
      isLoading: true
    }
    this.loadUsers
  }

   loadUsers(text) {
    const url = 'http://whatsapp-001-site1.htempurl.com/php/getByName.php?name=' + text
    fetch(url, {
         method: 'GET'
      })
      .then((response) => {
        return response.json()})
    
  }


  

  getUsers(text) {
    return fetch('http://whatsapp-001-site1.htempurl.com/php/getByName.php?name=' + text)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  componentDidMount(){
    this.getUsers('')
 }
/*
  loadCategories() {
    fetch('./categories.json', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         
         this.setState({
            categories: responseJson
         })
      })
      .catch((error) => {
        alert("Error con categ");
         console.error(error);
      });
  }*/

    

  
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    console.log('MENSAJE')
    this.props.hola
    return (
      <Container style={{paddingTop:21}}>
        <Header searchBar transparent rounded>
    
          <Item> 
            <Icon size={32} name="search" />
            <Input placeholder="Search" onChangeText={(text) => this.getUsers(text)}/>
            <Button onPress = {this._onPressFilter}  transparent>
              <Icon size={32} name="filter-list" />
            </Button>
          </Item>
        </Header> 
        <Content>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Card style={{flex: 0, marginLeft:10, marginRight:10}}><CardItem button onPress={this.props.profileWorker}><Left><Thumbnail source={require('../images/user.png')} /><Body><Text>{item.nombre}</Text><Text note>Desde Octubre 1, 2018</Text></Body></Left><Thumbnail source={require('../images/5-star-rating.png')} /></CardItem></Card>}
          keyExtractor={({id}, index) => id}
        />
        </Content>
          
            
      </Container>     
    );
  }
}

