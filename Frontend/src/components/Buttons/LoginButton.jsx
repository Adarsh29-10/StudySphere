import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
const LoginButton = () => {

    const {loginWithRedirect} = useAuth0();

    return (
        <button
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors duration-200"
            onClick={() => loginWithRedirect()}
        >
            Start
        </button>
    );
};

export default LoginButton;