import React, {useState} from 'react';
import {AddBar} from '../Components/AddBar/AddBar.js';


export function AddBarContainer(props) {

    const [taskInput, setTaskInput] = useState('');
    const [nextId, setNextId] = useState(0);

    const handleChange = ({target}) => {
        setTaskInput(target.value);
    };

    const generateId = () => {
        const result = nextId;
        setNextId(prev => prev + 1);
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