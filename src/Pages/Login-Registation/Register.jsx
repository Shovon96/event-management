import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebaseConfig/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash  } from 'react-icons/fa';
import { toast } from "react-toastify";

const Register = () => {

    const [regError, setRegError] = useState('');
    const [regSuccess, setRegSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleSignUp = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, photo, email, password);

        // reset error
        setRegSuccess('')
        setRegError('')

        if (password.length < 6) {
            setRegError('PassWord should be at least 6 charecter or longer')
            return;
        }
        // !/^(?=.*[A-Z])(?=.*\d).{6,}$/
        else if (!/^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{6,})/.test(password)) {
            setRegError('Password should used must be at least one uppercase charecter and one number added')
            return;
        }

        // Create User
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setRegSuccess('User Created Successfully..')
                toast.success("User Created Success !", {
                    position: toast.POSITION.TOP_CENTER
                  })
                e.target.reset()
            })
            .catch(error => {
                toast.error(error.message, {
                    position: toast.POSITION.TOP_CENTER
                  })
                setRegError(error?.message)
            })
    }


    return (
        <div>
            <div className="h-auto my-12 flex items-center justify-center">
                <div className="bg-fuchsia-200 p-8 rounded-lg shadow-md w-96">
                    <h2 className="text-5xl text-center text-fuchsia-600 font-extrabold mb-6">Sign Up</h2>

                    {/* Form */}
                    <form onSubmit={handleSignUp}>
                        {/* name Input */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                            <input
                                type="text" id="name"
                                name="name"
                                placeholder="Type Your Name" required
                                className="w-full px-3 py-2 border rounded-md" />
                        </div>
                        {/* PhotoURL Input */}
                        <div className="mb-4">
                            <label htmlFor="photo" className="block text-gray-700 text-sm font-bold mb-2">Photo URL</label>
                            <input
                                type="text" id="photo"
                                name="photo"
                                placeholder="Type Your PhotoURL" required
                                className="w-full px-3 py-2 border rounded-md" />
                        </div>
                        {/* Email Input */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input
                                type="email" id="email"
                                name="email"
                                placeholder="Type Your Email" required
                                className="w-full px-3 py-2 border rounded-md" />
                        </div>

                        {/* Password Input */}
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <div className="flex items-center">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password" placeholder="Type Your Password" required
                                    name="password" className="relative w-full px-3 py-2 border rounded-md" />
                                <span className=" absolute ml-72" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEye title="Hide"></FaEye> : <FaEyeSlash title="Show"></FaEyeSlash>
                                    }
                                </span>
                            </div>
                        </div>

                        {/* Sign In Button */}
                        <button type="submit" className="w-full bg-fuchsia-700 text-white text-lg font-semibold p-2 rounded-md hover:bg-fuchsia-600 focus:outline-none focus:shadow-outline-blue">
                            Sign Up
                        </button>

                        {/* success message set in form */}
                        {
                            regSuccess && <p className="text-base text-green-600 mt-2">{regSuccess}</p>
                        }

                        {/* Error message set in form */}
                        {
                            regError && <p className=" text-sm text-red-700 mt-2">{regError}</p>
                        }
                        <p className="mt-4">You already have an account? Go <Link to='/login' className="text-red-600 underline text-lg font-bold">SignIn</Link></p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;