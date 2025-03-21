//import { useEffect, useState } from 'react';
import { SearchBar } from "./components/SearchBar.jsx";
import "./index.css";
import { SearchResultList } from './components/SearchResults.jsx';
import TopHeader  from './components/topHeader.jsx';
import AboutUs from "./pages/AboutUs.jsx";
import Account from "./pages/Account.jsx";
import Articles from "./pages/Articles.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Services from "./pages/Services.jsx";
import Home from "./pages/Home.jsx";
import { Route, Routes } from "react-router-dom";

export default function App() {
  /*const [message, setMessage] = useState("");

  useEffect(() => {
    const getFacts = async () =>{
      const res = await fetch("api/facts");
      const facts = await res.json();

      console.log(facts);
    };
    getFacts();
  }, [])*/

  //        {message && <p>{message}</p>} (under search result list)

  //const [results, setResults] = useState([]);
  //setResults = {setResults} (on the search bar)
  //results = {results} (on the search result list)

  return (
    <div className="App">
      <div>
        <>
          <TopHeader />
          <div className="container">
            <Routes>
              <Route path = "/Home" element ={<Home />} />
              <Route path = "/AboutUs" element ={<AboutUs />} />
              <Route path = "/Account" element ={<Account />} />
              <Route path = "/Articles" element ={<Articles />} />
              <Route path = "/ContactUs" element ={<ContactUs />} />
              <Route path = "/Services" element ={<Services />} />
            </Routes>
          </div>
        </>
      </div>
      <div className="logo">
        <img src = "android-chrome-192x192.png" alt = "logo"></img>
        <h1 id="myH1">ConfirmDen</h1>
        <h3 id="myH3">An article checker that is simple and easy to use.</h3>
      </div>
      <div className="search-bar-container">
        <div>
          <SearchBar />
          </div>
        <SearchResultList />
      </div>
    </div>
  );
}