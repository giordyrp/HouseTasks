import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ListView ,FlatList, ActivityIndicator, TouchableOpacity, ToastAndroid} from 'react-native'
import { Text,Container, Header, Item, Input, Button, Picker, Content, Accordion, View, Left, Right, Thumbnail, List, Separator, ListItem, CardItem , Card ,Body } from 'native-base';
//import Icon from 'react-native-vector-icons/MaterialIcons';
// You can import from local files
import categories from './categories.json';
import users from './users.json';
import users2 from './users2.json';




//const categories = require('categories.json');
export default class Search extends Component {
  constructor(props) {
    super(props)
    
    this.state = {

      selected: undefined,
      idSelect: '',
      itemSelected: false,
      searchText:'g',
      isLoading: true,
      ready:false
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


  

  getUsers() {
    return fetch('http://whatsapp-001-site1.htempurl.com/users.json')
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

  query(data){
    if(this.state.isLoading==false && this.state.ready==false){
      var users =[]
    console.log(data)
    data.forEach(element => {
      if(element.subcategories==this.props.navigation.state.params.item.tipo){
        users=[...users,element]
      }
    });
    this.setState({
      dataSource : users,
      ready : true
    })
    users.sort(function (a, b) {
      return a.stars.localeCompare(b.stars);
  });
  users.reverse()
  if (users.length==0){
    ToastAndroid.show('No hay trabajores para el trabajo especificado !', ToastAndroid.LONG);
  }
    return users   
    }else{
      console.log('DATASOURCE')
      console.log(this.state.dataSource)
      return data
    }  
  }

  _onPressItem = () => {
    // updater functions are preferred for transactional updates
    this.props.navigation.navigate('ProfileWorker')
  };

    

  url(stars){
    const stars5 = require('../images/5stars.png');
    const stars4 = require('../images/4stars.png');
    const stars3 = require('../images/3stars.png');
    const stars2 = require('../images/2stars.png');
    const stars1 = require('../images/1stars.png');

    const starsImg = [stars1, stars2, stars3, stars4, stars5];

    return starsImg[stars-1]
  }
  
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
   
      <Container style={{paddingTop:20}}>
        <Content>
          
          <FlatList 
            data={this.query(this.state.dataSource)}
            renderItem={({item}) => 
            <Card style={{flex: 0, marginLeft:10, marginRight:10}}>
                <CardItem button onPress={()=> this.props.navigation.navigate('ProfileWorker')} >
                    <Left>
                      <Thumbnail source={require('../images/user.png')} />
                        <Body>
                            <Text >{item.name}
                            </Text>
                          <Text note>{item.subcategories}
                          </Text>
                        </Body>
                    </Left>
                    <Thumbnail source={this.url(item.stars)}/>
                  </CardItem>
              </Card>}
            keyExtractor={({id}, index) => id}
          />

          
        </Content>
      </Container>
              
          
            
         
    );
  }
}

