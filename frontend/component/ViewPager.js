import React, { Component } from 'react';
import { Text, Image, View, Dimensions, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';


export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height


export default class ViewPager extends Component {

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <IndicatorViewPager
          style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT - 20 }}
          indicator={this._renderDotIndicator()}
          onPageSelected={this.onPageSelected.bind(this)}>

          <ImageBackground source={require('../assets/images/about-us.png')}>
            <View style={styles.textContainer}>
              <View style={styles.header}>
                <Text style={styles.title}>About Us</Text>
                <Text style={styles.aboutUs}>
                  We bring inspiration and innovation to every Newcomer arriving on this land, to steer their financial boat in a smooth sail
        </Text>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground source={require('../assets/images/how-it-works.png')}>
            <View style={styles.textContainer}>
              <View style={styles.header}>
                <Text style={styles.title}>How it Works</Text>
                <Text style={styles.aboutUs}>
                  FinAssist is a gamified platform that provides strategic and tactical recommendations for building and maintaining a healthy credit score.
                  It tracks your financial milestones and creates awareness by alerting users if a credit card transaction would negatively impact the credit score.
        </Text>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground source={require('../assets/images/register.png')}>
            <View style={styles.logo}>
              <Image source={require("../assets/images/fin-logo.png")}
                style={{ width: 300, height: 300 }} />
            </View>
            <View style={styles.footer}>
              <TouchableOpacity style={styles.container}
                onPress={() => { this.props.navigation.replace('Login') }}>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </IndicatorViewPager>
      </View>

    )
  }


  onPageSelected(page) {
    let position = page.position
  }

  _renderDotIndicator() {
    return <PagerDotIndicator dotStyle={{ top: 5 }} selectedDotStyle={{ top: 5 }} pageCount={3} />;
  }


}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignSelf: "center"
  },
  container: {
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
  header: {
    width: 300,
    height: 500,
    justifyContent: 'space-around',
    alignSelf: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: "helvetica-regular",
    color: "#c3d1d9",
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 3,
    alignSelf: 'center',
  },
  aboutUs: {
    fontFamily: "roboto-regular",
    color: "#c3d1d9",
    letterSpacing: 1,
    fontSize: 23,
    width: 336,
    height: 400,
    textAlign: "center",
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }

});