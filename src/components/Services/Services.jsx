import { Link, useLoaderData } from "react-router-dom";

const Services = () => {

    const servicesData = useLoaderData()
    // console.log(servicesData);

    return (
        <div>
            <h1 className="text-5xl font-extrabold text-center mt-6 mb-3">Our <span className="text-fuchsia-600">Services</span></h1>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
                {
                    servicesData.map(category =>
                        <div className="shadow-lg rounded-lg p-5" key={category.id}>
                            <img className="h-72 w-96 rounded-md" src={category.img} alt="" />
                            <h3 className="text-2xl font-bold text-center my-3">{category.title}</h3>
                            <Link to={`services/${category.id}`}>
                                <button className="btn bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold w-full">See Details</button>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Services;