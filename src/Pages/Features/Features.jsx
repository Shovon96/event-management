import { BiSolidCheckCircle } from 'react-icons/bi';
const Features = () => {
    return (
        <div className="my-4">
            <div className="w-full relative h-64 ">
                <img className="w-full h-full" src="https://i.ibb.co/x7Mn6mP/istockphoto-1206746631-612x612.jpg" alt="" />
                <div className="absolute h-full w-full opacity-70 bg-fuchsia-400 top-0"></div>
                <h2 className="absolute text-fuchsia-500 h-full w-full top-1/3 text-center text-6xl font-extrabold">Our Features</h2>
            </div>

            {/* invation cards */}
            <div className="my-6">
                <h2 className="text-4xl font-bold text-center ">INVITATION CARDS</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:max-w-4xl ml-16 mg:ml-0 lg:mx-auto gap-8 my-14">
                    <div className="shadow-lg rounded-lg p-2 w-44">
                        <img className="w-full h-60" src="https://i.ibb.co/VBR8QMz/07422150-ad4e-4f48-9e1f-758ecd10051f-1-1.jpg" alt="" />
                        <button className="text-lg w-full mt-2 font-semibold bg-fuchsia-400 px-8 py-3 rounded-tr-3xl rounded-bl-3xl text-white">Select</button>
                    </div>
                    <div className="shadow-lg rounded-lg p-2 w-44">
                        <img className="w-full h-60" src="https://i.ibb.co/bHT6rDY/1143w-f-Kmn-Vh-Wu5-EQ.webp" alt="" />
                        <button className="text-lg w-full mt-2 font-semibold bg-fuchsia-400 px-8 py-3 rounded-tr-3xl rounded-bl-3xl text-white">Select</button>
                    </div>
                    <div className="shadow-lg rounded-lg p-2 w-44">
                        <img className="w-full h-60" src="https://i.ibb.co/DwSj5Gy/Church-Anniversary-Invitation-Template.webp" alt="" />
                        <button className="text-lg w-full mt-2 font-semibold bg-fuchsia-400 px-8 py-3 rounded-tr-3xl rounded-bl-3xl text-white">Select</button>
                    </div>
                    <div className="shadow-lg rounded-lg p-2 w-44">
                        <img className="w-full h-60" src="https://i.ibb.co/pj78WBm/1143w-IKh-KGYl-Td-JA.webp" alt="" />
                        <button className="text-lg w-full mt-2 font-semibold bg-fuchsia-400 px-8 py-3 rounded-tr-3xl rounded-bl-3xl text-white">Select</button>
                    </div>
                </div>
            </div>

            {/* our packeges */}
            <div className='max-w-6xl mx-auto'>
                <h1 className="text-5xl font-bold text-center mb-5">Our Package</h1>
                <hr />
                <div className="my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-20 lg:ml-0 lg:mx-auto lg:w-full gap-8">
                    <div className="card w-80 border col-12 bg-slate-200">
                        <div className="card-body">
                            <h2 className="font-bold text-3xl">$300 <br />Business fair</h2>
                            <h6 className="text-lg font-medium">For most businesses event <br /> like book fair.craft fair.</h6>
                            <span className='flex items-center text-lg'><BiSolidCheckCircle className='text-blue-600 mr-2'></BiSolidCheckCircle>Secuirity facility</span>
                            <span className='flex items-center text-lg'><BiSolidCheckCircle className='text-blue-600 mr-2'></BiSolidCheckCircle>Event support</span>
                            <span className='flex items-center text-lg'><BiSolidCheckCircle className='text-blue-600 mr-2'></BiSolidCheckCircle>Limited space access</span>
                            <span className='flex items-center text-lg'><BiSolidCheckCircle className='text-blue-600 mr-2'></BiSolidCheckCircle>Per day bill</span>
                            <span className='flex items-center text-lg'><BiSolidCheckCircle className='text-blue-600 mr-2'></BiSolidCheckCircle>Decoration design</span>
                            <button className='btn w-full bg-fuchsia-500 text-white hover:bg-fuchsia-700'>Choose Plan</button>
                        </div>
                    </div>
                    <div className="card w-80 border col-12 bg-slate-200">
                        <div className="card-body">
                            <h2 className="font-bold text-3xl">$500 <br />Wedding basic</h2>
                            <h6 className="text-lg font-medium">For weddings basic plan <br /> and limited item.</h6>
                            <span className='flex items-center text-lg'><BiSolidCheckCircle className='text-blue-600 mr-2'></BiSolidCheckCircle>Full space access</span>
                            <span className='flex items-center text-lg'><BiSolidCheckCircle className='text-blue-600 mr-2'></BiSolidCheckCircle>Food Arangement</span>
                            <span className='flex items-center text-lg'><BiSolidCheckCircle className='text-blue-600 mr-2'></BiSolidCheckCircle>Management Support</span>
                            <span className='flex items-center text-lg'><BiSolidCheckCircle className='text-blue-600 mr-2'></BiSolidCheckCircle>Decoration design</span>
                            <span className='flex items-center text-lg'><BiSolidCheckCircle className='text-blue-600 mr-2'></BiSolidCheckCircle>Billed as shift</span>
                            <button className='btn w-full bg-fuchsia-500 text-white hover:bg-fuchsia-700'>Choose Plan</button>
                        </div>
                    </div>
                    <div className="card w-80 border col-12 bg-slate-200">
                        <div className="card-body">
                            <h2 className="font-bold text-3xl">$800 <br />Corporate Event</h2>
                            <h6 className="text-lg font-medium">For most businesses event <br /> like book fair.craft fair.</h6>
                            <span className='flex items-center text-lg'><BiSolidCheckCircle className='text-blue-600 mr-2'></BiSolidCheckCircle>Secuirity facility</span>
                            <span className='flex items-center text-lg'><BiSolidCheckCircle className='text-blue-600 mr-2'></BiSolidCheckCircle>Event support</span>
                            <span className='flex items-center text-lg'><BiSolidCheckCircle className='text-blue-600 mr-2'></BiSolidCheckCircle>Limited space access</span>
                            <span className='flex items-center text-lg'><BiSolidCheckCircle className='text-blue-600 mr-2'></BiSolidCheckCircle>Per day bill</span>
                            <span className='flex items-center text-lg'><BiSolidCheckCircle className='text-blue-600 mr-2'></BiSolidCheckCircle>Decoration design</span>
                            <button className='btn w-full bg-fuchsia-500 text-white hover:bg-fuchsia-700'>Choose Plan</button>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
        </div>
    );
};

export default Features;