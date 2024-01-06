import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    const handleRegister = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
    }

    return (
        <div>
            <form onSubmit={handleRegister} className="max-w-sm mx-auto">
                <div className='text-center my-16 text-4xl text-red-500'>
                    <h1>Register Your Page</h1>
                </div>
                <div className="mb-5">
                    <input
                        type="email"
                        id="email"
                        name='email'
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Email Adress"
                        required />
                </div>
                <div className="mb-5">
                    <input
                        type="password"
                        id="password"
                        name='password'
                        placeholder='Password'
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required />
                </div>
                <div
                    className="flex items-start mb-5">
                    <div
                        className="flex items-center h-5">
                        <input
                            id="remember"
                            type="checkbox"
                            value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                            required />
                    </div>
                    <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                </button>
            </form>
            <p className='text-center mt-5'>Are you already register? 
            <NavLink to='/login' className='text-yellow-500'>Please Login</NavLink> 
            </p>

        </div>
    );
};

export default Register;