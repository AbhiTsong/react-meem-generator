import React from 'react';
import './App.css';
import Header from "./Components/Header/Header.compponent"
import Meme from "./Components/MemeGenerator/Meme.component"

function App() {
  return (
    <div className="App">
      <Header/>
      <Meme/>
    </div>
  );
}

export default App;
