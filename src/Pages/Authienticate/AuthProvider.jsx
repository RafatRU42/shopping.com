import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'



export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser ] = useState(null)
    const [loading,setLoading] = useState(true)


const googleProvider = new GoogleAuthProvider()

const loginWithGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}

const signUp = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const logIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const updateUserProfile = (name,photo) =>{
    setLoading(true)

    return updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:photo
    })
}

const logOutUser = () =>{
    setLoading(true)
    return signOut(auth)
}

const resetPassword = (email) =>{
    setLoading(true)
    return sendPasswordResetEmail(auth,email)
}

const verifyEmail = email =>{
    return sendEmailVerification(auth.currentUser)
}

useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        setLoading(false)
    } )

    return () =>{
        unsubscribe()
    }

},[])



const authInfo = {loginWithGoogle,signUp,logIn,updateUserProfile,resetPassword,logOutUser,verifyEmail,user,loading}    

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;