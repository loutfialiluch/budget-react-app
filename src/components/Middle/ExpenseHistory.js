import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const ExpenseHistory = () => {
  const { expenseTransactions, deleteExpense } = useContext(GlobalContext);
  return (
    <div className="history expense-history">
      <h3>Expense History</h3>
      <ul>
        {expenseTransactions.map((expense, idx) => (
          <li key={idx}>
            <span className="text">{expense.expenseText}</span>
            <span className="amount">{expense.expenseAmount} $</span>
            <button
              className="delete-btn"
              onClick={() => deleteExpense(expense.id)}
            >
              <i className="fas fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseHistory;
