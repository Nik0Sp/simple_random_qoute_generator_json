import React, { useState } from "react";
import quotes from "./qoutes.json";

function App() {
  const [quote, setQuote] = useState("");

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="section">
      <h1 className="title">Simple Random Quote Generator</h1>
      <div className="container glass">
        <button onClick={generateRandomQuote}>Generate Quote</button>
        <div className="quote glass">
          {quote && (
            <div>
              <h5  className="quote">"{quote.text}"</h5>
              <div>
                <p>Author</p>
                <h4> {quote.author}</h4>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
