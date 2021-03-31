import { StackActions } from '@react-navigation/routers';
import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Dimensions } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height


export default function Congrats({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT - 20 }} source={require("../../assets/images/congratulations-eligible.png")}>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.container}
            onPress={() => {
              navigation.navigate('MainView')
            }}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'transparent',
    width: 150,
    height: 55,
    justifyContent: "center",
    alignSelf: "center"
  },
  footer: {
    position: 'absolute',
    height: 40,
    left: 0,
    top: SCREEN_HEIGHT - 130,
    width: SCREEN_WIDTH,
  },
  buttonText: {
    width: 66,
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    fontFamily: "helvetica-regular",
    fontSize: 20,
    width: 128,
    height: 33,
    marginTop: 8,
    marginLeft: 40
  },
});

