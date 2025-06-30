import React, { useEffect, useState } from "react";
import "../pages/Home.css";
import io from "socket.io-client"

const socket = io.connect("http://localhost:3001")

export default function Home() {
    const [facts, setFacts] = useState([]);
    const [content, setContent] = useState("");

    useEffect(() => { //for getting what is inside of the database???
        const getFacts = async () => {
                const res = await fetch("/api/facts"); // Ensure correct API route
                const facts = await res.json();
                setFacts(facts);
        };
        getFacts();
    }, []);

    const createNewFact = async (e) => {
      e.preventDefault();
      if (content.length  > 3 ) {
        const res = await fetch ("/api/facts", {
          method: "POST",
          body: JSON.stringify({ fact: content }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const newFact = await res.json();

        setContent("");
        setFacts([...facts, newFact])
      }
    }
    
    const [messageReceived, setMessageReceived] = useState("");
    const sendMessage = () => {
      socket.emit("send_message", {message: content});
    };

    useEffect(() => {
      socket.on("receive_message", (AIresponse) => {
        setMessageReceived(AIresponse)
      });
    });
    
    return (
        <div className="home-container">
            <section className="content">
                <div className="confirmden-logo-container">
                    <img src="/Logo.png" alt="ConfirmDen Logo" className="confirmden-logo" />
                    <h2>ConfirmDen</h2>
                </div>
                <p className="description">An article checker that is simple and easy to use.</p>

                {/* URL Input Form */}
                <form onSubmit={createNewFact } onClickCapture={ sendMessage }className="url-form">
                    <input
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Paste URL here..."
                        className="url-input"
                        required
                    />
                    <button type="submit" className="submit-button">Submit</button>
                </form>
                <h4>{ messageReceived }</h4>
            </section>
        </div>
    );
}
