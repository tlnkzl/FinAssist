import React, { useState } from "react";
import { View, StyleSheet, Dimensions, ImageBackground, Modal, Pressable, Text } from 'react-native';
import LabeledSwitch from '../assets/common/custom-switch';

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height


export default function ManagementTools({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    if (!isEnabled){
      setModalVisible(true)
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT - 85 }} source={require("../../assets/images/management-tools.jpg")}>
        <View style={styles.switchContainer} >
          <LabeledSwitch onValueChange={toggleSwitch} value={isEnabled} />
        </View>
        <View style={{ margin: 10 }}>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(false);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Thank you for choosing FinAssist to guide you in your financial journey!</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(false)}>
                    <Text style={styles.textStyle}>OKAY</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
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
  switchContainer: {
    width: 410,
    height: 415,
    alignItems: "center",
    justifyContent: "center",
    position: 'relative',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#c3d1d9",
    borderRadius: 20,
    padding: 60,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 12,
    elevation: 2
  },
  buttonClose: {
    marginTop: 10,
    backgroundColor: "#38bec9",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18
  }
});