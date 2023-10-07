
const InvitationCards = () => {
    return (
        <div>
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
        </div>
    );
};

export default InvitationCards;