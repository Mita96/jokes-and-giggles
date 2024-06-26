import "./App.css";
import { Routes, Route } from "react-router-dom";
import Joke from "./pages/joke/Joke";
import Header from "./components/header/Header";
import Quotes from "./pages/quote/Quotes";
import { useEffect, useState } from "react";
function App() {
  const [picArray, setPicArray] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/db.json")
      .then((res) => res.json())
      .then((data) => setPicArray(data));
  }, []);
  console.log(picArray);
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/jokes" element={<Joke jokes={picArray}></Joke>}></Route>
        <Route path="/quotes" element={<Quotes></Quotes>}></Route>
      </Routes>
    </div>
  );
}

export default App;
