import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, Alert } from 'react-native';
import { IndicatorViewPager, PagerTabIndicator } from 'rn-viewpager';
import Home from './Home';
import Profile from './Profile';
import Account from './Account';

const Pages = {
  'Home': 0,
  'Account': 1,
  'Profile': 2,
}

let viewPager
let navigation

export default class MainView extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Title'
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedPageIndex: 0,
      processPercent: '33.3%'
    }
  }

  componentDidMount() {
    navigation = this.props.navigation
    //viewPager.setPage(1)    
  }

  static back() {
    navigation.goBack()
  }

  static showComponent(page, isReplace) {
    if (isReplace == true) {
      navigation.replace(page)
      return
    }
    navigation.navigate(page)
  }

  static showComponent(page) {
    navigation.navigate(page)
  }

  static changePage(position) {
    viewPager.setPage(position)
  }



  render() {


    return (

      <SafeAreaView style={{ flex: 1 }}>

        <View style={{ width: this.state.processPercent, height: 5, backgroundColor: '#1B9AF7' }} />
        <View style={{ position: 'absolute', width: '100%', height: 5, backgroundColor: '#1B9AF7', opacity: .1 }} />
        <IndicatorViewPager
          horizontalScroll={false}
          scrollEnabled={false}
          ref={ref => { viewPager = ref; }}
          //selectedPage={3}
          style={{ height: '100%' }}
          indicator={this._renderTabIndicator()}
          onPageSelected={this.onPageSelected.bind(this)}>

          <View>
            {this.state.selectedPageIndex == 0 ?
              <Home /> : null}
          </View>

          <View>
            {this.state.selectedPageIndex == Pages.Account ?
              <Account /> : null}
          </View>


          <View>
            {this.state.selectedPageIndex == Pages.Profile ?
              <Profile /> : null}
          </View>

        </IndicatorViewPager>

      </SafeAreaView>

    );
  }

  onPageSelected(page) {
    let position = page.position
    let percent = 33.3 * (position + 1) + '%'
    this.setState({ processPercent: percent, selectedPageIndex: page.position })
  }

  _renderTabIndicator() {
    let tabs = [
      { text: 'Home' },
      { text: 'Account' },
      { text: 'Profile' },

    ];
    return <PagerTabIndicator tabs={tabs}
      textStyle={{ fontSize: 14, lineHeight: 25 }}
      selectedTextStyle={{ fontSize: 15, lineHeight: 25, color: '#1B9AF7' }}
      itemStyle={{ height: 40 }}
      changePageWithAnimation={false} />;
  }
}
