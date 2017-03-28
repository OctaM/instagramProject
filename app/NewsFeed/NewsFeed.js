import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import NewsFeedPost from './NewsFeedPost.js';
import Carousel from 'react-native-snap-carousel'

export default class NewsFeed extends Component {

    render() {
        return (
            <View style={style.container}>
                <View style={style.alignScroll}>
                    <View style={style.navBar}>
                        <View>
                            <Image source={require('./Img/photoCamera.png')} style = {style.leftButton}/>
                        </View>
                        <View>
                            <Image source={require('./Img/octaGram.png')}/>
                        </View>
                        <View>
                            <Image source={require('./Img/send.png')} style = {style.rightButton}/>
                        </View>
                    </View>
                    <Storyes/>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <NewsFeedPost/>
                        <NewsFeedPost/>
                        <NewsFeedPost/>
                        <NewsFeedPost/>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

class Storyes extends Component {
    render() {
        return (
            <View style={style.carouselView}>
                <Carousel ref={'carousel'} sliderWidth={30} itemWidth={30} snapOnAndroid={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} inactiveSlideScale={1} bounce={false} contentContainerStyle={style.carouselContainer}>
                    <Story/>
                    <Story/>
                    <Story/>
                    <Story/>
                    <Story/>
                    <Story/>
                </Carousel>
            </View>
        )
    }
}

class Story extends Component {
    render() {
        return (
            <View>
                <Image source={require('./Img/storyPhoto.jpg')} style={style.storyPhoto}/>
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
    },
    storyPhoto: {
        borderRadius: 50,
        borderWidth: 1,
        height: 55,
        width: 55,
        marginRight: 10,
        marginLeft: 10
    },
    carouselView: {
        flexDirection: 'row',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.02)',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.03)'
    },
    leftButton: {
      marginLeft: 10,
    },
    rightButton: {
      marginRight: 10,
    }
})
