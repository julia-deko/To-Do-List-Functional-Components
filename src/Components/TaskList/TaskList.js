import React from 'react';
import {TaskContainer} from '../../Containers/TaskContainer';

export function TaskList(props) {
    return (
        <div>
            {
                props.tasks.map(task => {
                    return <TaskContainer task={task} />;
                })
            }
        </div>
    );
}