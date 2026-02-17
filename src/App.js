import React from "react";
import "./App.css";
import Header from "../src_components/Header";
import ExpenseForm from "../src_components/ExpenseForm";
import ExpenseList from "../src_components/ExpenseList";

function App() {
  return (
    <div className="App">
      <Header />
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default App;
