import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainView from './component/MainView';
import Splash from './component/Splash';
import ViewPager from './component/ViewPager';
import Login from './component/Login';
import SignUp from './component/SignUp';

import Quiz from './component/quiz/Quiz';
import Q2 from './component/quiz/Q2';
import BankInfo from './component/quiz/BankInfo';
import Q3 from './component/quiz/Q3';
import Q4 from './component/quiz/Q4';
import Q5 from './component/quiz/Q5';
import Congrats from './component/quiz/congrats';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Splash"  component={Splash} options={{}} />
        <Stack.Screen name="ViewPager" component={ViewPager} />

        <Stack.Screen name="MainView" component={MainView} options={{}} />

        <Stack.Screen name="Login" component={Login} options={{}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{}} />

        <Stack.Screen name="Quiz" component={Quiz} options={{}} />
        <Stack.Screen name="Q2" component={Q2} options={{}} />
        <Stack.Screen name="BankInfo" component={BankInfo} options={{}} />
        <Stack.Screen name="Q3" component={Q3} options={{}} />
        <Stack.Screen name="Q4" component={Q4} options={{}} />
        <Stack.Screen name="Q5" component={Q5} options={{}} />
        <Stack.Screen name="Congrats" component={Congrats} options={{}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
