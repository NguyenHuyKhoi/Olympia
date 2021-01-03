import React,{Component} from 'react';
import {
    Alert,
    View 
} from 'react-native'
import CountdownTimerComponent from '../../component/countdown_timer.component';


import RoundComponent from '../../component/round.component';
import { ROUNDS } from '../../util/constants';

export default class PracticeRound1Screen extends Component{

    onTimeOut=()=>{
        Alert.alert('time out');
        this.props.navigation.navigate('practice_result')
    }
    render(){

        return (

            <View style={{flex:1}}>
                <RoundComponent
                    duration={ROUNDS[0].time}
                    navigation={this.props.navigation}
                    answer_time={ROUNDS[0].all_time}/>
            </View>


        )
    }
}

// const mapStateToProps = state => ({
// 	practice: state.practice,
// });




// export default connect(mapStateToProps,actions)(PracticeRound1Screen)
