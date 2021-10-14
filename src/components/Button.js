import React from 'react';
import '../styles/Button.css';

class Button extends React.Component {


    handleClick = () => {
        this.props.clickHandler(this.props.name);
    };

    render() {
        return(
            <div>
                <button className="button" id={this.props.id} onClick={this.handleClick}>
                    {this.props.name}
                </button>
            </div>
        );
    }
    

    
    
};

export default Button;