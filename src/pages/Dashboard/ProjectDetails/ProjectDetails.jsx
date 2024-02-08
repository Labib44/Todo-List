import { Link } from "react-router-dom";


const ProjectDetails = () => {
    return (
        <div>
            <section className="flex items-center h-full p-16 min-h-screen text-gray-700">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold lg:text-4xl md:text-2xl sm:text-xl ">Comming soon.........</h2>


                        <Link to={"/"} className="btn btn-outline">Back to Home</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetails;