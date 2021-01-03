import React,{Component} from 'react';

import {
    View,
    Text
} from 'react-native'

import RoundComponent from '../../component/round.component';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { GREEN } from '../../util/palette';
import HintImageModal from '../../component/hint_image.modal';
import CrosswordsModal from '../../component/crosswords.modal';
import {connect }from 'react-redux'
import * as actions from '../../redux/action/practice.action'


class PracticeRound2Screen extends Component{


    render(){

        let {cri,rounds,cqi,questions_state}=this.props.practice;

        let round2=rounds[1]

        console.log('Round2 round2 :',questions_state)
        return (
            <View style={{flex:1}}>

                <HintImageModal url={'https://randomuser.me/api/portraits/men/95.jpg'}
                    
                    ref={ref=>this.hintModal=ref} />

                <CrosswordsModal 
                    keyword={round2.keyword.answer.replace(' ','').toUpperCase()}
                    answers={round2.questions.map(item=>item.answer.replace(' ','').toUpperCase())} 
                    states={[...questions_state]}
                    ref={ref=>this.crosswordModal=ref}/>
                <Icon 
                    onPress={()=>{
                        this.hintModal.open();
                        this.crosswordModal.close();
                    
                    } }
                    name="insert-photo"
                    size={40} 
                    color={GREEN} 
                    style={{position:'absolute',top:300,left:10,zIndex:2}}/>

                <Icon 
                    onPress={()=>{
                        this.crosswordModal.open();
                        this.hintModal.close();
                    }}
                    name="reorder"
                    size={40} 
                    color={GREEN} 
                    style={{position:'absolute',top:300,right:10,zIndex:2}}/>
                <RoundComponent
                    navigation={this.props.navigation}/>
            </View>

        )
    }
}

const mapStateToProps = state => ({
	practice: state.practice,
});




export default connect(mapStateToProps,actions)(PracticeRound2Screen)