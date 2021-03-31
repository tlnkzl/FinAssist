import React, { Component } from "react";
import { Image, View, Text, SafeAreaView, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';

import MainView from '../MainView';

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height


  const data = {
    question: 'Have you created your bank account in Canada ?',
    page: 'Q3',
    page2: 'BankInfo'
  }

export default function Q2({navigation}) {
		return (
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assets/images/quiz.png')}
          style={styles.imageBg}>
          <View style={styles.wrapper}>
            <View style={styles.container}>
              <Image source={require('../assets/images/fin-logo.png')}
                style={{ width: 100, height: 100 }} />
              <Text style={styles.question}>{data.question}</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.answer} onPress={() => {navigation.navigate(data.page)}}>
                <Text style={styles.answerText}>Yes</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.answer} onPress={() => {navigation.navigate(data.page2)}}>
                <Text style={styles.answerText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  imageBg: {
    backgroundColor: '#466077',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    resizeMode: "cover",
    overflow: "hidden",
    flex: 1,
    zIndex: 1
  },
  wrapper: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    margin: 20,
    alignItems: "center",
  },
  question: {
    fontSize: 20,
    fontFamily: 'Helvetica',
    padding: 20,
    color: '#fff',
    textAlign: 'center'
  },
  answer: {
    backgroundColor: "transparent",
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    width: 87,
    height: 35,
    justifyContent: "center",
    margin: 20
  },
  answerText: {
    fontSize: 16,
    fontFamily: 'Helvetica',
    color: '#fff',
    textAlign: 'center'
  },
});