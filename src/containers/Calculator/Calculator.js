import React, {Component} from 'react';
import {connect} from "react-redux";
import Button from "../../components/Button/Button";
import './Calculator.css'

const myArr = [[6, 7, 8, 9], [2, 3, 4, 5], ['<', 0, 1, '='], ['*', '/', '+', '-']];


class Calculator extends Component {

    onClickDispatch = (elem) => {
        const {addText, equal, clear} = this.props;
        if (elem === '=') {
            return equal
        } if (elem === '<') {
            return clear
        }
        else
            return () => addText(elem.toString())
    };


    render() {
        return (
            <div className='Calculator'>
                <input className='Scoreboard' type='text' value={this.props.value}></input>
                <table>
                    <tbody>
                    {myArr.map((elem) => <tr key={elem}>{elem.map((element) =>
                        <Button name={element}
                                onClick={this.onClickDispatch(element)}
                                key={element}/>)}</tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        value: state.value
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addText: (text) => {
            dispatch({
                type: 'ADD_TEXT',
                text
            })
        },
        clear: () => {
            dispatch({
                type: 'CLEAR'
            })
        },
        equal: () => {
            dispatch({
                type: 'EQUAL',
            })
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Calculator);