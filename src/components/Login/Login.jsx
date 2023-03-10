import React, { useState } from "react";
import { Button, Form, Checkbox } from 'react-bootstrap';

export const Login = (props) => {
    const [email, setEmail] = useState ('');
    const [pass, setPass] = useState ('');

    const handleSumbit = (e) => {
        // Prevent page reload
        e.preventDefault();
        console.log(email);
    }
    return (
<div className="container">

    <div className="login-register-container">
        <div className="row">
            <div className="col-sm-6"><h3>Log in</h3></div>
            <div className="col-sm-6 text-end"><a href="" onClick={() => props.onFormSwitch('register')} className="login-regster-link">Already have account? Login here</a></div>
        </div>

        <Form onSubmit={handleSumbit}>
            <Form.Group className="mb-2">
                <Form.Label>Email</Form.Label>
                <Form.Control size="sm" value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="Email"/>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Password</Form.Label>
                <Form.Control size="sm" value={pass} onChange={(e) => setPass(e.target.value)}  type="password" id="password" placeholder="Password"/>
            </Form.Group>
            <Form.Group className="mb-2">
                <button type="submit" className="btn-success">Login In</button>
            </Form.Group>
		</Form>
				</div>
		</div>
    )
}