import React, { Component } from 'react';
import { Text,
	StyleSheet,
	TextInput,
	View,
	Button,
	TouchableHighlight,
	Image } from 'react-native';
import LoginList from './LoginList.js';
import LoginTextInput from './LoginTextInput.js';

export default class Login extends Component {
	render() {
		return (
			<View style={{flex:1, flexDirection:'column',justifyContent: 'space-between', backgroundColor: '#8b008b'}}>
			 	<LoginList/>
			 	<LoginTextInput/>
            </View>
			);
	};
}
