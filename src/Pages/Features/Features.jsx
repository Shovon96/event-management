import InvitationCards from '../../components/FeaturesDetails/InvitationCards';
import Packages from '../../components/FeaturesDetails/Packages';
const Features = () => {
    return (
        <div className="my-4">
            <div className="w-full relative h-64 ">
                <img className="w-full h-full" src="https://i.ibb.co/x7Mn6mP/istockphoto-1206746631-612x612.jpg" alt="" />
                <div className="absolute h-full w-full opacity-70 bg-fuchsia-400 top-0"></div>
                <h2 className="absolute text-fuchsia-500 h-full w-full top-1/3 text-center text-6xl font-extrabold">Our Features</h2>
            </div>

            {/* invation cards */}
            <InvitationCards></InvitationCards>

            {/* our packeges */}
           <Packages></Packages>
        </div>
    );
};

export default Features;