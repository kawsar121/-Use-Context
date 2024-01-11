import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Practical = () => {
    const authInfo = useContext(AuthContext)
    console.log(authInfo)
    return (
        <div>
            <h1>revel the real face: {authInfo.name}</h1>
        </div>
    );
};

export default Practical;