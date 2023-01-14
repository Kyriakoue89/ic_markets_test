import React, { useState } from "react";
import './App.css';
import './navigation.scss';
import NavigationContainer from "./navigation";
import { BasicProducts } from "./BasicProducts";
import { PremiumProducts } from "./PremiumProducts";
import { Login } from "./Login"
import { Register } from "./Register";
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
