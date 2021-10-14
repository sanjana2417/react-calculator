import React from 'react';
import Button from './Button';
import '../styles/ButtonContainer.css';

class ButtonContainer extends React.Component {

    handleClick = (buttonName) => {
        this.props.clickHandler(buttonName);
    };

    render() {
        return(
            <div className="button-container">
                <div className="button-row">
                    <Button name = "AC" clickHandler = {this.handleClick}/>
                    <Button name = "DEL" clickHandler = {this.handleClick}/>
                    <Button name = "√" clickHandler = {this.handleClick}/>
                    <Button name = "%" clickHandler = {this.handleClick}/>
                </div>
                <div className="button-row">
                    <Button name = "7" clickHandler = {this.handleClick}/>
                    <Button name = "8" clickHandler = {this.handleClick}/>
                    <Button name = "9" clickHandler = {this.handleClick}/>
                    <Button name = "/" clickHandler = {this.handleClick}/>
                </div>
                <div className="button-row">
                    <Button name = "4" clickHandler = {this.handleClick}/>
                    <Button name = "5" clickHandler = {this.handleClick}/>
                    <Button name = "6" clickHandler = {this.handleClick}/>
                    <Button name = "x" clickHandler = {this.handleClick}/>
                </div>
                <div className="button-row">
                    <Button name = "1" clickHandler = {this.handleClick}/>
                    <Button name = "2" clickHandler = {this.handleClick}/>
                    <Button name = "3" clickHandler = {this.handleClick}/>
                    <Button name = "-" clickHandler = {this.handleClick}/>
                </div>
                <div className="button-row">
                    <Button name = "0" id="bottom-left" clickHandler = {this.handleClick}/>
                    <Button name = "." clickHandler = {this.handleClick}/>
                    <Button name = "=" clickHandler = {this.handleClick}/>
                    <Button name = "+" id="bottom-right" clickHandler = {this.handleClick}/>
                </div>
            </div>
        );
    }
    
};


export default ButtonContainer;