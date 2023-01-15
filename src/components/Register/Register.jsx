import React, { useState } from "react";
import { Button, Form, Checkbox } from 'react-bootstrap';


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
<div className="container">

    <div className="login-register-container">
        <div className="row">
            <div className="col-sm-6"><h3>Register</h3></div>
            <div className="col-sm-6 text-end"><a href="" onClick={() => props.onFormSwitch('login')} className="login-regster-link">Already have account? Login here</a></div>
        </div>
        <Form onSubmit={handeSumbit}>
            <Form.Group className="mb-2">
                <Form.Label>First Name</Form.Label>
                <Form.Control size="sm" value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" placeholder="Name"/>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Last Name</Form.Label>
                <Form.Control size="sm" value={surname} onChange={(e) => setSurname(e.target.value)} type="text" id="surname" placeholder="Surname"/>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Email</Form.Label>
                <Form.Control size="sm" value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="Email"/>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Country</Form.Label>
                <Form.Control size="sm" value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="country" placeholder="Country"/>
            </Form.Group>
			<div className="row">
				<div className="col-sm-12 col-md-6">
            		<Form.Group className="mb-2">
                		<Form.Label>Date of Birth</Form.Label>
                		<Form.Control size="sm" value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="date_of_birth" placeholder="Date of Birth"/>
            		</Form.Group>
				</div>
				<div className="col-sm-12 col-md-6">
            		<Form.Group className="mb-2">
                		<Form.Label>Phone Number</Form.Label>
                		<Form.Control size="sm" value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="phone_number" placeholder="Phone Number"/>
            		</Form.Group>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-12 col-md-6">
            		<Form.Group className="mb-2">
                		<Form.Label>Password</Form.Label>
                		<Form.Control size="sm" value={pass} onChange={(e) => setPass(e.target.value)}  type="password" id="password" placeholder="Password"/>
            		</Form.Group>
				</div>
				<div className="col-sm-12 col-md-6">
            		<Form.Group className="mb-2">
                		<Form.Label>Confirm Password</Form.Label>
                		<Form.Control size="sm" value={pass} onChange={(e) => setPass(e.target.value)}  type="password" id="password" placeholder="Confirm Password"/>
            		</Form.Group>
				</div>
			</div>
	
            <Form.Group className="mb-2" controlId="formBasicCheckbox">
       	 		<Form.Check type="checkbox" label="I agree to the terms and privacy" />
      		</Form.Group>
            <Form.Group className="mb-2">
                <Button type="submit" className="btn-success">Register In</Button>
            </Form.Group>

        </Form>
    </div>
</div>
	)
}