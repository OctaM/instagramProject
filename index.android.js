/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import Login from './app/Login.js';

export default class InstagramProject extends Component {
    render() {
        return (
          <Login/>
        );
    };
}

AppRegistry.registerComponent('InstagramProject', () => InstagramProject);
