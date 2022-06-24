import React, { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = () =>{

    const [currentSignInEmail, setSignInEmail] =  useState("");
    const [currentPassword, setPassword] = useState ("");

    const SignIn = async()=>{

        try {
            const user = await signInWithEmailAndPassword(
              auth,
              currentSignInEmail,
              currentPassword
            );
            console.log(user);
          } catch (error) {
            console.log(error.message);
          }
        
    }


    return (
        <>
            <h1>hellow</h1>

            <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
           onChange={(event) => {
             setSignInEmail(event.target.value);
           }}
        />
        <input
        type= {"password"}      
            placeholder="Password..."
           onChange={(event) => {
             setPassword(event.target.value);
           }}
        />

     <button onClick={SignIn} > Login</button>
      </div>
      
        </>
    );
}

export default Login;