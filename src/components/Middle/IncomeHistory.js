import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const IncomeHistory = () => {
  const { incomeTransactions, deleteIncome } = useContext(GlobalContext);
  return (
    <div className="history income-history">
      <h3>Income History</h3>
      <ul>
        {incomeTransactions.map((income, idx) => (
          <li key={idx}>
            <span className="text">{income.incomeText}</span>
            <span className="amount">{income.incomeAmount} $</span>
            <button
              className="delete-btn"
              onClick={() => deleteIncome(income.id)}
            >
              <i className="fas fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeHistory;
