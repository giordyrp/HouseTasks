import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Signup from './pages/Signup';
import AddWork from './pages/AddWork';
import Tab2 from './pages/components/Tab2';
import Tab1 from './pages/components/Tab1';
import Home from './pages/Home';
import Search from './pages/Search';
import SearchHome from './pages/SearchHome';
import Profile from './pages/Profile';
import ProfileWorker from './pages/ProfileWorker';

export const SignedOut = createStackNavigator ({
    Login :{
      screen:Login,
      navigationOptions : {
        header: null,
        }
    },
    Signup:{
      screen:Signup,
      navigationOptions : {
        title: "Sign up",
        }
    }
    }
);

export const SignedIn = createStackNavigator ({
    Home :{
    screen:Home,
    navigationOptions : {
      header: null,
      }
  },
  AddWork :{
    screen:AddWork,
    navigationOptions : {
      title:"Añadir trabajo",
      }
  },
  Search :{
    screen:Search,
    navigationOptions : {
      title:"Resultados",
      }
    }, 
  ProfileWorker: {
    screen:ProfileWorker,
    navigationOptions:{
      title:'',
   }
  }

    }
);



export const swtNavigator = (value = false) => {
  return createSwitchNavigator (
  {
      SignedIn:{
        screen: SignedIn,
      },
      SignedOut:{
        screen:SignedOut,
      }
    },
    {
      initialRouteName : value ? 'SignedIn' : 'SignedOut'
    }
  );
}
