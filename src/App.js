import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <div className="Main-wrapper">
        <Header />
        <Form
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
        />
        <List todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
