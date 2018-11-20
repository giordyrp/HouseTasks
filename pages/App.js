import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';


import {swtNavigator} from '../Route';

import {getValueFromKey} from '../Auth';


export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      signedIn : false,
      checkedSignedIn : false
    }
  }

  componentDidMount(){
    getValueFromKey('user')
    .then(value => {
      if (value != 'empty'){
        this.setState({signedIn : true, checkedSignedIn : true});
      }

    })
    .catch(error => alert("Error"));
  }


  render() {
    const Layout = swtNavigator(this.state.signedIn);
    return (
        <View style={{flex:1}}>
          <Layout/>
        </View>
    );
  }
}


const styles = StyleSheet.create({

});
