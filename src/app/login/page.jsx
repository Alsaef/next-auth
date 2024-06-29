'use client'
import React from 'react';
import { signIn } from "next-auth/react"

const Login = () => {
    return (
        <div>
            <button  className='btn btn-primary'>Google Login</button>
            <button onClick={()=>signIn('github',{
                callbackUrl:'http://localhost:3000/'
            })} className='btn btn-primary'>GitHub Login</button>
        </div>
    );
};

export default Login;