

const Users = () => {
    const users = [
        {
            id: 1,
            name: "Amir Khan",
            email: "amir.khan@gmail.com"
        },
        {
            id: 2,
            name: "Salman Khan",
            email: "salman.khan@gmail.com"
        },
        {
            id: 3,
            name: "Tom Cruise",
            email: "tom.cruise@gmail.com"
        },
        {
            id: 4,
            name: "Tom Cruise",
            email: "tom.cruise@gmail.com"
        },
        {
            id: 5,
            name: "Vin Diesel",
            email: "vin.diesel@gmail.com"
        },
        {
            id: 6,
            name: "Natalie Portman",
            email: "natalie.portman@gmail.com"
        },
    ]
    return (
        <div>
            <h2 className='text-2xl p-10'>All Users</h2>

            <div className="overflow-x-auto p-5">
                <table className="table w-full">

                    <thead className="text-[16px]">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><button className='btn btn-xs btn-ghost btn-outline btn-accent'>Make Admin</button></td>
                                <td><button className='btn btn-xs btn-ghost btn-outline btn-warning'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;