import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SliderBox, FastImage } from "react-native-image-slider-box";

export default class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [require('../img/slider1.jpg'), require('../img/slider2.jpg'), require('../img/slider3.jpg')
            ]
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <SliderBox
                    ImageComponent={FastImage}
                    images={this.state.images}
                    sliderBoxHeight={200}
                    dotColor="#FFEE58"
                    inactiveDotColor="#90A4AE"
                    paginationBoxVerticalPadding={20}
                    autoplay
                    circleLoop
                    resizeMethod={'resize'}
                    resizeMode={'cover'}
                    paginationBoxStyle={{
                        position: "absolute",
                        bottom: 0,
                        padding: 0,
                        alignItems: "center",
                        alignSelf: "center",
                        justifyContent: "center",
                        paddingVertical: 10
                    }}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 0,
                        padding: 0,
                        margin: 0,
                        backgroundColor: "rgba(128, 128, 128, 0.92)"
                    }}
                    ImageComponentStyle={{ borderRadius: 15, width: '97%', marginTop: 5 }}
                    imageLoadingColor="#2196F3"
                />
                <Text style={styles.companyDescription}>Authentic Korean Street Food Freshly Cooked Same Day Deliver</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    companyDescription : {
        fontSize:25,
        textAlign:'center',
        paddingHorizontal:25,
        paddingVertical:10,
    }
});