import { useLoaderData } from "react-router-dom";

const OurProjects = () => {

    const projectData = useLoaderData()
    // console.log(projectData);

    return (
        <div>
            <h1 className="text-5xl font-extrabold text-center my-5">Our <span className="text-fuchsia-500">Projects</span></h1>
            <p className="text-center font-medium text-gray-400 mb-5 w-1/2 mx-auto">Celebrate life milestones with us! Whether its a birthday, anniversary, engagement, or retirement, our events are crafted to make each moment memorable. From elegant decor to exquisite cuisine, we ensure a seamless celebration filled with joy, laughter, and shared happiness. Let us host your special day, creating an atmosphere where cherished memories are made.</p>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-12">
                {
                    projectData.map(data => 
                    <div className="p-3 shadow-md rounded-md" key={data.id}>
                        <img className="h-60 rounded-md" src={data?.img} alt="" />
                        <h2 className="text-2xl font-bold my-2">{data?.title}</h2>
                        <h4 className="font-medium"><span className="font-bold text-lg">Venue:</span> {data?.venue}</h4>
                        <h4 className="font-medium my-1"><span className="font-bold text-lg">Photograper:</span> {data?.photographer_name}</h4>
                        <p>{data?.short_des}</p>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default OurProjects;