import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import NewsFeedPost from './NewsFeedPost.js';

export default class NewsFeed extends Component {

    render() {
        return (
            <View style={style.container}>
                <View style={style.fakeView}></View>
                <View style={style.alignScroll}>
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
    container: {
        flexDirection: 'row'
    },
    fakeView: {
        flex: 0.05
    },
    scroll: {
        backgroundColor: 'blue',
        flex: 0.9,
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 0,
        height: 40,
    },
    alignScroll: {
        flex: 0.9,
        flexDirection: 'column',
    }
})
