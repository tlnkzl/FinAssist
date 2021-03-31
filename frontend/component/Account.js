import { StackActions } from '@react-navigation/routers';
import React from 'react'
import { View, StyleSheet, Image, Dimensions, ImageBackground } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height


export default function Account() {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT - 50 }} source={require("../../assets/images/register.png")}>
                <Image
                    source={require("../assets/images/credit-score-range.png")}
                    resizeMode="contain"
                    style={styles.image2}
                ></Image>
                <Image
                    source={require("../assets/images/account-screen-2.png")}
                    resizeMode="cover"
                    style={styles.image3}
                ></Image>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(70,96,119,1)",
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT - 50
    },
    image2: {
        width: SCREEN_WIDTH,
        height: 240,
        marginTop: 25
    },
    image3: {
        width: SCREEN_WIDTH,
        height: 300,
        marginTop: 30
    }
});