import React,{Component} from 'react';

import {
    View,
    Image,
    StyleSheet,
    Alert,
    Text,
    FlatList
} from 'react-native';
import AllRoundSumComponent from '../../component/all_round_sum.component';
import ButtonComponent from '../../component/button.component';
import RoundScoreComponent from '../../component/round_score.component';
import { ROUNDS } from '../../util/constants';
import { LOGO } from '../../resource/image';
import { INDIGO_2,SILVER, INDIGO_3, GREEN, WHITE } from '../../util/palette';


import {connect }from 'react-redux'
import * as actions from '../../redux/action/practice.action'
import { convertFullDateToHour } from '../../util/helper';
import ResultComponent from '../../component/result.component';


class PracticeResultScreen extends Component{

    nextRound=()=>{
        this.props.nextRound();
        if (this.props.practice.cri===3) this.props.navigation.navigate('practice_home')
        else this.props.navigation.navigate('practice_waiting')


    }

    render(){
        const {scores}=this.props.practice
        const time=convertFullDateToHour((new Date()).toISOString())
        return (
			<View style={{flex:1, backgroundColor: INDIGO_3,flexDirection:'column',
                alignItems:'center'}}>

                <Text style={{fontSize:25,color:SILVER,fontWeight:'bold',marginTop: 20}}>
                    KẾT QUẢ
                </Text>
                
                <ResultComponent scores={scores} time={time}/>

                <ButtonComponent label='TIẾP' text_color={WHITE} background={GREEN} 
                    onPress={this.nextRound}
                    margin_top={120}/>
                
            </View>
        )
    }
}

const mapStateToProps = state => ({
	practice: state.practice,
});




export default connect(mapStateToProps,actions)(PracticeResultScreen)
