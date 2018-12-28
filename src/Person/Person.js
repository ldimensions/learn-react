import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>Person stateless Component</p>
            <p>Name: {props.name}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.inputHandler} value={props.name}/>
            <p onClick={props.clickEvent}> Click here to change the name - child stateless method call</p>
            <p onClick={props.deleteEvent}> Click here to delet the element - child stateless method call</p>
        </div>
    )
}

export default person;