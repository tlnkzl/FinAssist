import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Dimensions, ImageBackground } from 'react-native';

import MainView from './MainView';

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height


export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		// this.state = {
		// }
	}
	render() {
		const user = {
			name: "Jane Doe",
			level: '2'
		}
		const { navigation } = this.props;
		return (
			<SafeAreaView>
				<ImageBackground style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }} source={require("../assets/images/register.png")}>
					<View style={styles.headerContainer}>
						<Text style={styles.headerText}>Hi {user.name}!</Text>
						<Text style={styles.levelText}>You're at level {user.level}</Text>
					</View>
					<View style={styles.progressContainer}>
						<Text style={styles.levelPoint}> {user.level} </Text>
					</View>
					<TouchableOpacity style={{ top: 5 }} activeOpacity={.7}>
						<View>
							<Text style={styles.checklistTitle}>
								Complete the checklist to progress to next level
					</Text>
						</View>
					</TouchableOpacity>
					<View style={styles.checklistContent}>
						<TouchableOpacity style={{ top: 5 }} activeOpacity={.7}
							onPress={() => { MainView.showComponent('CanadaBanksInfo') }}>
							<View>
								<Text style={styles.checklistText}>
									All about the banks in Canada
						</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={{ top: 5 }} activeOpacity={.7}
							onPress={() => { MainView.showComponent('OpenAccountInfo') }}>
							<View>
								<Text style={styles.checklistText}>
									Learn how to open an account
						</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={{ top: 5 }} activeOpacity={.7}
							onPress={() => { MainView.showComponent('ApplyCreditCard') }}>
							<View>
								<Text style={styles.checklistText}>
									Apply for a Credit Card
						</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={{ top: 5 }} activeOpacity={.7}
							onPress={() => { MainView.showComponent('CreditScoreInfo') }}>
							<View>
								<Text style={styles.checklistText}>
									What is Credit Score?
						</Text>
							</View>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</SafeAreaView>
		)
	}
}
const styles = StyleSheet.create({
	headerContainer: {
		marginTop: 60,
		width: SCREEN_WIDTH,
		height: 50,
		justifyContent: 'center',
		alignSelf: 'center',
	},
	headerText: {
		color: '#feffff',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		alignSelf: 'center',
		fontSize: 30,
		lineHeight: 50
	},
	levelText: {
		color: '#feffff',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		alignSelf: 'center',
		fontSize: 20,
		lineHeight: 50,
		textTransform: 'uppercase',
	},
	progressContainer: {
		width: SCREEN_WIDTH,
		marginTop: 60,
		height: 50,
		justifyContent: 'center',
		alignSelf: 'center'
	},
	levelProgress: {

	},
	levelPoint: {
		color: '#37bec9',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		alignSelf: 'center',
		fontSize: 50,
	},

	container: {
		flex: 1,
		marginRight: 30,
		marginLeft: 30,
	},
	checklistTitle: {
		marginTop: 40,
		alignSelf: 'center',
		color: '#feffff',
		fontWeight: 'bold',
	},
	checklistContent: {
		justifyContent: 'center',
		alignSelf: 'center',
		marginTop: 10
	},
	checklistText: {
		marginTop: 30,
		alignSelf: 'flex-start',
		color: '#feffff',
		fontWeight: 'bold',
	},


});

