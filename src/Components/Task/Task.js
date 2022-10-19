import React from 'react';

export function Task(props) {

    return (
        <div className="task">
            <p>{props.task.text}</p>
            <div className='button'><button onClick={props.handleChange}>-</button></div>
        </div>
    );
}