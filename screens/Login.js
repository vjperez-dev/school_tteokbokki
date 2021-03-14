import React from 'react';
import { Text, View, Image, Alert, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import IonIcons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Font from 'expo-font';
import { SafeAreaView, } from 'react-native-safe-area-context';


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            pass: '',
            InvalidError: '',
        }
        this.F1 = this.F1.bind(this);
    }

    F1 = () => {
        const { navigate } = this.props.navigation;
        var userNameInpt = this.state.userName;
        var passInpt = this.state.pass;
        
        if (userNameInpt == 'admin' && passInpt == 'admin') {
            navigate('Home');
        } else if (userNameInpt != 'admin' || passInpt != 'admin') {
            alert("Incorrect username and password");
        } 
    }

    render() {
        const { navigate } = this.props.navigation

        return (
            <View style={styles.container}>
                <SafeAreaView />
                <Image source={require('../img/splash.png')} style={styles.headerImg}/>
                <View style={styles.usrInputContainer}>
                    <IonIcons name="people-circle-outline" size={35} color="#0c0c0c" />
                    <TextInput
                        onChangeText={userName => this.setState({ userName })}
                        placeholder="Username"
                        placeholderTextColor="#0c0c0c"
                        style={{ paddingHorizontal: 10 }}
                    />
                </View>
                <Text style={styles.invalidText}>{this.state.InvalidError}</Text>
                <View style={styles.usrPwdContainer}>
                    <MaterialIcons name="lock" size={35} color="#0c0c0c" />
                    <TextInput
                        onChangeText={pass => this.setState({ pass })}
                        minLength={10}
                        secureTextEntry={true}
                        placeholder="Password"
                        placeholderTextColor="#0c0c0c"
                        style={{ paddingHorizontal: 10 }}
                    />
                </View>
                <Text style={styles.invalidText}>{this.state.InvalidError}</Text>
                <TouchableOpacity style={styles.btnContainer} onPress={this.F1}>
                    <Text style={styles.btnLoginText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('Register')}  >
                    <Text style={styles.btnRegisterText}>New User</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: "#e7a133",
        height: "100%",
        paddingTop:70
    },
    headerImg : {
        width: 400, 
        height: 160,
        alignSelf:'center',
        marginBottom:70,
        
    },
    usrInputContainer : {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 55,
        borderWidth: 2,
        marginTop: 15,
        paddingHorizontal: 10,
        borderColor: "#0c0c0c",
        borderRadius: 23,
        paddingVertical: 2,
    },
    usrPwdContainer : {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 55,
        borderWidth: 2,
        marginTop: 15,
        paddingHorizontal: 10,
        borderColor: "#0c0c0c",
        borderRadius: 23,
        paddingVertical: 2,
    },
    invalidText : {
        color: 'red',
        marginTop: 5,
        marginLeft: 55,
    },
    btnContainer : {
        marginHorizontal: 55,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#0c0c0c",
        paddingVertical: 10,
        borderRadius: 23,
    },
    btnLoginText : {
        color: "white",
        fontFamily: "sans-serif-light"
    },
    btnRegisterText : {
        alignSelf: "center",
        color: "#0c0c0c",
        fontFamily: "sans-serif-light",
        paddingVertical: 30,
    }

})