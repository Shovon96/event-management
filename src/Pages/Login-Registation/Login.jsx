
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebaseConfig/firebase.config";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";


const Login = () => {

    const { signInWithGoogle } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const [loginError, setLoginError] = useState('')
    const [loginSuccess, setLoginSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleSignIn = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        // reset error
        setLoginError('')
        setLoginSuccess('')

        // Login user
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setLoginSuccess('User Login Successfully')
                navigate(location?.state ? location.state : '/')
                e.target.reset()
            })
            .catch(error => {
                setLoginError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                toast.success("Success Notification !", {
                    position: toast.POSITION.TOP_CENTER
                  });
            })
            .catch(() => {
                toast.error("Error Notification !", {
                    position: toast.POSITION.TOP_LEFT
                  });
            
            })
    }

    return (
        <div>
            <div className="h-auto my-12 flex items-center justify-center">
                <div className="bg-fuchsia-200 p-8 rounded-lg shadow-md w-96">
                    <h2 className="text-5xl text-center text-fuchsia-600 font-extrabold mb-6">Sign In</h2>

                    {/* Form */}
                    <form onSubmit={handleSignIn}>
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

                        <p className="mb-4 hover:text-blue-600 hover:underline"><a href="">Forget Your Password?</a></p>

                        {/* Sign In Button */}
                        <button type="submit" className="w-full bg-fuchsia-700 text-white text-lg font-semibold p-2 rounded-md hover:bg-fuchsia-600 focus:outline-none focus:shadow-outline-blue">
                            Sign In
                        </button>


                        {/* success message set in form */}
                        {
                            loginSuccess && <p className="text-sm text-green-600">{loginSuccess}</p>
                        }

                        {/* Error message set in form */}
                        {
                            loginError && <p className=" text-sm text-red-700">{loginError}</p>
                        }
                        <p className="mt-4">You do not have an account? Go <Link to='/registetion' className="text-red-600 underline text-lg font-bold">SignUp</Link></p>

                    </form>

                    <div className="flex justify-between mt-3">
                        <button className="btn" onClick={handleGoogleSignIn}>Google</button>
                        <button className="btn">GitHub</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;