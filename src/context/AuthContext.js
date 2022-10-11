import { useContext, createContext, useState, useEffect } from "react";
import { GoogleAuthProvider, 
    signInWithPopup, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendEmailVerification
 } from "firebase/auth";
 import { auth } from "../Firebase/firebaseConfig";

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState({});

    var userDetails;

    const googleSignIn = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    };


    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                userDetails = userCredential.user;
                setUser(userDetails)
                console.log(user)
                sendEmailVerification(userDetails)
                .then(() => {
                    alert("Verification link has been sent to your email. Please check")
                });
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
            })
    }

    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                userDetails = userCredential.user;
                setUser(userDetails)
                console.log(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
            })
    }



    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            // console.log('user', currentUser)
        })
        return () =>{
            unsubscribe();
        }
    }, [user]);

    return(
        <AuthContext.Provider value={{googleSignIn, logOut, user, createUser, signInUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () =>{
    return useContext(AuthContext)
}