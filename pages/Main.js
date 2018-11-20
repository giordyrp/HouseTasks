import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {swtNavigator} from '../Route';
import Login from './Login';


class Main extends Component {
  constructor(props){
    super(props)

    this.state = {
      userL : this.props.user.user,
      signedIn : this.props.user,signedIn,
      checkedSignedIn : this.props.user.checkedSignedIn
    }
  }



  render() {
    const Layout = swtNavigator(true);
    return (

          <View style={{flex:1}}>
            <Layout/>
          </View>
          
    );
  }
}

const mapStateToProps = state => ({
    user: state.user,
  });
  
export default connect(mapStateToProps)(Login);
 
const styles = StyleSheet.create({

});
