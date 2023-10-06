
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[90vh] relative">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/K5TR1kL/bannar1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle btn-sm">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-sm">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/YQNmn9J/bannar2.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle btn-sm">❮</a>
                        <a href="#slide3" className="btn btn-circle btn-sm">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/qgR5N6R/bannar3.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle btn-sm">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-sm">❯</a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 ml-[8%] md:ml-[13%] text-center">
                <h1 className="text-4xl font-bold">The perfect venue for your next event</h1>
                <p className="text-lg font-medium my-3 text-white">Creative Wedding Planner & Event Management specialises in large-scale events for individual and public clients.</p>
                <button className="px-4 py-2 rounded-md text-fuchsia-500 font-bold bg-white">Book Now</button>
            </div>
        </div>
    );
};

export default Banner;