import React, { useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import CreateNote from "./Components/CreateNote";
import IndividualNote from "./Components/IndividualNote";
import Footer from "./Components/Footer";

function App() {
  const [individualNote, setindividualNote] = useState([]);
  //console.log(individualNote);

  let createIndividualNote = (input) => {
    setindividualNote((preValue) => {
      return [...preValue, input];
    });
  };

  let deleteIndividualNote = (id) => {
    setindividualNote((preValue) => {
      return preValue.filter((cVal, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App">
      <Header />
      <CreateNote passNote={createIndividualNote} />
      {individualNote.map((cVal, index) => {
        return (
          <IndividualNote
            title={cVal.title}
            content={cVal.content}
            key={index}
            id={index}
            deleteNote={deleteIndividualNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
