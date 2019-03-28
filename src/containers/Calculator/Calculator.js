import React, {Component} from 'react';
import {connect} from "react-redux";
import Button from "../../components/Button/Button";
import './Calculator.css'

const myArr = [[6, 7, 8, 9], [2, 3, 4, 5], ['<', 0, 1, '='], ['*', '/', '+', '-']];


class Calculator extends Component {

    render() {
        return (
            <div className='Calculator'>
                <h3 className='Scoreboard'>{this.props.counter}</h3>
                <table>
                    <tbody>
                        {myArr.map((elem) => <tr key={elem}>{elem.map((element)=> <Button name={element} key={element}/>)}</tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        counter: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        increaseCounter: () => dispatch({type: 'INCREMENT'})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Calculator);