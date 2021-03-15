import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';

export default class Category extends React.Component {
    render() {
        return (
            <View style={{ height: 110, width: 120, marginLeft: 20, }}>
                <View style={{ flex: 5 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{ flex: 1, alignItems:'center'}}>
                    <Text style={{ fontWeight: '700', }}>{this.props.name}</Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});