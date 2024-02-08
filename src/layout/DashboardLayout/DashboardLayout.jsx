import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../component/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
        <Navbar/>
        <div className="drawer lg:drawer-open">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* Page content here */}
                <Outlet></Outlet>
                
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li className='p-4'><Link to='/dashboard'>Dashboard</Link></li>
                    <li className='p-4'><Link to='/dashboard/projects'>Projects</Link></li>
                    <li className='p-4'><Link to='/dashboard/report'>Reports</Link></li>
                    <li className='p-4'><Link to='/dashboard/users'>All Users</Link></li>
                   
                </ul>

            </div>
        </div>
    </div>
    );
};

export default DashboardLayout;