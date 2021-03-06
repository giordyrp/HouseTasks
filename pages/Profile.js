import React, { Component, View, TextInput, } from 'react';
import { Text, StyleSheet,Image ,ScrollView} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Left, Icon,
          Body, Title, Button, Footer, FooterTab, Right, Tabs, Tab, TabHeading} from 'native-base';
// You can import from local files

import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import Tab3 from './components/Tab3';
import {removeKey} from '../Auth'



export default class App extends Component {
constructor(props) {
    super(props);

    this.state = ({
      user: null,
      ready:false,
      TextInputDisableHolder: false,
      initRoute: ""
    }) 
    
  }


closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };

    onPress =() => {
      this.setState({TextInputDisableHolder: true})
    }


  render() {
        return (   
      
    <Container>
      <Header hasTabs style={{paddingTop:30}} > 
           
          <Left>
            
          </Left>
          <Body>
            <Title>Datos del Perfil</Title>
          </Body>
          <Right>
            <Button onPress={this.onPress} transparent >
              <Icon name='md-create' />
            </Button>
          </Right>
          </Header>

        <Tabs initialPage={0} style={{paddingTop:10, backgroundColor:'#3F51B5'}}>
          <Tab heading={ <TabHeading><Icon name="person"/></TabHeading>}>
            <Tab1 editable={this.state.TextInputDisableHolder} onLogOut={this.props.onLogOut}/>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="briefcase" /></TabHeading>}>
            <Tab2 onSearch={this.props.onSearch} addWork={this.props.addWork}/>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="star" /></TabHeading>}>
            <Tab3 />
          </Tab>
        </Tabs>
        
    </Container>


     
    );
  }
}



