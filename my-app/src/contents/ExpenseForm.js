import React from "react";
// import "App.css";

const ExpenseForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleFormSubmit} className="p-2">
        <select
          value={props.type}
          className="form-control"
          className="col-5 p-2 mt-sm-2 mb-sm-3 r-3"
          onChange={(e) => props.setType(e.target.value)}
        >
          <option value="Select"> Select</option>
          <option value="Card"> Card </option>
          <option value="Cash"> Cash </option>
          <option value="Cryptocurrency"> Crypto Currency </option>
          <option value="Other"> Other </option>
        </select>

        <input
          type="text"
          placeholder="What did you spend on?"
          value={props.name}
          className="form-control"
          className="col-5 p-2  mt-sm-2 mb-sm-3 "
          onChange={(e) => props.setName(e.target.value)}
        />

        <input
          className="md-form md-outline input-with-post-icon datepicker"
          type="date"
          className="form-control"
          className="col-5 p-2 mt-sm-2 mb-sm-3 "
          value={props.date}
          onChange={(e) => props.setDate(e.target.value)}
        />
        <input
          type="number"
          placeholder="How much?"
          value={props.amount}
          className="form-control"
          className="col-5 p-2 mt-sm-2 mb-sm-3"
          onChange={(e) => props.setAmount(e.target.value)}
        />
        <div>
          <button className="btn btn-primary " type="submit">
            Add a new expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
