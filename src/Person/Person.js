import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>Person Component</p>
            <p>Name: {props.name}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;