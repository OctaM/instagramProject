import React, {Component} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

export default class LoginTextInput extends Component {
    render() {
        return (
            <View style = {{backgroundColor: "#8b008b"}}>
                <View style={styles.containerView}>
									<View style = {{alignItems:'center'}}>
										<Image source={require('./img/instagram.png')}/>
									</View>
                    <View style={styles.inputView}>
                        <View style={styles.fakeView}></View>
                        <TextInput underlineColorAndroid={'transparent'} style={styles.textInput}></TextInput>
                        <View style={styles.fakeView}></View>
                    </View>
                    <View style={styles.inputView}>
                        <View style={styles.fakeView}></View>
                        <TextInput underlineColorAndroid={'transparent'} style={styles.textInput}></TextInput>
                        <View style={styles.fakeView}></View>
                    </View>
                    <View style={styles.loginView}>
                        <View style={styles.fakeView}></View>
                        <TouchableOpacity style={styles.loginBtn}>
                            <Text style={styles.loginTxt}>Log In</Text>
                        </TouchableOpacity>
                        <View style={styles.fakeView}></View>
                    </View>
                    <View style={styles.txtContainerView}>
                        <View style={styles.fakeView}></View>
                        <View style={styles.textView}>
                            <Text style={styles.firstText}>Forgot your login details?
                            </Text>
                            <Text style={styles.secondText}> Get help singing in.</Text>
                        </View>
                        <View style={styles.fakeView}></View>
                    </View>
                    <View style={styles.orView}>
                        <View style={styles.fakeView}></View>
                        <View style={styles.line}></View>
                        <Text style={styles.or}>OR</Text>
                        <View style={styles.line}></View>
                        <View style={styles.fakeView}></View>
                    </View>
                    <View style={styles.loginWithFacebook}>
                        <View style={styles.fakeView}></View>
                        <TouchableOpacity style={styles.loginWithFacebookTxtView}>
                            <Text style={styles.loginWithFacebookTxt}>Login with facebook</Text>
                        </TouchableOpacity>
                        <View style={styles.fakeView}></View>
                    </View>
                </View>
                <View style={styles.singup}>
                    <Text>Don't have an account?
                    </Text>
                    <TouchableOpacity >
											<Text style = {{color: '#3897f0'}}> Sing up.</Text>
										</TouchableOpacity>
                </View>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    containerView: {
				marginBottom: 40,
    },
    textInput: {
        flex: 0.85,
        borderRadius: 2,
        backgroundColor: 'white',
        height: 50,
        marginTop: 10
    },
    fakeView: {
        flex: 0.075
    },
    inputView: {
        flexDirection: 'row'
    },
    loginView: {
        flexDirection: 'row',
        height: 50,
        marginTop: 10
    },
    txtContainerView: {
        flexDirection: 'row',
        height: 30,
        marginTop: 10
    },
    loginBtn: {
        flex: 0.85,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#c1e0f8',
        borderRadius: 2
    },
    loginTxt: {
        color: '#c1e0f8'
    },
    textView: {
        flex: 0.85,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    firstText: {
        fontSize: 11
    },
    secondText: {
        fontSize: 11,
        color: '#3897f0'
    },
    line: {
        backgroundColor: '#808080',
        flexDirection: 'column',
        flex: 0.35,
        height: 1
    },
    orView: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'center'
    },
    or: {
        color: '#808080',
        flex: 0.1,
        textAlign: 'center'
    },
    loginWithFacebook: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center'
    },
    loginWithFacebookTxtView: {
        backgroundColor: '#3897f0',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.85,
        borderRadius: 2
    },
    loginWithFacebookTxt: {
        color: 'white',
        fontWeight: 'bold'
    },
    singup: {
        marginTop: 10,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#808080'
    }
})
