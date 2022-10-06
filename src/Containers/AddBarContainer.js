import React, {useState} from 'react';
import {AddBar} from '../Components/AddBar/AddBar.js';


export function AddBarContainer(props) {

    const [taskInput, setTaskInput] = useState('');

    const handleChange = ({target}) => {
        setTaskInput(target.value);
    };

    let nextId = 0;
    const generateId = () => {
        const result = nextId;
        nextId +=1;
        return result;
    }

    const handleSubmit = () => {
        const task = {
            id: generateId(),
            text: taskInput
        };

        props.addTask(task);
        setTaskInput('');
    }

    return <AddBar handleChange={handleChange} handleSubmit={handleSubmit} value={taskInput} />;
}