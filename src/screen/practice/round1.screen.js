import React,{Component} from 'react';


import RoundComponent from '../../component/round.component';

export default class PracticeRound1Screen extends Component{
    render(){

        return (
            <RoundComponent
                navigation={this.props.navigation}/>

        )
    }
}

// const mapStateToProps = state => ({
// 	practice: state.practice,
// });




// export default connect(mapStateToProps,actions)(PracticeRound1Screen)
