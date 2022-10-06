import React from 'react';

export function AddBar(props) {
    return (
        <div>
            <input value={props.value} type='text' onChange={props.handleChange} />
            <button onClick={props.handleSubmit}>Add</button>
        </div> 
    );
}