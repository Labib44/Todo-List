import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState } from "react";
import TaskCard from './TaskCard/TaskCard';
import MyTasks from './MyTasks/MyTasks';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddTask from '../../component/AddTask/AddTask';
import logo from '../../assets/main.png'
import shahrukh from '../../assets/shahrukh-.jpg'
import clipart from '../../assets/clipart-kristen.png'
import vin from '../../assets/vin.png'
import tom from '../../assets/tom.png'
import salman from '../../assets/salman-k.jpg'

const Tasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { tasks } = useSelector((state) => state.tasksSlice);

  const pendingTask = tasks.filter((item) => item.status == 'pending');
  const runingTask = tasks.filter((item) => item.status == 'runing');
  const doneTask = tasks.filter((item) => item.status == 'done');
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-12 ">
      <div className="col-span-9 px-10 pt-10">
        <div className="flex-wrap lg:flex md:flex justify-between items-center">
          <div className='flex justify-between items-center'>
            <img src={logo} alt="app logo" className='w-16 h-16' />
            <h1 className="font-semibold text-4xl font-serif ml-4">ToDo</h1>
          </div>
          <div className="flex gap-5 p-5">
            <button className="border-2 border-blue-300 hover:border-blue-500 hover:bg-blue-500 rounded-xl h-10 w-10 grid place-content-center text-blue-500 hover:text-white transition-all">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            <button className="border-2 border-blue-300 hover:border-blue-500 hover:bg-blue-500 rounded-xl h-10 w-10 grid place-content-center text-blue-500 hover:text-white transition-all">
              <BellIcon className="h-6 w-6" />
            </button>
            {/* Dashboard */}
            <Link to={'/dashboard'} className="btn text-white bg-gradient-to-r from-gray-400 to-blue-500">Dashboard</Link>
            <button onClick={() => setIsOpen(!isOpen)} className="btn text-white bg-gradient-to-r from-gray-400 to-blue-500">Add Task</button>
            <AddTask isOpen={isOpen} setIsOpen={setIsOpen}></AddTask>
            <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src={shahrukh} alt="" className="object-cover h-full w-full " />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1>Pending</h1>
              <p className="bg-blue-500 text-white w-6 h-6 grid place-content-center rounded-md">
                {pendingTask.length}
              </p>
            </div>
            <div className="space-y-3">
              {pendingTask.map((item) => <TaskCard key={item.id} task={item} />)}
            </div>
          </div>
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1>In Progress</h1>
              <p className="bg-blue-500 text-white w-6 h-6 grid place-content-center rounded-md">
                {runingTask.length}
              </p>
            </div>
            <div className="space-y-3">
              {runingTask.map((item) => <TaskCard key={item.id} task={item} />)}
            </div>
          </div>
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1>Completed</h1>
              <p className="bg-blue-500 text-white w-6 h-6 grid place-content-center rounded-md">
                {doneTask.length}
              </p>
            </div>
            <div className="space-y-3">
              {doneTask.map((item) => <TaskCard key={item.id} task={item} />)}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 border-l-2 border-gray-200 px-10 pt-10 hidden lg:block md:block">
        <div>
          <h1 className="text-xl">Members</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-3">
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <img
                src={shahrukh} alt="Shahrukh Khan" className="object-cover h-full w-full " />
            </div>
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <img
                src={clipart} alt="Clipart" className="object-cover h-full w-full " />
            </div>
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <img
                src={salman} alt="" className="object-cover h-full w-full " />
            </div>
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <img
                src={tom} alt="" className="object-cover h-full w-full " />
            </div>
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <img
                src={vin} alt="" className="object-cover h-full w-full " />
            </div>
          </div>
        </div>
        <MyTasks />
      </div>
    </div>
  );
};

export default Tasks;