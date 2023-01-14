import React, { useState } from "react";
import './App.css';
import './navigation.scss';
import NavigationContainer from "./navigation";
import { BasicProducts } from "./BasicProducts";
import { PremiumProducts } from "./PremiumProducts";
import { Login } from "./Login"
import { Register } from "./Register";

function App() {

    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }
    return (
      <div>
          <NavigationContainer/>
          <BasicProducts/>
          <PremiumProducts/>
          {
              currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
          }
      </div>

  );
}

export default App;
