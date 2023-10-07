// import { createContext, useEffect, useState } from "react";
// import PropTypes from 'prop-types'
// import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// import auth from "../firebase/firebase.config";
// import { GoogleAuthProvider } from "firebase/auth";

// export const AuthContext = createContext(null);
// const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {

//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true)

//     const createUser = (email, password) => {
//         setLoading(true)
//         return createUserWithEmailAndPassword(auth, email, password)
//     }

//     const loginUser = (email, password) => {
//         setLoading(true)
//         return signInWithEmailAndPassword(auth, email, password)
//     }

//     const signInWithGoogle = () =>{
//         setLoading(true)
//         return signInWithPopup(auth, googleProvider)
//     }

//     const logOut = () => {
//         setLoading(true)
//         return signOut(auth)
//     }

//     // observe auth state change
//     useEffect(() => {
//         const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
//         setLoading(false)
//             setUser(currentUser)
//         })
//         return () => {
//             unSubscribe()
//         }
//     }, [])



//     const authInfo = { user, createUser, loginUser, logOut, loading, signInWithGoogle }

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// AuthProvider.propTypes = {
//     children: PropTypes.node
// }

// export default AuthProvider;