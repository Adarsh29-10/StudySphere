import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Buttons/LoginButton";
import LogoutButton from "../Buttons/LogoutButton";

function HeaderLandingPage() {
  const { isAuthenticated } = useAuth0();
  
  return (
    <header className="sticky w-full top-0 left-0 z-20">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-black">StudySphere</h1>
        <nav>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </nav>
      </div>
    </header>
  );
}


export default HeaderLandingPage;