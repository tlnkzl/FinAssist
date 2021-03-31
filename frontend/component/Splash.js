import React, { useEffect } from 'react';

import { StyleSheet, View, Image } from 'react-native';

const Splash = ({ navigation }) => {

  useEffect(() => {
    console.log('Test');
    setTimeout(() => {
      navigation.replace('ViewPager')
    }, 1000);
  }, [])
  return (
    <View style={styles.logo}>
      <Image source={require("../assets/images/fin-logo.png")}
        style={{ width: 200, height: 200 }} />
    </View>
  )
};

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  }
})

export default Splash;