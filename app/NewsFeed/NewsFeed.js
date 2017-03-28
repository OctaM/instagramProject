import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import NewsFeedPost from './NewsFeedPost.js';
import NavigationBar from 'react-native-navbar';

export default class NewsFeed extends Component {

    render() {
        return (
            <View style={style.container}>
                <View style={style.fakeView}></View>
                <View style={style.alignScroll}>
                    <View style={style.navBar}>
                        <View>
                            <Image source={require('./Img/photoCamera.png')} />
                        </View>
                        <View>
                            <Image source={require('./Img/octaGram.png')}/>
                        </View>
                        <View>
                            <Image source={require('./Img/photoCamera.png')}/>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <NewsFeedPost/>
                        <NewsFeedPost/>
                        <NewsFeedPost/>
                        <NewsFeedPost/>
                    </ScrollView>
                </View>
                <View style={style.fakeView}></View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    navBar: {
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)'
    },
    container: {
        flexDirection: 'row'
    },
    fakeView: {
        flex: 0.05
    },
    scroll: {
        backgroundColor: 'blue',
        flex: 0.9
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 0,
        height: 40
    },
    alignScroll: {
        flex: 0.9,
        flexDirection: 'column'
    },
    navBar: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)'
    }
})
