/* eslint-disable react/prop-types */

import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { removeTasks, updateStatus } from '../../../redux/features/Tasks/TasksSlice';

const TaskCard = ({ task }) => {
    const dispatch = useDispatch();

    let updatedStatus;
    if (task.status == 'pending') {
        updatedStatus = 'runing';
    }
    else if (task.status == 'runing') {
        updatedStatus = 'done';
    }
    else {
        updatedStatus = 'archive'
    }
    return (
        <div className="bg-gray-100 shadow-md rounded-md p-5">
            <h1
                className={`text-lg font-semibold mb-3  ${task.priority === 'high' ? 'text-red-500' : ''
                    } ${task.priority === 'medium' ? 'text-yellow-500' : ''} ${task.priority === 'low' ? 'text-green-600' : ''
                    }`}
            >
                {task?.title}
            </h1>
            <p className="mb-3">{task?.description}</p>
            <p className="text-sm">Assigned to - {task?.assignedTo}</p>
            <div className="flex justify-between mt-3">
                <p>{task?.date}</p>
                <div className="flex gap-3">
                    <button onClick={() => dispatch(removeTasks(task?.id))}
                        title="Delete">
                        <TrashIcon className="h-5 w-5 text-red-500" />
                    </button>
                    <button onClick={() => dispatch(updateStatus({ id: task?.id, status: updatedStatus }))}
                        title="In progress"
                    >
                        <ArrowRightIcon className="h-5 w-5 text-primary" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;