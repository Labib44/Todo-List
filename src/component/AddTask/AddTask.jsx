/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Modal from "../Modal/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/Tasks/TasksSlice";


const AddTask = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit, reset} = useForm();
    const dispatch=useDispatch();

    const onSubmit = (data) => {
        dispatch(addTask(data))
        onCancle();
    }
    const onCancle=()=>{
        reset();
        setIsOpen(false);
    }
    return (
        <div>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title='Add tour Task'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4 mt-5">
                <label htmlFor="title"> Title</label>
                <input {...register("title")} placeholder="Title" className=" rounded-lg" />
            </div>
            <div className="flex flex-col gap-4">
                <label htmlFor="description" className="mt-2"> Description</label>
                <textarea rows="2" {...register("description")} placeholder="Description" className=" rounded-lg"></textarea>
            </div>
            <div className="flex flex-col gap-4">
                <label htmlFor="date" className="mt-2">Deadline</label>
                <input type="date" {...register("date")} placeholder="Deadline" className=" rounded-lg" />
            </div>
            <div className="flex flex-col gap-4">
                <label htmlFor="assignedTo" className="mt-2">Assign To</label>
                <select {...register("assignedTo", { required: true })} className=" rounded-lg">
                    <option value="">Select...</option>
                    <option value="Labib">Labib</option>
                    <option value="Tomal">Tomal</option>
                    <option value="Sumon">Sumon</option>
                    <option value="Alif">Alif</option>
                </select>
            </div>
            <div className="flex flex-col gap-4">
                <label htmlFor="priority" className="mt-2">Priority</label>
                <select {...register("priority", { required: true })} className=" rounded-lg">
                    <option value="">Select...</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>
            <div className="flex justify-end gap-4 mt-3">
                <button onClick={()=>onCancle()} className="btn btn-error text-white">Cancle</button>
                <button type="submit" className="btn text-white bg-gradient-to-r from-gray-400 to-blue-500">Submit</button>
            </div>
        </form>
    </Modal>
    </div>
    );
};

export default AddTask;