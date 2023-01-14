import React, { useState } from "react";
import { Button } from 'react-bootstrap';

export const Register = (props) => {
    const [email, setEmail] = useState ('');
    const [pass, setPass] = useState ('');
    const [name, setName] = useState ('');
    const [surname, setSurname] = useState ('');

    const handeSumbit = (e) => {
        // we need to use it cz otherwise will reload and loose our state
        e.preventDefault();
        console.log(email);
    }
    return (
        <>Register
            <form onSubmit={handeSumbit}>
                <label htmlFor="email">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="name" id="name" placeholder="Name"/>

                <label htmlFor="email">Surname</label>
                <input value={surname} onChange={(e) => setSurname(e.target.value)} type="surname" id="surname" placeholder="Surname"/>

                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="Email"/>

                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)}  type="password" id="password" placeholder="Password"/>
                <button type="submit">Log In</button>
            </form>
            <Button onClick={() => props.onFormSwitch('login')}>Already have account? Login here</Button>
        </>
    )
}