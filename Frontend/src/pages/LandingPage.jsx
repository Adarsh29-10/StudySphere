import React from 'react';
import LoginButton from '../components/Buttons/LoginButton';
import LogoutButton from '../components/Buttons/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';



function LandingPage() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="h-screen bg-gray-200">
      <header className="fixed w-full top-0 left-0 z-20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-black">StudySphere</h1>
          <nav>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </nav>
        </div>
      </header>
      <div className='h-screen flex justify-center items-center bg-blue-50 '>
        <h1 className='font-semibold text-6xl'>Collab, learn and explore </h1>
      </div>
    </div>
  );
}

export default LandingPage;
