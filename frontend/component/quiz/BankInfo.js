import React, { useCallback } from "react";
import { Alert, Linking, StyleSheet, View, ImageBackground, SafeAreaView, Image, Text, TouchableOpacity, Dimensions } from "react-native";


export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height


const tdURL = "https://www.td.com/ca/en/personal-banking/solutions/new-to-canada/banking-options/";
const scotiabankURL = "https://startright.scotiabank.com/";
const cibcURL = "https://newcomer.cibc.com/cibc-welcome-to-canada-banking-package";
const rbcURL = "https://www.rbcroyalbank.com/special-promotions/index-or.html";

const OpenURLButton = ({ url, children, source }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <ImageBackground source={source}
      style={{ width: 100, height: 100 }}>
      <TouchableOpacity style={styles.bankLogo} onPress={handlePress}>
        <Text>{children}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const BankInfo = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/images/register.png')}
        style={styles.imageBg}>
        <View style={styles.wrapper}>
          <View style={styles.container}>
            <Image source={require('../assets/images/fin-logo.png')}
              style={{ width: 100, height: 100 }} />
            <Text style={styles.title}>Special Packages for Newcomers</Text>
          </View>
          <View style={styles.containerUrl}>
            <View>
              <OpenURLButton url={tdURL} source={require(`../assets/images/td-logo.png`)}></OpenURLButton>
            </View>
            <View style={{ marginLeft: 40 }}>
              <OpenURLButton url={scotiabankURL} source={require(`../assets/images/scotiabank-logo.png`)}></OpenURLButton>
            </View>
          </View>
          <View style={styles.containerUrl2}>
            <View>
              <OpenURLButton url={cibcURL} source={require(`../assets/images/cibc-logo.png`)}></OpenURLButton>
            </View>
            <View style={{ marginLeft: 40 }}>
              <OpenURLButton url={rbcURL} source={require(`../assets/images/rbc-logo.png`)}></OpenURLButton>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerUrl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    flexWrap: 'wrap',
  },
  containerUrl2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
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
  title: {
    fontSize: 20,
    fontFamily: 'Helvetica',
    padding: 20,
    color: '#fff',
    textAlign: 'center'
  },
  bankLogo: {
    backgroundColor: "transparent",
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    width: 100,
    height: 100,
    justifyContent: "center",
  }
});

export default BankInfo;