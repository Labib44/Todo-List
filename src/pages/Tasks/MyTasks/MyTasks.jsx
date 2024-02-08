import { CheckIcon, DocumentMagnifyingGlassIcon, } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TasksDetails from '../../../component/TasksDetails/TasksDetails';
import { updateStatus } from '../../../redux/features/Tasks/TasksSlice';

const MyTasks = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [taskId, setTaskId] = useState(0);
    const { tasks } = useSelector((state) => state.tasksSlice);
    const dispatch = useDispatch();

    const handleModal = (id) => {
        setTaskId(id);
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <TasksDetails isOpen={isOpen} setIsOpen={setIsOpen} id={taskId}></TasksDetails>
            <h1 className="text-xl my-3">Assign Tasks</h1>
            <div className=" h-[750px] overflow-auto space-y-3">
                {tasks.map((item) => <div
                    key={item.id}
                    className="bg-gray-100 rounded-md p-3 flex justify-between shadow-md"
                >
                    <h1>{item.title}</h1>
                    <div className="flex gap-3">
                        <button onClick={() => handleModal(item.id)} className="grid place-content-center" title="Details">
                            <DocumentMagnifyingGlassIcon className="w-5 h-5 text-blue-500" />
                        </button>
                        <button onClick={() => dispatch(updateStatus({ id: item.id, status: "done" }))} className="grid place-content-center" title="Done">
                            <CheckIcon className="w-5 h-5 text-blue-500" />
                        </button>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default MyTasks;