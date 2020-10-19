import React from 'react';

const HOC = props => {
    return (
        <div style={{backgroundColor:'yellow'}}>
            {props.children}
        </div>
    )
}

export default HOC;