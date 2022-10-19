import React from 'react';
import {TaskContainer} from '../../Containers/TaskContainer';

export function TaskList(props) {
    return (
        <div className="tasklist">
            {
                props.tasks.map(task => {
                    return <TaskContainer key={task.id} task={task} removeTask={props.removeTask} />;
                })
            }
        </div>
    );
}