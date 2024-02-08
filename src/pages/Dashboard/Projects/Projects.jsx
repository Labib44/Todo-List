import { Link } from "react-router-dom";


const Projects = () => {
    const projects = [
        {
            id: 1,
            name:"Redx",
            type:"Courier",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            time:"1Month",
            team:"Diamond",
            
        },
        {
            id: 2,
            name:"Car Zone",
            type:"E-Commerce",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            time:"3 Months",
            team:"Gold",
            
        },
        {
            id: 3,
            name:"Delicious Food",
            type:"Restaurant",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            time:"1 Month",
            team:"silver",
           
        },
        {
            id: 4,
            name:"Doctors Portal",
            type:"Portal",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            time:"20 Days",
            team:"Platinum",
            
        },
        {
            id: 5,
            name:"Travel Guide",
            type:"Tour Travel",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            time:"15 Days",
            team:"Bronze",
            
        },
        
    ]
    return (
        <div>
            <h2 className='text-2xl p-10'>All Projects</h2>

            <div className="overflow-x-auto p-5">
                <table className="table w-full">

                    <thead className="text-[16px]">
                        <tr>
                            <th></th>
                            <th>Project Name</th>
                            <th>Project Type</th>
                            <th>Description</th>
                            <th>Teams</th>
                            <th>Time</th>
                            <th>Details</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            projects.map((project, i) => <tr key={project._id}>
                                <th>{i + 1}</th>
                                <td>{project.name}</td>
                                <td>{project.type}</td>
                                <td>{project.description}</td>
                                <td>{project.team}</td>
                                <td>{project.time}</td>
                                <td><Link to={'/dashboard/projectDetails'} className='btn btn-xs btn-ghost btn-outline btn-accent'>View</Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Projects;