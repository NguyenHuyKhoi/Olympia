import React,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import SigninScreen from './src/screen/auth/signin.screen';
import SignupScreen from './src/screen/auth/signup.screen';
import HomeScreen from './src/screen/home.screen';
import SettingAccountScreen from './src/screen/setting/setting_account.screen';
import PracticeHomeScreen from './src/screen/practice/home.screen';
import CompetitionHomeScreen from './src/screen/competition/competition_home.screen';
import PracticeWaitingScreen from './src/screen/practice/waiting.screen';
import PracticeRuleScreen from './src/screen/practice/rule.screen';
import PracticeHistoryScreen from './src/screen/practice/history.screen';
import PracticeResultScreen from './src/screen/practice/result.screen';
import PracticeRound1Screen from './src/screen/practice/round1.screen';
import PracticeRound4SetupScreen from './src/screen/practice/round4_setup.screen';
import PracticeRound2Screen from './src/screen/practice/round2.screen';

export default class App extends Component{
	render(){
		const stack=createStackNavigator();
		return (
			<NavigationContainer>
				<stack.Navigator headerMode='none' initialRouteName='practice_round2'>
					<stack.Screen name='signin' component={SigninScreen}/>
					<stack.Screen name='signup' component={SignupScreen}/>
					<stack.Screen name='home' component={HomeScreen}/>
					<stack.Screen name='practice_home' component={PracticeHomeScreen}/>
					<stack.Screen name='practice_waiting' component={PracticeWaitingScreen}/>
					<stack.Screen name='practice_round1' component={PracticeRound1Screen}/>
					<stack.Screen name='practice_round2' component={PracticeRound2Screen}/>
					<stack.Screen name='practice_round4_setup' component={PracticeRound4SetupScreen}/>
					<stack.Screen name='practice_result' component={PracticeResultScreen}/>
					<stack.Screen name='practice_rule' component={PracticeRuleScreen}/>
					<stack.Screen name='practice_history' component={PracticeHistoryScreen}/>
					<stack.Screen name='competition_home' component={CompetitionHomeScreen}/>
					<stack.Screen name='setting_account' component={SettingAccountScreen}/>
				</stack.Navigator>
			</NavigationContainer>
		)
	}
}
