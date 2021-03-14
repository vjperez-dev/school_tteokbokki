import React, { useRef, useState } from 'react';
import { Text, View, Image, Alert, ImageBackground, StyleSheet, DrawerLayoutAndroid } from 'react-native';
import Category from '../components/Explore/Category';
import { SafeAreaView } from 'react-native-safe-area-context';
import Category1 from '../components/Explore/Category1';
import Category2 from '../components/Explore/Category2';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TextInput, TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwsome from 'react-native-vector-icons/FontAwesome'


const AboutUs = ({ navigation }) => {
    const drawer = useRef(null);

    const Logout = () => {
        Alert.alert(
            "Logging Out?",
            "Are you sure you want to LogOut?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Yes",
                    onPress: () => navigation.navigate('Login'),
                }
            ]
        );
    }

    const navigationView = () => (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#e7a133" }}>
            <View style={styles.container}>
                <View style={styles.navContainer}>
                    <Image source={require('../img/sampledp.png')} style={styles.imgDP} />
                    <Text style={styles.userNameNav}>Admin</Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btnHome} onPress={() => navigation.navigate('Home')}>
                        <Entypo name='home' size={35} />
                        <Text style={styles.menu}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnAbout}>
                        <AntDesign name='questioncircle' size={35} />
                        <Text style={styles.menu}>About Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnLogOut} onPress={Logout}>
                        <FontAwsome name='power-off' size={35} />
                        <Text style={styles.menu}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            renderNavigationView={navigationView}>
            <View style={{ flex: 1, backgroundColor:'#e7a133'}}>
                <SafeAreaView style={{ backgroundColor: '#e7a133' }} />
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={{ marginTop: 2 }} onPress={() => drawer.current.openDrawer()}>
                        <Entypo name='menu' size={30} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}></Text>
                    <View style={styles.btnAddtoCartCont}>
                        <TouchableOpacity style={styles.btnAddtoCart} onPress={() => navigation.navigate('Cart')}>
                            <AntDesign name='shoppingcart' size={30} />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={styles.hederAboutUs}>
                        <Image source={require('../img/aboutus.png')} style={styles.imgheader} />
                    </View>
                    <Text style={styles.appTitle} >SCHOOL TTEOKBOKKI</Text>
                    <View style={styles.imgContainer}>
                        <Image source={require('../img/splash.png')} style={styles.aboutIcon} />
                    </View>
                    <Text style={styles.paraGraph}>
                        Craving for Korean food? Maybe you’re in the mood for a different kinds of Korean food from Street food to meals.
                </Text>
                    <View style={styles.firstImgScroll}>
                        <ScrollView horizontal={true} style={{ marginHorizontal: 20 }} showsHorizontalScrollIndicator={false} >
                            <Category imageUri={require('../img/drinks.png')} name="Drinks" />
                            <Category imageUri={require('../img/noodles.png')} name="Noodles" />
                            <Category imageUri={require('../img/snacks.png')} name="Snacks" />
                            <Category imageUri={require('../img/frozenfoods.png')} name="Frozen Foods" />
                        </ScrollView>
                    </View>
                    <Text style={styles.paraGraph}> Since 2021, School Tteokbokki has been the go-to breakfast, lunch and dinner for residents of QC, Philippines. Our Korean food serves the best quality coming from wholesome and flavorful dining options for breakfast, lunch and dinner. Sounds delicious, right? </Text>
                    <View style={{ height: 110, marginTop: 5, }}>
                        <ScrollView horizontal={true} style={{ marginHorizontal: 20 }} showsHorizontalScrollIndicator={false} >
                            <Category imageUri={require('../img/breakfast.png')} name="Breakfast" />
                            <Category imageUri={require('../img/lunch.png')} name="Lunch" />
                            <Category imageUri={require('../img/dinner.png')} name="Dinner" />
                        </ScrollView>
                    </View>
                    <Text style={styles.paraGraph} > We’re here to serve you the best Korean food around, whenever you’re looking for a great quality Korean foods. It delivers at your doorstep for SAME DAY DELIVERY. Just send us your orders with your details. </Text>
                    <View style={{ height: 200, marginTop: 20, marginBottom: 20, alignItems: 'center', marginBottom: 10, }}>
                        <Text style={{ fontSize: 20 }}>Korean Food</Text>
                        <Image source={require('../img/koreanfood.png')} style={styles.footerImg} />
                    </View>
                </ScrollView>
            </View>
        </DrawerLayoutAndroid>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        backgroundColor: '#e7a133',
        paddingVertical: 10,
    },
    headerTitle: {
        textAlign: 'center',
        fontSize: 30,
        paddingHorizontal: 10,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        height: 1000,
        backgroundColor: "#e7a133",
    },
    hederAboutUs: {
        width: "100%",
        height: "15%"
    },
    contentContainer: {
        paddingBottom: 190
    },
    imgheader: {
        width: '100%',
        height: 150
    },
    appTitle: {
        fontSize: 25,
        fontFamily: "sans-serif-medium",
        alignSelf: "center",
        color: "#0c0c0c",
        marginTop: 1,
    },
    aboutIcon: {
        width: 300,
        height: 150,
    },
    imgContainer: {
        alignItems: 'center',

    },
    paraGraph: {
        fontSize: 16,
        fontWeight: '500',
        paddingHorizontal: 10,
        marginTop: 10,
        marginLeft: 35,
        marginRight: 35,
        textAlign: 'center',
    },
    firstImgScroll: {
        marginTop: 5
    },
    footerImg: {

        resizeMode: "contain",
        marginBottom: 10,
    },
    navContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    userNameNav: {
        fontSize: 20,
        paddingHorizontal: 15,
        paddingVertical: 50,
        fontWeight: 'bold',
    },
    navButtonContainer: {

    },
    imgDP: {
        width: 100,
        height: 100,
        marginTop: 30,
        marginLeft: 25,
    },
    btnContainer: {
        position: 'absolute',
        top: 180,
        width: '100%',
    },
    menu: {
        paddingLeft: 16,
        paddingVertical: 10,
        fontSize: 25,
    },
    btnAbout: {
        backgroundColor: '#b57e28',
        marginBottom: 23,
        paddingLeft: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnHome: {
        marginBottom: 23,
        paddingLeft: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnLogOut: {
        marginBottom: 23,
        paddingLeft: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnAddtoCart: {
        alignItems: 'flex-end',
    },
    btnAddtoCartCont: {
        marginLeft: 295,
    }
})

export default AboutUs;
