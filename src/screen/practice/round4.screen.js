import React,{Component} from 'react';

import {
    View ,
    Image
} from 'react-native'

import RoundComponent from '../../component/round.component';
import {connect }from 'react-redux'
import * as actions from '../../redux/action/practice.action'

import STAR2 from '../../resource/image/star2.png'
class PracticeRound4Screen extends Component{


    render(){

        const {cqi,picked_star}=this.props.practice;
        return (
            <View style={{flex:1}}>
                <RoundComponent
                    navigation={this.props.navigation}/>
                {
                    cqi===picked_star?
                    <Image source={STAR2} 
                        style={{width: 30,height: 30,position: 'absolute',top:50,right:20}}/>
                    :
                    null
                }
            </View>

        )
    }
}

const mapStateToProps = state => ({
	practice: state.practice,
});




export default connect(mapStateToProps,actions)(PracticeRound4Screen)