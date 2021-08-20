import React from "react";

const Table = (props) => {
  console.log(props);

  const expense = props.expenseList.map((expense) => (
    <tr class="bg-white">
      <td>{expense.name}</td>
      <td>{expense.type}</td>
      <td>{expense.date}</td>
      <td>{expense.amount}</td>
      <td>
        <button
          class="btn btn-danger"
          type="button"
          onClick={() => props.handleDeleteClick(expense.id)}
        >
          X
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <table className="table">
        <thead>
          <tr class="bg-white">
            <th>Name</th>
            <th>Type</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{expense}</tbody>
      </table>
    </div>
  );
};

export default Table;
