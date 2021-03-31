import React, { Component } from "react";
import { StyleSheet, View, StatusBar, ImageBackground, Image, TextInput, TouchableOpacity, Text } from "react-native";

//TODO: Make Forgot Password a button to open a page for it.

export default class Login extends Component {

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
        <View style={styles.background}>
          <ImageBackground
            style={styles.rect}
            imageStyle={styles.rect_imageStyle}
            source={require("../assets/images/register.png")}
          >
            <View style={styles.logoStackColumn}>
              <View style={styles.logoStack}>
                <View style={styles.logo}>
                  <View style={styles.rect7Filler}></View>
                  <View style={styles.rect7}></View>
                </View>
                <Image
                  source={require("../assets/images/fin-logo.png")}
                  resizeMode="contain"
                  style={styles.image}
                ></Image>
              </View>
              <View style={styles.form}>
                <View style={styles.usernameColumn}>
                  <View style={styles.username}>
                    <TextInput
                      placeholder="Email"
                      placeholderTextColor="#fff"
                      secureTextEntry={false}
                      style={styles.usernameInput}
                    ></TextInput>
                  </View>
                  <View style={styles.password}>
                    <TextInput
                      placeholder="Password"
                      placeholderTextColor="#fff"
                      secureTextEntry={true}
                      style={styles.passwordInput}
                    ></TextInput>
                  </View>
                </View>
                <View style={styles.usernameColumnFiller}></View>
                <TouchableOpacity
                  onPress={() => { this.props.navigation.replace('Quiz') }}
                  style={styles.button}
                >
                  <Text style={styles.text2}>Get Started</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.logoStackColumnFiller}></View>
            <View style={styles.footerTexts}>
              <TouchableOpacity style={styles.button2}
                onPress={() => { this.props.navigation.navigate('SignUp') }}>
                <View style={styles.createAccountFiller}></View>
                <Text style={styles.createAccount}>Create Account</Text>
              </TouchableOpacity>
              <View style={styles.button2Filler}></View>
               <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#466077'
  },
  background: {
    justifyContent: "center",
    flex: 1
  },
  rect: {
    width: 360,
    height: 740,
    alignSelf: "center"
  },
  rect_imageStyle: {},
  logo: {
    top: 68,
    width: 156,
    height: 111,
    position: "absolute",
    left: 23
  },
  rect7Filler: {
    flex: 1
  },
  rect7: {
    height: 8,
    backgroundColor: "#25cdec",
    marginBottom: 6,
    marginLeft: 2,
    marginRight: 3
  },
  image: {
    top: 0,
    left: 0,
    width: 202,
    height: 155,
    position: "absolute"
  },
  logoStack: {
    width: 202,
    height: 179,
    marginLeft: 46
  },
  form: {
    height: 230,
    marginTop: 59
  },
  username: {
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    borderRadius: 5,
    justifyContent: "center"
  },
  usernameInput: {
    height: 40,
    color: "#fef",
    marginLeft: 26,
    marginRight: 46
  },
  password: {
    height: 59,
    backgroundColor: "rgba(253,251,251,0.25)",
    borderRadius: 5,
    marginTop: 27
  },
  passwordInput: {
    height: 40,
    color: "rgba(255,255,255,1)",
    marginTop: 10,
    marginLeft: 25,
    marginRight: 53
  },
  usernameColumn: {},
  usernameColumnFiller: {
    flex: 1
  },
  button: {
    height: 59,
    backgroundColor: "rgba(31,178,204,1)",
    borderRadius: 5,
    justifyContent: "center"
  },
  text2: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  logoStackColumn: {
    marginTop: 62,
    marginLeft: 41,
    marginRight: 41
  },
  logoStackColumnFiller: {
    flex: 1
  },
  footerTexts: {
    height: 20,
    flexDirection: "row",
    marginBottom: 166,
    marginLeft: 37,
    marginRight: 36,
  },
  button2: {
    width: 104,
    height: 20,
    alignSelf: "flex-end"
  },
  createAccountFiller: {
    flex: 1,
  },
  createAccount: {
    color: "rgba(255,255,255,0.5)",
  },
  button2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  forgotPassword: {
    color: "rgba(255,255,255,0.5)",
    alignSelf: "flex-end",
    marginRight: -1
  }
});