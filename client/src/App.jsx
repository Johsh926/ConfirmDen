import React from 'react';
import "./index.css";
import Navbar  from './components/Navbar.jsx';
import AboutUs from "./pages/AboutUs.jsx";
import Account from "./pages/Account.jsx";
import Articles from "./pages/Articles.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Services from "./pages/Services.jsx";
import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx"
import SignUp from "./pages/SignUp.jsx"

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

export default function App() {
  let component
  switch (window.location.pathname){
    case "/":
      component = <Home />
      break
    case "/AboutUs":
      component = <AboutUs />
      break
    case "/Account":
      component = <Account />
      break
    case "/Articles":
      component = <Articles />
      break
    case "/ContactUs":
      component = <ContactUs />
      break
    case "/Services":
      component = <Services />
      break
    case "/SignIn":
      component = <SignIn />
      break
    case "/SignUp":
      component = <SignUp />
      break
      
    //no default
  }
  return (
    
    <div className="App">
        <>
          <Navbar />
          <div className="container">
            { component }
          </div>
        </>
    </div>
  );
}