import React from 'react';

const charCompStyle = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin:  "16px",
    border: "1px solid black"
};

const charComponent = (props) => {
    return (
        <div style={charCompStyle} onClick= {props.deleteOnClick}>
            {props.letter}
        </div>
    )
}

export default charComponent;