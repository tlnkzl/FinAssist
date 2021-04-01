import React, { Component } from 'react';
import { LayoutAnimation, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 30,
    backgroundColor: '#647c94',
    flexDirection: 'row',
    overflow: 'visible',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOpacity: 1.0,
    shadowOffset: {
      width: -2,
      height: 2,
    },
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 17,
    backgroundColor: 'white',
    shadowColor: 'transparent',
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  activeContainer: {
    backgroundColor: "#38bec9",
    flexDirection: 'row-reverse',
  },
  label: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 6,
    fontWeight: 'bold',
  },
});

export default class LabeledSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
    this.toggle = this.toggle.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    // update local state.value if props.value changes....
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }
  toggle() {
    // define how we will use LayoutAnimation to give smooth transition between state change
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    const newValue = !this.state.value;
    this.setState({
      value: newValue,
    });

    // fire function if exists
    if (typeof this.props.onValueChange === 'function') {
      this.props.onValueChange(newValue);
    }
  }
  render() {
    const { value } = this.state;

    return (
      <TouchableOpacity onPress={this.toggle}>
        <View style={[
          styles.container,
          value && styles.activeContainer]}
        >
          <View style={styles.circle} />
          <Text style={styles.label}>
            {value ? 'ON' : 'OFF'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

LabeledSwitch.propTypes = {
  onValueChange: PropTypes.func,
  value: PropTypes.bool,
};

LabeledSwitch.defaultProps = {
};