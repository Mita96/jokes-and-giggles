import React, { useState, useEffect } from "react";
import "./Quotes.css";

function Quotes() {
  const [quote, setQuote] = useState({});
  const [pointer, setPointer] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((value) => setQuote({ ...value }));
  }, [pointer]);

  function handleNextQuote() {
    setPointer(!pointer);
  }
  return (
    <div className="box-quote">
      <div className="content-quote-quote-component">
        <div className="quote">
          {quote.quote} - "<span>{quote.author}</span>"
        </div>
        <button className="button-quote-component" onClick={handleNextQuote}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Quotes;
