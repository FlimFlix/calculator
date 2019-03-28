import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return (
        <td><button className='Button'>{this.props.name}</button></td>
        )}
}

export default Button;