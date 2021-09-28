import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton(){
  const { loginWithRedirect } = useAuth0();

  return (
    <button className='large-button' onClick={() => loginWithRedirect()}>Get Started</button>
  )
};

export default LoginButton;