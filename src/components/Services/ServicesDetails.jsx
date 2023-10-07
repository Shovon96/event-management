import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServicesDetails = () => {

    const [itemData, setItemData] = useState()
    const [services, setServices] = useState()

    const { id } = useParams()
    // console.log(id);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setItemData(data))
    }, [])

    useEffect(() => {
        const findItem = itemData?.find(item => (item.id == id))
        setServices(findItem)
    }, [id, itemData])

    return (
        <div className=" border p-4 rounded-md max-w-5xl mx-auto my-5">
            <img className="h-[70vh] w-full rounded-md" src={services?.img} alt="" />
            <div className="flex justify-around my-5 items-center">
                <h3 className="text-4xl font-bold">{services?.title}</h3>
                <span className="px-16 py-3 rounded-lg font-bold text-white text-lg bg-fuchsia-500">{services?.price}</span>
            </div>
            <p>{services?.description}</p>
            <div className="flex justify-center my-3">
            <button className="btn bg-fuchsia-600 text-white font-bold hover:bg-fuchsia-700">Booking Now</button>
            </div>
        </div>
    );
};

export default ServicesDetails;