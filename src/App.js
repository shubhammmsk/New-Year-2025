import React, { useState } from "react";
import HappyNewYear from "./HappyNewYear";
import "./style.css";
import "./App.css"
import Footer from "./Footer";

function App() {
  const [name, setName] = useState("");
  const [showAnimation, setShowAnimation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setShowAnimation(true);
    }
  };

  return (
    <>
      {!showAnimation ? (
        <div className="input-container">
          <h1>Welcome {name} !</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <HappyNewYear name={name} />
        
      )}
      <Footer />
          </>
  );
}

export default App;
