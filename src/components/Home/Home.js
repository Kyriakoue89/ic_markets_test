import React, { useState } from "react";
import NavigationContainer from "./../Menu/NavigationBar";
import { BasicProducts } from "./../Products/BasicProducts";
import { PremiumProducts } from "./../Products/PremiumProducts";
import { Login } from "./../Login/Login"
import { Register } from "./../Register/Register";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import './../../App.scss';
import { Button }  from 'react-bootstrap';

export const Home = (props) => {
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
	
	{ currentForm === "login" ? 
		<div className="promoBanner">
			<div className="row text-center">
				<div className="col-sm-12">
					<h3>Unlock Premium products</h3>
					<p>Create and account with us to be able to see all of our products</p>
				
				</div>
			</div>
		</div>
	: 
			<div className="container"><PremiumProducts/></div>
		
	}
  </div>
    )
}