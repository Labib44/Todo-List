import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";


const Home = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
            <div className="">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold p-5">Task Management System</h1>
                {user?.uid ?
                    <>
                        <Link to={'/tasks'} className="btn btn-outline m-5">Get Start</Link>
                        <Link onClick={handleLogOut} className="btn btn-outline m-5">Log Out</Link>
                    </>
                    :
                    <Link to={'/login'} className="btn btn-outline m-5">Login</Link>
                }

            </div>
        </div>
    </div>
    );
};

export default Home;