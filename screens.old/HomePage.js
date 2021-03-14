import React, { Component } from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageSlider from '../components/imageSlider';
import {  TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.Logout = this.Logout.bind(this);
        this.goTocooked = this.goToCooked.bind(this);
    }

    

    

    
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7a133',
    },
    containerGird: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        textAlign: 'center'
    },
    headerContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    headerTitle: {
        textAlign: 'center',
        fontSize: 30,
        paddingHorizontal: 10,
        fontWeight: 'bold',
    },
    imgSize: {
        width: 110,
        height: 105,
        borderRadius: 5,
    },
    categoryList: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginBottom: 10
    },
    textTitle: {
        fontSize: 20,
        marginBottom: 4
    },
    textDesc: {
        fontSize: 15,
    },
    searchBoxContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchBox: {
        backgroundColor: '#cfcdcc',
        borderRadius: 5,
        color: 'black',
        paddingHorizontal: 10,
        paddingVertical: 8,
        fontSize: 20,
        width: '93%',
    },
    categoryListContainer: {
        backgroundColor: '#e28743',
        paddingBottom: 10,
        margin: 10,
        borderRadius: 8
    },
    textTitleDesc: {
        marginLeft: 10
    }
});
