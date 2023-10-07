// import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
// import auth from "../FireBase/firebase.config";
// import { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";


// const Login = () => {

//     // Stats
//     const [signInError, setSignInError] = useState('');
//     const [signInSuccess, setSignInSuccess] = useState('');
//     const [showPassword, setShowpassword] = useState(false);
//     const emailRef = useRef(null)

//     const handleSignIn = e => {
//         e.preventDefault()
//         const email = e.target.email.value;
//         const password = e.target.password.value;
//         console.log(email, password);

//         // clear error and success message
//         setSignInError('')
//         setSignInSuccess('')

//         // validate email and password conditions
//         signInWithEmailAndPassword(auth, email, password)
//             .then(result => {
//                 if(result.user.emailVerified){
//                     setSignInSuccess('Login successfully!')
//                 }else{
//                     alert('please verified your email.')
//                 }
//             })
//             .catch(error => {
//                 setSignInError('Your email and password not matched')
//                 console.log(error.message)
//             })
//         // .catch(setSignInError('invalid password and email'))
//     }

//         // Forget or resate an password validations
//             const handleForgatePassword = () => {
//                 const email = emailRef.current.value;
//                 if(!email){
//                     setSignInError("Please Provide an email")
//                     return;
//                 }
//                 // else if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
//                 //     alert("Please write an valid email");
//                 //     return;
//                 // }

//                 // send validation email
//                 sendPasswordResetEmail(auth, email)
//                 .then(()=>{
//                     alert("Please chack your email")
//                 })
//                 .catch(error => {
//                     console.log(error.message);
//                 })
//             }

//     return (
        // <div>
        //     <div className="bg-gray-100 h-screen flex items-center justify-center">
        //         <div className="bg-white p-8 rounded shadow-md w-96">
        //             <h2 className="text-4xl text-center text-lime-600 font-bold mb-6">Sign In</h2>

        //             {/* Form */}
        //             <form onSubmit={handleSignIn}>
        //                 {/* Email Input */}
        //                 <div className="mb-4">
        //                     <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        //                     <input
        //                         type="email" id="email" 
        //                         name="email" ref={emailRef}
        //                         placeholder="Type Your Email" required
        //                         className="w-full px-3 py-2 border rounded-md" />
        //                 </div>

        //                 {/* Password Input */}
        //                 <div className="mb-4">
        //                     <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
        //                     <div className="flex items-center">
        //                         <input
        //                             type={showPassword ? 'text' : 'password'}
        //                             id="password" placeholder="Type Your Password" required
        //                             name="password" className="relative w-full px-3 py-2 border rounded-md" />
        //                         <span className=" absolute ml-72" onClick={() => setShowpassword(!showPassword)}>
        //                             {
        //                                 showPassword ? <FaEye title="Hide"></FaEye> : <FaEyeSlash title="Show"></FaEyeSlash>
        //                             }
        //                         </span>
        //                     </div>
        //                 </div>

        //                 <p className="mb-4 hover:text-blue-600 hover:underline"><a onClick={handleForgatePassword} href="">Forget Your Password?</a></p>

        //                 {/* Sign In Button */}
        //                 <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
        //                     Sign In
        //                 </button>

        //                 {/* success message set in form */}
        //                 {
        //                     signInSuccess && <p className="text-sm text-green-600">{signInSuccess}</p>
        //                 }

        //                 {/* Error message set in form */}
        //                 {
        //                     signInError && <p className=" text-sm text-red-700">{signInError}</p>
        //                 }
        //                 <p className="mt-4">You do not have an account? Go <Link to='/signup' className="text-red-600 underline">SignUp</Link></p>

        //             </form>
        //         </div>
        //     </div>
        // </div>
//     );
// };

// export default Login;





import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../firebaseConfig/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {

    const [loginError, setLoginError] = useState('')
    const [loginSuccess, setLoginSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleSignIn = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

         // reset error
         setLoginError('')
         setLoginSuccess('')

        // Login user
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            setLoginSuccess('User Login Successfully')
        })
        .catch(error => {
            setLoginError(error.message)
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
                </div>
            </div>
        </div>
    );
};

export default Login;