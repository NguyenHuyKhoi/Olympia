import React,{Component} from 'react';


import RoundComponent from '../../component/round.component';


export default class PracticeRound3Screen extends Component{


    render(){
        return (
		    <RoundComponent
                navigation={this.props.navigation}/>
        )
    }
}