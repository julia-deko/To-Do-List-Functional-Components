import React from 'react';
import {TaskList} from '../Components/TaskList/TaskList';

export function TaskListContainer(props) {
    return <TaskList tasks={props.tasks} removeTask={props.removeTask} />;
}