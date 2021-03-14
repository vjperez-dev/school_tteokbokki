import React, { useRef, useState } from "react";
import { Button, Image, DrawerLayoutAndroid, Text, StyleSheet, View, TouchableOpacityComponent, Alert } from "react-native";
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwsome from 'react-native-vector-icons/FontAwesome'
import ImageSlider from '../components/imageSlider';





const HomePage = ({ navigation }) => {
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

    const GoToAboutUs = () => {
        drawer.current.closeDrawer()
        navigation.navigate('AboutUs')
    }

    const navigationView = () => (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#e7a133" }}>
            <View style={styles.container}>
                <View style={styles.navContainer}>
                    <Image source={require('../img/sampledp.png')} style={styles.imgDP} />
                    <Text style={styles.userNameNav}>Admin</Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btnHome}>
                        <Entypo name='home' size={35} />
                        <Text style={styles.menu}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnAbout} onPress={GoToAboutUs}>
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
            <View style={{ flex: 1}}>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity style={{ marginTop: 2 }} onPress={() => drawer.current.openDrawer()}>
                            <Entypo name='menu' size={30} />
                        </TouchableOpacity>
                        <View style={styles.titleCartCont}>
                            <Text style={styles.headerTitle}>Home</Text>
                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                                    <AntDesign name='shoppingcart' size={30} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <ScrollView style={styles.container}>
                        <View style={styles.searchBoxContainer}>
                            <Entypo name="magnifying-glass" size={25} color='black' />
                            <TextInput
                                style={styles.searchBox}
                                placeholder="Type to Search"
                                placeholderTextColor='black'
                            />
                        </View>
                        <ImageSlider />
                        <View style={styles.categoryListContainer}>
                            <Text style={{ textAlign: 'center', fontSize: 30, paddingVertical: 10 }}>Food Categories</Text>
                            <View style={styles.containerList}>
                                <TouchableOpacity style={styles.categoryList} onPress={() => navigation.navigate('CookedFood')}>
                                    <View style={styles.categoryList}>
                                        <Image style={styles.imgSize} source={require('../img/cooked.png')} />
                                        <View style={styles.textTitleDesc}>
                                            <Text style={styles.textTitle}>Cooked Food</Text>
                                            <Text style={styles.textDesc}>A ready to eat food with one call away {'\n'}from you.</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryList} onPress={() => navigation.navigate('Noodles')}>
                                    <View style={styles.categoryList}>
                                        <Image style={styles.imgSize} source={require('../img/noodle.png')} />
                                        <View style={styles.textTitleDesc}>
                                            <Text style={styles.textTitle}>Noodles</Text>
                                            <Text style={styles.textDesc}>Drinks for your cooked meal to go with.</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryList} onPress={() => navigation.navigate('FrozenFood')}>
                                    <View style={styles.categoryList}>
                                        <Image style={styles.imgSize} source={require('../img/frozen.png')} />
                                        <View style={styles.textTitleDesc}>
                                            <Text style={styles.textTitle}>Frozen Food</Text>
                                            <Text style={styles.textDesc}>A Frozen food that can order in bulk {'\n'}for your stock in the fridge</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryList} onPress={() => navigation.navigate('Snacks')}>
                                    <View style={styles.categoryList}>
                                        <Image style={styles.imgSize} source={require('../img/snack.png')} />
                                        <View style={styles.textTitleDesc}>
                                            <Text style={styles.textTitle}>Snacks</Text>
                                            <Text style={styles.textDesc}>Drinks for your cooked meal to go with.</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.categoryList} onPress={() => navigation.navigate('Drinks')}>
                                    <View style={styles.categoryList}>
                                        <Image style={styles.imgSize} source={require('../img/drink.png')} />
                                        <View style={styles.textTitleDesc}>
                                            <Text style={styles.textTitle}>Drinks</Text>
                                            <Text style={styles.textDesc}>Drinks for your cooked meal to go with.</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        </DrawerLayoutAndroid>
    );
};

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
        paddingVertical: 10,
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
        marginBottom: 23,
        paddingLeft: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnHome: {
        backgroundColor: '#b57e28',
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
        alignSelf:'flex-end',
    },
    titleCartCont : {
        flexDirection:'row',
        justifyContent:'space-between',
        width:'91%',
    }
});
export default HomePage;