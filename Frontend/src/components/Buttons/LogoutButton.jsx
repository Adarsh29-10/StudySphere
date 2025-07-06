import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const {logout} = useAuth0();
    return (
        <button
            onClick={()=> logout({
                logoutParams: {returnTo: window.location.origin}
            })}
            className="bg-red-500 text-black px-6 py-2 rounded hover:bg-gray-800 transition-colors duration-200"
        >
            Logout
        </button>
    );
};

export default LogoutButton;