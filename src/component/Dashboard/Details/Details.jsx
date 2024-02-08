import employee from '../../../assets/employee.png'
import task from '../../../assets/main.png'
import taskDone from '../../../assets/task-done.png'
import pending from '../../../assets/pending.png'
import DetailsCard from './DetailsCard';


const Details = () => {
    const detailsData=[
        {
            id:1,
            logo:employee,
            figure:'6',
            title:"Total Employees"
        },
        {
            id:2,
            logo:task,
            figure:'5/3',
            title:"Total Task / Assigned"
        },
        {
            id:3,
            logo:taskDone,
            figure:'2',
            title:"Task Done"
        },
        {
            id:4,
            logo:pending,
            figure:'3',
            title:"Task Pending"
        },
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ml-5 mt-10">
        {
                        detailsData.map((dtlData) => <DetailsCard
                        key={dtlData.id}
                        dtlData={dtlData}
                        ></DetailsCard>
                            )
                    }
    </div>
    );
};

export default Details;