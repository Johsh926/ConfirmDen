import { SearchBar } from "../components/SearchBar";
import { SearchResultList } from '../components/SearchResults';
import { useEffect, useState } from 'react';
import React from "react";

export default function Home(){
    const [message, setMessage] = useState("");
    
      useEffect(() => {
        const getFacts = async () =>{
          const res = await fetch("api/facts");
          const facts = await res.json();
              
          setMessage(facts.mssg)
        };
        getFacts();
      }, [])

    return(
        <div>
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
        {message && <p>{message}</p>}
      </div>
      </div>
    )
}