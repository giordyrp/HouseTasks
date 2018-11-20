import React, {Component} from 'react';
import {View, StyleSheet, Image, ScrollView, Dimensions,FlatList, ToastAndroid} from 'react-native';
import {Fab} from 'native-base'
import { connect } from 'react-redux';


import {Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Thumbnail,
  Left,
  Right,
  Body} from 'native-base';
import Item from '../../theme/components/Item';



class Tab2 extends Component {
constructor(props){
  super(props)

}


  render() {
const deviceWidth = Dimensions.get("window").width;

    return (
      <Container style={styles.container}>   
      <Text style={{alignSelf: 'center',  color:'white', marginBottom:10}}>TRABAJOS SOLICITADOS</Text>  
       <Content>
       
          <FlatList
          data={this.props.works.works}
          renderItem={({item}) => 
          
          <Card style={{flex: 0,marginLeft:10, marginRight:10}}> 
            <CardItem>
              <Left>
                <Body>
                  <Text>{item.titulo}</Text>
                  <Text note>{item.tipo}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  {item.descripcion}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}} onPress={this.props.onSearch.bind(this,item)}>
                  <Icon name="search" />
                  <Text>Buscar</Text>
                </Button>
              </Left>
            </CardItem>
            </Card>
          
          }
          keyExtractor={({id}, index) => id}
        />      
        </Content>
        <Fab direction="up" position="bottomRight" onPress={this.props.addWork}>
                <Icon
                    name="md-add"
                />
          </Fab>
      </Container>
  
    );
  }
}

const mapStateToProps = state => ({
  works: state.works,
});

export default connect(mapStateToProps)(Tab2);

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor:'black'
  },
   mb: {
    marginBottom: 15
  }
  
  });
