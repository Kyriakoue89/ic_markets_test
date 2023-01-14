import React, { useState } from "react";
import { Button } from 'react-bootstrap';

export const Login = (props) => {
    const [email, setEmail] = useState ('');
    const [pass, setPass] = useState ('');

    const handeSumbit = (e) => {
        // we need to use it cz otherwise will reload and loose our state
        e.preventDefault();
        console.log(email);
    }
    return (
        <>
        <form onSubmit={handeSumbit}>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="Email"/>
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}  type="password" id="password" placeholder="Password"/>
            <button type="submit">Log In</button>
        </form>
            <Button onClick={() => props.onFormSwitch('register')}>Don't have account? Register here</Button>
            </>
    )
}