import { StackActions } from '@react-navigation/routers';
import React from 'react'
import { View, ImageBackground, Dimensions } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height


export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: '#466077' }}>
      <ImageBackground
        style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT - 100 }} source={require("../../assets/images/level-2-screen.png")}>
      </ImageBackground>
    </View>
  )
}