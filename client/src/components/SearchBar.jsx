//import React, { useState } from "react";
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
    /*const   [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("./geminiAI").then((response) => response.json()).then((json) => {
            setResults(json)
        });
    };

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }*/
   //value = {input} onChange={(e) => handleChange(e.target.value)} (this is on the search bar)
    return (
    <main>
        <div className = "input-wrapper">
            <input placeholder="Paste URL here..."  id = "searchValue" />
        </div>  
        <div>
            <button type="submit" id = "searchButton" className="searchButton">Submit</button>
        </div>
    </main>
    );
}
