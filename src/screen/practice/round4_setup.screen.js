import React,{Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
    Alert,
    Image,
    TouchableOpacity
} from 'react-native';
import ButtonComponent from '../../component/button.component';
import { STAR1, STAR2 } from '../../resource/image';

import {connect }from 'react-redux'
import * as actions from '../../redux/action/practice.action'

import {ROUNDS} from '../../util/constants'

const levels=ROUNDS[3].levels

import { SILVER, INDIGO_3, GRAY, GREEN, INDIGO_2, WHITE } from '../../util/palette';
class ScoreLevel extends Component {
    render(){
        return (
            <TouchableOpacity 
                onPress={this.props.onChoose}
                style={{width:90,height:40,borderRadius:10,
                    justifyContent: 'center',alignItems:'center',
                    backgroundColor:!this.props.is_picked?INDIGO_2:GREEN}}>
                <Text style={{fontSize:20,color:SILVER}}>
                    {
                        this.props.score
                    }
                </Text>
            </TouchableOpacity>
        )
    }
}

class QuestionPackage extends Component{
    constructor(props){
        super(props);
        this.state={
            is_picked_star:false ,
            level:this.props.default_level
        }
    }

    pickStar=()=>{
        const e=this.state.is_picked_star;
        this.setState({
            ...this.state,
            is_picked_star:!e
        })
    }

    pickLevel=(level)=>{
        this.props.pickLevel(level,this.state.level) //after level and before level
        this.setState({
            ...this.state,
            level:level
        });
    }
      
    render(){

        const {index}=this.props.index;
        return (
            <View style={{width:'100%',flexDirection:'column',alignItems:'center'}}>
                <Text style={{fontSize:25,color:SILVER,marginTop: 25}}>
                    {
                        'Câu '+this.props.index
                    }
                </Text>

                <TouchableOpacity 
                    onPress={this.pickStar}
                    style={{position: 'absolute',top:25,right: 85}}>
                    <Image source={!this.state.is_picked_star?STAR1:STAR2} 
                        style={{width: 30,height:30,tintColor:!this.state.is_picked_star?WHITE:null}}/>
                </TouchableOpacity>

                <View style={{marginTop:20,width:'100%',flexDirection:'row',justifyContent: 'space-between',alignItems:'center'}}>
                    {
                        levels.map((item,index)=>(
                            <ScoreLevel 
                                key={''+index}
                                is_picked={this.state.level===index}
                                score={item.score} 
                                onChoose={()=>this.pickLevel(index)}/>
                        ))
                    } 
                </View>
            </View>
           
        )
    }
}

class Round4SetupScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            arr:[1,1,1],
            total_score:60
        }
    }

    
    
    pickLevel=(l2,l1)=>{

      
        let {arr,total_score}=this.state;
        arr[l2]++;
        arr[l1]--;
        total_score=total_score-levels[l1].score+levels[l2].score;

        this.setState({
            arr,
            total_score
        });
    }

    enterRound4=()=>{
        this.props.chooseRound4Questions(this.state.arr);

        setTimeout(()=>{
            this.props.navigation.navigate('practice_round4');
        },1000)

    }

    render(){
        const {total_score}=this.state;
        return (
			<View style={{flex:1, backgroundColor: INDIGO_3,flexDirection:'column',
                alignItems:'center',padding:20}}>

                <Text style={{fontSize:25,color:SILVER,fontWeight:'bold',marginTop: 40}}>
                    CHỌN GÓI CÂU HỎI
                </Text>

                {
                    [1,2,3].map((item,index)=>
                        <QuestionPackage 
                            index={index+1} 
                            pickLevel={this.pickLevel}
                            default_level={index}
                        />
                    )
                }

                <Text style={{fontSize:25,color:SILVER,marginTop: 20}}>
                    {'Tổng : '+total_score}
                </Text>

                <ButtonComponent label='Vào' text_color={SILVER} background={GREEN} 
						onPress={this.enterRound4}
                        margin_top={30}/>

            </View>
        )
    }
}

const mapStateToProps = state => ({
	practice: state.practice,
});




export default connect(mapStateToProps,actions)(Round4SetupScreen)
