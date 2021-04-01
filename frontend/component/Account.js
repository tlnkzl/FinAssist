import React from 'react'
import { View, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';

import MainView from './MainView';

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height


export default function Account({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT - 85 }} source={require("../../assets/images/account-screen.jpg")}>
                    <View  style={styles.toolButtonContainer} >

                    <TouchableOpacity style={styles.toolButton} onPress={() => MainView.showComponent('ManagementTools') }/>
                    </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(70,96,119,1)",
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
    },
    toolButtonContainer: {
        alignItems: 'center',
        top: SCREEN_HEIGHT - 115
    },
    toolButton: {
        width: 300,
        height: 25,
        backgroundColor: 'transparent',
        alignItems: 'flex-end'
    }
});