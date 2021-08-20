import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ExpenseForm from "./contents/ExpenseForm";
import Table from "./contents/Table";

function App() {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [expenseList, setExpenseList] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setType("");
    setName("");
    setDate("");
    setAmount("");

    const expense = {
      id: Date.now(),
      type,
      name,
      date,
      amount,
    };

    setExpenseList([...expenseList, expense]);

    console.log("Expense list ", expenseList);
  };

  const handleDeleteClick = (id) => {
    const newContact = [...expenseList];
    const index = expenseList.findIndex((expense) => expense.id === id);
    newContact.splice(index, 1);
    setExpenseList(newContact);
    // const savedExpenses = expenseList.filter()
  };

  return (
    <div className="App">
      <h1 className="text-primary mt-sm-2 mb-sm-4 ">Expense Tracker</h1>

      <ExpenseForm
        handleFormSubmit={handleFormSubmit}
        name={name}
        setName={setName}
        type={type}
        setType={setType}
        date={date}
        setDate={setDate}
        amount={amount}
        setAmount={setAmount}
      />
      <Table expenseList={expenseList} handleDeleteClick={handleDeleteClick} />
    </div>
  );
}

export default App;
