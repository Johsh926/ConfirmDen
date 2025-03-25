import React from 'react';
import "./index.css";
import TopHeader  from './components/topHeader.jsx';
import AboutUs from "./pages/AboutUs.jsx";
import Account from "./pages/Account.jsx";
import Articles from "./pages/Articles.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Services from "./pages/Services.jsx";
import Home from "./pages/Home.jsx";

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

export default function App() {
  /**/

  //         (under search result list)

  //const [results, setResults] = useState([]);
  //setResults = {setResults} (on the search bar)
  //results = {results} (on the search result list)

  /*<BrowserRouter>
            <Routes>
              <Route path = "/" element ={<Home />} />
              <Route path = "/AboutUs" element ={<AboutUs />} />
              <Route path = "/Account" element ={<Account />} />
              <Route path = "/Articles" element ={<Articles />} />
              <Route path = "/ContactUs" element ={<ContactUs />} />
              <Route path = "/Services" element ={<Services />} />
            </Routes>
            </BrowserRouter>*/ //router doesnt work???

  

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
      
    //no default
  }
  return (
    
    <div className="App">
        <>
          <TopHeader />
          <div className="container">
            { component }
          </div>
        </>
    </div>
  );
}