import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Bottom = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);
  const totalIncome = incomeTransactions
    .reduce((acc, curr) => acc + curr.incomeAmount, 0)
    .toFixed(2);
  const totalExpense = expenseTransactions
    .reduce((acc, curr) => acc + curr.expenseAmount, 0)
    .toFixed(2);
  const balance = (totalIncome - totalExpense).toFixed(2);
  return (
    <div className="bottom">
      <div className="income-total">
        <h3>Total Income : </h3>
        <h3>${totalIncome}</h3>
      </div>
      <div className="expense-total">
        <h3>Total Expense : </h3>
        <h3>${totalExpense}</h3>
      </div>
      <div className="total">
        <h3>Balance</h3>
        <h3>{balance} $</h3>
      </div>
    </div>
  );
};

export default Bottom;
