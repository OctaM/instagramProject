/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import Login from './app/LoginPage/Login.js';
import NewsFeed from './app/NewsFeed/NewsFeed.js';
import {Scene, Router} from 'react-native-router-flux';

export default class InstagramProject extends Component {
    render() {
        return (
          <Router>
            <Scene key="login" component={Login} initial={true} hideNavBar={true}/>
            <Scene key="newsFeed" component={NewsFeed}  hideNavBar={true} title="Instagram"/>
          </Router>
        );
    };
}

AppRegistry.registerComponent('InstagramProject', () => InstagramProject);
