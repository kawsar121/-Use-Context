import { createContext, useState } from 'react';
import PropTypes from 'prop-types'; 
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth , email, password)
    }
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const aboutInfo = {user, createUser, signInUser}
    return (
        <AuthContext.Provider value={aboutInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}