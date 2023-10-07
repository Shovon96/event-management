import { BiSolidCheckCircle } from 'react-icons/bi';

const Packages = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                <h1 className="text-5xl font-bold text-center mb-5">Our <span className='text-fuchsia-500'>Package</span></h1>
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
        </div>
    );
};

export default Packages;