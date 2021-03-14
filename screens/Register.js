import React from 'react';
import { Text, View, Image, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import IonIcons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import * as Font from 'expo-font';
export default class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            userName: '',
            address: '',
            contactNum: '',
            pass: '',
            confpass: '',
            nameError: '',
        }
    }
    emptyField() {
        if (!this.state.name || !this.state.userName || !this.state.address || !this.state.contactNum || !this.state.pass || !this.state.confpass) {
            this.setState({ nameError: "Empty Field. Please Fill it up" })
        } else {
            this.setState({ nameError: "" })
        }
    }

    F1 = () => {
        var nameInpt = this.state.name;
        var userNameInpt = this.state.userName;
        var addressInpt = this.state.address;
        var contactNumInpt = this.state.contactNum;
        var passInpt = this.state.pass;
        var confpassInpt = this.state.confpass;

        if (!nameInpt || !userNameInpt || !addressInpt || !contactNumInpt || !passInpt || !confpassInpt) {
            this.setState({ nameError: "Empty Field. Please Fill it up" })
        } if (passInpt != confpassInpt) {
            Alert.alert(
                'Validation',
                'Password Mismatch!',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: false }
            );
        } else {
            this.setState({ nameError: "" })
            console.log("Name:", nameInpt, "\nUsername:", userNameInpt, "\nAddress: ", addressInpt, "\nContact Number: ", contactNumInpt, "\nPassword: ", passInpt, "\nConfirm Password: ", confpassInpt)
        }
    }

    onChanged(contactNum) {
        let newText = '';
        let numbers = '0123456789';

        for (var i = 0; i < contactNum.length; i++) {
            if (numbers.indexOf(contactNum[i]) > -1) {
                newText = newText + contactNum[i];
            }
            else {
                // your call back function
                Alert.alert(
                    'Validation',
                    'Please Input Numbers Only!',
                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') }
                    ],
                    { cancelable: false }
                );
            }
        }
        this.setState({ myNumber: newText });
    }

    render() {

        const { navigate } = this.props.navigation

        return (
            <View style={styles.container} >
                <Image source={require('../img/registerbg.png')} style={styles.imgStyle} />
                <Text style={styles.signUpTitle} >Sign Up</Text>
                <View style={styles.usrInputContainer}>
                    <IonIcons name="people-circle-outline" size={30} color="#0c0c0c" />
                    <TextInput
                        onChangeText={name => this.setState({ name })}
                        placeholder="Name"
                        onBlur={() => this.emptyField()}
                        placeholderTextColor="#0c0c0c"
                        style={{ paddingHorizontal: 10 }}
                    />
                </View>
                <Text style={styles.errorText} >{this.state.nameError}</Text>
                <View style={styles.usrInputContainer}>
                    <MaterialIcons name="emoji-people" size={30} color="#0c0c0c" />
                    <TextInput
                        onChangeText={userName => this.setState({ userName })}
                        placeholder="Username"
                        onBlur={() => this.emptyField()}
                        placeholderTextColor="#0c0c0c"
                        style={{ paddingHorizontal: 10 }}
                    />
                </View>
                <Text style={styles.errorText} >{this.state.nameError}</Text>

                <View style={styles.usrInputContainer}>
                    <FontAwesome name="address-book-o" size={30} color="#0c0c0c" />
                    <TextInput
                        onChangeText={address => this.setState({ address })}
                        placeholder="Address"
                        onBlur={() => this.emptyField()}
                        placeholderTextColor="#0c0c0c"
                        style={{ paddingHorizontal: 10 }}
                    />
                </View>
                <Text style={styles.errorText} >{this.state.nameError}</Text>

                <View style={styles.usrInputContainer}>
                    <MaterialIcons name="contacts" size={30} color="#0c0c0c" />
                    <TextInput
                        keyboardType='numeric'
                        maxLength={11}
                        onChangeText={contactNum => this.setState({ contactNum })}
                        placeholder="Contact Number"
                        onBlur={() => this.emptyField()}
                        placeholderTextColor="#0c0c0c"
                        style={{ paddingHorizontal: 10 }}
                    />
                </View>
                <Text style={styles.errorText} >{this.state.nameError}</Text>
                <View style={styles.usrInputContainer}>
                    <MaterialIcons name="lock" size={30} color="#0c0c0c" />
                    <TextInput
                        onChangeText={pass => this.setState({ pass })}
                        minLength={10}
                        secureTextEntry={true}
                        placeholder="Password"
                        onBlur={() => this.emptyField()}
                        placeholderTextColor="#0c0c0c"
                        style={{ paddingHorizontal: 10 }}
                    />
                </View>
                <Text style={styles.errorText} >{this.state.nameError}</Text>

                <View style={styles.usrInputContainer}>
                    <MaterialIcons name="lock" size={30} color="#0c0c0c" />
                    <TextInput
                        onChangeText={confpass => this.setState({ confpass })}
                        minLength={10}
                        secureTextEntry={true}
                        placeholder="Confirm Password"
                        onBlur={() => this.emptyField()}
                        placeholderTextColor="#0c0c0c"
                        style={{ paddingHorizontal: 10 }}
                    />
                </View>
                <Text style={styles.errorText} >{this.state.nameError}</Text>

                <TouchableOpacity style={styles.btnContainer} onPress={this.F1}>
                    <Text
                        style={{
                            color: "white",
                            fontFamily: "sans-serif-light"
                        }}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnContainer} onPress={() => navigate('Login')}>
                    <Text
                        style={{
                            color: "white",
                            fontFamily: "sans-serif-light"
                        }}>Login</Text>
                </TouchableOpacity>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e7a133",
        height: "100%"
    },
    imgStyle: {
        width: "100%",
        height: "25%"
    },
    signUpTitle: {
        fontSize: 30,
        fontFamily: "sans-serif-medium",
        alignSelf: "center",
        color: "#0c0c0c",
        marginTop: 0,
    },
    usrInputContainer : {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 55,
        borderWidth: 2,
        marginTop: 9,
        paddingHorizontal: 10,
        borderColor: "#0c0c0c",
        borderRadius: 23,
        paddingVertical: 2,
    },
    errorText : {
        color: 'red',
        marginTop: 5,
        marginLeft: 55,
    },
    btnContainer : {
        marginHorizontal: 55,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 9,
        backgroundColor: "#0c0c0c",
        paddingVertical: 10,
        borderRadius: 23,
    }
})