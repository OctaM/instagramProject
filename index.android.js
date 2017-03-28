/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';
import Login from './app/LoginPage/Login.js';
import NewsFeed from './app/NewsFeed/NewsFeed.js';
import {Scene, Router} from 'react-native-router-flux';

export default class InstagramProject extends Component {
    render() {
        return (
          <Router>
            <Scene key="login" component={Login} initial={true} hideNavBar={true}/>
            <Scene key="newsFeed" component={NewsFeed}  hideNavBar={true} />
          </Router>
        );
    };
}

const style = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height:30,
    width: 80,
  }
})

AppRegistry.registerComponent('InstagramProject', () => InstagramProject);
