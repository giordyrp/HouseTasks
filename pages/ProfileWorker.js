import React, { Component, View, TextInput, } from 'react';
import { Text, StyleSheet,Image ,ScrollView} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Left, Icon,
          Body, Title, Button, Footer, FooterTab, Right, Tabs, Tab, TabHeading} from 'native-base';
// You can import from local files

import Tab1 from './components/WTab1';
import Tab2 from './components/WTab2';
import {removeKey} from '../Auth'



export default class ProfileWorker extends Component {
constructor(props) {
    super(props);

    this.state = ({
      user: null,
      ready:false,
      TextInputDisableHolder: false,
      initRoute: ""
    }) 
    
  }



    onPress =() => {
      this.setState({TextInputDisableHolder: true})
    }


  render() {
        return (   
      
    <Container>

        <Tabs initialPage={0} style={{paddingTop:10, backgroundColor:'#3F51B5'}}>
          <Tab heading={ <TabHeading><Icon name="person"/></TabHeading>}>
            <Tab1 editable={this.state.TextInputDisableHolder} onLogOut={this.props.onLogOut}/>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="star" /></TabHeading>}>
            <Tab2 />
          </Tab>
        </Tabs>
        
    </Container>


     
    );
  }
}



