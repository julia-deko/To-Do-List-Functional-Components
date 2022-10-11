import React from 'react';

export function Task(props) {

    return (
        <div>
            <p>{props.task.text}</p>
            <button onClick={props.handleChange}>-</button>
        </div>
    );
}