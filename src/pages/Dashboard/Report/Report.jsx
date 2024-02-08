

const Report = () => {
    const reports = [
        {
            id: 1,
            name: "Redx",
            type: "Courier",
            task: "3",
            completedTask: "2",
            time: "1Month",
            assigned: "Salman Khan",
            progress: "70",
            status: "90% Done",
        },
        {
            id: 2,
            name: "Car Zone",
            type: "E-Commerce",
            task: "2",
            completedTask: "1",
            time: "3 Months",
            assigned: "Amir Khan",
            progress: "50",
            status: "100% Done",
        },
        {
            id: 3,
            name: "Delicious Food",
            type: "Restaurant",
            task: "1",
            completedTask: "1",
            time: "1 Month",
            assigned: "Tom Cruise",
            progress: "100",
            status: "Done",
        },
        {
            id: 4,
            name: "Doctors Portal",
            type: "Portal",
            task: "3",
            completedTask: "2",
            time: "20 Days",
            assigned: "Salman Khan",
            progress: "90",
            status: "90% Done",
        },
        {
            id: 5,
            name: "Travel Guide",
            type: "Tour Travel",
            task: "2",
            completedTask: "1",
            time: "15 Days",
            assigned: "Natalie Portman",
            progress: "70",
            status: "70% Done",
        },

    ]
    return (
        <div>
        <h2 className='text-2xl p-10'>Reports</h2>
        

        <div className="overflow-x-auto p-5">
            <table className="table w-full">

                <thead className="text-[16px]">
                    <tr>
                        <th></th>
                        <th>Project Name</th>
                        <th>Project Type</th>
                        <th>Task</th>
                        <th>Completed Task</th>
                        <th>Assigned </th>
                        <th>Work Duration</th>
                        <th>Progress</th>
                        <th>Status</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        reports.map((report, i) => <tr key={report._id}>
                            <th>{i + 1}</th>
                            <td>{report.name}</td>
                            <td>{report.type}</td>
                            <td>{report.task}</td>
                            <td>{report.completedTask}</td>
                            <td>{report.assigned}</td>
                            <td>{report.time}</td>
                            <progress className="progress progress-success w-56" value={report.progress} max="100"></progress>
                            <td>{report.status}</td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Report;