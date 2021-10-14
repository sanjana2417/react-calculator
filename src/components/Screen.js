import React from 'react'
import '../styles/Screen.css';

const Screen = (props) => {

    let render;
    if(props.input.length > 0 && props.calc.length > 0 && props.result.length > 0) {
        render = props.result + props.input;
    } else if(props.input.length > 0) {
        render = props.calc + props.input;
    } else if(props.input.length === 0 && props.calc.length > 0) {
        render = props.calc;
    }

    return(
        <div className = "screen">
            <div className = 'user-input-screen'>
                <h1 className = "input">{ render }</h1><div className="ticker">|</div>
            </div>
            <div className = 'result-screen'>
                <h1 className = "result">{props.result}</h1>
            </div>
        </div>
    );
}

export default Screen;