import React from "react";
import {Task} from '../Components/Task/Task';

export function TaskContainer(props) {
    return <Task task={props.task} />;
}