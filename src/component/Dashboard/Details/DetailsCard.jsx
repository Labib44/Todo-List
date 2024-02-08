/* eslint-disable react/prop-types */


const DetailsCard = ({dtlData}) => {
    const { logo, figure, title } = dtlData;
    return (
        <div className="">
        <div className="card  bg-teal-500 shadow-xl">
            <div className="card-body">
                <div className="flex justify-between">
                    <img src={logo} className="w-16 h-16" alt="" />
                    <h1 className="text-4xl font-bold">{figure}</h1>
                </div>
                <h2 className="card-title p-3">{title}</h2>

            </div>
        </div>
    </div>
    );
};

export default DetailsCard;