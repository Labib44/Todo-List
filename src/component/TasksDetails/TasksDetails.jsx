/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";


const TasksDetails = ({ isOpen, setIsOpen, id }) => {
    const {tasks}=useSelector((state)=>state.tasksSlice);
    const task=tasks.find((item)=>item.id == id);
    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}>
                <div>
                    {/* <h1 className="text-2xl font-bold">{task?.title}</h1> */}
                        <h1 className="text-lg font-serif mt-8"><span className="font-bold">Complited By :</span> {task?.assignedTo}</h1>
                        <h1 className="text-lg font-serif mt-2"><span className="font-bold">Assigned Date :</span> {task?.date}</h1>
                    
                    <p className="text-lg font-serif mt-5"> <span className="font-bold">Description :</span> {task?.description}</p>
                </div>
                
            </Modal>
        </div>
    );
};

export default TasksDetails;