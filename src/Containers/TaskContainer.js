import React from "react";
import {Task} from '../Components/Task/Task';

export function TaskContainer(props) {

    const handleChange = () => {
        props.removeTask(props.task);
    }

    return <Task task={props.task} handleChange={handleChange} />;
}