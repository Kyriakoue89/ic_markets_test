import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavigationContainer from "./components/NavigationBar";
import { Login } from "./components/Login"
import { Register } from "./components/Register";
import { BasicProducts } from "./components/BasicProducts";
import { PremiumProducts } from "./components/PremiumProducts";

import './App.scss';
import { Button }  from 'react-bootstrap';

function App() {

    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }
    return (
      <div>
          <NavigationContainer/>
			<div className="container">
				<BasicProducts/>
			</div>
		<div className="container">
		{ currentForm === "login" ? 
			<div className="promoBanner">
				<div className="row text-center">
					<div className="col-sm-12">
						<h3>Unlock Premium products</h3>
						<p>Create and account with us to be able to see all of our products</p>
						<Button className="btn-success">Register</Button>
					</div>
				</div>
			</div>
		: 
				<PremiumProducts/>
			
		}
	</div>
          
          {
              currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
          }
      </div>

  );
}

export default App;
